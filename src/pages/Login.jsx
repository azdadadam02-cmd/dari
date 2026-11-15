import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

// Login "fake" (bla backend): kankhbiw ghir smiya w email f localStorage.
// L mot de passe ma kankhbiwh f ta blasa.
export default function Login({ setUser }) {
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
          <h2>Trouvez la propriété de vos rêves <span className="script">au Maroc.</span></h2>
          <p>Achetez ou louez en toute confiance avec nos agences partenaires.</p>
        </div>
      </div>

      {/* jiha tanya: l formulaire */}
      <div className="login-form">
        <Link to="/" className="login-back">← Retour à l'accueil</Link>
        <form onSubmit={submit}>
          <h1>Bienvenue</h1>
          <p className="muted">Connectez-vous pour accéder à votre compte.</p>

          <label>
            Nom complet
            <input placeholder="Ex : Adam El Amrani" value={nom} onChange={(e) => setNom(e.target.value)} required />
          </label>
          <label>
            Email
            <input type="email" placeholder="exemple@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Mot de passe
            <input type="password" placeholder="••••••••" minLength={6} required />
          </label>

          <button className="btn-orange">Se connecter</button>
        </form>
      </div>
    </div>
  )
}
