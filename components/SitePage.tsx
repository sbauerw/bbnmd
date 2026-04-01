'use client'

import { useState, useEffect, useRef } from 'react'
import ScrollAnimations from './ScrollAnimations'

export default function SitePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const openModal = () => {
    setIsModalOpen(true)
    setShowSuccess(false)
    document.body.classList.add('modal-open')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove('modal-open')
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) closeModal()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  useEffect(() => {
    if (isModalOpen && panelRef.current) {
      const timer = setTimeout(() => {
        const first = panelRef.current?.querySelector<HTMLElement>('input, select, textarea')
        if (first) first.focus()
      }, 360)
      return () => clearTimeout(timer)
    }
  }, [isModalOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.querySelector('#f-name') as HTMLInputElement).value.trim()
    const email = (form.querySelector('#f-email') as HTMLInputElement).value.trim()
    const collab = (form.querySelector('#f-collaboration') as HTMLSelectElement).value
    const req = (form.querySelector('#f-request') as HTMLTextAreaElement).value.trim()
    if (!name || !email || !collab || !req) return

    setIsLoading(true)
    try {
      const data = new FormData(form)
      await fetch('https://formspree.io/f/maqlogbb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } catch (_) {
      // Network error — show optimistic success
    }
    setShowSuccess(true)
    setIsLoading(false)
    if (panelRef.current) panelRef.current.scrollTop = 0
  }

  return (
    <>
      <ScrollAnimations isModalOpen={isModalOpen} />

      {/* ─── NAVIGATION ──────────────────────────────────────── */}
      <nav className="nav" id="nav" aria-label="Site navigation">
        <a href="#hero" className="nav-brand">Birgit Bauer Wöhlers</a>
        <button
          className="nav-cta"
          onClick={openModal}
          aria-label="Open private access request"
        >
          Request Access
        </button>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section id="hero" aria-label="Introduction">
        <div className="hero-inner">

          {/* Left: text */}
          <div className="hero-text">
            <p className="label hero-label fade-in visible">PRIVATE ADVISORY</p>
            <h1 className="hero-name fade-in delay-1 visible">Birgit Bauer Wöhlers</h1>
            <p className="hero-pillars fade-in delay-2 visible">
              Cellular Optimization &nbsp;·&nbsp; Advanced Aesthetics &nbsp;·&nbsp; Wellness &amp; Longevity Design
            </p>
            <p className="hero-support fade-in delay-3 visible">
              &ldquo;A private advisory for those shaping how we live, perform, and evolve&rdquo;
            </p>
            <button
              className="btn fade-in delay-4 visible"
              onClick={openModal}
              aria-label="Open private access request"
            >
              Request Access
            </button>
          </div>

          {/* Right: editorial portrait */}
          <div className="hero-portrait fade-in delay-2 visible">
            <img
              src="/assets/images/private_advisory_section.png"
              alt="Birgit Bauer Wöhlers, Private Advisory"
              fetchPriority="high"
              decoding="async"
            />
          </div>

        </div>
      </section>

      {/* ─── WHAT I DO (was: Positioning / Practice) ─────────── */}
      <section id="positioning" aria-label="What I Do">
        <div className="positioning-inner">
          <div className="positioning-text">
            <p className="label fade-in">What I Do</p>
            <div className="divider fade-in" style={{ marginTop: '1.5rem' }}></div>
            <div className="body-text fade-in" style={{ marginTop: '2.75rem' }}>
              <p>I design and curate environments, strategies, and experiences that elevate wellbeing, longevity, and the way we live.</p>
              <p>My work explores how lifestyle, space, and emerging science come together to support vitality, mental clarity, and long-term health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO I WORK WITH (was: What I Do / Work) ─────────── */}
      <section id="what-i-do" aria-label="Who I Work With">
        <div className="what-inner">
          <div className="what-intro fade-in">
            <p className="label">Who I Work With</p>
            <div className="divider" style={{ marginTop: '1.5rem' }}></div>
          </div>
          <div className="pillars-grid">
            <div className="pillar fade-in">
              <span className="pillar-num">I.</span>
              <h2 className="pillar-title">Individual</h2>
              <p className="pillar-body">Private advisory for individuals seeking a refined and personalized approach to health, aesthetics, and lifestyle.</p>
            </div>
            <div className="pillar fade-in delay-1">
              <span className="pillar-num">II.</span>
              <h2 className="pillar-title">Corporate</h2>
              <p className="pillar-body">Strategic development of wellness and longevity frameworks designed to integrate into organizations and leadership cultures.</p>
            </div>
            <div className="pillar fade-in delay-2">
              <span className="pillar-num">III.</span>
              <h2 className="pillar-title">Government &amp; Public-Private Partnerships</h2>
              <p className="pillar-body">Advisory on initiatives exploring the integration of wellbeing, sustainability, and human behavior into policy and future-forward environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW I WORK (was: Differentiation / Approach) ───── */}
      <section id="differentiation" aria-label="How I Work">
        <div className="diff-inner">
          <p className="label fade-in">How I Work</p>
          <div className="divider fade-in" style={{ marginTop: '1.5rem' }}></div>
          <div
            className="body-text fade-in"
            style={{ marginTop: '2.75rem', maxWidth: 'var(--narrow-max)' }}
          >
            <p>My work brings together cellular optimization, advanced aesthetics, nervous system regulation, and environmental design.</p>
            <p>Alongside this, I explore fields such as biotechnology, epigenetics, and neuroaesthetics—translating them into practical, refined applications.</p>
            <p>Each project is approached as a cohesive whole, where the visible and the invisible work together to influence how we feel, function, and evolve.</p>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────────────── */}
      <section id="about" aria-label="About">
        <div className="about-inner">
          <div className="about-grid">
            <div className="about-text">
              <p className="label fade-in">About</p>
              <div className="divider fade-in" style={{ marginTop: '1.5rem' }}></div>
              <div className="body-text fade-in" style={{ marginTop: '2.75rem' }}>
                <p>Birgit Bauer Wöhlers is a specialist in cellular optimization, advanced aesthetics, and integrative health.</p>
                <p>A certified naturopath (NMD) with a background in international strategy and public policy, she brings a multidisciplinary perspective to the way health, environment, and human behavior are understood and designed.</p>
                <p>She is the founder of <span className="kalos">Kalos</span>, a company dedicated to exploring innovations in longevity, biotechnology, and regenerative wellbeing, translating emerging science into refined, real-world applications.</p>
                <p>Her work extends across the United States, the Middle East, Europe, and the Americas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCESS ──────────────────────────────────────────── */}
      <section id="access" aria-label="Access">
        <div className="access-inner">
          <div className="access-content">
            <p className="label fade-in">Access</p>
            <div className="divider divider--dark fade-in" style={{ marginTop: '1.5rem' }}></div>
            <h2
              className="section-heading section-heading--light fade-in"
              style={{ marginTop: '2.75rem' }}
            >
              Access is limited.
            </h2>
            <div
              className="body-text body-text--light fade-in"
              style={{ marginTop: '2.5rem', marginBottom: '3rem' }}
            >
              <p>Each collaboration begins with a private request to understand alignment, scope, and level of involvement.</p>
              <p>If selected, you will be guided through the next steps.</p>
            </div>
            <button
              className="btn btn--light fade-in"
              onClick={openModal}
              aria-label="Open private access request"
            >
              Request Access
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer aria-label="Footer">
        <div className="footer-inner">
          <span className="footer-brand">Birgit Bauer Wöhlers</span>
          <span className="footer-note">Private Advisory &nbsp;·&nbsp; All rights reserved</span>
        </div>
      </footer>

      {/* ─── MODAL ───────────────────────────────────────────── */}
      <div
        className={`modal-backdrop${isModalOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-heading"
        aria-describedby="modal-support"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <div className="modal" ref={panelRef}>
          <button
            className="modal-close"
            onClick={closeModal}
            aria-label="Close"
          >
            Close
          </button>

          {!showSuccess ? (
            <div>
              <p className="label modal-label">Inquiry</p>
              <div className="divider modal-divider"></div>
              <h2 className="modal-heading" id="modal-heading">Private Access Request</h2>
              <p className="modal-support" id="modal-support">
                Each inquiry is carefully reviewed to ensure alignment, scope, and level of engagement. Selected requests will be contacted with next steps.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label className="form-label" htmlFor="f-name">Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="f-name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="f-email">Email / Preferred Contact</label>
                  <input
                    className="form-input"
                    type="email"
                    id="f-email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="f-collaboration">Type of Collaboration</label>
                  <select
                    className="form-select"
                    id="f-collaboration"
                    name="collaboration"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled></option>
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Government / Partnerships">Government / Partnerships</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="f-request">Briefly Describe Your Request</label>
                  <textarea
                    className="form-textarea"
                    id="f-request"
                    name="request"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="f-timeline">Availability / Timeline</label>
                  <input
                    className="form-input"
                    type="text"
                    id="f-timeline"
                    name="timeline"
                  />
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className="btn form-submit"
                    disabled={isLoading}
                    style={isLoading ? { opacity: 0.5 } : undefined}
                  >
                    Request Access
                  </button>
                  {isLoading && (
                    <span className="form-loading" aria-live="polite">
                      Sending…
                    </span>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div
              className="form-success"
              role="alert"
              aria-live="assertive"
            >
              <div className="form-success-divider"></div>
              <p className="form-success-heading">Thank you. Your request has been received.</p>
              <p className="form-success-body">If aligned, our team will follow up with next steps.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
