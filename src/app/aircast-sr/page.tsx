"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Github, 
  Terminal,
  Activity,
  Cpu,
  Database,
  ShieldCheck,
  Maximize2,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const paperLogs = [
  "INITIALIZING AIRCAST-SR KERNEL...",
  "LOADING CONDITIONING CHANNELS: 20 DETECTED",
  "CHANNELS: 17 GRAPHCAST + ELEVATION + SVF + COS-SZA",
  "ARCHITECTURE: 3D-UNET BACKBONE LOADED",
  "SCHEDULER: LATENT CONSISTENCY MODEL (LCM)",
  "TARGET RESOLUTION: 1.0 KM HORIZONTAL",
  "TEMPORAL WINDOW: 67 HOURS HOURLY",
  "INFERENCE STEPS: 1-4 [OPTIMIZED]",
  "DEPLOYING OVER CONUS DOMAIN...",
  "SAMPLING PRECIPITATION FIELD...",
  "SAMPLING 2M TEMPERATURE FIELD...",
  "SAMPLING SURFACE PRESSURE...",
  "SAMPLING 10M U/V WIND...",
  "BLENDING STRATEGY: COSINE-TAPERED SPATIAL",
  "PATCH SIZE: 256x256 | STRIDE: 128",
  "VALIDATING AGAINST HRRR BASELINE...",
  "VALIDATING AGAINST AORC GROUND TRUTH...",
  "STRUCTURAL REALISM SCORE: [HIGH]",
  "INFERENCE COMPLETE: 50X SPEEDUP ACHIEVED",
  "READY FOR GLOBAL ZERO-SHOT DEPLOYMENT."
];

function TerminalWindow() {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < paperLogs.length) {
        setLogs(prev => [...prev, paperLogs[i]]);
        i++;
      } else {
        i = 0;
        setLogs([paperLogs[0]]);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Model_Logs.sh</div>
      </div>
      <div 
        ref={scrollRef}
        className="p-4 font-mono text-[11px] leading-relaxed overflow-y-auto scrollbar-hide flex-1"
      >
        {logs.map((log, idx) => (
          <div key={idx} className="flex gap-3 mb-1">
            <span className="text-blue-500/50">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
            <span className={idx === logs.length - 1 ? "text-blue-400" : "text-slate-400"}>
              {idx === logs.length - 1 ? "> " : ""}{log}
            </span>
          </div>
        ))}
        <div className="w-1.5 h-3 bg-blue-500 animate-pulse inline-block ml-1" />
      </div>
    </div>
  );
}

export default function AiRCastSR() {
  const [activePlot, setActivePlot] = useState(0);
  const plots = [
    { title: "Precipitation", id: "APCP", image: "/images/results/apcp_6hr.png", unit: "mm/6hr" },
    { title: "Temperature", id: "TMP", image: "/images/results/tmp_2m.png", unit: "Kelvin" },
    { title: "Surface Pressure", id: "PRES", image: "/images/results/pres_surface.png", unit: "Pa" },
    { title: "U-Wind", id: "UGRD", image: "/images/results/ugrd_10m.png", unit: "m/s" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlot(prev => (prev + 1) % plots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background HUD Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Global Dashboard Nav */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1800px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-white font-black tracking-tighter hover:text-blue-500 transition-colors">
              <Activity size={18} className="text-blue-600" />
              AIRCAST<span className="text-blue-600">.CORE</span>
            </Link>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="hidden md:flex gap-6 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-white">Dashboard</span>
              <a href="/files/aircast_sr_arxiv.pdf" className="hover:text-white transition-colors">Preprint</a>
              <a href="https://github.com/shreesomnath/AiRCast_highres" className="hover:text-white transition-colors">Source</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> SYSTEM_ONLINE
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-[1800px] mx-auto px-6 py-6 space-y-6">
        
        {/* Top Row: Terminal + Main Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[auto] lg:h-[650px]">
          
          {/* Left: Terminal Output */}
          <div className="lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">
            <TerminalWindow />
            <div className="p-4 rounded-lg bg-[#0a0a0a] border border-white/5 space-y-4">
              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Database size={12} /> Model Metadata
              </h4>
              <div className="grid grid-cols-2 gap-4 font-mono text-[10px]">
                <div className="space-y-1">
                  <div className="text-slate-600">RESOLUTION</div>
                  <div className="text-white">1.0 KM</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-600">LATENCY</div>
                  <div className="text-white">~250 MS</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-600">INPUT</div>
                  <div className="text-white">0.25°</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-600">CHANNELS</div>
                  <div className="text-white">20 IN / 7 OUT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Main Visualization */}
          <div className="lg:col-span-9 flex flex-col gap-4 order-1 lg:order-2">
            <div className="flex-1 relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10 pointer-events-none" />
              <div className="absolute top-6 left-6 z-20 space-y-1">
                <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">
                  {plots[activePlot].title} <span className="text-blue-600">Analysis</span>
                </h2>
                <div className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-[0.3em]">
                  FIELD_ID: {plots[activePlot].id} // UNIT: {plots[activePlot].unit}
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                {plots.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActivePlot(i)}
                    className={`h-1 w-8 rounded-full transition-all ${i === activePlot ? "bg-blue-500" : "bg-white/10 hover:bg-white/30"}`} 
                  />
                ))}
              </div>

              <div className="absolute top-6 right-6 z-20">
                <button className="p-2 rounded bg-black/60 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-colors">
                  <Maximize2 size={16} />
                </button>
              </div>

              <Image 
                src={plots[activePlot].image} 
                alt="Main Field" 
                fill 
                className="object-contain p-4 transition-opacity duration-700" 
                priority
              />
            </div>
            
            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 gap-4 h-24">
              {plots.map((p, i) => (
                <button 
                  key={i}
                  onClick={() => setActivePlot(i)}
                  className={`relative rounded-lg overflow-hidden border transition-all group ${i === activePlot ? "border-blue-500 scale-[0.98]" : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"}`}
                >
                  <Image src={p.image} alt={p.id} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-blue-500/10 transition-opacity ${i === activePlot ? "opacity-100" : "opacity-0"}`} />
                  <div className="absolute bottom-2 left-2 text-[8px] font-mono font-bold text-white uppercase tracking-widest bg-black/60 px-1.5 py-0.5 rounded">
                    {p.id}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Architecture + Citation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 border-t border-white/5">
          
          {/* Architecture Schematic */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest italic">System.Schematic</h3>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden border border-white/10 bg-[#050505] group">
              <div className="absolute inset-0 bg-blue-600/5 z-10 pointer-events-none" />
              <Image 
                src="/images/aircast_sr_schematic.jpg" 
                alt="AiRCast-SR Architecture" 
                fill 
                className="object-contain p-8 group-hover:scale-[1.02] transition-transform duration-1000" 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-blue-500 font-bold uppercase">01 // Input Processing</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">Conditioning via 17 atmospheric vars + terrain (SRTM) + solar geometry (SZA).</p>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-blue-500 font-bold uppercase">02 // Latent Consistency</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">LCM-guided diffusion enabling high-fidelity generation in single-digit steps.</p>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-blue-500 font-bold uppercase">03 // Spatial Blending</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">Cosine-tapered tile merging for artifact-free global deployment.</p>
              </div>
            </div>
          </div>

          {/* Citation + Links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest italic">Citation.json</h3>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 space-y-6">
              <pre className="text-[10px] font-mono text-blue-400/80 leading-relaxed overflow-x-auto">
{`{
  "title": "AiRCast-SR",
  "author": [
    "Luitel, Somnath",
    "Singh, Manmeet",
    "Durkee, Joshua"
  ],
  "journal": "arXiv preprint",
  "year": 2026,
  "resolution": "1km",
  "doi": "pending"
}`}
              </pre>
              <div className="pt-4 border-t border-white/5 space-y-3">
                 <h4 className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Resources</h4>
                 <div className="flex flex-col gap-2">
                    <a href="/files/aircast_sr_arxiv.pdf" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                       <Download size={14} className="text-slate-400 group-hover:text-blue-500" />
                       <span className="text-[11px] font-bold">Manuscript (PDF)</span>
                    </a>
                    <a href="https://github.com/shreesomnath/AiRCast_highres" target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                       <Github size={14} className="text-slate-400 group-hover:text-blue-500" />
                       <span className="text-[11px] font-bold">Development Repository</span>
                    </a>
                 </div>
              </div>
            </div>
          </div>

        </div>

      </main>

      <footer className="max-w-[1800px] mx-auto px-6 py-12 border-t border-white/5 text-center">
        <div className="text-[9px] font-mono font-bold text-slate-600 tracking-[0.5em] uppercase">
          &copy; 2026 AIR LAB // WKU // MANMEET SINGH & SOMNATH LUITEL
        </div>
      </footer>
    </div>
  );
}
