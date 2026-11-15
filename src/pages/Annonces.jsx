import Listings from '../components/Listings'

// Page wa7da kat5dem l "Acheter" w "Location" (ghir type li kaytbdel)
export default function Annonces({ properties, type, titre }) {
  return (
    <main>
      <h1 className="page-title">{titre}</h1>
      <Listings properties={properties} type={type} />
    </main>
  )
}
