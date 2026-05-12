import { Link } from "wouter";
export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] text-white px-4">
      <div className="text-center max-w-md w-full">
        <div className="font-mono-tech text-[9px] tracking-[4px] text-[#00ff88] mb-6 flex items-center justify-center gap-3">
          <span className="w-6 h-px bg-[#00ff88] opacity-50"/>ERROR · 404<span className="w-6 h-px bg-[#00ff88] opacity-50"/>
        </div>
        <div className="font-orbitron font-black text-[#0d0d0d] mb-4 leading-none select-none" style={{fontSize:"clamp(80px,25vw,180px)"}}>404</div>
        <h1 className="font-orbitron font-black text-white mb-4" style={{fontSize:"clamp(18px,4vw,32px)",letterSpacing:"3px"}}>PAGE <span className="text-[#00ff88]">NOT FOUND</span></h1>
        <p className="font-rajdhani text-[15px] sm:text-[16px] text-[#444] leading-[1.9] mb-8">This route does not exist in the system.</p>
        <Link href="/" className="inline-block font-orbitron font-bold text-[11px] sm:text-[12px] tracking-[3px] px-8 py-3.5 bg-[#00ff88] text-black hover:bg-white transition-colors">RETURN TO BASE</Link>
      </div>
    </div>
  );
}
