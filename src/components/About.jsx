import { GraduationCap, MapPin } from 'lucide-react'
export default function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap two reveal">
        <div>
          <h2>About me</h2>
          <p>I'm a Computer Science student in my second year (fourth semester). I enjoy programming and problem-solving, and I'm especially interested in object-oriented programming and web development.</p>
          <p>I'm currently learning React.js and exploring artificial intelligence and prompt engineering. My goal is to build useful software projects and grow into a capable developer, one project at a time.</p>
        </div>
        <aside className="card edu-card" aria-label="Education">
          <GraduationCap size={26} color="var(--blue)" />
          <h3>BS Computer Science</h3>
          <p>Benazir Bhutto Shaheed University of Technology and Skill Development</p>
          <p className="muted">2nd year, 4th semester</p>
          <p className="muted"><MapPin size={14} /> Khairpur Mirs, Sindh, Pakistan</p>
        </aside>
      </div>
    </section>
  )
}
