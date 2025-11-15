"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Send, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-16">

        {/* Hero Section */}
        <section>
          <Card className="p-8 md:p-10 bg-gradient-to-br from-zinc-900 to-zinc-900/50 border-zinc-800">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl">
                  <img
                    src="https://ext.same-assets.com/2133934945/1924361195.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-6">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-[#40c188] rounded-full animate-pulse" />
                  <span className="text-sm">Available for work</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold">Emanuel Nestian</h1>

                {/* Social Icons */}
                <div className="flex gap-3 flex-wrap">
                  {[
                    { icon: "https://ext.same-assets.com/2133934945/3951543121.svg", link: "#" },
                    { icon: "https://ext.same-assets.com/2133934945/285035527.svg", link: "#" },
                    { icon: "https://ext.same-assets.com/2133934945/2200315468.svg", link: "#" },
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
                <div className="flex gap-3 flex-wrap">
                  <Button variant="secondary" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                  <Button className="gap-2">
                    <Send className="w-4 h-4" />
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Say Hello Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-zinc-600 rounded-md" />
            </div>
            <h2 className="text-lg text-zinc-400">Say Hello</h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-bold leading-tight">
              I'm John Anderson,<br />
              <span className="text-[#40c188]">Programator</span><br />
              Based in Iași.
            </h3>

            <p className="text-zinc-400 text-lg max-w-4xl leading-relaxed">
              I specialize in creating clean, user-friendly digital experiences by blending creativity with functionality.
              With a strong background in interactive design, I focus on crafting designs that not only look great but also
              provide smooth and engaging user interactions, helping ideas come to life seamlessly.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {[
              { number: "30+", label: "Completed Projects" },
              { number: "8+", label: "Years of Experience" },
              { number: "36+", label: "Happy Clients" },
              { number: "10+", label: "Awards Received" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8" id="experience">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Framer & UI/UX Designer",
                company: "Circlum Tech",
                period: "2023 - Present",
                description: "Designing interactive prototypes with Framer, focusing on seamless user experiences and scalable solutions through user feedback and collaboration."
              },
              {
                title: "UI/UX Designer",
                company: "CoreOS",
                period: "2021 - 2023",
                description: "Created intuitive web and mobile designs, conducted user research, and collaborated with developers to ensure consistent and functional design delivery."
              },
              {
                title: "Graphics Designer",
                company: "Pixel Square",
                period: "2020 - 2021",
                description: "Designed marketing assets, UI components, and brand visuals, enhancing digital campaigns and overall visual identity through creative collaboration."
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 hover:border-zinc-700 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="text-zinc-400">{job.company}</div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{job.description}</p>
                  </div>
                  <div className="text-sm text-zinc-500 bg-zinc-800/50 px-4 py-2 rounded-lg h-fit whitespace-nowrap">
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
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "HelloBot",
                type: "SaaS & Startup",
                pages: "8 Pages",
                image: "https://ext.same-assets.com/2133934945/1587202766.jpeg"
              },
              {
                name: "Flexisoft",
                type: "SaaS & Startup",
                pages: "6 Pages",
                image: "https://ext.same-assets.com/2133934945/2462073579.jpeg"
              },
              {
                name: "Excludia",
                type: "Digital Agency",
                pages: "8 Pages",
                image: "https://ext.same-assets.com/2133934945/3652753236.png"
              },
              {
                name: "CryptoraHub",
                type: "Crypto & Web3",
                pages: "7 Pages",
                image: "https://ext.same-assets.com/2133934945/2031207030.png"
              }
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
                      <p className="text-sm text-zinc-400">{project.type} • {project.pages}</p>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 group-hover:bg-[#40c188] transition-colors">
                      <svg className="w-4 h-4 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button variant="secondary" size="lg">Load More</Button>
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
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "UI/UX Design Certification",
                institution: "Interaction Design Foundation, Online",
                period: "2018 - 2019",
                description: "Gained hands-on experience in UX research, prototyping, wireframing, and usability testing, focusing on designing seamless, user-friendly digital experiences."
              },
              {
                title: "Bachelor of Design in Interaction Design",
                institution: "National University of Singapore, Singapore",
                period: "2015 - 2017",
                description: "Completed a comprehensive program focused on designing user-centered digital products, integrating aesthetics and functionality through practical interaction design principles."
              }
            ].map((edu, index) => (
              <Card key={index} className="p-6 hover:border-zinc-700 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold">{edu.title}</h3>
                    <div className="text-zinc-400 text-sm">{edu.institution}</div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{edu.description}</p>
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
        <section className="space-y-8" id="stakes">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Stakes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "https://ext.same-assets.com/2133934945/463108715.png", name: "Figma", desc: "Design Tool" },
              { icon: "https://ext.same-assets.com/2133934945/3601217502.png", name: "Framer", desc: "No Code Development" },
              { icon: "https://ext.same-assets.com/2133934945/3169568674.png", name: "Lemon Squeezy", desc: "Payment" },
              { icon: "https://ext.same-assets.com/2133934945/1083315890.png", name: "Notion", desc: "Notion" },
              { icon: "https://ext.same-assets.com/2133934945/2827420027.png", name: "Illustrators", desc: "Illustrators" },
              { icon: "https://ext.same-assets.com/2133934945/2020568339.png", name: "SS Icons", desc: "Icon Library" },
            ].map((tool, index) => (
              <Card key={index} className="p-5 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <img src={tool.icon} alt={tool.name} className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold">{tool.name}</h3>
                    <p className="text-sm text-zinc-400">{tool.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8" id="contact">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <Send className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>

          <h3 className="text-4xl font-bold">Let's Get in Touch!</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <Card className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#40c188]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#40c188]" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Contact No</div>
                    <a href="tel:+0240572930" className="font-semibold hover:text-[#40c188] transition-colors">
                      +(02) 4057 2930
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
                    <a href="mailto:andrew@website.com" className="font-semibold hover:text-[#40c188] transition-colors">
                      ANDREW@WEBSITE.COM
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
                    <div className="text-sm text-zinc-400">Address</div>
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#40c188] transition-colors">
                      Beverly Hills, Los Angeles, California, USA
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <Input placeholder="Full Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
              <Textarea placeholder="Message" className="min-h-[140px]" />
              <Button className="w-full gap-2" size="lg">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <span>Built in</span>
              <img src="https://ext.same-assets.com/2133934945/3601217502.png" alt="Framer" className="w-4 h-4" />
              <span className="font-semibold">Framer</span>
            </div>

            <div className="flex items-center gap-3">
              <img src="https://ext.same-assets.com/2133934945/1924361195.png" alt="Signature" className="h-8 rounded-full" />
              <span className="font-signature text-xl text-white">John Anderson</span>
            </div>

            <div>
              Created by <a href="https://framergeeks.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#40c188] transition-colors">Framergeeks</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
