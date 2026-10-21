import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'
const roles = ['Java Developer', 'C++ Programmer', 'Frontend Developer', 'Computer Science Student']
export default function Hero() {
  const [text, setText] = useState(roles[0])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let r = 0, c = 0, del = false, t
    const tick = () => {
      const w = roles[r]
      c += del ? -1 : 1
      setText(w.slice(0, c))
      let d = del ? 40 : 90
      if (!del && c === w.length) { del = true; d = 1400 }
      else if (del && c === 0) { del = false; r = (r + 1) % roles.length; d = 300 }
      t = setTimeout(tick, d)
    }
    t = setTimeout(tick, 800)
    return () => clearTimeout(t)
  }, [])
  return (
    <section id="top" className="hero">
      <span className="orb o1" aria-hidden="true" /><span className="orb o2" aria-hidden="true" />
      <div className="wrap hero-in">
        <div>
          <p className="badge">Open to internships and learning opportunities</p>
          <h1>Hi, I'm <span>Kashif Ali Wadhar.</span></h1>
          <p className="sub">Computer Science Student &amp; Aspiring Software Developer</p>
          <p className="typing" aria-live="off"><span aria-hidden="true">{'> '}{text}<i className="caret" /></span>
            <span className="sr">Java Developer, C++ Programmer, Frontend Developer, Computer Science Student</span></p>
          <p className="lead">I enjoy solving programming problems, building user-friendly web experiences, and exploring how technology and artificial intelligence can solve real-world problems. I'm continuously improving my software development skills through learning and practical projects.</p>
          <div className="cta">
            <a className="btn primary" href="#projects">Explore My Projects</a>
            <a className="btn" href="#contact">Contact Me</a>
            <a className="link" href="https://github.com/wadharkashifali000-ux" target="_blank" rel="noopener noreferrer"><Github size={18} /> View GitHub</a>
          </div>
        </div>
        <div className="avatar">
          <img className="hero-image" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85" alt="A warmly lit developer workspace with a laptop and code on screen" />
          <span className="photo-note"><i aria-hidden="true" /> Learning, building, and growing</span>
          <div className="image-caption">
            <p className="caption-label">A little about me</p>
            <b>KAW<span aria-hidden="true">.</span></b>
            <p>Curious mind. Thoughtful code. Always in progress.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
