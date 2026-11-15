import { Routes, Route } from 'react-router-dom'
import { PROPERTIES, useStorage } from './data'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Annonces from './pages/Annonces'
import Agences from './pages/Agences'
import Login from './pages/Login'
import Compte from './pages/Compte'
import Detail from './pages/Detail'

export default function App() {
  // Les annonces jayin mn data.js, w l'utilisateur mkhbi f localStorage
  const properties = PROPERTIES
  const [user, setUser] = useStorage('dari-user', null)

  return (
    <>
      <div className="topbar">DARI IMMOBILIER</div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home properties={properties} />} />
        <Route path="/acheter" element={<Annonces properties={properties} type="vente" titre="Acheter un bien" />} />
        <Route path="/location" element={<Annonces properties={properties} type="location" titre="Louer un bien" />} />
        <Route path="/bien/:id" element={<Detail properties={properties} />} />
        <Route path="/agences" element={<Agences />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/compte" element={<Compte user={user} setUser={setUser} />} />
      </Routes>
      <footer className="footer">© 2026 dari — Immobilier au Maroc</footer>
    </>
  )
}
