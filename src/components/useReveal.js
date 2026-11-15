import { useEffect } from 'react'

// Animation: kol section w kol carte katbān b chwiya (fade + kat tla3) mlli katwsal liha f scroll.
// MutationObserver kaychouf 7ta les cartes jdad (mlli katbdel l'filtre ola l'page).
export default function useReveal() {
  useEffect(() => {
    // ila l'utilisateur 7abes les animations f système dyalo, ma ndiro walo
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target) // kat animer merra wa7da
        }
      })
    }, { threshold: 0.1 })

    const watch = () =>
      document.querySelectorAll('main section, .card, .agence').forEach((el) => {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal')
          io.observe(el)
        }
      })

    watch()
    const mo = new MutationObserver(watch)
    mo.observe(document.getElementById('root'), { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}
