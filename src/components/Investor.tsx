const strengths = [
  {icon:"🚀",label:"STARTUP-READY ARCHITECTURE",desc:"Built to scale from day one."},
  {icon:"🧩",label:"MODULAR PRODUCT SYSTEM",desc:"Each platform extends the core."},
  {icon:"📈",label:"SCALABLE ECOSYSTEM DESIGN",desc:"Cross-platform growth flywheel."},
  {icon:"💳",label:"INTEGRATED PAYMENT LAYER",desc:"BAYADBOT adds fintech revenue rails."},
];
const marketItems = [
  {label:"IDENTITY",value:"= Digital Asset",color:"#00ff88"},
  {label:"COMMUNITY",value:"= Currency",color:"#00ff88"},
  {label:"PAYMENTS",value:"= Automation",color:"#ffaa00"},
  {label:"PLATFORMS",value:"= Ecosystems",color:"#ff00cc"},
];
export default function Investor() {
  return (
    <section id="docs" className="bg-[#050505] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        <div className="mb-10 sm:mb-16">
          <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-4 flex items-center gap-3 flex-wrap">
            <span className="w-4 h-px bg-[#00ff88]"/>INVESTOR BRIEF · POSITIONING
          </div>
          <h2 className="font-orbitron font-black text-white mb-4" style={{fontSize:"clamp(20px,3.5vw,44px)",letterSpacing:"3px"}}>
            WHY <span className="text-[#00ff88]">GLITCH LAB</span>
          </h2>
          <p className="font-rajdhani text-[15px] sm:text-[17px] text-[#444] max-w-2xl leading-[1.9]">
            A multi-platform innovation engine with scalable digital products — positioned at the convergence of identity, community, decentralized finance, and payment automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px" style={{background:"#1a1a1a"}}>
          <div className="bg-[#050505] p-6 sm:p-10 md:p-12">
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-6 sm:mb-8">KEY STRENGTHS</div>
            <div className="flex flex-col gap-5 sm:gap-6">
              {strengths.map(s=>(
                <div key={s.label} className="flex items-start gap-4 sm:gap-5 group">
                  <div className="text-[18px] sm:text-[20px] shrink-0 mt-0.5">{s.icon}</div>
                  <div>
                    <div className="font-orbitron font-bold text-[10px] sm:text-[11px] tracking-[2px] text-white mb-1 group-hover:text-[#00ff88] transition-colors leading-[1.5]">{s.label}</div>
                    <div className="font-rajdhani text-[13px] sm:text-[14px] text-[#444]">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#050505] p-6 sm:p-10 md:p-12">
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-6 sm:mb-8">MARKET OPPORTUNITY</div>
            <p className="font-rajdhani text-[14px] sm:text-[16px] text-[#555] leading-[1.9] mb-6 sm:mb-8">
              We are entering a phase where the next layer of the internet is being built. GLITCH LAB is engineered to capture and unify these converging forces.
            </p>
            <div className="flex flex-col gap-3">
              {marketItems.map(m=>(
                <div key={m.label} className="flex items-center justify-between border border-[#1a1a1a] px-4 sm:px-5 py-3 sm:py-4 hover:border-[#00ff88] transition-colors group">
                  <span className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[2px] text-[#555] group-hover:text-white transition-colors">{m.label}</span>
                  <span className="font-mono-tech text-[10px] sm:text-[11px] tracking-[2px]" style={{color:m.color}}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{background:"#1a1a1a"}}>
          <div className="bg-[#050505] p-6 sm:p-10 md:p-12">
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-5 sm:mb-6">VALUE PROPOSITION</div>
            <p className="font-rajdhani text-[14px] sm:text-[16px] text-[#555] leading-[1.9] mb-5 sm:mb-6">Instead of building a single product, GLITCH LAB builds multiple interconnected systems.</p>
            <div className="flex flex-col gap-3">
              {["Faster innovation cycles","Cross-platform growth","Higher long-term scalability","Built-in payment automation layer"].map(v=>(
                <div key={v} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shrink-0"/>
                  <span className="font-rajdhani text-[14px] sm:text-[15px] text-[#444]">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#080808] p-6 sm:p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(0,255,136,0.04) 0%,transparent 70%)"}}/>
            <div className="relative z-10">
              <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#00ff88] mb-5 sm:mb-6">INVESTOR HOOK</div>
              <blockquote className="font-orbitron font-black text-white leading-[1.5] mb-5 sm:mb-6" style={{fontSize:"clamp(13px,2vw,22px)",letterSpacing:"1px"}}>
                "We are not launching a product.<br/>We are building a <span className="text-[#00ff88]">system of products</span> designed to evolve together."
              </blockquote>
              <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333]">— GLITCH LAB · SYSTEM MANIFESTO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
