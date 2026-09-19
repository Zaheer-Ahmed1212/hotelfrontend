import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    number: '01',
    title: 'The Table',
    pathname: '/experiences/thetable',
    category: 'Dining',
    text: 'Long lunches, intimate dinners, and ingredients gathered from close to home. Food here is less about ceremony and more about being together.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80'
  },
  {
    number: '02',
    title: 'The Quiet Room',
    pathname: '/experiences/quietroom',
    category: 'Wellness',
    text: 'A slower kind of morning. Stretch, breathe, read, or simply let the day begin without asking anything from you.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80'
  },
  {
    number: '03',
    title: 'Outward',
    pathname: '/experiences/outward',
    category: 'Nature',
    text: 'Step beyond the house and discover the landscapes, paths, water, and quiet corners that make the surrounding area worth exploring.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    number: '04',
    title: 'The Local Hour',
    pathname: '/experiences/localhour',
    category: 'Local Discoveries',
    text: 'Markets, small cafés, independent makers, and places you would never find in a guidebook. See the destination through a more local lens.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=80'
  }
]

const testimonials = [
  {
    quote: 'Ardea made us forget what time it was. We came for the house and left remembering the meals, the walks, and the quiet.',
    name: 'Sophie & James',
    detail: 'London · 4 night stay'
  },
  {
    quote: 'Nothing felt scheduled or forced. Every experience happened naturally, which made the entire stay feel incredibly personal.',
    name: 'Amelia R.',
    detail: 'Melbourne · 3 night stay'
  },
  {
    quote: 'The local recommendations were exceptional. We discovered places we would have completely missed on our own.',
    name: 'Daniel & Mira',
    detail: 'Sydney · 5 night stay'
  }
]

function Experiences() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.experiences-hero-content > *', {
        y: 35,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12
      })


      gsap.utils.toArray('.experience-section').forEach((section) => {
        const items = section.querySelectorAll('.reveal-item')

        if (!items.length) return

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

      gsap.utils.toArray('.experience-card').forEach((card) => {
        const image = card.querySelector('.experience-image')
        const content = card.querySelector('.experience-content')

        gsap.from(card, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            once: true
          }
        })

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

        gsap.from(content.children, {
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: card,
            start: 'top 78%',
            once: true
          }
        })
      })

      gsap.from('.special-day-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.special-day-section',
          start: 'top 75%',
          once: true
        }
      })

      gsap.from('.special-day-image', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.special-day-section',
          start: 'top 75%',
          once: true
        }
      })

      gsap.from('.testimonial-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 75%',
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
      <section className="bg-[#FFFFFF] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl"> <div className="experiences-hero-content max-w-5xl">
          <p className="mb-6 font-body text-xs tracking-[0.3em] text-[#0783B6]">
            EXPERIENCES </p>
          <h1 className="font-display text-5xl leading-[0.95] text-[#0783B6] sm:text-7xl lg:text-8xl">
            Moments worth <span className="block text-[#39ABE7]">
              leaving the room for. </span> </h1>
          <p className="mt-8 max-w-2xl font-body text-base leading-7 text-[#0783B6] sm:text-lg">
            At Ardea House, experiences are never about filling a schedule.
            They are about discovering something good, slowing down enough
            to notice it, and letting the day unfold naturally. </p> </div>
        </div>
      </section>


      <section className="experience-section px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="reveal-item">
              <p className="font-body text-xs tracking-[0.3em] text-[#0783B6]">
                THE ARDEA WAY
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl">
                Do less.
                <span className="block text-[#39ABE7]">Experience more.</span>
              </h2>
            </div>

            <p className="reveal-item max-w-3xl font-body text-base leading-8 text-[#0783B6] sm:text-lg">
              Some days call for a long table and a bottle shared between
              friends. Others call for a quiet walk, an afternoon by the water,
              or a book beneath the trees. Our experiences are designed around
              that freedom.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-section bg-[#9BD4E5] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-item mb-14 max-w-3xl">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              DISCOVER
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
              Your day,
              <span className="block">your way.</span>
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {experiences.map((experience, index) => (
              <article
                key={experience.title}
                className={`experience - card grid items - center gap - 8 lg: grid - cols - 2 lg: gap - 20 ${index % 2 !== 0 ? 'lg:[&>div:first-child]:order-2' : ''
                  } `}
              >
                <div className="overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="experience-image aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="experience-content max-w-xl">
                  <div className="flex items-center gap-4">
                    <span className="font-body text-xs tracking-[0.2em] text-[#0783B6]">
                      {experience.number}
                    </span>
                    <span className="h-px w-10 bg-[#0783B6]" />
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]">
                      {experience.category}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-4xl text-[#0783B6] sm:text-5xl">
                    {experience.title}
                  </h3>

                  <p className="mt-5 font-body text-base leading-8 text-[#0783B6]">
                    {experience.text}
                  </p>

                  <Link
                    to={experience.pathname}
                    className="mt-7 inline-block border-b border-[#0783B6] pb-1 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:border-[#39ABE7] hover:text-[#39ABE7]"
                  >
                    Discover the experience
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="special-day-section px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-24">
          <div className="special-day-content">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              ONE SPECIAL DAY
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
              Start with
              <span className="block text-[#39ABE7]">nothing planned.</span>
            </h2>
            <p className="mt-7 max-w-xl font-body text-base leading-8 text-[#0783B6] sm:text-lg">
              Wake when you want. Have breakfast outside. Take the long way
              into town. Come home for dinner. The best Ardea experiences are
              often the ones that were never on the itinerary.
            </p>
            <Link
              to="/stays"
              className="mt-8 inline-block rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
            >
              Plan Your Stay
            </Link>
          </div>

          <div className="special-day-image overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80"
              alt="Nature surrounding Ardea House"
              className="h-[480px] w-full object-cover sm:h-[600px]"
            />
          </div>
        </div>
      </section>

      <section className="testimonials-section bg-[#CBDEEF] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              GUEST NOTES
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
              The moments they
              <span className="block text-[#39ABE7]">remembered.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="testimonial-card flex min-h-[320px] flex-col justify-between bg-[#FFFFFF] p-7 sm:p-8"
              >
                <p className="font-display text-2xl leading-relaxed text-[#0783B6]">
                  “{testimonial.quote}”
                </p>

                <div className="mt-10 border-t border-[#CBDEEF] pt-5">
                  <p className="font-body text-sm font-medium text-[#0783B6]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 font-body text-xs text-[#0783B6]">
                    {testimonial.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta bg-[#0783B6] px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="final-cta-content mx-auto max-w-4xl">
          <p className="mb-6 font-body text-xs tracking-[0.3em] text-[#FFFFFF]">
            MAKE IT YOURS
          </p>
          <h2 className="font-display text-5xl leading-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
            Come for the house.
            <span className="block text-[#9BD4E5]">
              Stay for everything else.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-7 text-[#FFFFFF] sm:text-lg">
            Find your room, choose your pace, and let the rest of the stay
            happen naturally.
          </p>
          <Link
            to="/stays"
            className="mt-9 inline-block rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFFFFF] hover:text-[#0783B6]"
          >
            Find a Stay
          </Link>
        </div>
      </section>
    </main>


  )
}

export default Experiences


