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
  Code2,
  Users,
  Cpu,
  Globe,
  Layers,
  Wrench,
  Handshake,
  Github,
  Menu,
} from "lucide-react";

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-10">
      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200/50">
        <Icon size={18} />
      </div>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-4" />
    </div>
  );
}

function MobileNav() {
  return (
    <details className="md:hidden relative group">
      <summary className="list-none cursor-pointer p-2 -mr-2 rounded-lg hover:bg-slate-100 transition-colors">
        <Menu size={22} className="text-slate-600" />
      </summary>
      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50">
        {[
          "About",
          "Research",
          "Experience",
          "Skills",
          "Software",
          "Publications",
          "Students",
          "Teaching",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </details>
  );
}

export default function Home() {
  const skillCategories = [
    { label: "ML Frameworks", items: resumeData.technicalSkills.mlFrameworks, icon: Cpu },
    { label: "Generative AI", items: resumeData.technicalSkills.genAI, icon: Layers },
    { label: "Scientific Computing", items: resumeData.technicalSkills.scientificComputing, icon: FlaskConical },
    { label: "Cloud & HPC", items: resumeData.technicalSkills.cloudHPC, icon: Globe },
    { label: "Geospatial", items: resumeData.technicalSkills.geospatial, icon: Globe },
    { label: "Languages", items: resumeData.technicalSkills.languages, icon: Code2 },
    { label: "MLOps & Infra", items: resumeData.technicalSkills.mlOps, icon: Wrench },
    { label: "Earth Science", items: resumeData.technicalSkills.earthScience, icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-bold text-base md:text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Manmeet Singh
          </a>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            {[
              "About",
              "Experience",
              "Skills",
              "Research",
              "Software",
              "Publications",
              "Students",
              "Teaching",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>
          <MobileNav />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 md:py-16 space-y-16 md:space-y-28">
        {/* Hero Section */}
        <section
          id="about"
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center pt-4 md:pt-8 w-full max-w-full"
        >
          <div className="flex-shrink-0 relative group overflow-visible self-center md:self-auto">
            <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700" />
            <div className="relative w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-2xl md:rounded-3xl border-2 border-white shadow-2xl ring-1 ring-slate-200/50">
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

          <div className="space-y-5 md:space-y-6 flex-1 text-left min-w-0 w-full">
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {resumeData.name}
              </h1>
              <p className="text-base md:text-2xl font-medium text-slate-500 break-words">
                {resumeData.title} @{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                  {resumeData.affiliation}
                </span>
              </p>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-slate-600">
              {resumeData.bio}
            </p>

            {/* Highlight Stats */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-1 md:pt-2">
              {resumeData.highlights.map((h, i) => (
                <div key={i}>
                  <div className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {h.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 pt-1 md:pt-2 justify-start">
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 text-slate-700 font-medium transition-all text-xs md:text-sm"
              >
                <Mail size={14} /> Email
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 text-slate-700 font-medium transition-all text-xs md:text-sm"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={resumeData.contact.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 text-slate-700 font-medium transition-all text-xs md:text-sm"
              >
                <BookOpen size={14} /> Scholar
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md text-slate-700 font-medium transition-all text-xs md:text-sm"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={resumeData.contact.airLab}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all shadow-lg shadow-blue-300/30 text-xs md:text-sm"
              >
                <FlaskConical size={14} /> AIR Lab
              </a>
              <a
                href="https://www.youtube.com/@manmeetsingh7341"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-white border border-slate-200 hover:border-red-300 hover:shadow-md hover:shadow-red-100/50 text-red-600 font-medium transition-all text-xs md:text-sm"
              >
                <Youtube size={14} /> YouTube
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 justify-start">
              <MapPin size={14} />
              <span>Bowling Green, Kentucky, USA</span>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section id="research" className="scroll-mt-20">
          <SectionHeading icon={FlaskConical} title="Research Focus" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {resumeData.researchAreas.map((area, index) => (
              <div
                key={index}
                className="group p-5 md:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all"
              >
                <h3 className="font-bold text-base md:text-lg text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <SectionHeading icon={Briefcase} title="Work Experience" />
          <div className="space-y-1 relative">
            <div className="absolute left-[15px] md:left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent" />
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-9 md:pl-12 py-3 md:py-5 group">
                <div className="absolute left-[9px] md:left-[13px] top-5 md:top-7 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-blue-500 bg-white group-hover:bg-blue-500 transition-colors shadow-sm" />
                <div className="p-4 md:p-5 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-100/80 transition-all">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="font-medium text-blue-600 text-xs md:text-sm">
                      {exp.organization}
                    </p>
                    <span className="inline-block text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="scroll-mt-20">
          <SectionHeading icon={Code2} title="Technical Skills" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {skillCategories.map((cat, index) => (
              <div
                key={index}
                className="p-3 md:p-5 rounded-xl md:rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                  <cat.icon size={14} className="text-blue-600 flex-shrink-0" />
                  <h3 className="font-bold text-[10px] md:text-sm text-slate-700 uppercase tracking-wider truncate">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-1.5">
                  {cat.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-md md:rounded-lg bg-slate-50 text-slate-600 text-[10px] md:text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grants */}
        <section className="scroll-mt-20">
          <SectionHeading icon={Award} title="Active Grants & Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {resumeData.projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-5 md:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                    <span className="inline-block px-2 md:px-2.5 py-0.5 md:py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                      {project.role}
                    </span>
                    <span className="inline-block px-2 md:px-2.5 py-0.5 md:py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                      {project.funding}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm md:text-base leading-snug text-slate-900 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs md:text-sm pt-2 border-t border-slate-100">
                    <span className="text-slate-400 font-medium">
                      {project.period}
                    </span>
                    {project.amount && (
                      <span className="font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md text-[10px] md:text-xs">
                        {project.amount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Software & Products */}
        <section id="software" className="scroll-mt-20">
          <SectionHeading icon={Wrench} title="Software & Products" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {resumeData.products.map((product, index) => (
              <div
                key={index}
                className="group p-5 md:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-sm md:text-base text-slate-900 group-hover:text-blue-700 transition-colors mb-2 font-mono">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200/50">
                <BookOpen size={18} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                Selected Publications
              </h2>
            </div>
            <a
              href={resumeData.contact.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors whitespace-nowrap ml-12 sm:ml-0"
            >
              All on Scholar <ExternalLink size={14} />
            </a>
          </div>
          <div className="space-y-3 md:space-y-4">
            {resumeData.publications.map((pub, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all"
              >
                <div className="space-y-1.5 md:space-y-2">
                  <h3 className="font-bold text-sm md:text-base leading-snug text-slate-900 group-hover:text-blue-700 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 pt-1">
                    <span className="text-blue-600 font-semibold text-xs md:text-sm italic">
                      {pub.journal}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-slate-400 text-xs md:text-sm font-medium">
                      {pub.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Students */}
        <section id="students" className="scroll-mt-20">
          <SectionHeading icon={Users} title="Students & Lab Members" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {resumeData.students.map((student, index) => (
              <div
                key={index}
                className="p-5 md:p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-slate-900">{student.name}</h3>
                <p className="text-blue-600 text-xs md:text-sm font-medium">
                  {student.role}
                </p>
                <p className="text-slate-600 text-xs md:text-sm mt-2">{student.topic}</p>
                <p className="text-slate-400 text-[10px] md:text-xs mt-1">
                  Background: {student.background}
                </p>
              </div>
            ))}
            <div className="p-5 md:p-6 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/30 flex flex-col items-center justify-center text-center">
              <Users size={22} className="text-blue-400 mb-2" />
              <p className="font-bold text-blue-700 text-sm">
                Open Positions
              </p>
              <p className="text-blue-600/70 text-xs mt-1 max-w-xs">
                Seeking MS/PhD students and postdocs in AI, weather, climate, disaster science, and remote sensing
              </p>
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="mt-3 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Education & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <section className="scroll-mt-20">
            <SectionHeading icon={GraduationCap} title="Education" />
            <div className="space-y-4 md:space-y-6">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all space-y-1.5 md:space-y-2"
                >
                  <h3 className="font-bold text-sm md:text-base text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-600 text-xs md:text-sm font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                    {edu.period}
                  </p>
                  {edu.description && (
                    <p className="text-slate-500 text-xs md:text-sm">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-mt-20">
            <SectionHeading icon={Award} title="Honors & Awards" />
            <div className="space-y-2 md:space-y-3">
              {resumeData.awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 md:gap-3 p-3 md:p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="mt-0.5 w-5 h-5 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award size={10} className="text-white" />
                  </div>
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium">
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Teaching */}
        <section id="teaching" className="scroll-mt-20">
          <SectionHeading icon={BookOpen} title="Teaching" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {resumeData.teaching.map((course, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all flex items-center justify-between gap-3"
              >
                <div className="space-y-1 min-w-0">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                    {course.course}
                  </h3>
                  <p className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {course.level} &bull; {course.institution}
                  </p>
                </div>
                <span className="text-[10px] md:text-xs font-bold text-blue-600 bg-blue-50 px-2 md:px-3 py-1 md:py-1.5 rounded-lg whitespace-nowrap flex-shrink-0">
                  {course.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Collaborations */}
        <section className="scroll-mt-20 pb-8 md:pb-12">
          <SectionHeading icon={Handshake} title="Collaborations & Partnerships" />
          <div className="flex flex-wrap gap-2 md:gap-3">
            {resumeData.collaborations.map((collab, index) => (
              <span
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs md:text-sm font-medium hover:border-blue-300 hover:shadow-md transition-all"
              >
                {collab}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/50 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold text-base md:text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Manmeet Singh
            </p>
            <p className="text-xs md:text-sm text-slate-500">
              Assistant Professor, Western Kentucky University
            </p>
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 justify-start">
              <MapPin size={14} />
              <span>Bowling Green, Kentucky, USA</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all text-slate-500 hover:text-blue-600"
            >
              <Mail size={16} />
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all text-slate-500 hover:text-blue-600"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-slate-400 hover:shadow-md transition-all text-slate-500 hover:text-slate-700"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.youtube.com/@manmeetsingh7341"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-red-300 hover:shadow-md transition-all text-slate-500 hover:text-red-500"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-200/50 py-4 md:py-6 text-center text-[10px] md:text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Manmeet Singh
        </div>
      </footer>
    </div>
  );
}
