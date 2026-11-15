import { Link } from 'react-router-dom'
import { AGENCES } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <p className="logo"><span className="logo-house">d</span>ari</p>
          <p>Votre plateforme pour acheter ou louer un bien immobilier au Maroc.</p>
        </div>
        <div>
          <h4>Liens</h4>
          <Link to="/">Accueil</Link>
          <Link to="/acheter">Acheter</Link>
          <Link to="/location">Louer</Link>
          <Link to="/agences">Agences</Link>
        </div>
        <div>
          <h4>Villes</h4>
          {AGENCES.map((a) => (
            <Link key={a.ville} to={`/acheter?ville=${a.ville}`}>{a.ville}</Link>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:0522000001">05 22 00 00 01</a>
          <p>Casablanca, Maroc</p>
        </div>
      </div>
      <p className="footer-bottom">© 2026 dari — Immobilier au Maroc</p>
    </footer>
  )
}
