"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const scenes = [
  {
    number: "01", image: "/hero/astronaut.webp", imageAlt: "Astronauta flutuando acima de nuvens cor de rosa", theme: "light",
    eyebrow: "BRENDA FREITAS · PORTFOLIO 2026", title: <>A NEW<br/>PERSPECTIVE</>,
    description: "Junior full stack developer creating thoughtful digital experiences, from the first interface to the working product.",
    link: "#about", action: "MEET BRENDA",
  },
  {
    number: "02", image: "/hero/clouds.webp", imageAlt: "Carro entre nuvens cor de rosa", theme: "light",
    eyebrow: "01 / SELECTED WORK", title: <>IDEAS<br/>IN MOTION</>,
    description: "Real websites and SaaS projects built with React, Next.js, TypeScript and connected data.",
    link: "#work", action: "EXPLORE PROJECTS",
  },
  {
    number: "03", image: "/hero/ufo.webp", imageAlt: "Objeto voador sobre uma colina em uma paisagem surreal", theme: "dark",
    eyebrow: "02 / WHAT I BUILD", title: <>MAKE IT<br/>POSSIBLE</>,
    description: "Responsive interfaces, practical systems and product journeys designed around real people.",
    link: "#skills", action: "SEE MY SKILLS",
  },
  {
    number: "04", image: "/hero/planet.webp", imageAlt: "Planeta luminoso sobre uma paisagem desértica", theme: "light",
    eyebrow: "03 / LET'S CONNECT", title: <>THE NEXT<br/>CHAPTER</>,
    description: "Based in Buenos Aires, available remotely and ready to help bring a good idea to life.",
    link: "#contact", action: "GET IN TOUCH",
  },
];

const navigation = [
  { label: "Home", href: "#top" }, { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" }, { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function StudioHero() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [motionOkay, setMotionOkay] = useState(false);
  const hero = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionOkay(!query.matches);
    sync(); query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!motionOkay || paused || open) return;
    const timer = window.setTimeout(() => setActive(value => (value + 1) % scenes.length), 7000);
    return () => window.clearTimeout(timer);
  }, [active, paused, open, motionOkay]);
  useEffect(() => {
    function keydown(event: KeyboardEvent) {
      if (open || !hero.current || !hero.current.getBoundingClientRect().height) return;
      const box = hero.current.getBoundingClientRect();
      if (box.bottom < 0 || box.top > innerHeight || document.activeElement instanceof HTMLInputElement) return;
      if (event.key === "ArrowRight") setActive(value => (value + 1) % scenes.length);
      if (event.key === "ArrowLeft") setActive(value => (value - 1 + scenes.length) % scenes.length);
    }
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
      if (event.key === "Tab") {
        const items = panel.current?.querySelectorAll<HTMLElement>("a[href],button");
        if (!items?.length) return;
        if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items[items.length - 1].focus(); }
        else if (!event.shiftKey && document.activeElement === items[items.length - 1]) { event.preventDefault(); items[0].focus(); }
      }
    }
    window.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = prior; window.removeEventListener("keydown", keydown); };
  }, [open]);

  return <section ref={hero} className={`odyssey-hero odyssey-${scenes[active].theme}`} id="top" aria-label="Apresentação do portfólio" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
    <div className="odyssey-scenes" aria-hidden="true">{scenes.map((scene,index) => <div key={scene.number} className={`odyssey-scene ${index === active ? "is-active" : ""}`}><Image src={scene.image} alt="" fill priority={index===0} sizes="100vw" className="odyssey-scene-image"/></div>)}</div>
    <div className="odyssey-scrim" aria-hidden="true" />
    <header className="odyssey-header">
      <a href="#top" className="odyssey-logo" aria-label="Brenda Freitas, início"><span>B<br/>F</span><small>®</small></a>
      <span className="odyssey-header-caption">WEB DESIGN & FULL STACK DEVELOPMENT</span>
      <button ref={button} type="button" className="odyssey-menu-toggle" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="portfolio-menu">ABOUT / MENU <span aria-hidden="true">↗</span></button>
    </header>
    <div className="odyssey-content" key={active}>
      <span className="odyssey-eyebrow">{scenes[active].eyebrow}</span>
      <h1>{scenes[active].title}</h1>
      <div className="odyssey-intro"><p>{scenes[active].description}</p><a href={scenes[active].link} className="odyssey-action">{scenes[active].action} <span aria-hidden="true">↗</span></a></div>
    </div>
    <div className="odyssey-footer"><span>BF / {scenes[active].number}</span><div className="odyssey-pager" role="group" aria-label="Escolher cena">{scenes.map((scene,index) => <button key={scene.number} type="button" aria-label={`Cena ${scene.number}: ${scene.eyebrow}`} aria-pressed={index===active} onClick={() => setActive(index)} className={index===active ? "is-active" : ""}><span>{scene.number}</span></button>)}</div><a href="#work">DISCOVER WORK ↓</a></div>
    {open && createPortal(<div className="br-menu-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) { setOpen(false); button.current?.focus(); } }}><div ref={panel} id="portfolio-menu" role="dialog" aria-modal="true" aria-label="Portfolio navigation" className="br-menu-panel"><div className="br-menu-top"><span>BF® / NAVIGATION</span><button ref={close} onClick={() => {setOpen(false);button.current?.focus();}} type="button" aria-label="Close menu">CLOSE ×</button></div><nav aria-label="Overlay navigation" className="br-menu-links">{navigation.map((item,index) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}><span>0{index+1}</span>{item.label}<span aria-hidden="true">↗</span></a>)}<Link href="/resume" onClick={() => setOpen(false)}><span>06</span>Résumé<span aria-hidden="true">↗</span></Link></nav><p>OPEN FOR JUNIOR ROLES & SELECT FREELANCE PROJECTS</p></div></div>, document.body)}
  </section>;
}
