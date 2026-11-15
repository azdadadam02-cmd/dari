import { Routes, Route, useLocation } from 'react-router-dom'
import { PROPERTIES, useStorage } from './data'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Annonces from './pages/Annonces'
import Agences from './pages/Agences'
import Login from './pages/Login'
import Compte from './pages/Compte'
import Detail from './pages/Detail'
import useReveal from './components/useReveal'

export default function App() {
  // Les annonces jayin mn data.js, w l'utilisateur mkhbi f localStorage
  const properties = PROPERTIES
  const [user, setUser] = useStorage('dari-user', null)
  useReveal() // animation dyal les sections mlli katscrolly

  // page login katban bohdha: bla navbar w footer
  const pageSeule = useLocation().pathname === '/login'

  return (
    <>
      {!pageSeule && <Navbar user={user} />}
      <Routes>
        <Route path="/" element={<Home properties={properties} />} />
        <Route path="/acheter" element={<Annonces properties={properties} type="vente" />} />
        <Route path="/location" element={<Annonces properties={properties} type="location" />} />
        <Route path="/bien/:id" element={<Detail properties={properties} />} />
        <Route path="/agences" element={<Agences properties={properties} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/compte" element={<Compte user={user} setUser={setUser} />} />
      </Routes>
      {!pageSeule && <Footer />}
    </>
  )
}
