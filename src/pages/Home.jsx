import { useSearchParams } from 'react-router-dom'
import { CATEGORIES } from '../data'
import Listings from '../components/Listings'

// Les 3 blocs dyal "Pourquoi dari"
const AVANTAGES = [
  { titre: 'Des annonces vérifiées', texte: 'Chaque bien est contrôlé par nos agences partenaires avant d\'être publié.' },
  { titre: 'Partout au Maroc', texte: 'De Tanger à Agadir, trouvez un bien dans la ville et le quartier qui vous conviennent.' },
  { titre: 'Un contact direct', texte: 'Appelez ou écrivez à l\'agence en un clic, sans intermédiaire.' },
]

export default function Home({ properties }) {
  const [, setParams] = useSearchParams()

  const scrollToAnnonces = () =>
    document.getElementById('annonces').scrollIntoView({ behavior: 'smooth' })

  // clic 3la carré dyal catégorie: nfiltriw la liste lte7t w nhbtou liha
  const choisirCategorie = (c) => {
    setParams({ cat: c }, { replace: true })
    scrollToAnnonces()
  }

  return (
    <main>
      <section className="hero-wrap">
        <div className="hero">
          <h1>
            Trouvez la propriété<br />
            de vos rêves <span className="script">au Maroc.</span>
          </h1>
          <p>
            Que vous souhaitiez acheter ou louer,<br />
            découvrez les meilleures offres sur notre plateforme
          </p>
          <button className="btn-orange" onClick={scrollToAnnonces}>
            naviguer maintenant
          </button>
        </div>
      </section>

      <section className="tiles">
        {CATEGORIES.filter((c) => c !== 'tous').map((c) => {
          const n = properties.filter((p) => p.categorie === c).length
          return (
            <button key={c} onClick={() => choisirCategorie(c)}>
              <strong>{c}</strong>
              <span>{n} {n > 1 ? 'propriétés' : 'propriété'}</span>
            </button>
          )
        })}
      </section>

      <Listings properties={properties} />

      <section className="avantages">
        <h2>Pourquoi choisir <span className="script">dari ?</span></h2>
        <div>
          {AVANTAGES.map((a, i) => (
            <article key={a.titre}>
              <span className="num">0{i + 1}</span>
              <h3>{a.titre}</h3>
              <p>{a.texte}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
