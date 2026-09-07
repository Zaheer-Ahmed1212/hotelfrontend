import React from 'react'
import { Link } from 'react-router-dom'

const experiences = [
  {
    title: 'The Table',
    description:
      'Seasonal plates, slow breakfasts, and evenings that stretch a little longer.',
    link: 'Discover dining →',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85'
  },
  {
    title: 'The Quiet Room',
    description:
      'A calm space for restoration, reading, and switching off.',
    link: 'Explore restoration →',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Outward',
    description:
      'A curated guide to walks, studios, hidden tables, and places worth arriving early for.',
    link: 'See local discoveries →',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85'
  }
]

function BeyondTheRoom() {
  return (
    <section className="relative z-10 bg-[#CBDEEF] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]">
            Beyond the Room
          </p>

          <h2 className="mt-6 max-w-3xl font-display text-5xl font-normal leading-[0.92] text-[#0783B6] sm:text-6xl lg:text-[6.5rem]">
            Stay for the room.
            <br />
            <span className="text-[#c9a86a]">Remember</span> the moments
            <br className="hidden sm:block" />
            around it.
          </h2>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <article className="lg:col-span-7">
            <div className="overflow-hidden">
              <img
                src={experiences[0].image}
                alt={experiences[0].title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="mt-6 max-w-xl">
              <h3 className="font-display text-4xl font-medium text-[#0783B6] sm:text-5xl">
                {experiences[0].title}
              </h3>

              <p className="mt-4 max-w-md font-body text-sm leading-7 text-[#0783B6]/75 sm:text-base">
                {experiences[0].description}
              </p>

              <Link
                to="/experience"
                className="mt-5 inline-block font-body text-sm font-medium text-[#0783B6] underline underline-offset-4"
              >
                {experiences[0].link}
              </Link>
            </div>
          </article>

          <div className="flex flex-col gap-14 lg:col-span-5 lg:pt-32">
            {experiences.slice(1).map((experience) => (
              <article key={experience.title}>
                <div className="overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-5 max-w-md">
                  <h3 className="font-display text-3xl font-medium text-[#0783B6] sm:text-4xl">
                    {experience.title}
                  </h3>

                  <p className="mt-3 font-body text-sm leading-7 text-[#0783B6]/75">
                    {experience.description}
                  </p>

                  <Link
                    to="/experience"
                    className="mt-4 inline-block font-body text-sm font-medium text-[#0783B6] underline underline-offset-4"
                  >
                    {experience.link}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondTheRoom