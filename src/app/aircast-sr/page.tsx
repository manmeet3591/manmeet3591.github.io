import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Github, 
  Globe, 
  Zap, 
  Layers, 
  ShieldCheck,
  Cpu,
  Box,
  Layout,
  Activity,
  Maximize2,
  Database,
  Terminal,
  ExternalLink
} from "lucide-react";

export default function AiRCastSR() {
  const stats = [
    { label: "Resolution", value: "1 km" },
    { label: "Temporal", value: "Hourly" },
    { label: "Variables", value: "7 Channels" },
    { label: "Domain", value: "Global" },
  ];

  const features = [
    {
      title: "3D-UNet Architecture",
      description: "Optimized spatiotemporal backbone for high-fidelity weather patterns.",
      icon: Cpu,
    },
    {
      title: "LCM Diffusion",
      description: "Rapid 1-4 step inference for real-time forecasting pipelines.",
      icon: Zap,
    },
    {
      title: "Zero-Shot Deployment",
      description: "Foundation model capable of global kilometer-scale analysis.",
      icon: Globe,
    }
  ];

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* HUD Grid Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
              <ArrowLeft size={18} className="text-slate-500 group-hover:text-white transition-colors" />
            </Link>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-blue-500 uppercase">System Console</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/shreesomnath/AiRCast_highres" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-[1600px] mx-auto px-6 py-8 md:py-12 space-y-8">
        
        {/* Header / Dashboard Title */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[9px] font-mono font-bold uppercase tracking-widest">
              <Activity size={10} /> Live Operations
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
              AiRCast<span className="text-blue-600">.SR</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
                <div className="text-lg font-bold text-white font-mono">{s.value}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sidebar Left: Technical Control */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm space-y-6">
              <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Model Specs
              </h3>
              <div className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <f.icon size={14} className="text-blue-500" />
                      {f.title}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/5 space-y-3">
                <a href="/files/aircast_sr_arxiv.pdf" className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all group">
                  Download Paper <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a href="https://github.com/shreesomnath/AiRCast_highres" target="_blank" className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold transition-all group">
                  Repository <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Training Domain</h3>
              <div className="aspect-square relative rounded-xl overflow-hidden border border-white/10 bg-black shadow-inner">
                <div className="absolute inset-0 bg-blue-500/10 z-10" />
                <Image src="/images/results/pres_surface.png" alt="Domain" fill className="object-contain opacity-70" />
                <div className="absolute top-2 right-2 z-20">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500 text-white text-[8px] font-bold font-mono">CONUS</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Center Map / Main Visualization */}
          <section className="lg:col-span-6 space-y-6">
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10 pointer-events-none" />
              <Image 
                src="/images/results/apcp_6hr.png" 
                alt="Main Dashboard Output" 
                fill 
                className="object-contain transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              {/* Overlay HUD elements */}
              <div className="absolute top-6 left-6 z-20 space-y-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> REC: PRIMARY_FIELD
                </div>
                <div className="text-[10px] font-mono text-white/40 px-3">0.25° → 1km SUPER-RESOLUTION</div>
              </div>
              <div className="absolute bottom-6 right-6 z-20">
                <div className="p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                   <Maximize2 size={16} className="text-white/60" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["TMP", "PRES", "UGRD"].map((v, i) => (
                <div key={i} className="aspect-video relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-blue-500/50 transition-colors group">
                  <Image 
                    src={`/images/results/${v.toLowerCase()}${v === "UGRD" ? "_10m" : v === "PRES" ? "_surface" : "_2m"}.png`} 
                    alt={v} 
                    fill 
                    className="object-contain opacity-50 group-hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black to-transparent">
                    <span className="text-[9px] font-mono font-bold text-white uppercase tracking-widest">{v} FIELD</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right Sidebar: Metadata & Citation */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4">
               <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">Author Contribution</h3>
               <div className="space-y-4">
                 <div className="space-y-1">
                   <div className="text-[10px] text-slate-500 font-mono">CORE LEAD</div>
                   <div className="text-white font-bold text-sm">Somnath Luitel</div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-[10px] text-slate-500 font-mono">PRINCIPAL INVESTIGATOR</div>
                   <div className="text-white font-bold text-sm">Manmeet Singh</div>
                 </div>
               </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4">
               <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Citation</h3>
               <pre className="text-[10px] font-mono text-blue-100/60 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5 overflow-x-auto">
{`@article{luitel2026AiRCastsr,
  title   = {{AiRCast-SR}},
  author  = {Luitel, S. and 
             Singh, M., et al.},
  journal = {arXiv},
  year    = {2026}
}`}
               </pre>
            </div>

            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20">
               <div className="space-y-4">
                 <ShieldCheck className="text-blue-400" size={32} />
                 <h4 className="text-white font-bold tracking-tight">Foundation Ready.</h4>
                 <p className="text-xs text-blue-100/60 leading-relaxed">
                   The system is optimized for high-performance computing clusters and real-time operational weather centers.
                 </p>
               </div>
            </div>
          </aside>
        </div>

        {/* Full Width Architecture Display */}
        <section className="space-y-8 pt-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white uppercase italic tracking-tighter">System.Architecture</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="relative rounded-[3rem] overflow-hidden border border-white/5 bg-[#050505] p-8 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent)]" />
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-[2/1] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <Image src="/images/aircast_sr_schematic.jpg" alt="Architecture" fill className="object-contain" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-4">
                  <h4 className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.3em]">Data Pipeline</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Ingests 17 atmospheric conditioning variables from GraphCast, augmented with static terrain descriptors (normalized elevation and sky-view factor) and instantaneous solar geometry.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.3em]">Inference Engine</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Overlapping predictions are merged via cosine-tapered spatial blending to ensure seamless, artifact-free output across the full geographic domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="max-w-[1600px] mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
        <div className="text-[10px] font-mono tracking-widest">AIR LAB &bull; WESTERN KENTUCKY UNIVERSITY</div>
        <div className="text-[10px] font-mono tracking-widest">&copy; 2026 MANMEET SINGH</div>
      </footer>
    </div>
  );
}
