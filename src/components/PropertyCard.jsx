import { Link } from 'react-router-dom'

// Lcarte kamla lien: mlli katclicky katddik l page dyal détail
export default function PropertyCard({ p }) {
  return (
    <Link to={`/bien/${p.id}`} className="card">
      <img src={p.images[0]} alt={p.titre} />
      <span className="badge">{p.type === 'vente' ? 'À vendre' : 'À louer'}</span>
      <div className="card-body">
        <h3>{p.titre}</h3>
        <p className="muted">{p.ville} · {p.categorie}</p>
        <p className="muted">
          {p.chambres > 0 && `${p.chambres} ch · `}{p.surface} m²
        </p>
        <p className="price">
          {Number(p.prix).toLocaleString('fr-FR')} DH{p.type === 'location' && ' / mois'}
        </p>
      </div>
    </Link>
  )
}
