import { Navigate } from 'react-router-dom'

export default function Compte({ user, setUser }) {
  if (!user) return <Navigate to="/login" />

  return (
    <main className="page-box">
      <div className="profil">
        {/* dowara fiha l7arf lowl dyal smiya */}
        <span className="avatar avatar-lg">{user.nom[0].toUpperCase()}</span>
        <h1>{user.nom}</h1>
        <p className="muted">{user.email}</p>
        <button className="btn-black" onClick={() => setUser(null)}>Déconnexion</button>
      </div>
    </main>
  )
}
