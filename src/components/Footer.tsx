const links = [
  {label:"WHAT WE BUILD",href:"#what"},
  {label:"ECOSYSTEM",href:"#ecosystem"},
  {label:"PROTOCOL",href:"#protocol"},
  {label:"DOCS",href:"#docs"},
];
const projects = [
  {label:"404 GLITCH",tag:"AI · WEB3 · DEFI",color:"#00ff88"},
  {label:"CHAINSTERX",tag:"SOCIAL · CRYPTO · IDENTITY",color:"#ff00cc"},
  {label:"BAYADBOT",tag:"FINTECH · AI · AUTOMATION",color:"#ffaa00"},
];
export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-6 h-6 border border-[#00ff88] flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 bg-[#00ff88]"/>
              </div>
              <span className="font-orbitron font-black text-[12px] sm:text-[13px] tracking-[3px] sm:tracking-[4px] text-white">
                GLITCH <span className="text-[#00ff88]">LAB</span>
              </span>
            </div>
            <p className="font-rajdhani text-[13px] sm:text-[14px] text-[#444] leading-[1.9] mb-5 sm:mb-6 max-w-xs">
              A digital innovation hub and the core engine behind emerging platforms. Not a studio. A system.
            </p>
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#222]">EXPERIMENTAL SYSTEMS · DIGITAL FUTURE</div>
          </div>
          <div>
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-5 sm:mb-6">NAVIGATION</div>
            <div className="flex flex-col gap-3 sm:gap-4">
              {links.map(l=>(
                <a key={l.label} href={l.href} className="font-rajdhani text-[14px] sm:text-[15px] text-[#444] hover:text-[#00ff88] transition-colors flex items-center gap-2 group py-1">
                  <span className="w-3 h-px bg-[#1a1a1a] group-hover:bg-[#00ff88] transition-colors shrink-0"/>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-5 sm:mb-6">PLATFORMS</div>
            <div className="flex flex-col gap-4">
              {projects.map(p=>(
                <div key={p.label} className="flex flex-col gap-1">
                  <span className="font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[2px]" style={{color:p.color}}>{p.label}</span>
                  <span className="font-mono-tech text-[8px] sm:text-[9px] tracking-[1px] text-[#333]">{p.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1a1a1a] px-4 sm:px-6 md:px-12 py-4 sm:py-5" style={{paddingBottom:"calc(env(safe-area-inset-bottom) + 1.25rem)"}}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#222] tracking-[2px] text-center sm:text-left">© 2025 GLITCH LAB · ALL SYSTEMS RESERVED</div>
          <div className="flex items-center gap-4 sm:gap-6">
            {[
              <svg key="globe" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
              <svg key="target" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
              <svg key="box" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
            ].map((icon,i)=>(
              <button key={i} className="text-[#333] hover:text-[#00ff88] transition-colors p-1 min-w-[36px] min-h-[36px] flex items-center justify-center">{icon}</button>
            ))}
            <span className="font-mono-tech text-[8px] sm:text-[9px] text-[#00ff88] tracking-[2px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] blink"/>ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
