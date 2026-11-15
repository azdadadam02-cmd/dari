import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <p className="logo"><Logo /></p>
          <p>Votre plateforme pour acheter ou louer un bien immobilier au Maroc.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:0603551653">06 03 55 16 53</a>
          <p>Nador, Maroc</p>
        </div>
      </div>
      <p className="footer-bottom">© 2026 dari — Immobilier au Maroc</p>
    </footer>
  )
}
