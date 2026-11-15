import { Link, Navigate } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

export default function Compte({ user, setUser, properties }) {
  if (!user) return <Navigate to="/login" />

  const mesAnnonces = properties.filter((p) => p.owner === user.email)

  return (
    <main>
      <div className="page-box">
        <h1>Bonjour {user.nom}</h1>
        <p className="muted">{user.email}</p>
        <Link to="/vendre" className="btn-orange">+ Publier une annonce</Link>{' '}
        <button className="btn-black" onClick={() => setUser(null)}>Déconnexion</button>
      </div>

      <h2 className="page-title">Mes annonces</h2>
      <div className="grid">
        {mesAnnonces.map((p) => <PropertyCard key={p.id} p={p} />)}
      </div>
      {mesAnnonces.length === 0 && <p className="empty">Vous n'avez pas encore d'annonces.</p>}
    </main>
  )
}
