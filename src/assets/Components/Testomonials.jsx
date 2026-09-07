import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      'It felt less like checking into a hotel and more like arriving somewhere I already knew.',
    author: 'David S.',
    place: 'London',
    image:
      'https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    quote:
      'Beautiful without being precious. Calm without feeling empty. Exactly what we needed.',
    author: 'Vince.',
    place: 'Copenhagen',
    image:
      'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    quote:
      'The kind of place that quietly changes the pace of your whole weekend.',
    author: 'Brown.',
    place: 'Amsterdam',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww'
  }
]

function Testomonials() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-testimonial-card]', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
          toggleActions: 'play none none none'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#CBDEEF] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.18em] text-[#0783B6]">
              Guest Testimonials
            </p>

            <h2 className="mt-4 font-display text-5xl font-normal leading-[0.9] text-[#0783B6] sm:text-6xl lg:text-7xl">
              Words left behind.
            </h2>
          </div>

          <p className="max-w-xs font-body text-sm leading-6 text-[#0783B6]/70">
            A few thoughts from people who stayed a little longer than they planned.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              data-testimonial-card
              className={`rounded-2xl bg-[#FFFFFF] p-6 shadow-2xl shadow-blue-500 sm:p-7 lg:p-12 ${
                index === 1 ? 'lg:mt-10' : index === 2 ? 'lg:mt-4' : ''
              }`}
            >
              <p className="font-display text-2xl font-normal leading-[1.1] text-[#c9a86a] sm:text-3xl">
                {testimonial.quote}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-[#CBDEEF] pt-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-[50%] object-cover"
                />

                <div>
                  <p className="font-body text-xs font-medium uppercase tracking-[0.1em] text-[#c9a86a]">
                    {testimonial.author}
                  </p>

                  <p className="mt-1 font-body text-xs text-[#c9a86a]/50">
                    {testimonial.place}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testomonials