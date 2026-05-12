import { Link } from "wouter";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#050505] pt-16">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(0,255,136,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.03) 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 70% 50% at 50% 60%,rgba(0,255,136,0.06) 0%,transparent 70%)"}}/>
      <div className="hidden sm:block absolute top-24 left-4 sm:left-8 md:left-16 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#00ff88] opacity-30"/>
      <div className="hidden sm:block absolute top-24 right-4 sm:right-8 md:right-16 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[#00ff88] opacity-30"/>
      <div className="hidden sm:block absolute bottom-8 left-4 sm:left-8 md:left-16 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#00ff88] opacity-30"/>
      <div className="hidden sm:block absolute bottom-8 right-4 sm:right-8 md:right-16 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#00ff88] opacity-30"/>
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-6xl mx-auto">
        <div className="font-mono-tech text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[5px] text-[#00ff88] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <span className="hidden sm:block w-8 h-px bg-[#00ff88] opacity-50"/>
          DIGITAL INNOVATION HUB · EST. SYSTEM INIT
          <span className="hidden sm:block w-8 h-px bg-[#00ff88] opacity-50"/>
        </div>
        <h1 className="relative mb-4 select-none w-full">
          <span className="glitch-wordmark font-orbitron font-black text-white block" data-text="GLITCH LAB"
            style={{fontSize:"clamp(36px,10vw,160px)",letterSpacing:"clamp(4px,1.5vw,24px)",lineHeight:1,textShadow:"0 0 60px rgba(0,255,136,0.15)"}}>
            GLITCH LAB
          </span>
        </h1>
        <div className="font-orbitron font-black text-[#00ff88] mb-5 sm:mb-6 tracking-[3px] sm:tracking-[6px]" style={{fontSize:"clamp(11px,2.5vw,26px)"}}>
          NOT A STUDIO. <span className="text-white">A SYSTEM.</span>
        </div>
        <p className="font-rajdhani text-[15px] sm:text-[16px] md:text-[18px] text-[#555] max-w-xl leading-[1.9] mb-8 sm:mb-12 px-2">
          Built at the intersection of experimentation, disruption, and digital identity —
          the core engine behind <span className="text-[#00ff88]">404 GLITCH</span>, <span className="text-[#ff00cc]">CHAINSTERX</span>, and <span className="text-[#ffaa00]">BAYADBOT</span>.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 w-full sm:w-auto">
          <Link href="/lab" className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[3px] px-8 sm:px-10 py-3.5 sm:py-4 bg-[#00ff88] text-black hover:bg-white transition-colors text-center">ENTER LAB</Link>
          <a href="#docs" className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[3px] px-8 sm:px-10 py-3.5 sm:py-4 border border-[#333] text-[#666] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors text-center">READ DOCS</a>
          <a href="#ecosystem" className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[3px] px-8 sm:px-10 py-3.5 sm:py-4 border border-[#1a1a1a] text-[#444] hover:border-[#ff00cc] hover:text-[#ff00cc] transition-colors text-center">ECOSYSTEM ↓</a>
        </div>
        <div className="grid grid-cols-3 gap-px w-full max-w-xs sm:max-w-sm md:max-w-2xl" style={{background:"#1a1a1a"}}>
          {[{label:"PLATFORMS",value:"3"},{label:"STATUS",value:"ACTIVE"},{label:"PHASE",value:"DEPLOY"}].map(s=>(
            <div key={s.label} className="bg-[#050505] px-3 sm:px-6 py-3 sm:py-4 text-center">
              <div className="font-orbitron font-black text-[16px] sm:text-[20px] text-[#00ff88]">{s.value}</div>
              <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#333] tracking-[2px] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="font-mono-tech text-[9px] tracking-[3px] text-[#00ff88]">SCROLL</div>
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#00ff88] to-transparent"/>
      </div>
    </section>
  );
}
