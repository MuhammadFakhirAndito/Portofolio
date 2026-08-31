"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BorderGlow from '../components/BorderGlow';
import { 
  SiPython, SiJavascript, SiHtml5, SiCss, SiNextdotjs, SiReact, SiTailwindcss, 
  SiGit, SiFigma, SiNotion, SiTypescript, SiPhp, SiLaravel, SiVuedotjs 
} from 'react-icons/si';
import dynamic from 'next/dynamic';
const WarpText = dynamic(() => import('../components/WarpText'), { ssr: false });
const GradientWaves = dynamic(() => import('../components/GradientWaves'), { 
  ssr: false 
});
import { VscVscode } from 'react-icons/vsc';
import { FaDatabase, FaPaintBrush, FaRobot, FaFire } from 'react-icons/fa';


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const words = ["EXPERIENCES.", "SYSTEMS.", "SOLUTIONS.", "FUTURES."];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main 
      className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-sans selection:bg-[#00ffcc] selection:text-black pb-24 overflow-hidden cursor-none relative"
    >
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <GradientWaves 
          horizonColor="#0a0a0a" 
          waveColor="#00ffcc"    
          crestColor="#ffffff"  
          amplitude={1.5}        
          speed={0.2}
          tilt={1.2}
        />
      </div>
      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#00ffcc] rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 1000, damping: 30, mass: 0.1 }}
      >
        <div className="w-1.5 h-1.5 bg-[#00ffcc] rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 md:pt-24">
        
        {/* HEADER / HERO */}
        <header className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8 items-center mb-24">
          <motion.div className="order-2 md:order-1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h3 className="font-mono text-[#00ffcc] mb-4 text-sm tracking-widest uppercase">Hey, I&apos;m Dito 👋</h3>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tighter flex flex-col items-start text-[#f0f0f0]">
              <span>I BUILD DIGITAL</span>
              <span className="overflow-hidden relative flex items-center min-w-[350px] md:min-w-[500px] h-[1.3em]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    // PERUBAHAN: tambah whitespace-nowrap agar aman
                    className="absolute inline-block whitespace-nowrap"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-[#888888] text-xl mb-8">Information Systems Student & Tech Enthusiast</p>
            <div className="flex gap-4 font-mono text-sm">
              <Link href="https://github.com/MuhammadFakhirAndito" target="_blank" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ GitHub ]</Link>
              <Link href="https://www.linkedin.com/in/muhammad-fakhir-andito-58463b387/" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ LinkedIn ]</Link>
              <Link href="https://www.instagram.com/an_dito_/" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ Instagram ]</Link>
            </div>
          </motion.div>
          
          <motion.div className="order-1 md:order-2 relative w-full max-w-[250px] aspect-[3/4] mx-auto" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
            <BorderGlow
              className="w-full h-full"
              glowColor="168 100 50"
              backgroundColor="#0a0a0a"
              borderRadius={8}
              colors={['#00ffcc', '#00b38f', '#ffffff']}
            >
              <Image 
                src="/foto diriku dimasa depan kurang dari 1mb.jpg" 
                alt="Muhammad Fakhir Andito" 
                fill 
                className="object-cover rounded-lg grayscale-[20%] contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-300 z-10" 
                priority 
              />
            </BorderGlow>
          </motion.div>
        </header>

        {/* 01 / ABOUT */}
        <motion.section className="mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <div className="border-b border-[#333] mb-8 h-[60px]">
            <WarpText text="ABOUT ME" color="#00ffcc" fontWeight={800} fontSize={40} letterSpacing="0em" lineHeight={0.85} warpStrength={0} warpScale={1.7} speed={0} pointerInfluence={0.75} pointerStrength={0.7} refraction={0} ripple={false} className="!min-h-[80px] w-full"/>
          </div>
          <p className="text-[#888888] text-lg leading-relaxed">
            I&apos;m Muhammad Fakhir Andito, an Information Systems student at Universitas Pembangunan Nasional Veteran Yogyakarta, with a strong interest in where structured system logic meets creative digital exploration.
            <br/><br/>
            I&apos;ve developed this interest through various organizational, project, and community experiences, where I&apos;ve learned to solve problems, build collaborations, sharpen leadership, and refine creativity. I&apos;m also actively exploring web development, business development, and UI/UX design, driven by my belief that the best solutions come from a balance between sound logic and the right aesthetic touch.
            <br/><br/>
            Currently, I&apos;m deepening my business analysis skills while strengthening my abilities in software development.
          </p>
        </motion.section>

        {/* 02 / TECH STACK */}
        <motion.section className="mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <div className="border-b border-[#333] mb-8 h-[60px]">
            <WarpText text="TECH STACK" color="#00ffcc" fontWeight={800} fontSize={40} letterSpacing="0em" lineHeight={0.85} warpStrength={0} warpScale={1.7} speed={0} pointerInfluence={0.75} pointerStrength={0.7} refraction={0} ripple={false} className="!min-h-[80px] w-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* LANGUAGES */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="bg-[#121212] border border-[#333] p-6 rounded-lg hover:border-[#00ffcc] transition-all duration-300 cursor-default">
              <h3 className="font-mono text-[#888888] text-xs mb-4">LANGUAGES</h3>
              <div className="flex flex-wrap gap-4 text-[#888888] text-3xl">
                <SiPython className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Python" />
                <SiJavascript className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="JavaScript" />
                <SiTypescript className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="TypeScript" />
                <SiPhp className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="PHP" />
                <FaDatabase className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="SQL" />
                <SiHtml5 className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="HTML5" />
                <SiCss className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="CSS" />
              </div>
            </motion.div>

            {/* FRAMEWORKS */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="bg-[#121212] border border-[#333] p-6 rounded-lg hover:border-[#00ffcc] transition-all duration-300 cursor-default">
              <h3 className="font-mono text-[#888888] text-xs mb-4">FRAMEWORKS</h3>
              <div className="flex flex-wrap gap-4 text-[#888888] text-3xl">
                <SiNextdotjs className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Next.js" />
                <SiReact className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="React" />
                <SiVuedotjs className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Vue.js" />
                <SiLaravel className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Laravel" />
                <SiTailwindcss className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Tailwind CSS" />
              </div>
            </motion.div>

            {/* TOOLS */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="bg-[#121212] border border-[#333] p-6 rounded-lg hover:border-[#00ffcc] transition-all duration-300 cursor-default">
              <h3 className="font-mono text-[#888888] text-xs mb-4">TOOLS</h3>
              <div className="flex flex-wrap gap-4 text-[#888888] text-3xl">
                <SiGit className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Git" />
                <VscVscode className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="VS Code" />
                <SiFigma className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Figma" />
                <SiNotion className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="Notion" />
              </div>
            </motion.div>

            {/* DESIGN & CREATIVE */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="bg-[#121212] border border-[#333] p-6 rounded-lg hover:border-[#00ffcc] transition-all duration-300 cursor-default">
              <h3 className="font-mono text-[#888888] text-xs mb-4">DESIGN & CREATIVE</h3>
              <div className="flex flex-wrap gap-5 text-[#888888] text-3xl">
                <FaPaintBrush className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="UI/UX Design" />
                <FaRobot className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] transition-all duration-300" title="AI Prompting & Gen" />
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* 03 / GITHUB ACTIVITY */}
        <motion.section className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <div className="border-b border-[#333] mb-8 h-[60px]">
            <WarpText text="GITHUB ACTIVITY" color="#00ffcc" fontWeight={800} fontSize={40} letterSpacing="0em" lineHeight={0.85} warpStrength={0} warpScale={1.7} speed={0.2} pointerInfluence={0.75} pointerStrength={0.9} refraction={0} ripple={false} className="!min-h-[80px] w-full"/>
          </div>
          
          {/* CUSTOM GITHUB STATS & LANGUAGES UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            
            {/* Custom GitHub Streak Card */}
            <div className="bg-[#121212] border border-[#333] rounded-lg p-6 hover:border-[#00ffcc] transition-colors duration-300 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <SiGit className="text-[#00ffcc] text-xl" />
                <h3 className="font-mono text-[#f0f0f0] text-sm tracking-widest">GITHUB STREAK</h3>
              </div>
              
              <div className="flex items-center justify-between w-full">
                
                {/* Total Contributions */}
                <div className="flex flex-col items-center w-1/3">
                  <span className="text-2xl md:text-3xl font-bold text-[#f0f0f0] mb-1">89</span>
                  <span className="text-[10px] md:text-xs text-[#888888] text-center">Total Contributions</span>
                  <span className="text-[8px] md:text-[10px] text-[#555] mt-1 text-center">Nov 24, 2025 - Present</span>
                </div>

                {/* Vertical Divider */}
                <div className="h-12 w-px bg-[#333]"></div>

                {/* Current Streak */}
                <div className="flex flex-col items-center w-1/3">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-[#00ffcc] flex items-center justify-center mb-2">
                    {/* Fire Icon Cutout */}
                    <div className="absolute -top-3 md:-top-3.5 bg-[#121212] px-1 text-[#00ffcc]">
                      <FaFire className="text-sm md:text-base drop-shadow-[0_0_5px_rgba(0,255,204,0.8)]" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-[#f0f0f0]">7</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-[#00ffcc] text-center">Current Streak</span>
                  <span className="text-[8px] md:text-[10px] text-[#555] mt-1 text-center">Aug 25 - Aug 31</span>
                </div>

                {/* Vertical Divider */}
                <div className="h-12 w-px bg-[#333]"></div>

                {/* Longest Streak */}
                <div className="flex flex-col items-center w-1/3">
                  <span className="text-2xl md:text-3xl font-bold text-[#f0f0f0] mb-1">6</span>
                  <span className="text-[10px] md:text-xs text-[#888888] text-center">Longest Streak</span>
                  <span className="text-[8px] md:text-[10px] text-[#555] mt-1 text-center">Aug 25 - Aug 30</span>
                </div>

              </div>
            </div>

            {/* Custom Top Languages Card */}
            <div className="bg-[#121212] border border-[#333] rounded-lg p-6 hover:border-[#00ffcc] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <FaRobot className="text-[#00ffcc] text-xl" />
                <h3 className="font-mono text-[#f0f0f0] text-sm tracking-widest">TOP LANGUAGES</h3>
              </div>
              <div className="flex flex-col gap-4">
                
                {/* Language 1 */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-[#f0f0f0]">TypeScript</span>
                    <span className="text-[#888888]">25%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#3178c6] h-1.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>

                {/* Language 2 */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-[#f0f0f0]">CSS / Tailwind</span>
                    <span className="text-[#888888]">15%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#00ffcc] h-1.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>

                {/* Language 3 */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-[#f0f0f0]">JavaScript</span>
                    <span className="text-[#888888]">5%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#f7df1e] h-1.5 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                {/* Language 4 */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-[#f0f0f0]">Php</span>
                    <span className="text-[#888888]">55%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#ba1ef7] h-1.5 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Gamifikasi Snake / Contribution Graph (Tetap pakai gambar karena butuh data spesifik per hari) */}
          <div className="w-full border border-[#333] rounded-lg bg-[#121212] p-4 flex flex-col items-center justify-center hover:border-[#00ffcc] transition-colors duration-300">
             <h3 className="font-mono text-[#888888] text-xs mb-4 text-left w-full">CONTRIBUTION GRAPH</h3>
             <img src="https://ghchart.rshah.org/00ffcc/MuhammadFakhirAndito" alt="GitHub Contribution Graph" className="w-full max-w-3xl opacity-80 hover:opacity-100 transition-opacity grayscale-[50%] contrast-125" />
          </div>
        </motion.section>

        {/* GARIS PEMBATAS */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent my-16"></div>

        {/* INTERACTIVE TABS (PROJECTS, EXPERIENCE, HOBBIES) */}
        <section className="mb-24 min-h-[400px]">
          {/* Menu Button */}
          <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
            <button 
              onClick={() => setActiveTab('projects')} 
              className={`px-6 py-2 font-mono text-sm border transition-all duration-300 ${activeTab === 'projects' ? 'border-[#00ffcc] text-[#00ffcc] bg-[#00ffcc]/10 shadow-[0_0_15px_rgba(0,255,204,0.2)]' : 'border-[#333] text-[#888888] hover:border-[#00ffcc] hover:text-[#00ffcc]'}`}
            >
              [ PROJECTS ]
            </button>
            <button 
              onClick={() => setActiveTab('experience')} 
              className={`px-6 py-2 font-mono text-sm border transition-all duration-300 ${activeTab === 'experience' ? 'border-[#00ffcc] text-[#00ffcc] bg-[#00ffcc]/10 shadow-[0_0_15px_rgba(0,255,204,0.2)]' : 'border-[#333] text-[#888888] hover:border-[#00ffcc] hover:text-[#00ffcc]'}`}
            >
              [ EXPERIENCE ]
            </button>
            <button 
              onClick={() => setActiveTab('hobbies')} 
              className={`px-6 py-2 font-mono text-sm border transition-all duration-300 ${activeTab === 'hobbies' ? 'border-[#00ffcc] text-[#00ffcc] bg-[#00ffcc]/10 shadow-[0_0_15px_rgba(0,255,204,0.2)]' : 'border-[#333] text-[#888888] hover:border-[#00ffcc] hover:text-[#00ffcc]'}`}
            >
              [ CERTIFICATES ]
            </button>
          </div>

          {/* Konten yang berubah sesuai Tab */}
          <div className="mt-8">
            
            {/* TAMPILAN TAB: PROJECTS */}
            {activeTab === 'projects' && (
            <motion.section className="mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
              <div className="flex flex-col gap-8">
                {/* Project 1 */}
                <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-4 transition-all duration-300">
                  {/* Partial Image View */}
                  <div className="md:col-span-5 relative h-48 md:h-full w-full overflow-hidden rounded border border-[#222]">
                    <Image 
                      src="/project-1.jpg" 
                      alt="SPAMA Tracker Dashboard" 
                      fill 
                      className="object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 hover:scale-105" 
                    />
                  </div>
                  {/* Content */}
                  <div className="md:col-span-7 flex flex-col justify-center py-2">
                    <h3 className="text-2xl font-bold text-[#f0f0f0] mb-2 group-hover:text-[#00ffcc] transition-colors">TrueAtributte Skills Verified Future Secured!</h3>
                    <p className="text-[#888888] text-sm mb-6 leading-relaxed">
                      TrueAttribute is an AI driven talent verification platform that objectively measures student skills through real evidence, bridges job ready candidates with HR professionals, and delivers industry aligned analytical dashboards for higher education institutions.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">Figma</span>
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">Canva</span>
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">LLM AI</span>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-4 transition-all duration-300">
                  <div className="md:col-span-5 relative h-48 md:h-full w-full overflow-hidden rounded border border-[#222]">
                    <Image 
                      src="/project-2.jpg" 
                      alt="Gorpcore AI Lookbook" 
                      fill 
                      className="object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center py-2">
                    <h3 className="text-2xl font-bold text-[#f0f0f0] mb-2 group-hover:text-[#00ffcc] transition-colors">Seapedia Many Roles One Market.</h3>
                    <p className="text-[#888888] text-sm mb-6 leading-relaxed">
                      SEAPEDIA is a multi role web based marketplace platform that connects Sellers, Buyers, and Delivery Partners in one integrated digital commerce ecosystem.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">Laravel</span>
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">Vue</span>
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">Postman</span>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-4 transition-all duration-300">
                  <div className="md:col-span-5 relative h-48 md:h-full w-full overflow-hidden rounded border border-[#222]">
                    <Image 
                      src="/project-3.jpg" 
                      alt="Hardware Specs Analyzer" 
                      fill 
                      className="object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center py-2">
                    <h3 className="text-2xl font-bold text-[#f0f0f0] mb-2 group-hover:text-[#00ffcc] transition-colors">MyAnime Explore the World of Anime.</h3>
                    <p className="text-[#888888] text-sm mb-6 leading-relaxed">
                      MyAnime is a modern anime discovery platform designed to help users explore, discover, and find their next favorite anime Powered by anime data APIs.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">TypeScript</span>
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">Next.js</span>
                      <span className="px-2 py-1 text-[10px] font-mono text-[#00ffcc] border border-[#00ffcc]/30 bg-[#00ffcc]/10 rounded">JavaScript</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.section>
            )}

            {/* TAMPILAN TAB: EXPERIENCE */}
            {activeTab === 'experience' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-6">
                
                {/* Item 1: Code124 */}
                <div className="group relative bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-5 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden border border-[#333] group-hover:border-[#00ffcc] transition-colors bg-[#1a1a1a]">
                      <Image 
                        src="/Code124.png"
                        alt="Code124 Logo" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-[#f0f0f0] group-hover:text-[#00ffcc] transition-colors">Staff of Frontend Development</h3>
                          <p className="text-[#888888] text-sm">Code124</p>
                        </div>
                        <span className="font-mono text-xs text-[#00ffcc] bg-[#00ffcc]/10 border border-[#00ffcc]/30 px-2 py-0.5 rounded">Hybrid</span>
                      </div>
                      <p className="font-mono text-xs text-[#666] my-2">Aug 2026 - Present · 1 mo | Sleman, Yogyakarta, Indonesia</p>
                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#222]">
                        <span className="text-xs text-[#aaa] font-mono">💎 Skills:</span>
                        <span className="text-xs text-[#00ffcc] font-mono">Teamwork</span>
                        <span className="text-xs text-[#888] font-mono">•</span>
                        <span className="text-xs text-[#00ffcc] font-mono">Tailwind CSS</span>
                        <span className="text-xs text-[#888] font-mono">•</span>
                        <span className="text-xs text-[#888] font-mono">+6 skills</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2: Himasisfo UPN Veteran Yogyakarta */}
                <div className="group relative bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-5 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    {/* BAGIAN GAMBAR LOGO 2 */}
                    <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden border border-[#333] group-hover:border-[#00ffcc] transition-colors bg-[#1a1a1a]">
                      <Image 
                        src="/Himasisfo.png" 
                        alt="Himasisfo Logo" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-[#f0f0f0] group-hover:text-[#00ffcc] transition-colors">Staff of Academic and Professional Development Department</h3>
                          <p className="text-[#888888] text-sm">Himasisfo UPN Veteran Yogyakarta · Seasonal</p>
                        </div>
                        <span className="font-mono text-xs text-[#00ffcc] bg-[#00ffcc]/10 border border-[#00ffcc]/30 px-2 py-0.5 rounded">On-site</span>
                      </div>
                      <p className="font-mono text-xs text-[#666] my-2">May 2026 - Present · 1 mo | Sleman, Yogyakarta, Indonesia</p>
                      <p className="text-[#888888] text-sm my-3 leading-relaxed">
                        Designed and organized programs to support students&apos; academic and professional development.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2 pt-3 border-t border-[#222]">
                        <span className="text-xs text-[#aaa] font-mono">💎 Skills:</span>
                        <span className="text-xs text-[#00ffcc] font-mono">Teamwork</span>
                        <span className="text-xs text-[#888] font-mono">•</span>
                        <span className="text-xs text-[#00ffcc] font-mono">Public Speaking</span>
                        <span className="text-xs text-[#888] font-mono">•</span>
                        <span className="text-xs text-[#888] font-mono">+4 skills</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3: Kharisma */}
                <div className="group relative bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-5 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden border border-[#333] group-hover:border-[#00ffcc] transition-colors bg-[#1a1a1a]">
                      <Image 
                        src="/Khr.png" 
                        alt="Kharisma Logo" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-[#f0f0f0] group-hover:text-[#00ffcc] transition-colors">Staff of Tarbiyah</h3>
                          <p className="text-[#888888] text-sm">Kharisma · Seasonal</p>
                        </div>
                        <span className="font-mono text-xs text-[#00ffcc] bg-[#00ffcc]/10 border border-[#00ffcc]/30 px-2 py-0.5 rounded">On-site</span>
                      </div>
                      <p className="font-mono text-xs text-[#666] my-2">Sep 2023 - Oct 2024 · 1 yr 2 mos | Sleman, Yogyakarta, Indonesia</p>
                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#222]">
                        <span className="text-xs text-[#aaa] font-mono">💎 Skills:</span>
                        <span className="text-xs text-[#00ffcc] font-mono">Teamwork</span>
                        <span className="text-xs text-[#888] font-mono">•</span>
                        <span className="text-xs text-[#00ffcc] font-mono">Problem Solving</span>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAMPILAN TAB: CERTIFICATES */}
            {activeTab === 'hobbies' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold mb-6 text-[#f0f0f0]">Certifications & Achievements</h3>
                
                {/* Grid Sertifikat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Certificate 1 */}
                  <div className="group relative bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-4 transition-all duration-300">
                    <div className="relative w-full aspect-[4/3] rounded overflow-hidden border border-[#222] mb-4 bg-[#1a1a1a]">
                      <Image 
                        src="/sertifikat-1.jpg" 
                        alt="Peserta Lomba Business Model Canvas" 
                        fill 
                        className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-[#f0f0f0] font-bold group-hover:text-[#00ffcc] transition-colors line-clamp-1">Peserta Lomba Business Model Canvas</h4>
                    <p className="text-[#888888] text-sm mt-1">UKMF Penelitian Reaction FV UNY</p>
                    <div className="mt-3 pt-3 border-t border-[#222] flex justify-between items-center">
                      <span className="font-mono text-xs text-[#00ffcc] bg-[#00ffcc]/10 border border-[#00ffcc]/30 px-2 py-0.5 rounded">
                        Mei 2026
                      </span>
                      <span className="text-[10px] font-mono text-[#666]">Business & Innovation</span>
                    </div>
                  </div>

                  {/* Certificate 2 */}
                  <div className="group relative bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-4 transition-all duration-300">
                    <div className="relative w-full aspect-[4/3] rounded overflow-hidden border border-[#222] mb-4 bg-[#1a1a1a]">
                      <Image 
                        src="/sertifikat-2.jpg" 
                        alt="Peserta Kategori Web Development" 
                        fill 
                        className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-[#f0f0f0] font-bold group-hover:text-[#00ffcc] transition-colors line-clamp-1">Peserta Web Development</h4>
                    <p className="text-[#888888] text-sm mt-1">Codelab Indonesia</p>
                    <div className="mt-3 pt-3 border-t border-[#222] flex justify-between items-center">
                      <span className="font-mono text-xs text-[#00ffcc] bg-[#00ffcc]/10 border border-[#00ffcc]/30 px-2 py-0.5 rounded">
                        Mei 2026
                      </span>
                      <span className="text-[10px] font-mono text-[#666]">Web Development</span>
                    </div>
                  </div>

                  {/* Certificate 3 */}
                  <div className="group relative bg-[#121212] border border-[#333] hover:border-[#00ffcc] rounded-lg p-4 transition-all duration-300">
                    <div className="relative w-full aspect-[4/3] rounded overflow-hidden border border-[#222] mb-4 bg-[#1a1a1a]">
                      <Image 
                        src="/sertifikat-3.jpg" 
                        alt="Panitia Divisi Perlengkapan Event LKI" 
                        fill 
                        className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-[#f0f0f0] font-bold group-hover:text-[#00ffcc] transition-colors line-clamp-1">Panitia Divisi Perlengkapan</h4>
                    <p className="text-[#888888] text-sm mt-1">SMA Negeri 2 Yogyakarta</p>
                    <div className="mt-3 pt-3 border-t border-[#222] flex justify-between items-center">
                      <span className="font-mono text-xs text-[#00ffcc] bg-[#00ffcc]/10 border border-[#00ffcc]/30 px-2 py-0.5 rounded">
                        Juli 2025
                      </span>
                      <span className="text-[10px] font-mono text-[#666]">Event & Logistics</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </div>
        </section>

        {/* 07 / LET'S BUILD */}
        <motion.section className="text-center pt-16 border-t border-[#333]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 hover:text-[#00ffcc] transition-colors cursor-default">
            LET&apos;S TALK.
          </h1>
          <div className="flex justify-center gap-6 font-mono text-sm">
            <Link href="mailto:indraandito@gmail.com" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ indraandito@gmail.com ]</Link>
            <Link href="https://www.linkedin.com/in/muhammad-fakhir-andito-58463b387/" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ LinkedIn ]</Link>
            <Link href="https://github.com/MuhammadFakhirAndito" target="_blank" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ GitHub ]</Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}