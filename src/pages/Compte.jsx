import { Navigate } from 'react-router-dom'

export default function Compte({ user, setUser }) {
  if (!user) return <Navigate to="/login" />

  return (
    <main className="page-box">
      <h1>Bonjour {user.nom}</h1>
      <p className="muted">{user.email}</p>
      <button className="btn-black" onClick={() => setUser(null)}>Déconnexion</button>
    </main>
  )
}
