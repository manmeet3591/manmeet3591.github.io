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
  Youtube,
  ChevronRight,
} from "lucide-react";

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200/50">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-4" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Manmeet Singh
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            {["About", "Experience", "Research", "Publications", "Teaching"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">
        {/* Hero Section */}
        <section
          id="about"
          className="flex flex-col md:flex-row gap-12 items-center pt-8"
        >
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700" />
            <div className="relative w-52 h-52 md:w-64 md:h-64 overflow-hidden rounded-3xl border-2 border-white shadow-2xl ring-1 ring-slate-200/50">
              <Image
                src="/manmeet.jpeg"
                alt={resumeData.name}
                width={800}
                height={800}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 flex-1 text-center md:text-left">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {resumeData.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-slate-500">
                {resumeData.title} @{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                  {resumeData.affiliation}
                </span>
              </p>
            </div>

            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">
              {resumeData.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 text-slate-700 font-medium transition-all text-sm"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 text-slate-700 font-medium transition-all text-sm"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={resumeData.contact.airLab}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all shadow-lg shadow-blue-300/30 text-sm"
              >
                <FlaskConical size={16} /> AIR Lab
              </a>
              <a
                href="https://www.youtube.com/@manmeetsingh7341"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-red-300 hover:shadow-md hover:shadow-red-100/50 text-red-600 font-medium transition-all text-sm"
              >
                <Youtube size={16} /> YouTube
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400 justify-center md:justify-start">
              <MapPin size={14} />
              <span>Bowling Green, Kentucky, USA</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <SectionHeading icon={Briefcase} title="Work Experience" />
          <div className="space-y-1 relative">
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent" />
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-12 py-5 group">
                <div className="absolute left-[13px] top-7 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-white group-hover:bg-blue-500 transition-colors shadow-sm" />
                <div className="p-5 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-100/80 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="font-medium text-blue-600 text-sm">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-3xl mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Grants */}
        <section id="research" className="scroll-mt-24">
          <SectionHeading icon={FlaskConical} title="Active Research & Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resumeData.projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                      {project.role}
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                      {project.funding}
                    </span>
                  </div>
                  <h3 className="font-bold text-base leading-snug text-slate-900 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-100">
                    <span className="text-slate-400 font-medium">
                      {project.period}
                    </span>
                    {project.amount && (
                      <span className="font-bold text-slate-900 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md text-xs">
                        {project.amount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200/50">
                <BookOpen size={20} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Selected Publications
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-4" />
            </div>
            <a
              href="https://scholar.google.com/citations?user=SCHOLAR_ID"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
            >
              All on Scholar <ExternalLink size={14} />
            </a>
          </div>
          <div className="space-y-4">
            {resumeData.publications.map((pub, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all"
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-base leading-snug text-slate-900 group-hover:text-blue-700 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{pub.authors}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-blue-600 font-semibold text-sm italic">
                      {pub.journal}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-slate-400 text-sm font-medium">
                      {pub.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section className="scroll-mt-24">
            <SectionHeading icon={GraduationCap} title="Education" />
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all space-y-2"
                >
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    {edu.period}
                  </p>
                  {edu.description && (
                    <p className="text-slate-500 text-sm">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-mt-24">
            <SectionHeading icon={Award} title="Honors & Awards" />
            <div className="space-y-3">
              {resumeData.awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all group"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award size={12} className="text-white" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Teaching */}
        <section id="teaching" className="scroll-mt-24 pb-12">
          <SectionHeading icon={BookOpen} title="Teaching" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resumeData.teaching.map((course, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all flex items-center justify-between"
              >
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {course.course}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {course.level} &bull; {course.institution}
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {course.period}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/50 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Manmeet Singh
            </p>
            <p className="text-sm text-slate-500">
              Assistant Professor, Western Kentucky University
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 justify-center md:justify-start">
              <MapPin size={14} />
              <span>Bowling Green, Kentucky, USA</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all text-slate-500 hover:text-blue-600"
            >
              <Mail size={16} />
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all text-slate-500 hover:text-blue-600"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.youtube.com/@manmeetsingh7341"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-red-300 hover:shadow-md transition-all text-slate-500 hover:text-red-500"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-200/50 py-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Manmeet Singh
        </div>
      </footer>
    </div>
  );
}
