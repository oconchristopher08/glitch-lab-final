const steps = [
  {num:"01",icon:"🧪",label:"EXPERIMENT",sublabel:"GLITCH LAB ENVIRONMENT",desc:"Ideas are created and tested internally. Every concept begins as an experiment — stress-tested, broken, refined.",color:"#00ff88"},
  {num:"02",icon:"⚙️",label:"BUILD",sublabel:"404 GLITCH / CHAINSTERX",desc:"Concepts that survive become working platforms. Engineering and design converge to ship real, functional products.",color:"#00ff88"},
  {num:"03",icon:"🚀",label:"DEPLOY",sublabel:"REAL USERS · REAL TRACTION",desc:"Products go live. Real users interact. Feedback, data, and behavior flow back into the system continuously.",color:"#ff00cc"},
  {num:"04",icon:"🔁",label:"EVOLVE",sublabel:"DATA-DRIVEN REFINEMENT",desc:"User behavior and data refine the system. The loop closes — and the next experiment begins stronger.",color:"#ff00cc"},
];
export default function HowItWorks() {
  return (
    <section id="protocol" className="bg-[#050505] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        <div className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <div>
            <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-4 flex items-center gap-3 flex-wrap">
              <span className="w-4 h-px bg-[#00ff88]"/>OPERATIONAL LOOP · CONTINUOUS SYSTEM
            </div>
            <h2 className="font-orbitron font-black text-white" style={{fontSize:"clamp(20px,3.5vw,44px)",letterSpacing:"3px"}}>
              HOW THE <span className="text-[#00ff88]">SYSTEM WORKS</span>
            </h2>
          </div>
          <p className="font-rajdhani text-[14px] sm:text-[15px] text-[#444] max-w-sm leading-[1.8] md:text-right">GLITCH LAB operates through a continuous loop — each phase feeds the next.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-8 sm:mb-12" style={{background:"#1a1a1a"}}>
          {steps.map((s,i)=>(
            <div key={s.num} className="bg-[#050505] p-5 sm:p-8 md:p-10 flex flex-col group hover:bg-[#070707] transition-colors relative">
              {i<steps.length-1&&<div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 font-mono-tech text-[10px]" style={{color:"#1a1a1a"}}>▶</div>}
              <div className="font-orbitron font-black text-[28px] sm:text-[40px] leading-none mb-3 sm:mb-4" style={{color:"#0d0d0d"}}>{s.num}</div>
              <div className="text-[20px] sm:text-[24px] mb-3 sm:mb-5">{s.icon}</div>
              <div className="font-orbitron font-black text-[13px] sm:text-[15px] tracking-[2px] sm:tracking-[3px] mb-1 group-hover:text-[#00ff88] transition-colors text-white">{s.label}</div>
              <div className="font-mono-tech text-[7px] sm:text-[8px] tracking-[2px] text-[#333] mb-3 sm:mb-4 leading-[1.5]">{s.sublabel}</div>
              <div className="w-6 h-[2px] mb-3 sm:mb-5" style={{background:s.color}}/>
              <p className="font-rajdhani text-[12px] sm:text-[14px] text-[#555] leading-[1.9] flex-1">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 sm:gap-6 font-mono-tech text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] flex-wrap">
          {["EXPERIMENT","BUILD","DEPLOY","EVOLVE"].map((t,i)=>(
            <div key={t} className="flex items-center gap-3 sm:gap-6">
              <span className={i<2?"text-[#00ff88]":"text-[#ff00cc]"}>{t}</span>
              {i<3&&<span className="text-[#222]">→</span>}
            </div>
          ))}
          <span className="text-[#222] ml-1 sm:ml-2">↺ LOOP</span>
        </div>
      </div>
    </section>
  );
}
