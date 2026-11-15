import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../data'

const VIDE = { titre: '', ville: '', prix: '', type: 'vente', categorie: 'appartements', chambres: '', surface: '', image: '' }

export default function Vendre({ user, addProperty }) {
  const [form, setForm] = useState(VIDE)
  const navigate = useNavigate()

  if (!user) {
    return (
      <main className="page-box">
        <h1>Publier une annonce</h1>
        <p>Vous devez <Link to="/login">vous connecter</Link> pour publier une annonce.</p>
      </main>
    )
  }

  // Kat update l champ li tbdel b smito (name)
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    addProperty({
      ...form,
      prix: Number(form.prix),
      chambres: Number(form.chambres) || 0,
      surface: Number(form.surface),
      image: form.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      owner: user.email,
    })
    navigate(form.type === 'vente' ? '/acheter' : '/location')
  }

  return (
    <main className="page-box">
      <h1>Publier une annonce</h1>
      <form className="form" onSubmit={submit}>
        <input name="titre" placeholder="Titre" value={form.titre} onChange={change} required />
        <input name="ville" placeholder="Ville" value={form.ville} onChange={change} required />
        <input name="prix" type="number" min="1" placeholder="Prix (DH)" value={form.prix} onChange={change} required />
        <select name="type" value={form.type} onChange={change}>
          <option value="vente">À vendre</option>
          <option value="location">À louer</option>
        </select>
        <select name="categorie" value={form.categorie} onChange={change}>
          {CATEGORIES.filter((c) => c !== 'tous').map((c) => <option key={c}>{c}</option>)}
        </select>
        <input name="chambres" type="number" min="0" placeholder="Chambres" value={form.chambres} onChange={change} />
        <input name="surface" type="number" min="1" placeholder="Surface (m²)" value={form.surface} onChange={change} required />
        <input name="image" type="url" placeholder="Lien de l'image (optionnel)" value={form.image} onChange={change} />
        <button className="btn-orange">Publier</button>
      </form>
    </main>
  )
}
