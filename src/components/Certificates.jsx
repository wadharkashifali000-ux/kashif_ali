import { useRef, useState } from 'react'
import { BadgeCheck, X } from 'lucide-react'
import { certificates } from '../data/certificates.js'

function Img({ c, ...rest }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div className="img-missing" role="img" aria-label={`${c.title} image not added yet`}>Add image:<br />{c.image.split('/').pop()}</div>
  return <img src={c.image} alt={`Certificate: ${c.title}, ${c.issuer}`} onError={() => setBad(true)} {...rest} />
}
export default function Certificates() {
  const dlg = useRef(null)
  const [sel, setSel] = useState(null)
  const open = c => { setSel(c); requestAnimationFrame(() => dlg.current?.showModal()) }
  const close = () => dlg.current?.close()
  return (
    <section id="certificates" className="sec alt">
      <div className="wrap reveal">
        <h2>Certificates</h2>
        <div className="grid3">
          {certificates.map(c => (
            <article className="card" key={c.id}>
              <div className="thumb"><Img c={c} loading="lazy" /></div>
              <h3>{c.title}</h3>
              <p className="muted">{c.issuer}</p>
              <p className="small">Completed {c.date}{c.code && ` · Certificate code ${c.code}`}</p>
              <div className="row">
                <button className="btn sm" onClick={() => open(c)}>View Certificate</button>
                {c.verifyUrl && <a className="link" href={c.verifyUrl} target="_blank" rel="noopener noreferrer"><BadgeCheck size={16} /> Verify Certificate</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
      <dialog ref={dlg} className="modal" aria-label={sel ? sel.title : 'Certificate'}
        onClick={e => e.target === dlg.current && close()} onClose={() => setSel(null)}>
        {sel && (<>
          <button className="x" onClick={close} aria-label="Close certificate"><X size={20} /></button>
          <Img c={sel} />
          <p>{sel.title}, {sel.issuer}</p>
        </>)}
      </dialog>
    </section>
  )
}
