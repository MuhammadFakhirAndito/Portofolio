"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  //mengikuti mouse kursor dan memodif
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Variants untuk animasi scroll yang muncul bertahap (stagger)
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main 
      className="animate-grid-bg min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-sans selection:bg-[#00ffcc] selection:text-black pb-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 255, 204, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 204, 0.03) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}
      
    >

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#00ffcc] rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="w-1.5 h-1.5 bg-[#00ffcc] rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24">
        
        {/* HEADER */}
        <header className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8 items-center mb-24">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-mono text-[#00ffcc] mb-4 text-sm tracking-widest uppercase">
              Hey, I&apos;m Dito 👋
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tighter">
              I BUILD DIGITAL<br />EXPERIENCES.
            </h1>
            <p className="text-[#888888] text-xl mb-8">
              Information Systems Student & Tech Enthusiast
            </p>
            <div className="flex gap-4 font-mono text-sm">
              <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ GitHub ]</Link>
              <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ LinkedIn ]</Link>
              <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ Instagram ]</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative w-full max-w-[250px] aspect-[3/4] mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 border-2 border-[#333] rounded-lg group hover:border-[#00ffcc] hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] transition-all duration-300 z-10 pointer-events-none"></div>
            <Image 
              src="/foto diriku dimasa depan kurang dari 1mb.jpg" 
              alt="Muhammad Fakhir Andito"
              fill
              className="object-cover rounded-lg grayscale-[20%] contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-300"
              priority
            />
          </motion.div>
        </header>

        {/* 01 / ABOUT */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">01 // About</h2>
          <p className="text-[#888888] text-lg leading-relaxed">
            Saya adalah mahasiswa Sistem Informasi di Universitas Atma Jaya Yogyakarta (UAJY). Saya sangat tertarik pada persimpangan antara logika sistem terstruktur dan eksplorasi digital kreatif. Baik itu memimpin tim dalam lingkungan kampus maupun mengeksplorasi teknologi baru, saya selalu mencari cara untuk memecahkan masalah dengan pendekatan yang efisien dan estetis.
          </p>
        </motion.section>

        {/* 02 / TECH STACK */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">02 // Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "LANGUAGES", desc: "Python, JavaScript, SQL, HTML/CSS" },
              { title: "FRAMEWORKS", desc: "Next.js, React, TailwindCSS" },
              { title: "TOOLS", desc: "Git, VS Code, Figma, Notion" },
              { title: "DESIGN & CREATIVE", desc: "UI/UX Design, Prompt Engineering, Image Manipulation" }
            ].map((stack, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#121212] border border-[#333] p-6 rounded-lg hover:border-[#00ffcc] transition-colors duration-300 cursor-default"
              >
                <h3 className="font-mono text-[#888888] text-xs mb-3">{stack.title}</h3>
                <p className="text-[#f0f0f0]">{stack.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 03 / SELECTED WORK */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">03 // Selected Work</h2>
          <div className="flex flex-col gap-6">
            <motion.div whileHover={{ x: 10 }} className="group grid grid-cols-1 md:grid-cols-[3fr_1fr] p-6 bg-[#121212] border border-[#333] border-l-4 border-l-[#333] rounded hover:border-l-[#00ffcc] hover:bg-[#1a1a1a] transition-colors duration-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">Sistem Informasi Akademik (Mockup)</h3>
                <p className="text-[#888888] text-sm">Analisis dan perancangan basis data untuk manajemen poin aktivitas mahasiswa.</p>
              </div>
              <div className="md:text-right mt-4 md:mt-0 flex items-center md:justify-end">
                <Link href="#" className="font-mono text-sm text-[#00ffcc] group-hover:text-[#00b38f] transition-colors">→ Case Study</Link>
              </div>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="group grid grid-cols-1 md:grid-cols-[3fr_1fr] p-6 bg-[#121212] border border-[#333] border-l-4 border-l-[#333] rounded hover:border-l-[#00ffcc] hover:bg-[#1a1a1a] transition-colors duration-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cinematic AI Generation Series</h3>
                <p className="text-[#888888] text-sm">Eksplorasi estetika Gorpcore dan Utilitarian melalui manipulasi digital tingkat lanjut.</p>
              </div>
              <div className="md:text-right mt-4 md:mt-0 flex items-center md:justify-end">
                <Link href="#" className="font-mono text-sm text-[#00ffcc] group-hover:text-[#00b38f] transition-colors">→ Case Study</Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 04 / EXPERIENCE */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">04 // Experience</h2>
          <div className="border-l border-dashed border-[#333] pl-8 ml-4 flex flex-col gap-10">
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-[#0a0a0a] border-2 border-[#00ffcc] rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]"></div>
              <div className="font-mono text-xs text-[#00ffcc] mb-2">AGUSTUS 2025</div>
              <h3 className="text-xl font-semibold mb-2">Ketua Kelompok &quot;Mordor&quot;</h3>
              <p className="text-[#888888] text-sm">PKK-SI UAJY. Memimpin tim, memastikan koordinasi kelancaran acara orientasi, dan membangun kerja sama tim.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-[#0a0a0a] border-2 border-[#00ffcc] rounded-full"></div>
              <div className="font-mono text-xs text-[#00ffcc] mb-2">2025</div>
              <h3 className="text-xl font-semibold mb-2">Peserta Mentoring</h3>
              <p className="text-[#888888] text-sm">Dibimbing intensif oleh Kak Ocha dan Kak Daniel dalam program pengembangan karakter dan adaptasi kampus.</p>
            </div>
          </div>
        </motion.section>

        {/* 05 & 06 COMBINED FOR CLEANER SCROLL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <section className="mb-12">
            <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">05 // Beyond Code</h2>
            <div className="flex flex-wrap gap-3">
              {['Technical Fashion / Gorpcore', 'Kalkulus & Math', 'PC Hardware', 'Kurikulum Merdeka Analysis'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-[#121212] border border-[#333] rounded-full text-sm text-[#888888] hover:border-[#00ffcc] hover:text-[#f0f0f0] transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="font-mono text-[#00ffcc] text-sm uppercase border-b border-[#333] pb-2 mb-8">06 // Currently Exploring</h2>
            <p className="text-[#888888] text-lg">
              Saat ini sedang mendalami arsitektur memori pada perangkat komputasi modern dan mengasah kemampuan memecahkan studi kasus limit fungsi serta fungsi bijektif.
            </p>
          </section>
        </motion.div>

        {/* 07 / LET'S BUILD */}
        <motion.section 
          className="text-center pt-16 border-t border-[#333]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          <h2 className="font-mono text-[#00ffcc] text-sm uppercase mb-4">07 // Let&apos;s Build</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 hover:text-[#00ffcc] transition-colors cursor-default">
            LET&apos;S TALK.
          </h1>
          <div className="flex justify-center gap-6 font-mono text-sm">
            <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ Email Me ]</Link>
            <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ LinkedIn ]</Link>
            <Link href="#" className="text-[#00ffcc] hover:text-[#00b38f] transition-colors">[ GitHub ]</Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}