import Listings from '../components/Listings'
import { useLang } from '../i18n'


export default function Annonces({ properties, type }) {
  const { t } = useLang()

  return (
    <main>
      <h1 className="page-title">{t(type === 'vente' ? 'titreAcheter' : 'titreLouer')}</h1>
      <Listings properties={properties} type={type} />
    </main>
  )
}
