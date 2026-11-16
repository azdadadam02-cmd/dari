import { Link } from 'react-router-dom'
import { useLang } from '../i18n'

// Lcarte kamla lien: mlli katclicky katddik l page dyal détail
export default function PropertyCard({ p }) {
  const { t, mot, titre } = useLang()

  return (
    <Link to={`/bien/${p.id}`} className="card">
      <img src={p.images[0]} alt={titre(p)} />
      <div className="card-body">
        <h3>{titre(p)}</h3>
        <p className="muted">{mot(p.ville)} · {mot(p.categorie)}</p>
        <p className="muted">
          {p.chambres > 0 && `${p.chambres} ${t('ch')} · `}{p.surface} m²
        </p>
        <p className="price">
          {Number(p.prix).toLocaleString('fr-FR')} {t('dh')}{p.type === 'location' && t('parMois')}
        </p>
      </div>
    </Link>
  )
}
