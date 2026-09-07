import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Intro() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-intro-content]', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight}`,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-0 flex min-h-screen items-center bg-[#FFFFFF] px-5 py-24 sm:px-8 md:px-12 lg:py-32"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <p
          data-intro-content
          className="font-body text-xs font-medium tracking-[0.3em] text-[#39ABE7] sm:text-sm"
        >
          THE HOUSE
        </p>

        <h2
          data-intro-content
          className="mt-6 font-display text-5xl font-medium leading-[0.95] text-[#0783B6] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Not <span className="text-[#c9a86a]">designed </span>to impress you.
          <br />
          <span className="text-[#c9a86a]">Designed</span> to let you exhale.
        </h2>

        <div
          data-intro-content
          className="mx-auto mt-10 h-px w-16 bg-[#9BD4E5]"
        />

        <p
          data-intro-content
          className="mx-auto mt-10 max-w-2xl font-body text-base leading-8 text-[#c9a86a] sm:text-lg"
        >
          Some places ask for your attention.
          <br className="hidden sm:block" />
          Ardea House gives it back. Every room, corner, and shared table is shaped
          around one simple idea: when life slows down, the good parts become easier
          to notice.
        </p>

        <Link
          data-intro-content
          to="/the-house"
          className="group mt-9 inline-flex items-center gap-3 font-body text-sm font-semibold tracking-wide text-[#0783B6]"
        >
          <span>Our Story</span>
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}

export default Intro