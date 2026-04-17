import Image from "next/image";
import { resumeData } from "../data/resume";
import { 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Award, 
  BookOpen, 
  FlaskConical,
  Youtube
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">Manmeet Singh</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#research" className="hover:text-blue-600 transition-colors">Research</a>
            <a href="#publications" className="hover:text-blue-600 transition-colors">Publications</a>
            <a href="#teaching" className="hover:text-blue-600 transition-colors">Teaching</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row gap-12 items-start pt-8">
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square w-48 md:w-64 overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <Image 
                src="/manmeet.jpeg" 
                alt={resumeData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                {resumeData.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-slate-600">
                {resumeData.title} @ <span className="text-blue-600 font-semibold">{resumeData.affiliation}</span>
              </p>
            </div>
            
            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">
              {resumeData.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all">
                <Mail size={18} /> Email
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={resumeData.contact.airLab} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-md shadow-blue-200">
                <FlaskConical size={18} /> AIR Lab
              </a>
              <a href="https://www.youtube.com/@manmeetsingh7341" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 font-medium transition-all">
                <Youtube size={18} /> YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <Briefcase className="text-blue-600" />
            <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          </div>
          <div className="space-y-8 border-l-2 border-slate-100 pl-8 ml-3">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600" />
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <p className="font-medium text-blue-600">{exp.organization}</p>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Grants */}
        <section id="research" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <FlaskConical className="text-blue-600" />
            <h2 className="text-2xl font-bold tracking-tight">Active Research & Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-all group">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                      {project.role} • {project.funding}
                    </span>
                    <h3 className="font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-slate-500">{project.period}</span>
                    {project.amount && <span className="text-slate-900">{project.amount}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-600" />
              <h2 className="text-2xl font-bold tracking-tight">Selected Publications</h2>
            </div>
            <a href="https://scholar.google.com" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
              View All on Scholar <ExternalLink size={14} />
            </a>
          </div>
          <div className="space-y-6">
            {resumeData.publications.map((pub, index) => (
              <div key={index} className="p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg leading-tight text-slate-900">{pub.title}</h3>
                  <p className="text-slate-600 text-sm">{pub.authors}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-blue-600 font-bold text-sm italic">{pub.journal}</span>
                    <span className="text-slate-400 text-sm">{pub.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-600" />
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-600 text-sm font-medium">{edu.institution}</p>
                  <p className="text-slate-500 text-xs font-semibold">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <Award className="text-blue-600" />
              <h2 className="text-2xl font-bold tracking-tight">Honors & Awards</h2>
            </div>
            <div className="space-y-4">
              {resumeData.awards.slice(0, 5).map((award, index) => (
                <div key={index} className="flex gap-3 text-sm">
                  <span className="text-blue-600 font-bold">•</span>
                  <p className="text-slate-600 leading-relaxed font-medium">{award}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Teaching */}
        <section id="teaching" className="space-y-8 scroll-mt-24 pb-12">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" />
            <h2 className="text-2xl font-bold tracking-tight">Teaching</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.teaching.map((course, index) => (
              <div key={index} className="p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">{course.course}</h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{course.level}</p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {course.period}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold text-slate-900">Manmeet Singh</p>
            <p className="text-sm text-slate-500">Assistant Professor, Western Kentucky University</p>
          </div>
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Manmeet Singh. Built with Next.js.
          </div>
        </div>
      </footer>
    </div>
  );
}
