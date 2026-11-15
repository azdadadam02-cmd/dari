import { useState } from 'react'
import { CATEGORIES } from '../data'
import PropertyCard from './PropertyCard'

// Barre dyal les catégories (sticky) + la liste dyal les annonces
// type: "vente" / "location" / undefined (= kolchi)
export default function Listings({ properties, type }) {
  const [categorie, setCategorie] = useState('tous')
  const [tri, setTri] = useState('') // "" = bla tri, "asc" = croissant, "desc" = décroissant
  const [ville, setVille] = useState('') // "" = toutes les régions

  // la liste dyal les villes kanjibouha mn les annonces (bla tikrar)
  const villes = [...new Set(properties.map((p) => p.ville))]

  const resultat = properties
    .filter((p) => !type || p.type === type)
    .filter((p) => categorie === 'tous' || p.categorie === categorie)
    .filter((p) => !ville || p.ville === ville)
    .sort((a, b) => (tri === 'asc' ? a.prix - b.prix : tri === 'desc' ? b.prix - a.prix : 0))

  return (
    <section id="annonces">
      {/* position: sticky f CSS hiya li katkhalliha tched f lfo9 */}
      <div className="category-bar">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={c === categorie ? 'active' : ''}
            onClick={() => setCategorie(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="sort">
        <select value={ville} onChange={(e) => setVille(e.target.value)} aria-label="Filtrer par région">
          <option value="">Toutes les régions</option>
          {villes.map((v) => <option key={v}>{v}</option>)}
        </select>
        <select value={tri} onChange={(e) => setTri(e.target.value)} aria-label="Trier par prix">
          <option value="">Trier par prix</option>
          <option value="asc">Prix croissant ↑</option>
          <option value="desc">Prix décroissant ↓</option>
        </select>
      </div>

      <div className="grid">
        {resultat.map((p) => <PropertyCard key={p.id} p={p} />)}
      </div>
      {resultat.length === 0 && <p className="empty">Aucune annonce trouvée.</p>}
    </section>
  )
}
