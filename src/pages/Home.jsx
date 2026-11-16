import { Link } from 'react-router-dom'
import Listings from '../components/Listings'
import { VILLES_POPULAIRES } from '../data'
import { useLang } from '../i18n'


const AVANTAGES = ['av1', 'av2', 'av3']

export default function Home({ properties }) {
  const { t, mot, nbAnnonces } = useLang()

  const scrollToAnnonces = () =>
    document.getElementById('annonces').scrollIntoView({ behavior: 'smooth' })


  const villes = VILLES_POPULAIRES.map((nom) => ({
    nom,
    annonces: properties.filter((p) => p.ville === nom),
  }))

  return (
    <main>
      <video
        className="page-video"
        src="/hero.mp4"
        autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <section className="hero-wrap">
        <div className="hero">
          <h1>
            {t('heroTitre1')}<br />
            {t('heroTitre2')} <span className="script">{t('heroScript')}</span>
          </h1>
          <p>
            {t('heroTexte1')}<br />
            {t('heroTexte2')}
          </p>
          <button className="btn-orange" onClick={scrollToAnnonces}>
            {t('heroBouton')}
          </button>
        </div>
      </section>

      
      <section className="villes">
        <h2>{t('villesTitre')} <span className="script">{t('villesScript')}</span></h2>
        
        <div className="villes-slider">
          <div className="villes-track">
            {[...villes, ...villes].map((v, i) => {
              const copie = i >= villes.length
              return (
                <Link
                  key={i}
                  to={`/?ville=${encodeURIComponent(v.nom)}`}
                  onClick={scrollToAnnonces}
                  className="ville"
                  style={{ backgroundImage: `url(${v.annonces[0]?.images[0]})` }}
                  aria-hidden={copie || undefined}
                  tabIndex={copie ? -1 : undefined}
                >
                  <h3>{mot(v.nom)}</h3>
                  <span>{nbAnnonces(v.annonces.length)}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Listings properties={properties} />

      <section className="avantages">
        <h2>{t('pourquoi')} <span className="script">{t('pourquoiScript')}</span></h2>
        <div>
          {AVANTAGES.map((cle, i) => (
            <article key={cle}>
              <span className="num">0{i + 1}</span>
              <h3>{t(cle + 'Titre')}</h3>
              <p>{t(cle + 'Texte')}</p>
            </article>
          ))}
        </div>
      </section>

      
      <section className="cta-agence">
        <div>
          <h2>{t('ctaTitre')}</h2>
          <p>{t('ctaTexte')}</p>
        </div>
        <Link to="/agences" className="btn-white">{t('devenirPartenaire')}</Link>
      </section>
    </main>
  )
}
