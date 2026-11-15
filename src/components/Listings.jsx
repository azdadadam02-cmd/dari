import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES } from '../data'
import PropertyCard from './PropertyCard'

// Barre dyal les catégories (sticky) + la liste dyal les annonces
// type: "vente" / "location" / undefined (= kolchi)
export default function Listings({ properties, type }) {
  // catégorie w ville f l'URL (?cat=villas&ville=Fès): bach la recherche dyal Home t9der t3mmerhom
  const [params, setParams] = useSearchParams()
  const categorie = params.get('cat') || 'tous'
  const ville = params.get('ville') || '' // "" = toutes les régions
  const [tri, setTri] = useState('') // "" = bla tri, "asc" = croissant, "desc" = décroissant

  const changer = (cle, valeur) => {
    if (valeur && valeur !== 'tous') params.set(cle, valeur)
    else params.delete(cle)
    setParams(params, { replace: true })
  }
  const setCategorie = (c) => changer('cat', c)
  const setVille = (v) => changer('ville', v)

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
