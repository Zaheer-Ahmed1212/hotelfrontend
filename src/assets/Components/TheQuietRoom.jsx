import React from 'react'
import { Link } from 'react-router-dom'

function TheQuietRoom() {
return ( <main className="min-h-screen bg-[#CBDEEF] text-[#0783B6]"> <section className="px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-36 lg:pt-40"> <div className="mx-auto max-w-7xl"> <Link
         to="/"
         className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]/70 transition-opacity hover:opacity-60"
       >
← Back </Link>


      <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]">
            The Quiet Room
          </p>

          <h1 className="mt-6 font-display text-6xl font-normal leading-[0.9] sm:text-7xl lg:text-[7rem]">
            A place to
            <br />
            <span className="text-[#c9a86a]">slow</span> down.
          </h1>
        </div>

        <p className="max-w-md font-body text-base leading-8 text-[#0783B6]/75 lg:col-span-4 lg:col-start-9">
          Away from the movement of the day, The Quiet Room offers a space
          to pause. Read a few pages, sit with a coffee, or simply enjoy
          the rare luxury of having nowhere else to be.
        </p>
      </div>

      <div className="mt-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85"
          alt="Quiet room"
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <h2 className="font-display text-4xl font-medium leading-none sm:text-5xl lg:col-span-5">
          Space for nothing more than being present.
        </h2>

        <div className="space-y-6 font-body text-sm leading-8 text-[#0783B6]/75 sm:text-base lg:col-span-6 lg:col-start-7">
          <p>
            The Quiet Room was created around a simple idea: sometimes the
            best part of travelling is having time with no agenda.
          </p>

          <p>
            Natural textures, comfortable seating, soft light, and a
            deliberately unhurried atmosphere make it easy to settle in
            and let the outside world become a little quieter.
          </p>

          <p>
            Bring a book, finish a thought, enjoy a cup of something warm,
            or do absolutely nothing. There is no schedule here.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>


)
}

export default TheQuietRoom
