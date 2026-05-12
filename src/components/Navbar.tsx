import { useState } from "react";
import { Link } from "wouter";

const navLinks = [
  { label: "WHAT WE BUILD", href: "#what" },
  { label: "ECOSYSTEM", href: "#ecosystem" },
  { label: "PROTOCOL", href: "#protocol" },
  { label: "DOCS", href: "#docs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <div className="w-6 h-6 sm:w-7 sm:h-7 border border-[#00ff88] flex items-center justify-center">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00ff88] group-hover:animate-ping" />
          </div>
          <span className="font-orbitron font-black text-[12px] sm:text-[14px] tracking-[3px] sm:tracking-[4px] text-white whitespace-nowrap">
            GLITCH <span className="text-[#00ff88]">LAB</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="font-mono-tech text-[10px] tracking-[2px] text-[#555] hover:text-[#00ff88] transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/lab" className="font-orbitron font-bold text-[10px] tracking-[3px] px-5 py-2.5 bg-[#00ff88] text-black hover:bg-white transition-colors">ENTER LAB</Link>
        </div>
        <button
          className="md:hidden font-mono-tech text-[10px] text-[#00ff88] tracking-[2px] border border-[#1a1a1a] px-3 py-2 min-h-[44px] min-w-[90px] flex items-center justify-center"
          onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
        >{open ? "✕ CLOSE" : "≡ MENU"}</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#050505] px-4 sm:px-6 py-6 flex flex-col gap-2">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="font-mono-tech text-[12px] tracking-[2px] text-[#666] hover:text-[#00ff88] transition-colors py-3 border-b border-[#0d0d0d]">{l.label}</a>
          ))}
          <Link href="/lab" onClick={() => setOpen(false)}
            className="font-orbitron font-bold text-[11px] tracking-[3px] px-6 py-4 bg-[#00ff88] text-black text-center mt-3 hover:bg-white transition-colors">ENTER LAB</Link>
        </div>
      )}
    </nav>
  );
}
