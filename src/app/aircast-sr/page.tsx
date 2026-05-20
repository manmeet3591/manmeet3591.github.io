import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Github, 
  Globe, 
  Zap, 
  Layers, 
  BarChart3, 
  ShieldCheck,
  ChevronRight,
  Cpu,
  LineChart,
  Box,
  Layout,
  ExternalLink
} from "lucide-react";

export default function AiRCastSR() {
  const features = [
    {
      title: "1km Super-Resolution",
      description: "Translates 25-km global forecasts into street-level meterological fields with physics-consistent detail.",
      icon: Layout,
      color: "blue"
    },
    {
      title: "7 Coupled Channels",
      description: "Simultaneously solves for precipitation, temperature, humidity, wind (U/V), pressure, and radiation.",
      icon: Layers,
      color: "indigo"
    },
    {
      title: "LCM Diffusion Engine",
      description: "Leverages Latent Consistency Models for 50x faster inference than standard diffusion processes.",
      icon: Zap,
      color: "purple"
    },
    {
      title: "Zero-Shot Foundation",
      description: "Trained on CONUS patches but architected for immediate deployment over any global bounding box.",
      icon: Globe,
      color: "cyan"
    }
  ];

  const results = [
    { title: "Precipitation (6hr)", image: "/images/results/apcp_6hr.png", var: "APCP" },
    { title: "2m Temperature", image: "/images/results/tmp_2m.png", var: "TMP" },
    { title: "Surface Pressure", image: "/images/results/pres_surface.png", var: "PRES" },
    { title: "10m U-Wind", image: "/images/results/ugrd_10m.png", var: "UGRD" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-indigo-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-medium text-sm">Portfolio</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="https://github.com/shreesomnath/AiRCast_highres" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-16 space-y-20 md:space-y-28">
        
        {/* Hero Section */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <ShieldCheck size={12} /> Project AiRCast
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
                AiRCast<span className="text-blue-500">-SR</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                Kilometer-scale generative atmospheric super-resolution. Translating global weather forecasts into <span className="text-slate-200">high-fidelity gridded analyses</span> at scale.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="/files/aircast_sr_arxiv.pdf" 
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 text-sm"
                >
                  <Download size={18} /> Paper
                </a>
                <a 
                  href="https://github.com/shreesomnath/AiRCast_highres" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-sm text-sm"
                >
                  <Github size={18} /> Code
                </a>
              </div>
            </div>
            
            <div className="relative w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
              <Image 
                src="/images/results/apcp_6hr.png" 
                alt="AiRCast-SR Preview" 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest">Live Output</span>
              </div>
            </div>
          </div>

          {/* Wide Banner Image - Reduced Aspect Ratio */}
          <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-inner group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-10" />
            <Image 
              src="/images/banners/hero_wide.png" 
              alt="AiRCast-SR High-Res Display" 
              fill 
              className="object-cover object-center opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
              <div className="flex items-center gap-4 text-white/50 text-[10px] font-mono uppercase tracking-[0.3em]">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 1km Gridded</span>
                <span>•</span>
                <span>67-Hour Window</span>
                <span>•</span>
                <span>CONUS Domain</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all">
              <div className={`w-12 h-12 rounded-2xl bg-${f.color}-500/10 text-${f.color}-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </section>

        {/* Technical Architecture */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">System Architecture</h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full" />
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image 
              src="/images/aircast_sr_schematic.jpg" 
              alt="AiRCast-SR Schematic" 
              width={1400} 
              height={700} 
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
              priority
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <h4 className="text-blue-400 font-bold flex items-center gap-2 italic font-mono uppercase text-xs tracking-widest">
                <Cpu size={14} /> Generator
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                A customized 3D-UNet backbone optimized for spatiotemporal weather patterns, ingesting 20 conditioning channels.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-indigo-400 font-bold flex items-center gap-2 italic font-mono uppercase text-xs tracking-widest">
                <Zap size={14} /> Scheduler
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Latent Consistency Model (LCM) allows for high-quality generation in just 1-4 steps, making real-time deployment feasible.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-bold flex items-center gap-2 italic font-mono uppercase text-xs tracking-widest">
                <Box size={14} /> Blending
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cosine-tapered spatial blending merges overlapping patches (256x256) into seamless continental domains.
              </p>
            </div>
          </div>
        </section>

        {/* Results Showcase */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Multi-Variable Results</h2>
              <p className="text-slate-400 max-w-xl">
                AiRCast-SR preserves fine-scale atmospheric structural realism across all predicted variables, capturing unresolvable detail from the 25km driver.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((res, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02]">
                <div className="aspect-video relative">
                  <Image 
                    src={res.image} 
                    alt={res.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1 block">{res.var}</span>
                    <h3 className="text-lg font-bold text-white">{res.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Citation / BibTeX */}
        <section className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Cite This Work</h2>
            <p className="text-slate-500">If you use AiRCast-SR in your research, please cite our preprint.</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <pre className="relative bg-black/60 p-6 md:p-10 rounded-2xl overflow-x-auto text-sm font-mono text-blue-100 border border-white/10 leading-relaxed shadow-2xl">
{`@article{luitel2026AiRCastsr,
  title   = {{AiRCast-SR}: Kilometer-Scale Atmospheric Super-Resolution 
             via Latent Consistency Diffusion},
  author  = {Luitel, Somnath and Singh, Manmeet and Durkee, Joshua and et al.},
  journal = {arXiv preprint},
  year    = {2026}
}`}
            </pre>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-12 md:py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tighter">AiRCast-SR</h3>
            <p className="text-slate-500 text-sm max-w-xs">
              A product of the AI Research (AIR) Lab at Western Kentucky University.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/manmeet3591" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
              <Github size={20} />
            </a>
            <a href="mailto:manmeet.singh@wku.edu" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
              <LineChart size={20} />
            </a>
          </div>
        </div>
        <div className="text-center pt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          &copy; {new Date().getFullYear()} Manmeet Singh &bull; All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
