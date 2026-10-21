import { skills } from '../data/skills.js'
export default function Skills() {
  return (
    <section id="skills" className="sec alt">
      <div className="wrap reveal">
        <h2>Technical skills</h2>
        <p className="muted intro">Labels describe where I honestly am with each topic.</p>
        <div className="grid3">
          {skills.map(g => (
            <div className="card" key={g.group}>
              <h3>{g.group}</h3>
              <ul className="chips">
                {g.items.map(i => (
                  <li key={i.name} className={i.level === 'Currently learning' ? 'learning' : ''}>
                    <span>{i.name}</span><small>{i.level}</small>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
