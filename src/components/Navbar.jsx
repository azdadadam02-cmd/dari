import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useLang } from '../i18n'

export default function Navbar({ user }) {
  const { t } = useLang()

  return (
    <nav className="navbar">
      <Link to="/" className="logo"><Logo /></Link>

      <div className="nav-links">
        <NavLink to="/" end>{t('navHome')}</NavLink>
        <NavLink to="/acheter">{t('navAcheter')}</NavLink>
        <NavLink to="/location">{t('navLocation')}</NavLink>
        <NavLink to="/agences">{t('navAgences')}</NavLink>
      </div>

      <div className="nav-right">
        {!user && <Link to="/login">{t('seConnecter')}</Link>}
        {user ? (
          // pill k7la: dwira fiha l7arf lowel + l'email
          <Link to="/compte" className="profile-pill" title={user.nom} aria-label={t('monCompte')}>
            <span className="avatar">{user.nom[0].toUpperCase()}</span>
            <span className="profile-email">{user.email}</span>
          </Link>
        ) : (
          <Link to="/login" className="btn-black">{t('votreCompte')}</Link>
        )}
      </div>
    </nav>
  )
}
