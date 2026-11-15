import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-house">d</span>ari
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/acheter">ACHETER</NavLink>
        <NavLink to="/location">LOCATION</NavLink>
        <NavLink to="/agences">AGENCE IMMOBILIERE</NavLink>
      </div>

      <div className="nav-right">
        {!user && <Link to="/login">se connecter</Link>}
        {user ? (
          <Link to="/compte" className="avatar" title={user.nom} aria-label="Mon compte">
            {user.nom[0].toUpperCase()}
          </Link>
        ) : (
          <Link to="/login" className="btn-black">votre compte</Link>
        )}
      </div>
    </nav>
  )
}
