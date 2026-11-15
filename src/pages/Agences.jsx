import { AGENCES } from '../data'

export default function Agences() {
  return (
    <main>
      <h1 className="page-title">Agences immobilières</h1>
      <div className="grid">
        {AGENCES.map((a) => (
          <div className="card card-body" key={a.nom}>
            <h3>{a.nom}</h3>
            <p className="muted">{a.ville}</p>
            <p className="price">{a.tel}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
