const pillars = [
  {symbol:"🧠",role:"THE BRAIN",subtitle:"R&D / SYSTEM CORE",desc:"Where ideas are born, stress-tested, and refined. The research nucleus that generates every concept before it ever reaches production.",tags:["IDEATION","RESEARCH","TESTING"],accent:"#00ff88"},
  {symbol:"🔗",role:"THE BUILDER",subtitle:"PLATFORM DEVELOPMENT",desc:"Raw concepts become working systems. Engineering, design systems, and platform architecture converge to ship real products.",tags:["ENGINEERING","DESIGN SYSTEMS","ARCHITECTURE"],accent:"#00ff88"},
  {symbol:"🚀",role:"THE LAUNCHER",subtitle:"MARKET DEPLOYMENT",desc:"Systems go live. Products meet users. Data flows back. The deployment layer that connects the lab to the real world.",tags:["DEPLOYMENT","GROWTH","TRACTION"],accent:"#ff00cc"},
];
export default function CoreStructure() {
  return (
    <section className="bg-[#050505] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        <div className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <div>
            <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-4 flex items-center gap-3 flex-wrap">
              <span className="w-4 h-px bg-[#00ff88]"/>CORE STRUCTURE · SYSTEM LAYERS
            </div>
            <h2 className="font-orbitron font-black text-white" style={{fontSize:"clamp(20px,3.5vw,44px)",letterSpacing:"3px"}}>
              HOW WE ARE <span className="text-[#00ff88]">STRUCTURED</span>
            </h2>
          </div>
          <p className="font-rajdhani text-[14px] sm:text-[15px] text-[#444] max-w-xs leading-[1.8] md:text-right">Think of GLITCH LAB as three interconnected layers — each one essential.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{background:"#1a1a1a"}}>
          {pillars.map((p,i)=>(
            <div key={i} className="bg-[#050505] p-6 sm:p-10 md:p-12 flex flex-col group hover:bg-[#070707] transition-colors">
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div className="font-orbitron font-black text-[40px] sm:text-[48px] leading-none text-[#0f0f0f]">0{i+1}</div>
                <div className="text-[24px] sm:text-[28px]">{p.symbol}</div>
              </div>
              <div className="font-orbitron font-black text-[16px] sm:text-[18px] tracking-[3px] mb-1 group-hover:text-[#00ff88] transition-colors text-white">{p.role}</div>
              <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-4">{p.subtitle}</div>
              <div className="w-8 h-[2px] mb-5 sm:mb-6" style={{background:p.accent}}/>
              <p className="font-rajdhani text-[14px] sm:text-[15px] text-[#555] leading-[1.9] mb-6 sm:mb-8 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t=>(
                  <span key={t} className="font-mono-tech text-[8px] sm:text-[9px] tracking-[1px] px-2.5 sm:px-3 py-1.5 border" style={{borderColor:"#1a1a1a",color:"#333"}}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
