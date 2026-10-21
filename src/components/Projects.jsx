import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
export default function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="wrap reveal">
        <h2>Projects</h2>
        <p className="muted intro">The cards below are placeholders. Edit <code>src/data/projects.js</code> to add real work.</p>
        <div className="grid3">
          {projects.map(p => (
            <article className="card" key={p.name}>
              <p className="muted small">{p.category}{p.placeholder && ' (example placeholder)'}</p>
              <h3>{p.name}</h3>
              <p>{p.problem}</p>
              <ul className="plain">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
              <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
              <div className="row">
                {p.github ? <a className="link" href={p.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> Source code</a> : <span className="muted small">Source: coming soon</span>}
                {p.demo ? <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live demo</a> : <span className="muted small">Demo: coming soon</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
