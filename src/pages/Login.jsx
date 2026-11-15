import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { useLang } from '../i18n'

// Login "fake" (bla backend): kankhbiw ghir smiya w email f localStorage.
// L mot de passe ma kankhbiwh f ta blasa.
export default function Login({ setUser }) {
  const { t } = useLang()
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    setUser({ nom, email })
    navigate('/compte')
  }

  return (
    <div className="login">
      {/* jiha lowla: tsswira dyal l3a9ar */}
      <div className="login-image">
        <Link to="/" className="logo"><Logo /></Link>
        <div>
          <h2>{t('heroTitre1')} {t('heroTitre2')} <span className="script">{t('heroScript')}</span></h2>
          <p>{t('loginTexte')}</p>
        </div>
      </div>

      {/* jiha tanya: l formulaire */}
      <div className="login-form">
        <Link to="/" className="login-back">{t('retourAccueil')}</Link>
        <form onSubmit={submit}>
          <h1>{t('bienvenue')}</h1>
          <p className="muted">{t('loginSous')}</p>

          <label>
            {t('nomComplet')}
            <input placeholder={t('nomExemple')} value={nom} onChange={(e) => setNom(e.target.value)} required />
          </label>
          <label>
            {t('email')}
            <input type="email" dir="ltr" placeholder="exemple@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            {t('motDePasse')}
            <input type="password" placeholder="••••••••" minLength={6} required />
          </label>

          <button className="btn-orange">{t('boutonConnecter')}</button>
        </form>
      </div>
    </div>
  )
}
