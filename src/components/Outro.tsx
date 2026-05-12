import { Link } from "wouter";
export default function Outro() {
  return (
    <section className="bg-[#050505] border-t border-[#1a1a1a] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(0,255,136,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.025) 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(0,255,136,0.05) 0%,transparent 70%)"}}/>
      <div className="hidden sm:block absolute top-6 sm:top-8 left-4 sm:left-8 md:left-16 font-mono-tech text-[8px] sm:text-[9px] text-[#1a1a1a] tracking-[3px]">&gt; INITIALIZING ACCESS...</div>
      <div className="hidden sm:block absolute top-6 sm:top-8 right-4 sm:right-8 md:right-16 font-mono-tech text-[8px] sm:text-[9px] text-[#1a1a1a] tracking-[3px]">SYS://LAB.CORE/OUTRO</div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-32 md:py-40 relative z-10 text-center">
        <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[4px] sm:tracking-[5px] text-[#00ff88] mb-8 sm:mb-10 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <span className="w-8 sm:w-12 h-px bg-[#00ff88] opacity-40"/>CLOSING STATEMENT · SYSTEM OUTRO<span className="w-8 sm:w-12 h-px bg-[#00ff88] opacity-40"/>
        </div>
        <h2 className="font-orbitron font-black text-white mb-6 sm:mb-8 leading-[1.1]" style={{fontSize:"clamp(24px,5vw,64px)",letterSpacing:"3px"}}>
          THE INTERNET IS<br/><span className="text-[#00ff88]">EVOLVING.</span>
        </h2>
        <p className="font-rajdhani text-[16px] sm:text-[18px] md:text-[20px] text-[#444] leading-[1.9] max-w-2xl mx-auto mb-5 sm:mb-6 px-2">
          From static platforms to living systems. GLITCH LAB exists to lead that transition.
        </p>
        <div className="flex flex-col items-center gap-3 mb-12 sm:mb-16">
          <p className="font-orbitron font-black text-[11px] sm:text-[13px] md:text-[16px] tracking-[2px] sm:tracking-[3px] text-[#555] text-center px-2">WE ARE NOT HERE TO FOLLOW TRENDS.</p>
          <p className="font-orbitron font-black text-[11px] sm:text-[13px] md:text-[16px] tracking-[2px] sm:tracking-[3px] text-white text-center px-2">WE ARE HERE TO BUILD <span className="text-[#00ff88]">WHAT COMES NEXT.</span></p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-14 sm:mb-20">
          <Link href="/lab" className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[3px] px-8 sm:px-12 py-4 sm:py-5 bg-[#00ff88] text-black hover:bg-white transition-colors text-center">ENTER LAB</Link>
          <a href="#what" className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[3px] px-8 sm:px-12 py-4 sm:py-5 border border-[#333] text-[#666] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors text-center">READ DOCS</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-xs sm:max-w-sm md:max-w-2xl mx-auto" style={{background:"#1a1a1a"}}>
          {[{v:"3",l:"PLATFORMS"},{v:"∞",l:"EXPERIMENTS"},{v:"v2.0",l:"VERSION"},{v:"LIVE",l:"STATUS"}].map(m=>(
            <div key={m.l} className="bg-[#050505] px-4 sm:px-6 py-4 sm:py-5 text-center">
              <div className="font-orbitron font-black text-[16px] sm:text-[18px] text-[#00ff88]">{m.v}</div>
              <div className="font-mono-tech text-[7px] sm:text-[8px] tracking-[2px] text-[#222] mt-1">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 md:right-16 font-mono-tech text-[8px] sm:text-[9px] text-[#1a1a1a] tracking-[3px]">v2.0.0-EXPERIMENTAL</div>
    </section>
  );
}
