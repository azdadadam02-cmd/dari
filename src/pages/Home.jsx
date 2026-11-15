import Listings from '../components/Listings'

export default function Home({ properties }) {
  const scrollToAnnonces = () =>
    document.getElementById('annonces').scrollIntoView({ behavior: 'smooth' })

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

      <Listings properties={properties} />
    </main>
  )
}
