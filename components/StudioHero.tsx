"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const navigation = [
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function StudioHero() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    close.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
      if (event.key === "Tab") {
        const items = panel.current?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!items?.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKeyDown); };
  }, [open]);

  return <section className="br-hero" id="top">
    <div className="br-ambient" aria-hidden="true"><div className="br-ambient-grid"/><div className="br-ambient-glow"/></div>
    <div className="br-container br-hero-content">
      <header className="br-header">
        <Link href="/" className="br-brand">BF<span>®</span></Link>
        <nav aria-label="Main navigation" className="br-nav">
          {navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <button ref={button} className="br-menu-button" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="portfolio-menu">MENU <span aria-hidden="true">☰</span></button>
      </header>
      <div className="br-hero-main">
        <div className="br-hero-kicker"><span>PORTFOLIO / 2026</span><span>BASED IN BUENOS AIRES · AVAILABLE REMOTELY</span></div>
        <h1>HI, I&apos;M <span>BRENDA</span></h1>
        <div className="br-hero-lower">
          <p>A junior full stack developer building useful products with thoughtful interfaces, connected data and real user needs in mind.</p>
          <div className="br-portrait"><Image src="/brenda-profile.jpg" alt="Brenda Freitas" fill sizes="220px" priority className="object-cover"/></div>
          <a className="br-pill br-pill-color" href="mailto:brenda.micaela80@gmail.com">LET&apos;S TALK <span aria-hidden="true">↗</span></a>
        </div>
        <div className="br-hero-bottom"><span>REACT / NEXT.JS / TYPESCRIPT / SUPABASE</span><a href="#work">SCROLL TO EXPLORE ↓</a></div>
      </div>
    </div>
    {open && createPortal(<div className="br-menu-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) { setOpen(false); button.current?.focus(); } }}>
      <div ref={panel} id="portfolio-menu" role="dialog" aria-modal="true" aria-label="Portfolio navigation" className="br-menu-panel">
        <div className="br-menu-top"><span>BF® / NAVIGATION</span><button ref={close} onClick={() => {setOpen(false);button.current?.focus();}} type="button" aria-label="Close menu">CLOSE ×</button></div>
        <nav aria-label="Overlay navigation" className="br-menu-links">{navigation.map((item,index) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}><span>0{index+1}</span>{item.label}<span aria-hidden="true">↗</span></a>)}<Link href="/resume" onClick={() => setOpen(false)}><span>05</span>Résumé<span aria-hidden="true">↗</span></Link></nav>
        <p>OPEN FOR JUNIOR ROLES & SELECT FREELANCE PROJECTS</p>
      </div>
    </div>, document.body)}
  </section>;
}
