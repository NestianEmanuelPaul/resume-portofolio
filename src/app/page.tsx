"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Send, Phone, Mail, MapPin } from "lucide-react"
import AutoTranslate from "@/components/ui/AutoTranslate";

export default function Home() {
  const [highlight, setHighlight] = useState(true);

  const lang = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("lang") || "en"
    : "en";

  const handleContactClick = () => {
    // Scroll lin către secțiunea #contact
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

    // Activează highlight-ul
    setHighlight(true);

    // Dezactivează după 3 secunde
    setTimeout(() => setHighlight(false), 3000);
  };

  return (
    <main className="min-h-screen bg-[#090909] text-white scroll-smooth">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-16">

        {/* Hero + Say Hello împărțite pe două coloane */}
        <section className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Coloana stângă */}
          <aside className="space-y-6">
            {/* Profile Image */}
            <div className="w-48 h-48 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl">
              <img
                src="Me.jpg"
                alt="Emanuel Nestian"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status Badge */}
            <div className="relative w-62">
              <select
                className="appearance-none w-full bg-zinc-800/50 border border-zinc-700 rounded-full px-10 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#40c188] cursor-pointer"
                defaultValue="available"
              >
                <option value="available" className="bg-zinc-900 text-white mt-2">
                  <AutoTranslate text="Available for work" lang={lang} />
                </option>
                <option value="busy" className="bg-zinc-900 text-white">
                  <AutoTranslate text="Busy" lang={lang} />
                </option>
                <option value="vacation" className="bg-zinc-900 text-white">
                  <AutoTranslate text="On vacation" lang={lang} />
                </option>
                <option value="offline" className="bg-zinc-900 text-white">
                  <AutoTranslate text="Offline" lang={lang} />
                </option>
              </select>
              
              {/* Săgeată în jos */}
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 text-zinc-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">Emanuel Nestian</h1>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: "https://ext.same-assets.com/2133934945/3951543121.svg", link: "https://www.instagram.com/" },
                { icon: "https://ext.same-assets.com/2133934945/285035527.svg", link: "https://x.com/home" },
                { icon: "https://ext.same-assets.com/2133934945/2200315468.svg", link: "https://www.youtube.com/@Emanuel2010Romania" },
                { icon: "https://ext.same-assets.com/2133934945/4160340740.svg", link: "#" },
                { icon: "https://ext.same-assets.com/2133934945/2318539266.svg", link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-all"
                >
                  <img src={social.icon} alt="social" className="w-5 h-5 invert" />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 w-full md:w-48">
              {/* Download CV */}
              <a href="/CV_Nestian_Emanuel_en.pdf" download>
                <Button
                  variant="secondary"
                  className="group flex items-center justify-center gap-2 px-6 py-3 w-full rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-[#40c188] hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg"
                  title="Download your CV"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-[1px] transition-transform duration-200" />
                  <span className="font-medium">
                    <AutoTranslate text="Download CV" lang={lang} />
                  </span>
                </Button>
              </a>

              {/* Contact Me */}
              <a href="#contact" onClick={handleContactClick} className="block w-full">
                <Button
                  className="group flex items-center justify-center gap-2 px-6 py-3 w-full rounded-xl bg-[#40c188] text-black hover:bg-[#34a06e] transition-all duration-300 shadow-sm hover:shadow-lg"
                  title="Get in touch"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-[1px] transition-transform duration-200" />
                  <span className="font-medium">
                    <AutoTranslate text="Contact Me" lang={lang} />
                  </span>
                </Button>
              </a>
            </div>
          </aside>

          {/* Coloana dreaptă */}
          <div className="space-y-8">
            {/* Say Hello */}
            <div className="space-y-4">
              <h3 className="text-4xl md:text-6xl font-bold leading-tight">
                <AutoTranslate text="I'm Emanuel Nestian," lang={lang} /><br />
                <span className="text-[#40c188]">
                  <AutoTranslate text="Programmer" lang={lang} />
                </span><br />
                  <AutoTranslate text="Based in Iași." lang={lang} />
              </h3>

              <p className="text-zinc-400 text-lg max-w-4xl leading-relaxed">
                <AutoTranslate text="Developed applications in .NET, C#." lang={lang} />
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { number: "8+", label: "Completed Personal Projects" },
                { number: "10+", label: "Years of Experience" },
                { number: "3", label: "Companies" },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                  <div className="text-sm text-zinc-400">
                    <AutoTranslate text={stat.label} lang={lang} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Experience Section */}
            <section className="space-y-8" id="experience">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  <AutoTranslate text="Experience" lang={lang} />
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Programmer",
                    company: "IST Gmbh",
                    period: "June 2022 - June 2025",
                    description: (
                      <>
                        <p>
                          <AutoTranslate text="Developed applications in .NET, C#, and Xamarin for Commerce/Retail sector." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Utilized C#, Microsoft SQL Server, SQL, Visual Studio, .NET, Fork, TeamCity, Azure DevOps." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="An explanatory film about the project I worked at IST Gmbh : " lang={lang} />
                          <a
                            href="https://youtu.be/ZVlDrhP_9Uc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#40c188] hover:underline"
                          >
                            <AutoTranslate text="Watch here" lang={lang} />
                          </a>
                        </p>
                      </>
                    ),
                  },
                  {
                    title: "Programmer",
                    company: "Softone1",
                    period: "February 2021 - October 2021",
                    description: (
                      <>
                        <p>
                          <AutoTranslate text="Worked on IT Software projects for Commerce/Retail using JavaScript, TypeScript, and C#." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Proficient in C#, JavaScript, Microsoft SQL Server, SQL, and Visual Studio." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Created applications for automatic translations and complex operations with a fiscal printer using TypeScript and C Sharp." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Worked on various SQL and TypeScript applications, including report generation and customer interfaces." lang={lang} />
                        </p>
                      </>
                    ),
                  },
                  {
                    title: "Programmer",
                    company: "Axes Software",
                    period: "August 2019 - July 2020",
                    description: (
                      <>
                        <p>
                          <AutoTranslate text="Specialized in Unity 3D and C# for IT Software projects in Commerce/Retail." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Acquired skills in C#, WPF, Microsoft SQL Server, SQL, ASP .NET MVC, and Unity 3D." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Developed a 3D visualization map for a warehouse in Unity 3D and C Sharp." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="An explanatory film about the project I worked at Axes Software : " lang={lang} />
                          <a
                            href="https://youtu.be/qF0r3k8qAGE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#40c188] hover:underline"
                          >
                            <AutoTranslate text="Watch here" lang={lang} />
                          </a>
                        </p>
                      </>
                    ),
                  },
                ].map((job, index) => (
                  <Card key={index} className="p-6 hover:border-zinc-700 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="text-xl font-bold">{job.company}</div>
                        <h3 className="text-zinc-300">
                          <AutoTranslate text={job.title} lang={lang} />
                        </h3>
                        <div className="text-zinc-400 text-sm leading-relaxed space-y-2">
                          {job.description}
                        </div>
                      </div>
                      <div className="text-sm text-zinc-300 bg-zinc-800/50 px-4 py-2 rounded-lg h-fit whitespace-nowrap">
                        {job.period}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="space-y-8" id="projects">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  <AutoTranslate text="Projects" lang={lang} /> 
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "AI analisys of media",
                    type: "AI",
                    description: "Showcases an AI-driven system designed to automate promotional workflows and enhance media analysis",
                    image: "/AI analisys of media.png",
                    src : "https://youtu.be/NL4Oxcydq9Q"
                  },
                  {
                    name: "AI Video Creator",
                    type: "AI",
                    description: "Presents a system that uses artificial intelligence to generate video content automatically, likely based on predefined inputs or workflows",
                    image: "/AI Video Creator.png",
                    src : "https://youtu.be/vmS2Y23XWno"
                  },
                  {
                    name: "Feeling Detector",
                    type: "AI",
                    description: "Demonstrates an AI system capable of analyzing emotional states, likely through facial expressions, voice tone, or textual input",
                    image: "/Feeling Detector.png",
                    src : "https://youtu.be/rBYgvK9VoyM"
                  },
                  {
                    name: "Zapier automation",
                    type: "AI",
                    description: "Demonstrates how artificial intelligence can be integrated with Zapier to automate workflows across different applications",
                    image: "/Zapier automation.png",
                    src : "https://youtu.be/wl6J7V-pMlY"
                  },
                  {
                    name: "My Super Game 3",
                    type: "Game with UNity 3D",
                    description: "Showcases a Unity 3D project developed in C#, highlighting gameplay mechanics and interactive features",
                    image: "/My Super Game 3.png",
                    src : "https://youtu.be/vx9KKJIDHrg"
                  },
                  {
                    name: "New Game",
                    type: "Game with UNity 3D",
                    description: "Presents a Unity 3D project developed in C#, showcasing gameplay elements and interactive features",
                    image: "/New Game.png",
                    src : "https://youtu.be/1lefS85iKRE"
                  },
                  {
                    name: "Prezentare site",
                    type: ".NET website",
                    description: "Demonstrates a .NET-based website project, showcasing its structure and functionality",
                    image: "/Prezentare site.png",
                    src : "https://youtu.be/KAdaWYEYgxw"
                  },
                  {
                    name: "Site-uri Php",
                    type: "PHP website",
                    description: "Showcases a collection of websites developed using PHP, highlighting backend logic and dynamic page rendering",
                    image: "/Site-uri Php.png",
                    src : "https://drive.google.com/file/d/1OMKn5f2lhVO8U7nIwqiL1FvHrC_mSAQS/view"
                  },
                ].map((project, index) => (
                  <Card key={index} className="group overflow-hidden hover:border-zinc-700 transition-all cursor-pointer">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                          <p className="text-sm text-zinc-400">{project.type} • {project.description}</p>
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 group-hover:bg-[#40c188] transition-colors" >
                          <a
                            href={project.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 group-hover:bg-[#40c188] transition-colors"
                            title="View project"
                          >
                            <svg className="w-4 h-4 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-4">
                <Button variant="secondary" size="lg" className="px-10 w-47">
                  <AutoTranslate text="Load More" lang={lang} />
                </Button>
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-8" id="education">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  <AutoTranslate text="Education" lang={lang} />
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Bachelor's Degree in Electrotechnics",
                    institution: "Gh. Asachi University, Iași",
                    period: "2005 - 2010",
                    description: (
                      <>
                        <p>
                          <AutoTranslate text="Specialization: Electrical Engineering." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="In-depth knowledge of electrical circuits, power electronics, automation, and control systems." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Practical projects in the laboratory and software applications for the simulation and analysis of electrical systems." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Development of interdisciplinary work skills (electrical engineering + computer science), useful in complex technology projects." lang={lang} />
                        </p>
                      </>)
                  },
                  {
                    title: "IT",
                    institution: "Computer Science High School, Iași",
                    period: "1995 - 1999",
                    description: (
                      <>
                        <p>
                          <AutoTranslate text="Profile: Mathematics – Computer Science, intensive computer science." lang={lang} />
                        </p>
                        <p>
                          <AutoTranslate text="Acquisition of a solid foundation in software development and computer systems analysis." lang={lang} />
                        </p>
                      </>)
                  }
                ].map((edu, index) => (
                  <Card key={index} className="p-6 hover:border-zinc-700 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <h3 className="text-xl font-bold">
                          <AutoTranslate text={edu.title} lang={lang} />
                        </h3>
                        <div className="text-zinc-400 text-sm">{edu.institution}</div>
                        <div className="text-zinc-400 text-sm leading-relaxed">{edu.description}</div>
                      </div>
                      <div className="text-sm text-zinc-500 bg-zinc-800/50 px-4 py-2 rounded-lg h-fit whitespace-nowrap">
                        {edu.period}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Stakes Section */}
            <section className="space-y-8" id="skills">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  <AutoTranslate text="Skills" lang={lang} />
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", name: "C#", desc: "Backend & Desktop Development" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", desc: "AI, Data Science, Automation" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", name: "PHP", desc: "Web Development" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML", desc: "Web Development" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS", desc: "Web Development" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript", desc: "Web Development" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", name: "jQuery", desc: "Web Development Library" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap", desc: "Frontend UI Framework" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React", desc: "Frontend Framework" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", name: ".NET", desc: "Enterprise Applications" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "SQL", desc: "Database Management" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker", desc: "Containerization" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure", desc: "Cloud Services" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub", desc: "Version Control & Collaboration" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code", desc: "Code Editor" },
                  { icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Scikit_learn_logo_small.svg", name: "Scikit-learn", desc: "Machine Learning Toolkit" },
                  { icon: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Pandas_logo.svg", name: "Pandas", desc: "Data Analysis & Manipulation" },
                  { icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", name: "PyTorch", desc: "Deep Learning Framework" },
                  { icon: "https://huggingface.co/front/assets/huggingface_logo.svg", name: "Transformers", desc: "NLP & Pretrained Models by Hugging Face" },
                  { icon: "https://raw.githubusercontent.com/tiangolo/fastapi/master/docs/en/docs/img/logo-margin/logo-teal.png", name: "FastAPI", desc: "High-performance Python Web Framework" },
                  { icon: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sqlalchemy.svg", name: "SQLAlchemy", desc: "Python ORM & Database Toolkit" },
                  { icon: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png", name: "Streamlit", desc: "Interactive Data Science Web Apps" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", name: "Unity 3D", desc: "Game Engine & 3D Visualization" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg", name: "Maya", desc: "3D Modeling & Animation" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zbrush/zbrush-original.svg", name: "ZBrush", desc: "Digital Sculpting & 3D Modeling" },

                ].map((skill, index) => (
                  <Card key={index} className="p-5 hover:border-zinc-700 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                        <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-bold">{skill.name}</h3>
                        <p className="text-sm text-zinc-400">{skill.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className={`space-y-8 min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        highlight ? "border-2 border-[#40c188] shadow-[0_0_15px_#40c188]" : "border-transparent"
      }`} id="contact">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Send className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  <AutoTranslate text="Contact" lang={lang} />
                </h2>
              </div>

              <h3 className="text-4xl font-bold">
                <AutoTranslate text="Let's Get in Touch!" lang={lang} />
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-4">
                  <Card className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#40c188]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#40c188]" />
                      </div>
                      <div>
                        <div className="text-sm text-zinc-400">
                          <AutoTranslate text="Contact No" lang={lang} />
                        </div>
                        <a href="tel:+0240572930" className="font-semibold hover:text-[#40c188] transition-colors">
                          +(04) 764365654
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#40c188]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#40c188]" />
                      </div>
                      <div>
                        <div className="text-sm text-zinc-400">Email</div>
                        <a href="mailto:paulnestian@gmail.com" className="font-semibold hover:text-[#40c188] transition-colors">
                          paulnestian@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#40c188]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#40c188]" />
                      </div>
                      <div>
                        <div className="text-sm text-zinc-400">
                          <AutoTranslate text="Address" lang={lang} />
                        </div>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#40c188] transition-colors">
                          Iasi, Romania
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Contact Form */}
                <form
                  action="https://formspree.io/f/xyzlbjla"
                  method="POST"
                  className="space-y-4"
                >
                  <Input name="name" placeholder="Full Name" required 
                        className="text-white bg-zinc-800 border border-zinc-700 focus:border-[#40c188] focus:ring-1 focus:ring-[#40c188] transition-all duration-300" />
                  <Input name="email" type="email" placeholder="Email" required 
                        className="text-white bg-zinc-800 border border-zinc-700 focus:border-[#40c188] focus:ring-1 focus:ring-[#40c188] transition-all duration-300" />
                  <Input name="phone" type="tel" placeholder="Phone Number" 
                        className="text-white bg-zinc-800 border border-zinc-700 focus:border-[#40c188] focus:ring-1 focus:ring-[#40c188] transition-all duration-300" />
                  <Textarea name="message" placeholder="Message" 
                        className="text-white bg-zinc-800 border border-zinc-700 focus:border-[#40c188] focus:ring-1 focus:ring-[#40c188] transition-all duration-300" required />

                  <Button
                    type="submit"
                    variant="secondary"
                    className="group flex items-center justify-center gap-2 px-6 py-3 w-full rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-[#40c188] hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg"
                    title="Send your message"
                  >
                    <Send className="w-4 h-4" />
                    <span className="font-medium">
                      <AutoTranslate text="Send Message" lang={lang} />
                    </span>
                  </Button>
                </form>

              </div>
            </section>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-3">
              <img src="https://ext.same-assets.com/2133934945/1924361195.png" alt="Signature" className="h-8 rounded-full" />
              <span className="font-signature text-xl text-white">Emanuel Nestian</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
