import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AGENCES } from '../data'
import { useLang } from '../i18n'

export default function Agences({ properties }) {
  const { t, mot, nbAnnonces } = useLang()
  const [ville, setVille] = useState('') // "" = toutes les villes

  const villes = [...new Set(AGENCES.map((a) => a.ville))]
  const liste = AGENCES.filter((a) => !ville || a.ville === ville)

  return (
    <main>
      {/* l'entête: bhal l'hero dyal Home walakin sghir */}
      <section className="agences-head">
        <h1>{t('agTitre')} <span className="script">{t('agScript')}</span></h1>
        <p>{t('agTexte')}</p>
      </section>

      {/* filtre b lmdina */}
      <div className="agences-filtre">
        <button className={ville === '' ? 'active' : ''} onClick={() => setVille('')}>{t('toutes')}</button>
        {villes.map((v) => (
          <button key={v} className={ville === v ? 'active' : ''} onClick={() => setVille(v)}>{mot(v)}</button>
        ))}
      </div>

      <div className="agences-grid">
        {liste.map((a) => {
          // ch7al mn annonce kayna f lmdina dyal l'agence
          const nb = properties.filter((p) => p.ville === a.ville).length
          const tel = a.tel.replace(/\s/g, '')
          return (
            <article className="agence" key={a.nom}>
              <div className="agence-top">
                <span className="avatar">{a.nom[0]}</span>
                <div>
                  <h3>{a.nom}</h3>
                  <p className="muted">{mot(a.ville)}</p>
                </div>
              </div>
              <p className="muted">{t('tel')} <span dir="ltr">{a.tel}</span></p>
              <p className="agence-nb"><strong>{nbAnnonces(nb)}</strong> {t('a')} {mot(a.ville)}</p>
              <div className="contact-btns">
                <a href={`https://wa.me/212${tel.slice(1)}`} target="_blank" rel="noreferrer">WhatsApp</a>
                <a href={`tel:${tel}`}>{t('appel')}</a>
              </div>
              <Link to={`/?ville=${encodeURIComponent(a.ville)}`} className="btn-orange agence-voir">
                {t('voirAnnonces')}
              </Link>
            </article>
          )
        })}
      </div>

      {/* nfs l'bloc dyal Home */}
      <section className="cta-agence">
        <div>
          <h2>{t('ctaTitre')}</h2>
          <p>{t('ctaTexte')}</p>
        </div>
        <a href="mailto:contact@dari.ma" className="btn-white">{t('nousContacter')}</a>
      </section>
    </main>
  )
}
