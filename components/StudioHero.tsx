"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

  return (
    <section className="editorial-hero" id="top">
      <div className="editorial-container">
        <header className="editorial-header">
          <Link href="/" className="editorial-brand">Brenda Freitas<span>.</span></Link>
          <nav aria-label="Main navigation" className="editorial-nav">
            {navigation.slice(0, 3).map(item => <a href={item.href} key={item.href}>{item.label}</a>)}
            <button ref={button} type="button" className="editorial-menu-button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="portfolio-menu">Menu <span aria-hidden="true">☰</span></button>
          </nav>
        </header>
        <div className="editorial-intro">
          <div>
            <p className="editorial-eyebrow">Junior Full Stack Developer · Buenos Aires</p>
            <h1>Building thoughtful <em>digital products.</em></h1>
            <p className="editorial-summary">I build web applications with React, Next.js and connected data. My background in customer support helps me focus on the people who use them.</p>
            <div className="editorial-actions"><a href="#work" className="editorial-primary">View projects <span aria-hidden="true">↗</span></a><a href="mailto:brenda.micaela80@gmail.com" className="editorial-secondary">Get in touch</a></div>
          </div>
          <aside className="editorial-aside"><span>01 / 03</span><p>Code, design and practical solutions for real workflows.</p><span>PORTUGUÊS · ESPAÑOL</span></aside>
        </div>
      </div>
      {open && <div className="editorial-menu-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div ref={panel} id="portfolio-menu" role="dialog" aria-modal="true" aria-label="Portfolio navigation" className="editorial-menu-panel">
          <div className="editorial-menu-top"><span>Brenda Freitas / Navigate</span><button ref={close} onClick={() => {setOpen(false);button.current?.focus();}} type="button" aria-label="Close menu">Close ×</button></div>
          <nav aria-label="Overlay navigation" className="editorial-menu-links">{navigation.map((item,index) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}><span>0{index+1}</span>{item.label}<span aria-hidden="true">↗</span></a>)}<Link href="/resume" onClick={() => setOpen(false)}><span>05</span>Résumé<span aria-hidden="true">↗</span></Link></nav>
          <p>Available for junior developer roles and freelance projects.</p>
        </div>
      </div>}
    </section>
  );
}
