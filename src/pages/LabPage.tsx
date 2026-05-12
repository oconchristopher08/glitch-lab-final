import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

export default function LabPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.preload = "auto";
    v.load();
    const tryPlay = () => { v.play().catch(() => {}); };
    let fallback: ReturnType<typeof setTimeout> | null = null;
    if (v.readyState >= 2) {
      setReady(true); tryPlay();
    } else {
      const onLoaded = () => { setReady(true); tryPlay(); };
      v.addEventListener("loadeddata", onLoaded, { once: true });
      fallback = setTimeout(() => setReady(true), 250);
    }
    return () => { if (fallback) clearTimeout(fallback); };
  }, []);

  return (
    <div className="text-white relative overflow-hidden flex flex-col"
      style={{width:"100vw",height:"100dvh",minHeight:"-webkit-fill-available",background:"#050505"}}>
      <div className="absolute inset-0 z-0" style={{width:"100%",height:"100%"}}>
        <video ref={videoRef} src="/glitchling.mp4" autoPlay loop muted playsInline preload="auto"
          style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",opacity:ready?1:0,transition:"opacity 0.35s ease",willChange:"opacity",display:"block"}}/>
        <div className="absolute inset-0" style={{background:"linear-gradient(to bottom,rgba(5,5,5,0.60) 0%,rgba(5,5,5,0.30) 45%,rgba(5,5,5,0.60) 100%)"}}/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(0,255,136,0.08) 0%,transparent 70%)"}}/>
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,136,0.012) 2px,rgba(0,255,136,0.012) 4px)"}}/>
      </div>
      <div className="absolute top-5 left-5 sm:top-8 sm:left-8 md:left-14 w-8 h-8 sm:w-11 sm:h-11 border-t-2 border-l-2 border-[#00ff88] opacity-50 z-20 pointer-events-none"/>
      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 md:right-14 w-8 h-8 sm:w-11 sm:h-11 border-t-2 border-r-2 border-[#00ff88] opacity-50 z-20 pointer-events-none"/>
      <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 md:left-14 w-8 h-8 sm:w-11 sm:h-11 border-b-2 border-l-2 border-[#00ff88] opacity-50 z-20 pointer-events-none"/>
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 md:right-14 w-8 h-8 sm:w-11 sm:h-11 border-b-2 border-r-2 border-[#00ff88] opacity-50 z-20 pointer-events-none"/>
      <div className="relative z-20 w-full flex items-center justify-between px-5 sm:px-10 md:px-16 pt-4 sm:pt-6 flex-shrink-0">
        <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#2a2a2a]">SYS://GLITCHLAB.CORE</div>
        <div className="flex items-center gap-2 font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#00ff88]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] blink flex-shrink-0"/>SYSTEM ONLINE
        </div>
      </div>
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-6 text-center min-h-0">
        <div className="font-mono-tech text-[8px] sm:text-[9px] md:text-[10px] tracking-[4px] sm:tracking-[6px] text-[#00ff88] mb-5 sm:mb-7 flex items-center gap-3 sm:gap-5 opacity-80 flex-wrap justify-center">
          <span className="w-5 sm:w-10 h-px bg-[#00ff88] opacity-60"/>DIGITAL INNOVATION HUB<span className="w-5 sm:w-10 h-px bg-[#00ff88] opacity-60"/>
        </div>
        <h1 className="relative select-none w-full mb-3 sm:mb-4">
          <span className="glitch-wordmark font-orbitron font-black text-white block" data-text="GLITCH LAB"
            style={{fontSize:"clamp(36px,11vw,156px)",letterSpacing:"clamp(3px,1.8vw,26px)",lineHeight:1,textShadow:"0 0 60px rgba(0,255,136,0.3),0 0 120px rgba(0,255,136,0.12)"}}>
            GLITCH LAB
          </span>
        </h1>
        <div className="font-orbitron font-black text-[#00ff88] mb-4 sm:mb-5"
          style={{fontSize:"clamp(9px,1.8vw,20px)",letterSpacing:"clamp(3px,1vw,10px)",textShadow:"0 0 28px rgba(0,255,136,0.35)"}}>
          NOT A STUDIO.&nbsp;<span className="text-white">A SYSTEM.</span>
        </div>
        <div className="w-14 sm:w-24 h-px bg-[#00ff88] opacity-35 mb-5 sm:mb-7"/>
        <p className="font-rajdhani text-[13px] sm:text-[15px] md:text-[17px] text-[#555] max-w-[290px] sm:max-w-lg leading-[1.9] mb-8 sm:mb-10">
          Experimental systems. Digital chaos. The core engine behind{" "}
          <span className="text-[#00ff88]">404 GLITCH</span>,{" "}
          <span className="text-[#ff00cc]">CHAINSTERX</span>, and{" "}
          <span className="text-[#ffaa00]">BAYADBOT</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full max-w-xs sm:max-w-none sm:w-auto">
          <Link href="/" className="font-orbitron font-bold text-[10px] sm:text-[11px] tracking-[3px] px-8 sm:px-12 py-3.5 sm:py-4 bg-[#00ff88] text-black hover:bg-white transition-colors text-center">← BACK TO HOME</Link>
          <a href="/#ecosystem" className="font-orbitron font-bold text-[10px] sm:text-[11px] tracking-[3px] px-8 sm:px-12 py-3.5 sm:py-4 border border-[#333] text-[#666] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors text-center">EXPLORE ECOSYSTEM</a>
        </div>
        <div className="mt-8 sm:mt-11 grid grid-cols-3 gap-px w-full max-w-[260px] sm:max-w-sm md:max-w-md" style={{background:"rgba(26,26,26,0.7)"}}>
          {[{label:"PLATFORMS",value:"3"},{label:"STATUS",value:"ACTIVE"},{label:"BUILD",value:"v2.0"}].map(s=>(
            <div key={s.label} className="px-3 sm:px-6 py-3 sm:py-4 text-center" style={{background:"rgba(5,5,5,0.8)"}}>
              <div className="font-orbitron font-black text-[14px] sm:text-[18px] text-[#00ff88]">{s.value}</div>
              <div className="font-mono-tech text-[7px] sm:text-[8px] text-[#333] tracking-[2px] mt-0.5 sm:mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-20 w-full flex items-center justify-between px-5 sm:px-10 md:px-16 flex-shrink-0"
        style={{paddingBottom:"calc(env(safe-area-inset-bottom) + 1rem)"}}>
        <div className="font-mono-tech text-[7px] sm:text-[8px] tracking-[3px] text-[#1a1a1a]">EXPERIMENTAL · EST. SYSTEM INIT</div>
        <div className="font-mono-tech text-[7px] sm:text-[8px] tracking-[3px] text-[#1a1a1a]">v2.0.0-EXPERIMENTAL</div>
      </div>
    </div>
  );
}
