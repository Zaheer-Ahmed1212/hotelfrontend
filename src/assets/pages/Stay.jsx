import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const rooms = [
  {
    id: 'linen-room',
    name: 'The Linen Room',
    description:
      'A quiet, light-filled room with soft textures, a generous bed, and space to begin the day slowly.',
    price: '$165',
    details: '1 king bed • 2 guests • 32 m²',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'hearth-suite',
    name: 'The Hearth Suite',
    description:
      'A warmer, more spacious stay with a separate lounge and details made for longer evenings.',
    price: '$245',
    details: '1 king bed • 2 guests • 48 m²',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'terrace-residence',
    name: 'The Terrace Residence',
    description:
      'Our most open stay, with a private terrace, deep soaking bath, and room to disappear for a while.',
    price: '$390',
    details: '1 king bed • 3 guests • 68 m²',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
  }
]

const features = [
  {
    number: '01',
    title: 'Slow mornings',
    text: 'Wake without an alarm, take your time over breakfast, and let the day unfold naturally.'
  },
  {
    number: '02',
    title: 'Thoughtful details',
    text: 'Every room is considered around comfort, calm, natural textures, and simple pleasures.'
  },
  {
    number: '03',
    title: 'Room to breathe',
    text: 'Private spaces, generous rooms, and quiet corners give you permission to completely switch off.'
  }
]

