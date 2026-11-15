import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// Page dyal dar wa7da: kanjibo l'id mn l'URL (/bien/3) w kan9elbo 3la l'annonce
export default function Detail({ properties }) {
  const { id } = useParams()
  const p = properties.find((x) => String(x.id) === id)

  // bach la page tbda mn lfo9 mlli katclicky 3la carte f west la liste
  useEffect(() => window.scrollTo(0, 0), [id])

  if (!p) {
    return (
      <main className="page-box">
        <h1>Annonce introuvable</h1>
        <Link to="/" className="back">← Retour à l'accueil</Link>
      </main>
    )
  }

  return (
    <main>
      <Link to={p.type === 'vente' ? '/acheter' : '/location'} className="back">← Retour</Link>
      <div className="detail">
        <img src={p.image} alt={p.titre} />
        <div>
          <span className="badge" style={{ position: 'static' }}>
            {p.type === 'vente' ? 'À vendre' : 'À louer'}
          </span>
          <h1 style={{ marginTop: 16 }}>{p.titre}</h1>
          <p className="muted">{p.ville}</p>
          <p className="price">
            {Number(p.prix).toLocaleString('fr-FR')} DH{p.type === 'location' && ' / mois'}
          </p>
          <ul>
            <li>🏠 Catégorie : {p.categorie}</li>
            <li>📐 Surface : {p.surface} m²</li>
            {p.chambres > 0 && <li>🛏️ Chambres : {p.chambres}</li>}
            <li>📍 Ville : {p.ville}</li>
          </ul>
          <a href="tel:0522000000" className="btn-orange">Contacter l'agence</a>
        </div>
      </div>
    </main>
  )
}
