import { journey } from '../data/skills.js'
export default function Education() {
  return (
    <section id="education" className="sec">
      <div className="wrap two reveal">
        <div>
          <h2>Education</h2>
          <ol className="timeline">
            <li><h3>BS Computer Science</h3>
              <p>Benazir Bhutto Shaheed University of Technology and Skill Development, Khairpur Mirs, Sindh</p>
              <p className="muted">Currently in 2nd year, 4th semester</p></li>
          </ol>
        </div>
        <div>
          <h2>Learning journey</h2>
          <ul className="journey">
            {journey.map(j => <li key={j.topic}><h3>{j.topic}</h3><p className="muted">{j.note}</p></li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
