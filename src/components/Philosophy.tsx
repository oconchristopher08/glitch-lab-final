const steps = [
  {word:"BREAK",arrow:"→",desc:"Dismantle outdated systems. Question every convention. Conventional UI is dead.",color:"#ff00cc"},
  {word:"REBUILD",arrow:"→",desc:"Engineer better experiences. Every experiment reveals what the next one should destroy.",color:"#00ff88"},
  {word:"EVOLVE",arrow:null,desc:"Scale into ecosystems. Identity, community, and value — fused into one living protocol.",color:"#00ff88"},
];
export default function Philosophy() {
  return (
    <section className="bg-[#050505] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        <div className="mb-10 sm:mb-16 max-w-2xl">
          <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-4 flex items-center gap-3 flex-wrap">
            <span className="w-4 h-px bg-[#00ff88]"/>CORE PHILOSOPHY · SYSTEM DIRECTIVE
          </div>
          <h2 className="font-orbitron font-black text-white" style={{fontSize:"clamp(20px,3.5vw,44px)",letterSpacing:"3px"}}>
            THE <span className="text-[#00ff88]">PHILOSOPHY</span>
          </h2>
        </div>
        <div className="mb-12 sm:mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-8 flex-wrap">
            {steps.map((s,i)=>(
              <div key={s.word} className="flex items-center gap-3 sm:gap-4 md:gap-8">
                <span className="font-orbitron font-black" style={{fontSize:"clamp(28px,6vw,80px)",color:s.color,letterSpacing:"4px",textShadow:`0 0 40px ${s.color}30`}}>{s.word}</span>
                {s.arrow&&<span className="font-orbitron font-black" style={{fontSize:"clamp(16px,3vw,48px)",color:"#1a1a1a"}}>{s.arrow}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{background:"#1a1a1a"}}>
          {steps.map((s,i)=>(
            <div key={s.word} className="bg-[#050505] p-6 sm:p-10 md:p-12 group hover:bg-[#070707] transition-colors">
              <div className="font-orbitron font-black text-[12px] sm:text-[13px] tracking-[4px] mb-3" style={{color:s.color}}>0{i+1} · {s.word}</div>
              <div className="w-6 h-[2px] mb-4 sm:mb-5" style={{background:s.color,opacity:0.5}}/>
              <p className="font-rajdhani text-[14px] sm:text-[16px] text-[#555] leading-[1.9]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-16 border border-[#1a1a1a] p-6 sm:p-10 md:p-14 text-center">
          <div className="font-mono-tech text-[9px] tracking-[4px] text-[#333] mb-5 sm:mb-6">SYSTEM MANIFESTO</div>
          <p className="font-orbitron font-black text-white max-w-3xl mx-auto leading-[1.6]" style={{fontSize:"clamp(13px,2.5vw,28px)",letterSpacing:"2px"}}>
            "We use the words <span className="text-[#00ff88]">System</span>, <span className="text-[#00ff88]">Protocol</span>, <span className="text-[#00ff88]">Layer</span>, <span className="text-[#00ff88]">Engine</span>, <span className="text-[#00ff88]">Network</span>. <span className="text-[#444]">Because that is what we build."</span>
          </p>
        </div>
      </div>
    </section>
  );
}
