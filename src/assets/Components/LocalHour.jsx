import React from 'react'
import { Link } from 'react-router-dom'

const places = [
  {
    number: '01',
    title: 'The Morning Market',
    text: 'Start slowly with fresh produce, local pastries, and the small conversations that make a place feel alive.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=85'
  },
  {
    number: '02',
    title: 'Independent Makers',
    text: 'Discover studios, workshops, and small businesses where craft still matters more than scale.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1400&q=85'
  },
  {
    number: '03',
    title: 'The Corner Café',
    text: 'Find a table, order something simple, and spend an hour watching the neighbourhood move around you.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85'
  }
]

const notes = [
  {
    title: 'Go slowly',
    text: 'The best discoveries rarely happen when you are rushing between destinations.'
  },
  {
    title: 'Follow curiosity',
    text: 'Turn down the unfamiliar street. Step inside the little shop. See where the day takes you.'
  },
  {
    title: 'Ask someone local',
    text: 'Our favourite recommendations often begin with a simple question and a good conversation.'
  }
]

function LocalHour() {
  return (
    <main className="bg-[#FFFFFF] text-[#0783B6]">
      <section className="bg-[#FFFFFF] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-6 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              LOCAL DISCOVERIES
            </p>
            <h1 className="font-display text-5xl leading-[0.92] text-[#0783B6] sm:text-7xl lg:text-8xl">
              See the place
              <span className="block text-[#39ABE7]">
                like a local.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl font-body text-base leading-7 text-[#0783B6] sm:text-lg">
              Leave the usual itinerary behind. Wander through neighbourhood
              markets, find independent makers, sit down at a small café, and
              discover the places that give the destination its character.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#9BD4E5] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="font-body text-xs tracking-[0.3em] text-[#0783B6]">
                THE LOCAL HOUR
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
                One hour.
                <span className="block text-[#39ABE7]">
                  No itinerary.
                </span>
              </h2>
            </div>

            <p className="max-w-3xl font-body text-base leading-8 text-[#0783B6] sm:text-lg">
              We believe the most memorable parts of a stay are often the
              simplest. A morning spent wandering. A conversation with a
              shopkeeper. A table found by accident. The Local Hour is our
              invitation to experience the destination without a checklist.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              WANDER WELL
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
              Start somewhere.
              <span className="block text-[#39ABE7]">
                See where you end up.
              </span>
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {places.map((place, index) => (
              <article
                key={place.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 !== 0 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="max-w-xl">
                  <div className="flex items-center gap-4">
                    <span className="font-body text-xs tracking-[0.2em] text-[#0783B6]">
                      {place.number}
                    </span>
                    <span className="h-px w-10 bg-[#0783B6]" />
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]">
                      LOCAL DISCOVERY
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-4xl text-[#0783B6] sm:text-5xl">
                    {place.title}
                  </h3>

                  <p className="mt-5 font-body text-base leading-8 text-[#0783B6]">
                    {place.text}
                  </p>

                  <div className="mt-7 h-px w-16 bg-[#39ABE7]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#CBDEEF] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
                A DIFFERENT WAY TO EXPLORE
              </p>
              <h2 className="font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
                Leave room
                <span className="block text-[#39ABE7]">
                  for the unexpected.
                </span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
              {notes.map((note, index) => (
                <div
                  key={note.title}
                  className="border-t border-[#0783B6]/30 pt-5"
                >
                  <span className="font-body text-xs tracking-[0.2em] text-[#39ABE7]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-3xl text-[#0783B6]">
                    {note.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-[#0783B6]">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-12 md:gap-7">
          <div className="overflow-hidden md:col-span-7">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85"
              alt="Local architecture and neighbourhood"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="grid gap-6 md:col-span-5">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85"
                alt="Local food and dining"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="flex items-end bg-[#9BD4E5] p-8 sm:p-10">
              <div>
                <p className="font-body text-xs tracking-[0.2em] text-[#0783B6]">
                  OUR RECOMMENDATION
                </p>
                <p className="mt-5 font-display text-3xl leading-tight text-[#0783B6] sm:text-4xl">
                  Take the long way home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0783B6] px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-body text-xs tracking-[0.3em] text-[#FFFFFF]">
            COME CURIOUS
          </p>

          <h2 className="font-display text-5xl leading-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
            The best places
            <span className="block text-[#9BD4E5]">
              are rarely on the map.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-7 text-[#FFFFFF] sm:text-lg">
            Stay with us, slow down, and let us point you towards the places
            that make this corner of the world feel like home.
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

export default LocalHour