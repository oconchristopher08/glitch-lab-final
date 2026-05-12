const projects = [
  {
    id: "⚡",
    code: "404-GLITCH",
    tagline: "AN ENTITY INSIDE THE SYSTEM",
    status: "ACTIVE",
    statusColor: "#00ff88",
    category: "AI · CRYPTO · WEB3",
    desc: "Experimental Crypto AI-driven concept focused on Alpha Intel, Web3, and Decentralized Finance (DeFi). Represents the chaotic intelligence layer of the ecosystem.",
    roles: ["Innovation Testing","UX Experimentation","Brand Identity Exploration","Web3 / Blockchain Development","Decentralized Platform","AI Agent Intel"],
    accent: "#00ff88",
  },
  {
    id: "🔗",
    code: "CHAINSTERX",
    tagline: "SOCIAL · CRYPTO · IDENTITY SYSTEM",
    status: "ACTIVE",
    statusColor: "#00ff88",
    category: "SOCIAL · BLOCKCHAIN · IDENTITY",
    desc: "Hybrid platform combining social networking, blockchain concepts, and identity systems. The monetization and community layer of the GLITCH LAB ecosystem.",
    roles: ["Monetization Layer","Community Building","Scalable Product Vision","Social Graph Infrastructure","On-chain Identity","Network Growth"],
    accent: "#ff00cc",
  },
  {
    id: "💳",
    code: "BAYADBOT",
    tagline: "SMART PAYMENT AUTOMATION PLATFORM",
    status: "ACTIVE",
    statusColor: "#ffaa00",
    category: "FINTECH · AI · AUTOMATION",
    desc: "Next-generation payment automation platform — simplifying digital transactions, smart payments, and AI-assisted customer interactions in one streamlined system. Powered by real-time webhook technology.",
    roles: ["Payment Automation","AI-Driven Support","Webhook Integration","Digital Transaction Layer","Smart Confirmations","Scalable Fintech"],
    accent: "#ffaa00",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-[#050505] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-4 flex items-center gap-3 flex-wrap">
            <span className="w-4 h-px bg-[#00ff88]"/>
            PROJECT ECOSYSTEM · RUNNING MODULES
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
            <h2 className="font-orbitron font-black text-white" style={{fontSize:"clamp(20px,3.5vw,44px)",letterSpacing:"3px"}}>
              THE <span className="text-[#00ff88]">ECOSYSTEM</span>
            </h2>
            <div className="flex items-center gap-3 font-mono-tech text-[9px] tracking-[2px]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] blink flex-shrink-0"/>
              <span className="text-[#00ff88]">3 / 3</span>
              <span className="text-[#333]">PLATFORMS ONLINE</span>
            </div>
          </div>
        </div>

        {/* Top row: 404-GLITCH + CHAINSTERX side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px" style={{background:"#1a1a1a"}}>
          {projects.slice(0,2).map(p => (
            <ProjectCard key={p.code} p={p}/>
          ))}
        </div>

        {/* BAYADBOT — full-width featured card */}
        <div style={{background:"#1a1a1a"}}>
          <BayadBotCard p={projects[2]}/>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({p}: {p: typeof projects[0]}) {
  return (
    <div className="bg-[#050505] p-6 sm:p-10 md:p-14 flex flex-col group hover:bg-[#070707] transition-colors">
      <div className="flex items-start justify-between mb-6 sm:mb-8 gap-3">
        <div className="min-w-0">
          <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-2 sm:mb-3">{p.category}</div>
          <div className="font-orbitron font-black tracking-[2px] sm:tracking-[3px] group-hover:tracking-[4px] transition-all break-words"
            style={{fontSize:"clamp(18px,3vw,36px)",color:p.accent}}>{p.id} {p.code}</div>
          <div className="font-mono-tech text-[9px] sm:text-[10px] tracking-[2px] text-[#444] mt-2">{p.tagline}</div>
        </div>
        <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[2px] px-2.5 sm:px-3 py-1 sm:py-1.5 border shrink-0"
          style={{color:p.statusColor,borderColor:p.statusColor}}>{p.status}</div>
      </div>
      <div className="h-px mb-6 sm:mb-8" style={{background:p.accent,opacity:0.15}}/>
      <p className="font-rajdhani text-[14px] sm:text-[16px] text-[#555] leading-[1.9] mb-6 sm:mb-8">{p.desc}</p>
      <div className="mb-5 sm:mb-6">
        <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-3 sm:mb-4">ROLE IN ECOSYSTEM</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {p.roles.map(r=>(
            <div key={r} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full shrink-0" style={{background:p.accent}}/>
              <span className="font-rajdhani text-[12px] sm:text-[13px] text-[#444]">{r}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <div className="font-mono-tech text-[9px] sm:text-[10px] tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{color:p.accent}}>
          &gt; ACCESS MODULE ──────────────
        </div>
      </div>
    </div>
  );
}

function BayadBotCard({p}: {p: typeof projects[0]}) {
  return (
    <div className="bayadbot-card bg-[#050505] p-6 sm:p-10 md:p-14 group hover:bg-[#070707] transition-all relative overflow-hidden">

      {/* Subtle gold grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
        backgroundImage:"linear-gradient(rgba(255,170,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,170,0,0.025) 1px,transparent 1px)",
        backgroundSize:"40px 40px"
      }}/>
      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
        background:"radial-gradient(ellipse 60% 80% at 10% 50%,rgba(255,170,0,0.05) 0%,transparent 70%)"
      }}/>

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6 sm:mb-8">
          <div className="flex items-start gap-4 sm:gap-6">
            {/* Big icon */}
            <div className="text-[36px] sm:text-[48px] leading-none flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              {p.id}
            </div>
            <div>
              <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-2">{p.category}</div>
              <div className="font-orbitron font-black tracking-[3px] sm:tracking-[5px] group-hover:tracking-[6px] transition-all"
                style={{fontSize:"clamp(22px,4vw,48px)",color:p.accent,textShadow:"0 0 30px rgba(255,170,0,0.2)"}}>
                {p.code}
              </div>
              <div className="font-mono-tech text-[9px] sm:text-[11px] tracking-[2px] text-[#555] mt-2">{p.tagline}</div>
            </div>
          </div>

          {/* Status + badge */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] px-3 py-1.5 border"
              style={{color:p.accent,borderColor:p.accent}}>
              {p.status}
            </div>
            <div className="font-mono-tech text-[7px] sm:text-[8px] tracking-[2px] px-3 py-1.5 border border-[#1a1a1a] text-[#333]">
              FINTECH
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px mb-6 sm:mb-8" style={{background:`linear-gradient(to right,${p.accent},transparent)`,opacity:0.3}}/>

        {/* Description + roles in two columns on large screens */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-4">PLATFORM OVERVIEW</div>
            <p className="font-rajdhani text-[14px] sm:text-[16px] text-[#555] leading-[1.9] mb-6">
              {p.desc}
            </p>
            {/* Key features */}
            <div className="space-y-3">
              {[
                {icon:"⚡",text:"Real-time webhook payment detection"},
                {icon:"🤖",text:"AI-powered smart response engine"},
                {icon:"🔒",text:"Automated verification & confirmation"},
              ].map(f=>(
                <div key={f.text} className="flex items-center gap-3">
                  <span className="text-[14px] flex-shrink-0">{f.icon}</span>
                  <span className="font-rajdhani text-[13px] sm:text-[14px] text-[#444]">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono-tech text-[8px] sm:text-[9px] tracking-[3px] text-[#333] mb-4">ROLE IN ECOSYSTEM</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {p.roles.map(r=>(
                <div key={r} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{background:p.accent}}/>
                  <span className="font-rajdhani text-[12px] sm:text-[13px] text-[#444]">{r}</span>
                </div>
              ))}
            </div>

            {/* System tags */}
            <div className="flex flex-wrap gap-2">
              {["PAYMENTS","WEBHOOKS","AI SUPPORT","AUTOMATION","FINTECH","DIGITAL SERVICES"].map(t=>(
                <span key={t} className="font-mono-tech text-[7px] sm:text-[8px] tracking-[1px] px-2.5 py-1.5 border"
                  style={{borderColor:"rgba(255,170,0,0.2)",color:"rgba(255,170,0,0.5)"}}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA row */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-[#1a1a1a]">
          <div className="font-rajdhani text-[13px] sm:text-[14px] text-[#333] leading-[1.8] max-w-md">
            From digital selling to service automation — a scalable smart payment companion for the next generation of online businesses.
          </div>
          <div className="font-mono-tech text-[10px] sm:text-[11px] tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
            style={{color:p.accent}}>
            &gt; ACCESS MODULE ──────
          </div>
        </div>
      </div>
    </div>
  );
}
