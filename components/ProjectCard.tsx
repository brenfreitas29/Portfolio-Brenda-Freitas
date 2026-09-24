import Image from "next/image";
import Link from "next/link";

type Project = { number:string; title:string; category:string; description:string; tags:string[]; image:string; href:string; liveUrl:string; codeUrl:string };

export default function ProjectCard({ project }: { project: Project }) {
  return <article className="editorial-project">
    <div className="editorial-project-image">
      <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 760px) 100vw, 33vw" className="object-cover object-top" />
      <div className="editorial-project-overlay">
        <span>{project.category}</span>
        <div className="editorial-project-overlay-links">
          <Link href={project.href}>Case study ↗</Link>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live site ↗</a>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Code ↗</a>
        </div>
      </div>
    </div>
    <div className="editorial-project-title"><h3>{project.title}</h3><span>{project.number}</span></div>
    <p>{project.description}</p>
    <div className="editorial-project-tags">{project.tags.slice(0,4).map(tag => <span key={tag}>{tag}</span>)}</div>
    <Link className="editorial-mobile-case" href={project.href}>Explore case study ↗</Link>
  </article>;
}
