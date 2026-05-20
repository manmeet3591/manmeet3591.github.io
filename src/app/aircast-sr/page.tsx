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
  ShieldCheck 
} from "lucide-react";

export default function AiRCastSR() {
  const features = [
    {
      title: "1km Resolution",
      description: "Downscales 25-km global forecasts to kilometer-scale hourly gridded analyses.",
      icon: BarChart3
    },
    {
      title: "7 Coupled Variables",
      description: "Simultaneously predicts precipitation, temperature, humidity, wind (U/V), pressure, and radiation.",
      icon: Layers
    },
    {
      title: "LCM Efficiency",
      description: "Uses Latent Consistency Models for rapid inference, reducing cost vs conventional diffusion.",
      icon: Zap
    },
    {
      title: "Zero-Shot Global",
      description: "Foundation model approach allows deployment over any arbitrary global geographic domain.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-16">
        {/* Hero */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck size={14} /> New Release
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            AiRCast-SR
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl">
            Kilometer-Scale Atmospheric Super-Resolution via Latent Consistency Diffusion
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <a 
              href="/files/aircast_sr_arxiv.pdf" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              <Download size={18} /> Download Paper
            </a>
            <a 
              href="https://github.com/shreesomnath/AiRCast_highres" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:border-slate-400 transition-all shadow-sm"
            >
              <Github size={18} /> GitHub Code
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
          <Image 
            src="/images/aircast_sr_schematic.jpg" 
            alt="AiRCast-SR Schematic" 
            width={1200} 
            height={600} 
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Abstract/Details */}
        <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 font-mono">Abstract</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            AiRCast-SR is a generative atmospheric super-resolution framework that translates coarse-resolution (0.25°) global weather model outputs into kilometer-scale (1 km) gridded analyses. Built on a 3-D UNet conditioned with a Latent Consistency Model (LCM) scheduler, AiRCast-SR produces high-fidelity multi-variable predictions at substantially reduced inference cost compared to conventional diffusion models. 
          </p>
          <p className="text-slate-600 leading-relaxed text-lg mt-4">
            Evaluation against independent HRRR forecasts and AORC observations demonstrates that AiRCast-SR captures fine-scale spatial detail in temperature, humidity, precipitation, and radiation fields that is unresolvable at the 0.25° input scale. These results establish AiRCast-SR as a practical, computationally efficient foundation for kilometer-scale statistical weather downscaling.
          </p>
        </div>

        {/* Citation */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -mr-32 -mt-32" />
          <h2 className="text-2xl font-bold mb-6">Citation</h2>
          <pre className="bg-slate-800/50 p-6 rounded-xl overflow-x-auto text-sm font-mono text-slate-300 border border-slate-700">
{`@article{luitel2026AiRCastsr,
  title   = {{AiRCast-SR}: Kilometer-Scale Atmospheric Super-Resolution via Latent Consistency Diffusion},
  author  = {Luitel, Somnath and Singh, Manmeet and Durkee, Joshua and et al.},
  journal = {arXiv preprint},
  year    = {2026}
}`}
          </pre>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Manmeet Singh. AiRCast-SR is a research product of the AIR Lab at WKU.</p>
      </footer>
    </div>
  );
}
