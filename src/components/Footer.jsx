import Logo from './Logo'
import { useLang } from '../i18n'

export default function Footer() {
  const { t, lang, setLang } = useLang()

  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <p className="logo"><Logo /></p>
          <p>{t('footerTexte')}</p>
        </div>
        <div>
          <h4>{t('contact')}</h4>
          <a href="tel:0603551653" dir="ltr">06 03 55 16 53</a>
          <p>{t('adresse')}</p>
        </div>
        {/* l'client ybdel l'logha mn hna (katb9a mkhbiya f localStorage) */}
        <div>
          <h4>{t('langue')}</h4>
          <div className="langues">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')} lang="fr">Français</button>
            <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')} lang="ar">العربية</button>
          </div>
        </div>
      </div>
      <p className="footer-bottom">{t('copyright')}</p>
    </footer>
  )
}
