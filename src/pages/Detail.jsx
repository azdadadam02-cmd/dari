import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AGENCES } from '../data'
import { useLang } from '../i18n'

// Page dyal dar wa7da: kanjibo l'id mn l'URL (/bien/3) w kan9elbo 3la l'annonce
export default function Detail({ properties }) {
  const { id } = useParams()
  const { t, mot, titre, description } = useLang()
  const p = properties.find((x) => String(x.id) === id)
  const [photo, setPhoto] = useState(0) // ina tsswira li katban kbira
  const [choix, setChoix] = useState(false) // true = nbiyno WhatsApp w Appeler
  const [zoom, setZoom] = useState(false) // true = tsswira katban b size dyalha

  // mlli katbdel l'annonce: nrj3o l lfo9 w l tsswira lowla
  // 'instant' bach page jdida tbda mn lfo9 direct, bla smooth scroll
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); setPhoto(0); setChoix(false) }, [id])

  // touche Échap katsed l'tsswira lkbira
  useEffect(() => {
    const fermer = (e) => e.key === 'Escape' && setZoom(false)
    window.addEventListener('keydown', fermer)
    return () => window.removeEventListener('keydown', fermer)
  }, [])

  if (!p) {
    return (
      <main className="page-box">
        <h1>{t('introuvable')}</h1>
        <Link to="/" className="back">{t('retourAccueil')}</Link>
      </main>
    )
  }

  // l'agence dyal nfs lmdina, ila makantch nakhdo lowla
  const agence = AGENCES.find((a) => a.ville === p.ville) || AGENCES[0]
  const whatsapp = 'https://wa.me/212' + agence.tel.replace(/\D/g, '').slice(1)
  const lien = p.type === 'vente' ? '/acheter' : '/location'

  return (
    <main>
      <nav className="breadcrumb">
        <Link to="/">{t('accueil')}</Link> {t('sep')} <Link to={lien}>{t(p.type === 'vente' ? 'acheter' : 'louer')}</Link> {t('sep')} {mot(p.ville)} {t('sep')} {mot(p.categorie)}
      </nav>

      <div className="detail-head">
        <div>
          <h1>{titre(p)}</h1>
          <p className="muted">{mot(p.quartier)}{t('virgule')} {mot(p.ville)}</p>
        </div>
        <p className="price">
          {p.prix.toLocaleString('fr-FR')} {t('dh')}{p.type === 'location' && t('parMois')}
        </p>
      </div>

      {/* 1. tsswira principale kbira, w bouton Envoyer fo9ha lte7t 3la liser */}
      <div className="detail-photo">
        {/* clic 3la tsswira = katban b size dyalha */}
        <img src={p.images[photo]} alt={titre(p)} className="zoomable" onClick={() => setZoom(true)} />

        {/* bouton wa7ed: mlli katclicky 3lih kaytl3 message: WhatsApp ola Appel? */}
        <div className="contact-choix">
          {choix ? (
            <>
              <p>{t('question')}</p>
              <div className="contact-btns">
                <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
                <a href={`tel:${agence.tel.replace(/\s/g, '')}`}>{t('appel')}</a>
              </div>
            </>
          ) : (
            <button className="btn-orange" onClick={() => setChoix(true)}>{t('envoyer')}</button>
          )}
        </div>
      </div>

      {/* 2. les photos secondaires */}
      <div className="thumbs">
        {p.images.map((src, i) => (
          <button key={src} className={i === photo ? 'active' : ''} onClick={() => setPhoto(i)}>
            <img src={src} alt={`${t('photo')} ${i + 1}`} />
          </button>
        ))}
      </div>

      {/* 3. les détails sghar */}
      <div className="chips">
        {p.chambres > 0 && <span>{p.chambres} {t('chambres')}</span>}
        {p.sdb > 0 && <span>{p.sdb} {t('sdb')}</span>}
        <span>{p.surface} m²</span>
        <span>{mot(p.categorie)}</span>
        <span>{mot(p.ville)}</span>
      </div>

      {/* 4. trois colonnes: description | caractéristiques | m3lomat dyal lbiya3 */}
      <div className="detail-infos">
        <div>
          <h2>{t('description')}</h2>
          <p>{description(p)}</p>
        </div>
        <div>
          <h2>{t('caracteristiques')}</h2>
          <ul className="checks">
            {p.caracteristiques.map((c) => <li key={c}>{mot(c)}</li>)}
          </ul>
        </div>
        <div>
          <h2>{t('annonceur')}</h2>
          <p><strong>{t('nom')}</strong> {agence.nom}</p>
          <p><strong>{t('type')}</strong> {t('agenceImmo')}</p>
          <p><strong>{t('villeDeux')}</strong> {mot(agence.ville)}</p>
          <p><strong>{t('telephone')}</strong> <span dir="ltr">{agence.tel}</span></p>
        </div>
      </div>

      {/* tsswira b size dyalha fo9 kolchi: clic f ay blasa ola Échap bach tsedha */}
      {zoom && (
        <div className="lightbox" onClick={() => setZoom(false)}>
          <img src={p.images[photo]} alt={titre(p)} />
          <button className="lightbox-close">{t('fermer')}</button>
        </div>
      )}
    </main>
  )
}
