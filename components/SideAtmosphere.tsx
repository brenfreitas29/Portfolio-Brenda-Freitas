"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const particles = [
  { side: "left", top: "13%", size: 3, delay: 0 }, { side: "left", top: "31%", size: 2, delay: 1.8 },
  { side: "left", top: "58%", size: 4, delay: 3.1 }, { side: "left", top: "78%", size: 2, delay: 4.7 },
  { side: "right", top: "18%", size: 2, delay: 1.1 }, { side: "right", top: "42%", size: 3, delay: 2.6 },
  { side: "right", top: "66%", size: 2, delay: 4.1 }, { side: "right", top: "84%", size: 4, delay: 5.2 },
];

const techNodes = [
  { label: "NEXT.JS", x: "10%", y: "50%", size: 92, delay: 0 },
  { label: "REACT", x: "29%", y: "24%", size: 72, delay: 1.2 },
  { label: "AI", x: "49%", y: "55%", size: 112, delay: 2.1 },
  { label: "SUPABASE", x: "70%", y: "25%", size: 78, delay: 0.8 },
  { label: "TYPESCRIPT", x: "90%", y: "53%", size: 94, delay: 1.7 },
];

export default function SideAtmosphere() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const railY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), { stiffness: 70, damping: 22 });
  const leftGlowY = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 240]), { stiffness: 45, damping: 22 });
  const rightGlowY = useSpring(useTransform(scrollYProgress, [0, 1], [180, -160]), { stiffness: 45, damping: 22 });
  const progressScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const constellationY = useSpring(useTransform(scrollYProgress, [0, 1], [70, -210]), { stiffness: 34, damping: 25 });
  const constellationX = useSpring(useTransform(scrollYProgress, [0, .5, 1], [-20, 30, -10]), { stiffness: 30, damping: 24 });
  const constellationRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 2]);
  const auroraOneY = useSpring(useTransform(scrollYProgress, [0, .45, 1], [-100, 160, -40]), { stiffness: 38, damping: 24 });
  const auroraTwoY = useSpring(useTransform(scrollYProgress, [0, .55, 1], [180, -90, 130]), { stiffness: 34, damping: 24 });
  const auroraOneX = useSpring(useTransform(scrollYProgress, [0, .5, 1], [-80, 120, -30]), { stiffness: 34, damping: 24 });
  const auroraTwoX = useSpring(useTransform(scrollYProgress, [0, .5, 1], [100, -140, 60]), { stiffness: 34, damping: 24 });
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [-7, 8]);
  const pointerX = useMotionValue(50); const pointerY = useMotionValue(35);
  const smoothPointerX = useSpring(pointerX, { stiffness: 210, damping: 30, mass: .22 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 210, damping: 30, mass: .22 });

  useEffect(() => {
    if (reduceMotion) return;
    const handlePointerMove = (event: PointerEvent) => { pointerX.set((event.clientX / window.innerWidth) * 100); pointerY.set((event.clientY / window.innerHeight) * 100); };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY, reduceMotion]);

  const spotlightBackground = useTransform([smoothPointerX, smoothPointerY], ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, rgba(224,151,255,.14), transparent 58%)`);

  return <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(96,67,196,.04),transparent_38%,rgba(238,144,211,.04)_72%,transparent)]" />
    <motion.div style={{ backgroundImage: spotlightBackground }} className="absolute inset-0 hidden lg:block" />
    <motion.div style={{ x: reduceMotion ? 0 : auroraOneX, y: reduceMotion ? 0 : auroraOneY, rotate: reduceMotion ? 0 : backgroundRotate }} animate={reduceMotion ? undefined : { scale: [1,1.12,.98,1] }} transition={{ duration:16,repeat:Infinity,ease:"easeInOut" }} className="absolute left-[8vw] top-[14vh] h-[48rem] w-[48rem] rounded-[42%] bg-[radial-gradient(circle_at_32%_32%,rgba(128,103,217,.18),rgba(103,71,194,.08)_42%,transparent_70%)] blur-[38px] mix-blend-screen" />
    <motion.div style={{ x: reduceMotion ? 0 : auroraTwoX, y: reduceMotion ? 0 : auroraTwoY }} animate={reduceMotion ? undefined : { scale:[.95,1.08,1,.95],rotate:[0,8,-5,0] }} transition={{duration:19,repeat:Infinity,ease:"easeInOut"}} className="absolute right-[2vw] top-[42vh] h-[44rem] w-[44rem] rounded-[46%] bg-[radial-gradient(circle_at_55%_45%,rgba(239,183,223,.14),rgba(189,115,220,.07)_44%,transparent_70%)] blur-[46px] mix-blend-screen" />
    <div className="absolute inset-0 opacity-[.045]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.42) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.42) 1px,transparent 1px)",backgroundSize:"88px 88px",maskImage:"linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)",WebkitMaskImage:"linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)"}} />

    <motion.div style={{ y: reduceMotion ? 0 : constellationY, x: reduceMotion ? 0 : constellationX, rotate: reduceMotion ? 0 : constellationRotate }} className="absolute -left-[2vw] top-[48vh] hidden h-[430px] w-[104vw] lg:block">
      <div className="absolute left-1/2 top-1/2 h-[310px] w-[78vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#dcb7ff]/[.08] shadow-[0_0_120px_rgba(171,112,255,.08)]" />
      <div className="absolute left-1/2 top-1/2 h-[190px] w-[58vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-[#f2c6e5]/[.10]" />
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 1200 430" preserveAspectRatio="none">
        <motion.path d="M90 225 C205 220 240 90 350 120 S490 300 590 235 S720 70 835 120 S1010 305 1110 225" fill="none" stroke="rgba(238,208,255,.34)" strokeWidth="1.2" strokeDasharray="5 13" animate={reduceMotion ? undefined : {strokeDashoffset:[0,-72]}} transition={{duration:10,repeat:Infinity,ease:"linear"}} />
        <path d="M90 225 C205 220 240 90 350 120 S490 300 590 235 S720 70 835 120 S1010 305 1110 225" fill="none" stroke="rgba(223,142,255,.12)" strokeWidth="12" className="blur-md" />
      </svg>
      {techNodes.map((node,index)=><motion.div key={node.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left:node.x,top:node.y}} animate={reduceMotion?undefined:{y:[0,-12,5,0]}} transition={{duration:6+index*.8,repeat:Infinity,ease:"easeInOut",delay:node.delay}}>
        <motion.div animate={reduceMotion?undefined:{rotate:360}} transition={{duration:20+index*3,repeat:Infinity,ease:"linear"}} className="relative flex items-center justify-center rounded-full border border-[#ecccf8]/30 bg-[#a875ff]/[.055] shadow-[0_0_55px_rgba(219,156,255,.20)]" style={{width:node.size,height:node.size}}>
          <span className="absolute inset-[9px] rounded-full border border-dashed border-white/20" />
          <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ffd2ef] shadow-[0_0_22px_rgba(255,188,232,1)]" />
          <motion.span animate={reduceMotion?undefined:{rotate:-360}} transition={{duration:20+index*3,repeat:Infinity,ease:"linear"}} className="text-[10px] font-semibold tracking-[.18em] text-white/80">{node.label}</motion.span>
        </motion.div>
      </motion.div>)}
      <motion.div animate={reduceMotion?undefined:{opacity:[.25,.7,.25],scale:[.9,1.08,.9]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}} className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_35px_rgba(239,183,223,.9)]" />
    </motion.div>

    <div className="hidden lg:block">
      <motion.div style={{y:leftGlowY}} className="absolute -left-40 top-[16vh] h-[48vh] w-[280px] rounded-full bg-[#7457ff]/16 blur-[110px]"/><motion.div style={{y:rightGlowY}} className="absolute -right-44 top-[42vh] h-[52vh] w-[300px] rounded-full bg-[#ed8fd3]/14 blur-[120px]"/>
      <div className="absolute left-7 top-1/2 h-[44vh] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/14 to-transparent xl:left-9"/><div className="absolute right-7 top-1/2 h-[44vh] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent xl:right-9"/>
      <div className="absolute left-[26px] top-1/2 h-[44vh] w-[3px] -translate-y-1/2 overflow-hidden rounded-full xl:left-[34px]"><motion.div style={{scaleY:progressScale,transformOrigin:"top"}} className="h-full w-full bg-gradient-to-b from-[#b9a5ff] via-[#ed9ed4] to-[#b9a5ff]"/></div>
      <motion.div style={{y:railY}} className="absolute left-10 top-[30vh] flex flex-col gap-9 xl:left-12">{["01","02","03"].map(n=><div key={n} className="flex items-center gap-3"><span className="h-px w-5 bg-white/18"/><span className="text-[9px] font-medium tracking-[.22em] text-white/28">{n}</span></div>)}</motion.div>
      {particles.map((particle,index)=><motion.span key={`${particle.side}-${index}`} className={`absolute rounded-full bg-white/65 shadow-[0_0_16px_rgba(255,255,255,.55)] ${particle.side==="left"?"left-[4.5vw]":"right-[4.5vw]"}`} style={{top:particle.top,width:particle.size,height:particle.size}} animate={reduceMotion?undefined:{y:[0,-18,7,0],opacity:[.18,.75,.32,.18],scale:[.9,1.3,1,.9]}} transition={{duration:7+index*.65,repeat:Infinity,ease:"easeInOut",delay:particle.delay}}/>)}
      <div className="absolute bottom-8 left-9 origin-left -rotate-90 text-[8px] uppercase tracking-[.32em] text-white/18 xl:left-11">Brenda Studio · Product Engineering</div><div className="absolute bottom-8 right-9 origin-right rotate-90 text-[8px] uppercase tracking-[.32em] text-white/16 xl:right-11">Scroll to explore</div>
    </div>
  </div>;
}
