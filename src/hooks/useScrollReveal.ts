import { useEffect } from 'react'

/**
 * useScrollReveal
 *
 * IntersectionObserver-based scroll reveal.
 * Elementos com .reveal / .reveal-left / .reveal-right / .reveal-stagger
 * recebem .revealed ao entrar no viewport, disparando transições CSS.
 *
 * Animate skill compliance:
 * - Propósito: "spatial consistency" — mostra sequência de conteúdo.
 * - Ferramenta: IntersectionObserver (não window.scroll — sem reflow).
 * - Propriedades: opacity + transform apenas (GPU-safe).
 * - Reduced motion: elementos já ficam visíveis sem animação.
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-stagger'

    let observer: IntersectionObserver | null = null
    let rafId: number

    rafId = requestAnimationFrame(() => {
      const targets = document.querySelectorAll<HTMLElement>(SELECTORS)

      if (prefersReduced) {
        targets.forEach(el => el.classList.add('revealed'))
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.10, rootMargin: '0px 0px -32px 0px' }
      )

      targets.forEach(el => observer!.observe(el))
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer?.disconnect()
    }
  }, [])
}
