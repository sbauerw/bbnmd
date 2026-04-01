'use client'

import { useEffect } from 'react'

interface ScrollAnimationsProps {
  isModalOpen: boolean
}

export default function ScrollAnimations({ isModalOpen }: ScrollAnimationsProps) {
  // Scroll fade-in via IntersectionObserver
  useEffect(() => {
    const fadeEls = document.querySelectorAll<HTMLElement>('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    )

    fadeEls.forEach((el) => {
      if (!el.closest('#hero')) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Nav scroll state
  useEffect(() => {
    const nav = document.getElementById('nav')
    if (!nav) return

    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 36)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
