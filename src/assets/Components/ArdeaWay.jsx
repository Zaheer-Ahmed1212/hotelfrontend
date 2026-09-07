import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    title: 'Thoughtful spaces',
    description:
      'Natural materials, soft light, and layouts that make being in the room feel as good as going out.'
  },
  {
    title: 'Human hospitality',
    description:
      'Present when you need it, invisible when you do not.'
  },
  {
    title: 'Local rhythm',
    description:
      'Food, recommendations and experiences connected to the neighborhood rather than a tourist checklist.'
  },
  {
    title: 'Uncomplicated comfort',
    description:
      'The details are elevated. The experience is effortless.'
  }
]

function ArdeaWay() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-ardea-row]', {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      })

ScrollTrigger.create({
  trigger: sectionRef.current,
  start: 'top -380px',
  end: () => `+=${window.innerHeight * 2.5}`,
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
      className="relative z-0 min-h-screen bg-[#FFFFFF] px-5 py-24 sm:px-8 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#39ABE7]" />
              <p className="font-body text-xs font-medium tracking-[0.25em] text-[#0783B6] sm:text-sm">
                THE ARDEA WAY
              </p>
            </div>

            <h2 className="mt-6 max-w-md font-display text-5xl font-medium leading-[0.95] text-[#0783B6] sm:text-6xl md:text-7xl">
              A different kind of stay.
            </h2>

            <p className="mt-7 max-w-sm font-body text-sm leading-7 text-[#0783B6] sm:text-base">
              Everything we do is shaped around making time feel a little more
              spacious.
            </p>
          </div>

          <div className="overflow-hidden border-t border-[#CBDEEF]">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                data-ardea-row
                className="grid gap-4 border-b border-[#CBDEEF] py-8 sm:grid-cols-[70px_1fr] sm:gap-8 sm:py-10"
              >
                <span className="font-body text-xs tracking-[0.15em] text-[#39ABE7]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-display text-3xl font-medium leading-none text-[#0783B6] sm:text-4xl">
                    {principle.title}
                  </h3>

                  <p className="mt-4 max-w-xl font-body text-sm leading-7 text-[#0783B6] sm:text-base sm:leading-8">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArdeaWay