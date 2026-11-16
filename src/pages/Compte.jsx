import { Navigate } from 'react-router-dom'
import { useLang } from '../i18n'

export default function Compte({ user, setUser }) {
  const { t } = useLang()
  if (!user) return <Navigate to="/login" />

  return (
    <main className="page-box">
      <div className="profil">
        
        <span className="avatar avatar-lg">{user.nom[0].toUpperCase()}</span>
        <h1>{user.nom}</h1>
        <p className="muted">{user.email}</p>
        <button className="btn-black" onClick={() => setUser(null)}>{t('deconnexion')}</button>
      </div>
    </main>
  )
}