function Stay() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reveal = (trigger, targets, options = {}) => {
        gsap.from(targets, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger,
            start: 'top 78%',
            toggleActions: 'play none none none',
            ...options
          }
        })
      }

      const hero = pageRef.current.querySelector('[data-stay-hero]')
      const roomsSection = pageRef.current.querySelector('[data-rooms-section]')
      const waySection = pageRef.current.querySelector('[data-way-section]')
      const gallerySection = pageRef.current.querySelector('[data-gallery-section]')
      const ctaSection = pageRef.current.querySelector('[data-cta-section]')

      gsap.timeline()
        .from('[data-hero-label]', {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        })
        .from(
          '[data-hero-heading]',
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out'
          },
          '-=0.3'
        )
        .from(
          '[data-hero-copy]',
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out'
          },
          '-=0.45'
        )
        .from(
          '[data-hero-link]',
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
          },
          '-=0.35'
        )

      reveal(
        roomsSection,
        roomsSection.querySelectorAll('[data-room-heading]')
      )

      gsap.from(roomsSection.querySelectorAll('[data-room-card]'), {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: roomsSection,
          start: 'top 65%',
          toggleActions: 'play none none none'
        }
      })

      reveal(
        waySection,
        waySection.querySelectorAll('[data-way-content]')
      )

      gsap.from(waySection.querySelectorAll('[data-feature]'), {
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: waySection,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      })

      gsap.from(gallerySection.querySelectorAll('[data-gallery-item]'), {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gallerySection,
          start: 'top 72%',
          toggleActions: 'play none none none'
        }
      })

      gsap.from(ctaSection.querySelectorAll('[data-cta-content]'), {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaSection,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="bg-[#FFFFFF] text-[#0783B6]">
      <section
        ref={pageRef}
        data-stay-hero
        className="relative overflow-hidden bg-[#FFFFFF] px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 md:px-12 lg:px-16 lg:pb-36 lg:pt-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div data-hero-label className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#39ABE7]" />
                <p className="font-body text-xs font-medium tracking-[0.25em] text-[#0783B6] sm:text-sm">
                  STAYS
                </p>
              </div>

              <h1
                data-hero-heading
                className="mt-7 max-w-5xl font-display text-6xl font-medium leading-[0.88] text-[#0783B6] sm:text-7xl md:text-8xl lg:text-[8rem]"
              >
                A place to
                <span className="text-[#c9a86a]"> slow down.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pb-2">
              <p
                data-hero-copy
                className="font-body text-sm leading-7 text-[#0783B6]/80 sm:text-base"
              >
                Three considered stays, each designed for quiet mornings,
                longer evenings, and the simple luxury of having nowhere else
                to be.
              </p>

              <Link
                data-hero-link
                to="/findstay"
                className="mt-7 inline-flex items-center gap-3 font-body text-sm font-semibold text-[#39ABE7]"
              >
                <span className="border-b border-[#39ABE7] pb-1">
                  Find availability
                </span>
                <span className="text-lg transition-transform duration-300 hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        data-rooms-section
        className="bg-[#FFFFFF] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl lg:mb-20">
            <p
              data-room-heading
              className="font-body text-xs font-medium tracking-[0.25em] text-[#0783B6]"
            >
              OUR ROOMS
            </p>

            <h2
              data-room-heading
              className="mt-6 font-display text-5xl font-medium leading-[0.92] text-[#0783B6] sm:text-6xl md:text-7xl"
            >
              Choose the space that feels like yours.
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {rooms.map((room, index) => (
              <article
                key={room.name}
                data-room-card
                className="group grid overflow-hidden border border-[#9BD4E5] bg-[#CBDEEF] lg:grid-cols-12"
              >
                <div
                  className={`overflow-hidden lg:col-span-7 ${
                    index % 2 !== 0 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center p-8 sm:p-10 lg:col-span-5 lg:p-14 xl:p-16 ${
                    index % 2 !== 0 ? 'lg:order-1' : ''
                  }`}
                >
                  <p className="font-body text-[10px] font-semibold tracking-[0.2em] text-[#39ABE7]">
                    SIGNATURE STAY · 0{index + 1}
                  </p>

                  <h3 className="mt-5 font-display text-4xl font-medium leading-none text-[#0783B6] sm:text-5xl">
                    {room.name}
                  </h3>

                  <p className="mt-6 font-body text-sm leading-7 text-[#0783B6]/80 sm:text-base">
                    {room.description}
                  </p>

                  <div className="mt-8 border-t border-[#9BD4E5] pt-6">
                    <p className="font-body text-xs leading-6 text-[#0783B6]">
                      {room.details}
                    </p>

                    <div className="mt-5 flex items-end justify-between gap-5">
                      <div>
                        <p className="font-body text-[10px] uppercase tracking-[0.15em] text-[#0783B6]">
                          From
                        </p>

                        <p className="mt-1 font-display text-3xl font-medium text-[#0783B6]">
                          {room.price}
                          <span className="font-body text-xs"> / night</span>
                        </p>
                      </div>

                      <Link
                        to="/findstay"
                        state={{ selectedRoomId: room.id }}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#39ABE7] px-5 py-3 font-body text-xs font-semibold text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
                      >
                        Reserve
                        <span className="text-base">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        data-way-section
        className="bg-[#9BD4E5] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div data-way-content className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#39ABE7]" />
                <p className="font-body text-xs font-medium tracking-[0.25em] text-[#0783B6]">
                  THE ARDEA WAY
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-5xl font-medium leading-[0.92] text-[#0783B6] sm:text-6xl lg:text-7xl">
                Stay a little
                <span className="text-[#c9a86a]"> differently.</span>
              </h2>
            </div>

            <div className="grid gap-10 lg:col-span-7 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  data-feature
                  className="border-t border-[#0783B6]/30 pt-5"
                >
                  <span className="font-body text-xs font-semibold tracking-[0.15em] text-[#39ABE7]">
                    {feature.number}
                  </span>

                  <h3 className="mt-5 font-display text-3xl font-medium text-[#0783B6]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-7 text-[#0783B6]/80">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-gallery-section
        className="bg-[#FFFFFF] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-12 md:gap-7">
            <div data-gallery-item className="overflow-hidden md:col-span-7">
              <img
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85"
                alt="Ardea House interior"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="grid gap-6 md:col-span-5">
              <div data-gallery-item className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
                  alt="Ardea House room"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div
                data-gallery-item
                className="flex items-end bg-[#CBDEEF] p-8 sm:p-10"
              >
                <div>
                  <p className="font-body text-xs font-medium tracking-[0.2em] text-[#0783B6]">
                    MADE FOR STAYING
                  </p>

                  <p className="mt-5 font-display text-3xl leading-tight text-[#0783B6] sm:text-4xl">
                    The best plans are sometimes no plans at all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-cta-section
        className="bg-[#0783B6] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          <div data-cta-content>
            <p className="font-body text-xs font-medium tracking-[0.25em] text-[#9BD4E5]">
              READY WHEN YOU ARE
            </p>
          </div>

          <div data-cta-content>
            <h2 className="mt-6 font-display text-5xl font-medium leading-[0.9] text-[#FFFFFF] sm:text-6xl md:text-7xl lg:text-8xl">
              Your room is waiting.
            </h2>
          </div>

          <div data-cta-content>
            <p className="mx-auto mt-7 max-w-xl font-body text-sm leading-7 text-[#FFFFFF]/75 sm:text-base">
              Find your dates, choose your stay, and leave the rest to us.
            </p>
          </div>

          <div data-cta-content>
            <Link
              to="/findstay"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-semibold text-[#FFFFFF] transition-colors duration-300 hover:bg-[#9BD4E5] hover:text-[#0783B6]"
            >
              Find a Stay
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Stay