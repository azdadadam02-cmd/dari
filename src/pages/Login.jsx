import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Login "fake" (bla backend): kankhbiw ghir smiya w email f localStorage
export default function Login({ setUser }) {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    setUser({ nom, email })
    navigate('/compte')
  }

  return (
    <main className="page-box">
      <h1>Se connecter</h1>
      <form className="form" onSubmit={submit}>
        <input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button className="btn-orange">Connexion</button>
      </form>
    </main>
  )
}
