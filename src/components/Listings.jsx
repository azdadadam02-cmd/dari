import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES } from '../data'
import PropertyCard from './PropertyCard'
import { useLang } from '../i18n'

// Barre de recherche (sticky) + la liste dyal les annonces
// type: "vente" / "location" / undefined (= kolchi, w l'utilisateur ykhtar b les boutons)
export default function Listings({ properties, type }) {
  const { t, mot } = useLang()
  // les filtres f l'URL (?cat=villas&ville=Fès): bach les carrés w l footer y9dro y3mmrohom
  const [params, setParams] = useSearchParams()
  const categorie = params.get('cat') || ''
  const ville = params.get('ville') || ''
  const typeChoisi = type || params.get('type') || ''
  const [tri, setTri] = useState('') // "" = bla tri, "asc" = croissant, "desc" = décroissant

  const changer = (cle, valeur) => {
    if (valeur) params.set(cle, valeur)
    else params.delete(cle)
    setParams(params, { replace: true })
  }

  // la liste dyal les villes kanjibouha mn les annonces (bla tikrar)
  const villes = [...new Set(properties.map((p) => p.ville))]

  const resultat = properties
    .filter((p) => !typeChoisi || p.type === typeChoisi)
    .filter((p) => !categorie || p.categorie === categorie)
    .filter((p) => !ville || p.ville === ville)
    .sort((a, b) => (tri === 'asc' ? a.prix - b.prix : tri === 'desc' ? b.prix - a.prix : 0))

  return (
    <section id="annonces">
      {/* position: sticky f CSS hiya li katkhalliha tched f lfo9 */}
      <div className="search">
        {/* f /acheter w /location l type déjà m3rof, donc ma kanbiynouch had les boutons */}
        {!type && (
          <div className="search-type">
            <button className={typeChoisi === '' ? 'active' : ''} onClick={() => changer('type', '')}>{t('tous')}</button>
            <button className={typeChoisi === 'vente' ? 'active' : ''} onClick={() => changer('type', 'vente')}>{t('acheter')}</button>
            <button className={typeChoisi === 'location' ? 'active' : ''} onClick={() => changer('type', 'location')}>{t('louer')}</button>
          </div>
        )}
        <select value={ville} onChange={(e) => changer('ville', e.target.value)} aria-label={t('ville')}>
          <option value="">{t('toutesVilles')}</option>
          {/* value tb9a b français (l'filtre), ghir l'ktaba li katbdel */}
          {villes.map((v) => <option key={v} value={v}>{mot(v)}</option>)}
        </select>
        <select value={categorie} onChange={(e) => changer('cat', e.target.value)} aria-label={t('typeBien')}>
          <option value="">{t('tousTypes')}</option>
          {CATEGORIES.filter((c) => c !== 'tous').map((c) => <option key={c} value={c}>{mot(c)}</option>)}
        </select>
        <select value={tri} onChange={(e) => setTri(e.target.value)} aria-label={t('trier')}>
          <option value="">{t('trier')}</option>
          <option value="asc">{t('prixCroissant')}</option>
          <option value="desc">{t('prixDecroissant')}</option>
        </select>
      </div>

      <div className="grid">
        {resultat.map((p) => <PropertyCard key={p.id} p={p} />)}
      </div>
      {resultat.length === 0 && <p className="empty">{t('aucune')}</p>}
    </section>
  )
}
