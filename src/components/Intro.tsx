export default function Intro() {
  return (
    <section className="bg-[#050505] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-24 items-center">
          <div>
            <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-5 sm:mb-6 flex items-center gap-3 flex-wrap">
              <span className="w-4 h-px bg-[#00ff88]"/>
              SYSTEM INTRO · BOOT SEQUENCE 01
            </div>
            <h2 className="font-orbitron font-black text-white leading-[1.1] mb-5 sm:mb-6" style={{fontSize:"clamp(22px,4.5vw,56px)"}}>
              GLITCH LAB IS NOT A STUDIO.<br/><span className="text-[#00ff88]">IT IS A SYSTEM.</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#00ff88] mb-6 sm:mb-8"/>
            <p className="font-rajdhani text-[16px] sm:text-[17px] text-[#666] leading-[1.9] mb-5 sm:mb-6">
              Built at the intersection of experimentation, disruption, and digital identity,
              GLITCH LAB serves as the core engine behind <span className="text-[#ff00cc] font-semibold">404 GLITCH</span>,{" "}
              <span className="text-[#ff00cc] font-semibold">CHAINSTERX</span>, and{" "}
              <span className="text-[#ffaa00] font-semibold">BAYADBOT</span>.
            </p>
            <p className="font-rajdhani text-[16px] sm:text-[17px] text-[#444] leading-[1.9]">
              We don't just build products.<br/><span className="text-[#00ff88]">We design ecosystems.</span>
            </p>
          </div>
          <div className="border border-[#1a1a1a] bg-[#080808] rounded-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-[#1a1a1a] bg-[#0a0a0a]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#333]"/>
              <div className="w-2.5 h-2.5 rounded-full bg-[#333]"/>
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88]"/>
              <span className="font-mono-tech text-[8px] sm:text-[9px] text-[#333] tracking-[2px] ml-2 sm:ml-3 truncate">GLITCH_LAB://SYSTEM/CORE</span>
            </div>
            <div className="px-4 sm:px-6 py-6 sm:py-8 font-mono-tech text-[11px] sm:text-[12px] leading-[2.2] overflow-x-auto">
              <div className="text-[#333]">{">"} initializing system...</div>
              <div className="text-[#00ff88]">{">"} GLITCH LAB v2.0 · ONLINE</div>
              <div className="text-[#333]">{">"} loading modules...</div>
              <div className="text-[#555] pl-4">· 404 GLITCH ........... <span className="text-[#00ff88]">ACTIVE</span></div>
              <div className="text-[#555] pl-4">· CHAINSTERX .......... <span className="text-[#00ff88]">ACTIVE</span></div>
              <div className="text-[#555] pl-4">· BAYADBOT ............ <span className="text-[#ffaa00]">ACTIVE</span></div>
              <div className="text-[#555] pl-4">· DARK ARCHIVE ........ <span className="text-[#ff00cc]">LOCKED</span></div>
              <div className="text-[#333]">{">"} scanning ecosystem...</div>
              <div className="text-[#555] pl-4">· platforms deployed .. <span className="text-[#00ff88]">3</span></div>
              <div className="text-[#555] pl-4">· experiments active .. <span className="text-[#00ff88]">4</span></div>
              <div className="text-[#333]">{">"} system status:</div>
              <div className="text-[#00ff88] pl-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] blink inline-block flex-shrink-0"/>
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
