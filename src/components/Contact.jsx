import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Copy } from 'lucide-react'
const EMAIL = 'wadharkashifali000@gmail.com'
// SETUP POINT: no backend is configured, so the form opens the visitor's email app (mailto).
// To use a service like Formspree later, replace sendForm() with a fetch to its endpoint.
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({})
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState('')
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const x = {}
    if (!f.name.trim()) x.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email address.'
    if (!f.subject.trim()) x.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) x.message = 'Write at least 10 characters.'
    setErr(x)
    if (Object.keys(x).length) { setStatus(''); return }
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setStatus('Your email app should open with the message ready. Press send there to deliver it.')
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied('Email address copied.') }
    catch { setCopied('Copy failed. Select the address and copy it manually.') }
  }
  const field = (k, label, props = {}) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {k === 'message'
        ? <textarea id={k} rows="5" value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? k + '-e' : undefined} />
        : <input id={k} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? k + '-e' : undefined} {...props} />}
      {err[k] && <p className="err" id={k + '-e'}>{err[k]}</p>}
    </div>
  )
  return (
    <section id="contact" className="sec alt">
      <div className="wrap two reveal">
        <div>
          <h2>Contact</h2>
          <p>Recruiters, collaborators and fellow developers are welcome to get in touch.</p>
          <ul className="contact-list">
            <li><Mail size={18} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button className="icon" onClick={copy} aria-label="Copy email address"><Copy size={16} /></button></li>
            <li><Phone size={18} /> <a href="tel:+923279256290">+92 327 9256290</a></li>
            <li><MapPin size={18} /> Khairpur, Sindh, Pakistan</li>
            <li><Linkedin size={18} /> <a href="https://www.linkedin.com/in/kashif-ali-wadhar-a67a9538b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><Github size={18} /> <a href="https://github.com/wadharkashifali000-ux" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
          <p role="status" className="ok">{copied}</p>
        </div>
        <form className="card" onSubmit={submit} noValidate>
          {field('name', 'Name', { autoComplete: 'name' })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
          {field('subject', 'Subject')}
          {field('message', 'Message')}
          <button className="btn primary" type="submit">Send by email</button>
          <p role="status" className="ok">{status}</p>
          {Object.keys(err).length > 0 && <p role="alert" className="err">Please fix the highlighted fields.</p>}
        </form>
      </div>
    </section>
  )
}
