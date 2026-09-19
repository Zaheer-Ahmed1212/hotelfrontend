import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const spaces = [
  {
    title: 'The Living Room',
    text: 'A calm gathering place framed by natural light, soft textures, and views that invite you to stay a little longer.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'The Dining Room',
    text: 'An intimate setting for long lunches, candlelit dinners, and conversations that continue well past dessert.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'The Garden',
    text: 'A quiet outdoor world of greenery, open skies, and slow afternoons designed for doing absolutely nothing.',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80'
  }
]

const details = [
  ['Private residence', 'Entire house reserved exclusively for your stay'],
  ['Three bedrooms', 'Thoughtfully designed spaces for restful nights'],
  ['Private garden', 'Open-air spaces made for slow mornings'],
  ['Curated interiors', 'Natural materials and considered details throughout']
]

function TheHouse() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.house-hero-content > *', {
        y: 35,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12
      })

      gsap.utils.toArray('.house-section').forEach((section) => {
        const items = section.querySelectorAll('.reveal-item')

        gsap.from(items, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true
          }
        })
      })

      gsap.utils.toArray('.space-card').forEach((card, index) => {
        gsap.from(card, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: index * 0.05,
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            once: true
          }
        })

        const image = card.querySelector('.space-image')

        gsap.fromTo(
          image,
          {
            scale: 1.08
          },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              once: true
            }
          }
        )
      })

      gsap.from('.details-image', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.details-section',
          start: 'top 75%',
          once: true
        }
      })

      gsap.from('.detail-row', {
        x: 35,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.details-list',
          start: 'top 78%',
          once: true
        }
      })

      gsap.from('.final-cta-content > *', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 75%',
          once: true
        }
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="bg-[#FFFFFF] text-[#0783B6]">
      <section className="relative overflow-hidden bg-[#FFFFFF] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="house-hero-content max-w-4xl">
            <p className="mb-6 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              THE HOUSE
            </p>
            <h1 className="font-display text-5xl leading-[0.95] text-[#0783B6] sm:text-7xl lg:text-8xl">
              A house made
              <span className="block text-[#39ABE7]">for slower days.</span>
            </h1>
            <p className="mt-8 max-w-2xl font-body text-base leading-7 text-[#0783B6] sm:text-lg">
              Ardea House is more than a place to stay. It is a private retreat
              shaped around quiet mornings, long tables, open windows, and the
              simple pleasure of having nowhere else to be.
            </p>
            <Link
              to="/findstay"
              className="mt-9 inline-block rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
            >
              Find a Stay
            </Link>
          </div>
        </div>
      </section>

      <section className="house-section px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-24">
          <div className="reveal-item">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              OUR STORY
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
              Designed to feel
              <span className="block text-[#39ABE7]">lived in.</span>
            </h2>
          </div>

          <div className="reveal-item space-y-6 font-body text-base leading-8 text-[#0783B6] sm:text-lg">
            <p>
              Ardea House began with a simple idea: create a place where
              everything feels intentional, but nothing feels precious.
            </p>
            <p>
              Every corner has been considered around the rhythm of a stay.
              Morning light falls across quiet rooms, the kitchen becomes the
              heart of the house, and the garden gives the day somewhere to
              wander.
            </p>
            <p>
              It is private, personal, and deliberately unhurried. A house
              where you can settle in rather than simply check in.
            </p>
          </div>
        </div>
      </section>

      <section className="house-section bg-[#9BD4E5] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-item max-w-3xl">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              INSIDE ARDEA
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
              Spaces that invite
              <span className="block">you to linger.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {spaces.map((space, index) => (
              <article
                key={space.title}
                className={`space-card overflow-hidden bg-[#FFFFFF] ${
                  index === 1 ? 'lg:mt-16' : ''
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="space-image h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-3xl text-[#0783B6]">
                    {space.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-[#0783B6]">
                    {space.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="details-section px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-24">
          <div className="details-image overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80"
              alt="Ardea House interior"
              className="h-[480px] w-full object-cover sm:h-[600px]"
            />
          </div>

          <div className="reveal-item">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              THE DETAILS
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl">
              Nothing excessive.
              <span className="block text-[#39ABE7]">
                Everything considered.
              </span>
            </h2>

            <div className="details-list mt-10 divide-y divide-[#CBDEEF] border-y border-[#CBDEEF]">
              {details.map(([title, text]) => (
                <div
                  key={title}
                  className="detail-row grid gap-2 py-5 sm:grid-cols-[150px_1fr]"
                >
                  <h3 className="font-body text-sm font-medium text-[#0783B6]">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-6 text-[#0783B6]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="house-section bg-[#CBDEEF] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="reveal-item">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              THE ARDEA RHYTHM
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
              Wake slowly.
              <span className="block">Eat well.</span>
              <span className="block text-[#39ABE7]">Stay longer.</span>
            </h2>
          </div>

          <div className="reveal-item flex items-end">
            <p className="max-w-xl font-body text-base leading-8 text-[#0783B6] sm:text-lg">
              There is no schedule at Ardea House. Breakfast can become lunch.
              An afternoon in the garden can become the whole afternoon. The
              house is yours to experience at your own pace.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta relative overflow-hidden bg-[#0783B6] px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="final-cta-content mx-auto max-w-4xl">
          <p className="mb-6 font-body text-xs tracking-[0.3em] text-[#FFFFFF]">
            COME IN, STAY A WHILE
          </p>
          <h2 className="font-display text-5xl leading-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
            Your place to
            <span className="block text-[#9BD4E5]">slow down.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-7 text-[#FFFFFF] sm:text-lg">
            Discover the house, settle into your own rhythm, and make the stay
            entirely yours.
          </p>
          <Link
            to="/findstay"
            className="mt-9 inline-block rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFFFFF] hover:text-[#0783B6]"
          >
            Find a Stay
          </Link>
        </div>
      </section>
    </main>
  )
}

export default TheHouse