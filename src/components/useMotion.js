import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function useMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const watch = () => {
      ScrollTrigger.getAll().forEach((s) => { if (!s.trigger?.isConnected) s.kill() })

      const hero = document.querySelector('.hero:not([data-in])')
      if (hero) {
        hero.dataset.in = '1'
        gsap.from(hero.querySelectorAll('h1, p, .btn-orange'), { y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out', clearProps: 'all' })
      }

      const els = [...document.querySelectorAll('main section:not(.hero-wrap), .card, .agence')].filter((el) => !el.dataset.in)
      if (!els.length) return
      els.forEach((el) => { el.dataset.in = '1' })
      gsap.set(els, { opacity: 0, y: 40 })
      ScrollTrigger.batch(els, {
        start: 'top 92%',
        once: true,
        onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', clearProps: 'opacity,transform' }),
      })
    }

    watch()
    const mo = new MutationObserver(watch)
    mo.observe(document.getElementById('root'), { childList: true, subtree: true })
    return () => {
      mo.disconnect()
      gsap.ticker.remove(tick)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((s) => s.kill())
    }
  }, [])
}
