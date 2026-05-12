import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
type Post = { id:string; content:string; username:string; created_at:string; };
export default function Feed() {
  const [posts,setPosts]=useState<Post[]>([]);
  const [content,setContent]=useState("");
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    if(!isSupabaseConfigured)return;
    fetchPosts();
    const ch=supabase.channel("posts-feed").on("postgres_changes",{event:"INSERT",schema:"public",table:"posts"},(p)=>{setPosts(prev=>[p.new as Post,...prev]);}).subscribe();
    return ()=>{supabase.removeChannel(ch);};
  },[]);
  async function fetchPosts(){if(!isSupabaseConfigured)return;try{const{data}=await supabase.from("posts").select("*").order("created_at",{ascending:false});if(data)setPosts(data);}catch(e){console.warn(e);}}
  async function createPost(){if(!content.trim()||!isSupabaseConfigured)return;setLoading(true);try{await supabase.from("posts").insert([{content,username:"xstarlight"}]);setContent("");await fetchPosts();}catch(e){console.warn(e);}finally{setLoading(false);}}
  function timeAgo(d:string){const m=Math.floor((Date.now()-new Date(d).getTime())/60000);if(m<1)return"just now";if(m<60)return`${m}m ago`;const h=Math.floor(m/60);if(h<24)return`${h}h ago`;return`${Math.floor(h/24)}d ago`;}
  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-[#050505] text-white min-h-screen">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-[#00ff88] font-mono tracking-widest uppercase pt-4">Chainster Feed</h2>
      <div className="mb-4 sm:mb-6 border border-[#1a1a1a] rounded-xl p-3 sm:p-4">
        <textarea value={content} onChange={e=>setContent(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&(e.metaKey||e.ctrlKey))createPost();}} placeholder="Share something with the system..." rows={3}
          className="w-full p-3 bg-[#050505] border border-[#1a1a1a] rounded-lg text-white placeholder-[#333] resize-none focus:outline-none focus:border-[#00ff88] transition-colors text-[14px] sm:text-[15px]"/>
        <div className="flex items-center justify-between mt-2 gap-2">
          <span className="text-[10px] sm:text-xs text-[#333] font-mono hidden sm:block">⌘ + Enter to post</span>
          <button onClick={createPost} disabled={loading||!content.trim()} className="px-4 sm:px-5 py-2 bg-[#00ff88] text-black font-bold rounded-lg hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-[13px] sm:text-[14px] ml-auto">
            {loading?"Posting...":"Post"}
          </button>
        </div>
      </div>
      {posts.length===0?(
        <div className="text-center text-[#333] py-16 sm:py-20 font-mono text-sm">No signals detected. Be the first to broadcast.</div>
      ):posts.map(post=>(
        <div key={post.id} className="border border-[#1a1a1a] p-3 sm:p-4 rounded-xl hover:border-[#333] transition-colors">
          <div className="flex items-center justify-between mb-2 gap-2">
            <span className="text-sm text-[#00ff88] font-mono truncate">@{post.username}</span>
            <span className="text-xs text-[#333] font-mono whitespace-nowrap shrink-0">{timeAgo(post.created_at)}</span>
          </div>
          <p className="text-[#888] leading-relaxed text-[14px] sm:text-[15px]">{post.content}</p>
        </div>
      ))}
    </main>
  );
}
