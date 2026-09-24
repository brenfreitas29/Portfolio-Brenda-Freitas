import Image from "next/image";
import Link from "next/link";

type Project = { number:string; title:string; category:string; description:string; tags:string[]; image:string; href:string; liveUrl:string; codeUrl:string };

export default function ProjectCard({ project }: { project: Project }) {
  return <article className="br-project">
    <div className="br-project-top"><span className="br-project-number">{project.number}</span><div><span>SELECTED PROJECT / 2026</span><h3>{project.title}</h3></div><a href={project.liveUrl} className="br-pill" target="_blank" rel="noopener noreferrer">LIVE PROJECT ↗</a></div>
    <div className="br-project-body"><div className="br-project-copy"><p>{project.description}</p><div className="br-project-tags">{project.tags.slice(0,5).map(tag => <span key={tag}>{tag}</span>)}</div><div className="br-project-links"><Link href={project.href}>CASE STUDY ↗</Link><a href={project.codeUrl} target="_blank" rel="noopener noreferrer">SOURCE CODE ↗</a></div></div><Link href={project.href} className="br-project-image" aria-label={`Read ${project.title} case study`}><Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 800px) 100vw, 62vw" className="object-cover object-top"/></Link></div>
  </article>;
}
