const focuses = [
  {icon:"⬡",title:"EXPERIMENTAL WEB SYSTEMS",desc:"Pushing the limits of digital architecture through unconventional frameworks, live testing environments, and protocol-level innovation.",color:"#00ff88"},
  {icon:"◈",title:"IDENTITY-DRIVEN PLATFORMS",desc:"Building platforms where identity is a digital asset — composable, portable, and owned by the user.",color:"#00ff88"},
  {icon:"⬡",title:"SOCIAL + CRYPTO INTEGRATIONS",desc:"Merging community mechanics with on-chain infrastructure. Where social graphs meet decentralized finance.",color:"#ff00cc"},
  {icon:"◈",title:"SMART PAYMENT AUTOMATION",desc:"Connecting payment gateways, AI engines, and messaging systems into a single automated workflow for the next generation of digital business.",color:"#ffaa00"},
];
export default function WhatIs() {
  return (
    <section id="what" className="bg-[#050505] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        <div className="mb-10 sm:mb-16 max-w-3xl">
          <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-4 flex items-center gap-3 flex-wrap">
            <span className="w-4 h-px bg-[#00ff88]"/>SYSTEM ARCHITECTURE · CORE DEFINITION
          </div>
          <h2 className="font-orbitron font-black text-white mb-5 sm:mb-6" style={{fontSize:"clamp(22px,4vw,48px)",letterSpacing:"3px"}}>
            WHAT IS <span className="text-[#00ff88]">GLITCH LAB?</span>
          </h2>
          <p className="font-rajdhani text-[15px] sm:text-[17px] text-[#555] leading-[1.9] max-w-2xl">
            GLITCH LAB is a digital innovation hub — the main branch and origin layer where all concepts are tested, evolved, and deployed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{background:"#1a1a1a"}}>
          {focuses.map((f,i)=>(
            <div key={i} className="bg-[#050505] p-6 sm:p-10 md:p-12 group hover:bg-[#070707] transition-colors cursor-default">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="font-mono-tech text-[20px] sm:text-[22px] mt-1 shrink-0 group-hover:scale-110 transition-transform" style={{color:f.color}}>{f.icon}</div>
                <div>
                  <div className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[3px] text-white mb-3 group-hover:text-[#00ff88] transition-colors leading-[1.5]">{f.title}</div>
                  <div className="w-5 h-[2px] mb-3 sm:mb-4" style={{background:f.color,opacity:0.5}}/>
                  <p className="font-rajdhani text-[14px] sm:text-[15px] text-[#555] leading-[1.9]">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
