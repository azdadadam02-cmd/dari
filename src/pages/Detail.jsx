import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AGENCES } from '../data'

// Page dyal dar wa7da: kanjibo l'id mn l'URL (/bien/3) w kan9elbo 3la l'annonce
export default function Detail({ properties }) {
  const { id } = useParams()
  const p = properties.find((x) => String(x.id) === id)
  const [photo, setPhoto] = useState(0) // ina tsswira li katban kbira
  const [envoye, setEnvoye] = useState(false)

  // mlli katbdel l'annonce: nrj3o l lfo9 w l tsswira lowla
  useEffect(() => { window.scrollTo(0, 0); setPhoto(0) }, [id])

  if (!p) {
    return (
      <main className="page-box">
        <h1>Annonce introuvable</h1>
        <Link to="/" className="back">Retour à l'accueil</Link>
      </main>
    )
  }

  // l'agence dyal nfs lmdina, ila makantch nakhdo lowla
  const agence = AGENCES.find((a) => a.ville === p.ville) || AGENCES[0]
  const whatsapp = 'https://wa.me/212' + agence.tel.replace(/\D/g, '').slice(1)
  const lien = p.type === 'vente' ? '/acheter' : '/location'

  const envoyer = (e) => {
    e.preventDefault()
    setEnvoye(true) // ma kayn ta serveur: ghir kanbiyno message
  }

  return (
    <main>
      <nav className="breadcrumb">
        <Link to="/">Accueil</Link> › <Link to={lien}>{p.type === 'vente' ? 'Acheter' : 'Louer'}</Link> › {p.ville} › {p.categorie}
      </nav>

      <div className="detail-head">
        <div>
          <h1>{p.titre}</h1>
          <p className="muted">{p.quartier}, {p.ville}</p>
        </div>
        <p className="price">
          {p.prix.toLocaleString('fr-FR')} DH{p.type === 'location' && ' / mois'}
        </p>
      </div>

      <div className="detail">
        <div>
          <div className="detail-photo">
            <img src={p.images[photo]} alt={p.titre} />
            <span className="badge">{p.type === 'vente' ? 'À vendre' : 'À louer'}</span>
          </div>

          <div className="thumbs">
            {p.images.map((src, i) => (
              <button key={src} className={i === photo ? 'active' : ''} onClick={() => setPhoto(i)}>
                <img src={src} alt={`Photo ${i + 1}`} />
              </button>
            ))}
          </div>

          <div className="chips">
            {p.chambres > 0 && <span>{p.chambres} Chambres</span>}
            {p.sdb > 0 && <span>{p.sdb} Salles de bain</span>}
            <span>{p.surface} m²</span>
            <span>{p.categorie}</span>
          </div>

          <div className="detail-infos">
            <div>
              <h2>Description</h2>
              <p>{p.description}</p>
            </div>
            <div>
              <h2>Caractéristiques</h2>
              <ul className="checks">
                {p.caracteristiques.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <aside className="contact">
          <h2>Contacter l'annonceur</h2>
          <div className="agent">
            <span className="avatar">{agence.nom[0]}</span>
            <div>
              <strong>{agence.nom}</strong>
              <p>Agence immobilière · {agence.ville}</p>
            </div>
          </div>
          <div className="contact-btns">
            <a href={`tel:${agence.tel.replace(/\s/g, '')}`} className="btn-call">Appeler</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-wa">WhatsApp</a>
          </div>

          {envoye ? (
            <p className="sent">Merci ! Votre message a été envoyé.</p>
          ) : (
            <form onSubmit={envoyer}>
              <input placeholder="Nom" aria-label="Nom" required />
              <input type="email" placeholder="Email" aria-label="Email" required />
              <button className="btn-orange">Envoyer le message</button>
            </form>
          )}
        </aside>
      </div>
    </main>
  )
}
