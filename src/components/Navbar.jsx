import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = ['about', 'skills', 'projects', 'certificates', 'education', 'contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(id => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo" aria-label="Kashif Ali Wadhar, home">KAW</a>
        <button className="burger" aria-expanded={open} aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="menu" className={open ? 'open' : ''} aria-label="Main">
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
              aria-current={active === l ? 'true' : undefined}>{l[0].toUpperCase() + l.slice(1)}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
