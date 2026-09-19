import React from 'react'
import { Link } from 'react-router-dom'

const rooms = [
  {
    name: 'The Linen Room',
    description:
      'A quiet, light-filled room with soft textures, a generous bed, and space to begin the day slowly.',
    price: '$165',
    details: '1 king bed • 2 guests • 32 m²',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85'
  },
  {
    name: 'The Hearth Suite',
    description:
      'A warmer, more spacious stay with a separate lounge and details made for longer evenings.',
    price: '$245',
    details: '1 king bed • 2 guests • 48 m²',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85'
  },
  {
    name: 'The Terrace Residence',
    description:
      'Our most open stay, with a private terrace, deep soaking bath, and room to disappear for a while.',
    price: '$390',
    details: '1 king bed • 3 guests • 68 m²',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85'
  }
]

function SignatureStays() {
  return (
    <section  className="relative z-10 bg-[#CBDEEF] px-5 py-24 sm:px-8 md:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl lg:mb-20">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#39ABE7]" />
            <p className="font-body text-xs font-medium tracking-[0.25em] text-[#0783B6] sm:text-sm">
              SIGNATURE STAYS
            </p>
          </div>

          <h2 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.95] text-[#0783B6] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="text-[#c9a86a]">Rooms</span> with less to prove—and more to offer.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="group overflow-hidden rounded-lg border border-[#9BD4E5] bg-[#FFFFFF] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={room.image}
                  alt={room.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 bg-[#FFFFFF]/90 px-3 py-2 backdrop-blur-sm">
                  <span className="font-body text-[10px] font-semibold tracking-[0.18em] text-[#0783B6]">
                    SIGNATURE STAY
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <h3 className="font-display text-4xl font-medium leading-none text-[#0783B6]">
                  {room.name}
                </h3>

                <p className="mt-5 font-body text-sm leading-7 text-[#0783B6]">
                  {room.description}
                </p>

                <div className="mt-7 border-t border-[#CBDEEF] pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]">
                        From
                      </p>

                      <p className="mt-1 font-display text-3xl font-medium text-[#0783B6]">
                        {room.price}
                        <span className="font-body text-xs text-[#0783B6]">
                          {' '}
                          / night
                        </span>
                      </p>
                    </div>

                    <p className="text-right font-body text-xs leading-5 text-[#0783B6]">
                      {room.details}
                    </p>
                  </div>

                  <Link
                    to="/stays"
                    className="group/link mt-7 inline-flex items-center gap-3 font-body text-sm font-semibold text-[#39ABE7]"
                  >
                    <span className="relative">
                      Discover the room
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-[#39ABE7] transition-transform duration-300 group-hover/link:scale-x-0" />
                    </span>

                    <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureStays