"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiHtml5, SiCss, SiNextdotjs, SiReact, SiTailwindcss, 
  SiGit, SiFigma, SiNotion, SiTypescript, SiPhp, SiLaravel, SiVuedotjs 
} from 'react-icons/si';
import dynamic from 'next/dynamic';

const GradientWaves = dynamic(() => import('../components/GradientWaves'), { 
  ssr: false 
});import { VscVscode } from 'react-icons/vsc';
import { FaDatabase, FaPaintBrush, FaRobot, FaFire } from 'react-icons/fa';


export default function Home() {
  // State untuk custom cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State untuk Tab Aktif (Default: 'projects')
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

  return (
    <main 
      className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-sans selection:bg-[#00ffcc] selection:text-black pb-24 overflow-hidden cursor-none relative"
    >
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <GradientWaves 
          horizonColor="#0a0a0a" // Warna background gelap
          waveColor="#00ffcc"    // Warna ombak cyan neon khas webmu
          crestColor="#ffffff"   // Ujung ombak putih
          amplitude={1.5}        // Dibuat agak kalem agar tidak pusing
          speed={0.2}
          tilt={1.2}
        />
      </div>
      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#00ffcc] rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-1.5 h-1.5 bg-[#00ffcc] rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 md:pt-24">
        
        {/* HEADER / HERO */}
        <header className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8 items-center mb-24">
          <motion.div className="order-2 md:order-1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h3 className="font-mono text-[#00ffcc] mb-4 text-sm tracking-widest uppercase">Hey, I&apos;m Dito 👋</h3>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tighter">I BUILD DIGITAL<br />EXPERIENCES.</h1>
            <p className="text-[#888888] text-xl mb-8">Information Systems Student & Tech Enthusiast</p>
            <div className="flex gap-4 font-mono text-sm">
              <Link href="https://github.com/MuhammadFakhirAndito" target="_blank" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ GitHub ]</Link>
              <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ LinkedIn ]</Link>
              <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ Instagram ]</Link>
            </div>
          </motion.div>
          
          <motion.div className="order-1 md:order-2 relative w-full max-w-[250px] aspect-[3/4] mx-auto" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
            <div className="absolute inset-0 border-2 border-[#333] rounded-lg group hover:border-[#00ffcc] hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] transition-all duration-300 z-10 pointer-events-none"></div>
            <Image src="/foto diriku dimasa depan kurang dari 1mb.jpg" alt="Muhammad Fakhir Andito" fill className="object-cover rounded-lg grayscale-[20%] contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-300" priority />
          </motion.div>
        </header>

        {/* 01 / ABOUT */}
        <motion.section className="mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">01 // About Me</h2>
          <p className="text-[#888888] text-lg leading-relaxed">
            Saya adalah mahasiswa Sistem Informasi di Universitas Atma Jaya Yogyakarta (UAJY). Saya sangat tertarik pada persimpangan antara logika sistem terstruktur dan eksplorasi digital kreatif. Baik itu memimpin tim dalam lingkungan kampus maupun mengeksplorasi teknologi baru, saya selalu mencari cara untuk memecahkan masalah dengan pendekatan yang efisien dan estetis.
          </p>
        </motion.section>

        {/* 02 / TECH STACK */}
        <motion.section className="mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">02 // Tech Stack</h2>
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
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">03 // GitHub Activity</h2>
          
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
                  <span className="text-2xl md:text-3xl font-bold text-[#f0f0f0] mb-1">63</span>
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
                    <span className="text-xl md:text-2xl font-bold text-[#f0f0f0]">2</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-[#00ffcc] text-center">Current Streak</span>
                  <span className="text-[8px] md:text-[10px] text-[#555] mt-1 text-center">Aug 25 - Aug 26</span>
                </div>

                {/* Vertical Divider */}
                <div className="h-12 w-px bg-[#333]"></div>

                {/* Longest Streak */}
                <div className="flex flex-col items-center w-1/3">
                  <span className="text-2xl md:text-3xl font-bold text-[#f0f0f0] mb-1">4</span>
                  <span className="text-[10px] md:text-xs text-[#888888] text-center">Longest Streak</span>
                  <span className="text-[8px] md:text-[10px] text-[#555] mt-1 text-center">Jun 27 - Jun 30</span>
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
                    <span className="text-[#888888]">60%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#3178c6] h-1.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                {/* Language 2 */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-[#f0f0f0]">CSS / Tailwind</span>
                    <span className="text-[#888888]">25%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#00ffcc] h-1.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>

                {/* Language 3 */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-[#f0f0f0]">JavaScript</span>
                    <span className="text-[#888888]">15%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#f7df1e] h-1.5 rounded-full" style={{ width: '15%' }}></div>
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
              [ SELECTED WORKS ]
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
              [ BEYOND CODE ]
            </button>
          </div>

          {/* Konten yang berubah sesuai Tab */}
          <div className="mt-8">
            
            {/* TAMPILAN TAB: PROJECTS */}
            {activeTab === 'projects' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-6">
                
                {/* Proyek 1 */}
                <div className="group grid grid-cols-1 md:grid-cols-[3fr_1fr] p-6 bg-[#121212] border border-[#333] border-l-4 border-l-[#333] rounded hover:border-l-[#00ffcc] hover:bg-[#1a1a1a] transition-all duration-300">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#f0f0f0]">Sistem Informasi Akademik (Mockup)</h3>
                    <p className="text-[#888888] text-sm mb-4">Analisis dan perancangan basis data untuk manajemen poin aktivitas mahasiswa Universitas Atma Jaya Yogyakarta.</p>
                    <div className="flex gap-2 font-mono text-xs text-[#00ffcc]">
                      <span className="px-2 py-1 bg-[#0a0a0a] rounded border border-[#333]">SQL</span>
                      <span className="px-2 py-1 bg-[#0a0a0a] rounded border border-[#333]">System Analysis</span>
                    </div>
                  </div>
                  <div className="md:text-right mt-6 md:mt-0 flex flex-col md:items-end justify-center gap-3">
                    <Link href="https://github.com/MuhammadFakhirAndito" target="_blank" className="font-mono text-sm text-[#00ffcc] hover:text-[#00b38f] transition-colors border border-[#00ffcc] px-4 py-2 rounded">🔗 Repo GitHub</Link>
                  </div>
                </div>

                {/* Proyek 2 */}
                <div className="group grid grid-cols-1 md:grid-cols-[3fr_1fr] p-6 bg-[#121212] border border-[#333] border-l-4 border-l-[#333] rounded hover:border-l-[#00ffcc] hover:bg-[#1a1a1a] transition-all duration-300">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#f0f0f0]">Cinematic AI Generation Series</h3>
                    <p className="text-[#888888] text-sm mb-4">Eksplorasi estetika Gorpcore dan Utilitarian melalui manipulasi digital tingkat lanjut dan AI prompt engineering.</p>
                    <div className="flex gap-2 font-mono text-xs text-[#00ffcc]">
                      <span className="px-2 py-1 bg-[#0a0a0a] rounded border border-[#333]">Midjourney</span>
                      <span className="px-2 py-1 bg-[#0a0a0a] rounded border border-[#333]">Design</span>
                    </div>
                  </div>
                  <div className="md:text-right mt-6 md:mt-0 flex flex-col md:items-end justify-center gap-3">
                    <Link href="#" className="font-mono text-sm text-[#00ffcc] hover:text-[#00b38f] transition-colors border border-[#00ffcc] px-4 py-2 rounded">👁️ View Gallery</Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAMPILAN TAB: EXPERIENCE */}
            {activeTab === 'experience' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="border-l border-dashed border-[#333] pl-8 ml-4 flex flex-col gap-10 py-4">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-[#0a0a0a] border-2 border-[#00ffcc] rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]"></div>
                    <div className="font-mono text-xs text-[#00ffcc] mb-2">AGUSTUS 2025</div>
                    <h3 className="text-xl font-semibold mb-2 text-[#f0f0f0]">Ketua Kelompok &quot;Mordor&quot;</h3>
                    <p className="text-[#888888] text-sm">PKK-SI UAJY. Memimpin tim, memastikan koordinasi kelancaran acara orientasi, dan membangun kerja sama tim yang solid.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-[#0a0a0a] border-2 border-[#333] rounded-full"></div>
                    <div className="font-mono text-xs text-[#888888] mb-2">AGUSTUS 2025</div>
                    <h3 className="text-xl font-semibold mb-2 text-[#f0f0f0]">Peserta Mentoring Intensif</h3>
                    <p className="text-[#888888] text-sm">Dibimbing langsung oleh mentor (Kak Ocha dan Kak Daniel) dalam program pengembangan karakter, adaptasi lingkungan kampus, dan kepemimpinan dasar.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAMPILAN TAB: HOBBIES / BEYOND CODE */}
            {activeTab === 'hobbies' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold mb-4 text-[#f0f0f0]">Areas of Interest & Exploration</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Technical Fashion / Gorpcore', 'Kalkulus & Math', 'PC Hardware Architecture', 'Kurikulum Merdeka Analysis'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-[#121212] border border-[#333] rounded-full text-sm text-[#888888] hover:border-[#00ffcc] hover:text-[#f0f0f0] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="p-6 bg-[#121212] border border-[#333] rounded-lg border-l-4 border-l-[#00ffcc]">
                  <h3 className="font-mono text-[#00ffcc] text-xs mb-3">CURRENTLY FOCUSING ON:</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    Mendalami perbedaan arsitektur memori (seperti LPDDR vs DDR pada laptop), serta mengasah pemahaman matematika tingkat lanjut seperti penerapan limit fungsi dan analisis fungsi bijektif.
                  </p>
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
            <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ Email Me ]</Link>
            <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ LinkedIn ]</Link>
            <Link href="https://github.com/MuhammadFakhirAndito" target="_blank" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ GitHub ]</Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}