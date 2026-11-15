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
        <NavLink to="/vendre">VENDRE</NavLink>
        <NavLink to="/agences">AGENCE IMMOBILIERE</NavLink>
      </div>

      <div className="nav-right">
        {!user && <Link to="/login">se connecter</Link>}
        <Link to={user ? '/compte' : '/login'} className="btn-black">
          {user ? user.nom : 'votre compte'}
        </Link>
      </div>
    </nav>
  )
}
