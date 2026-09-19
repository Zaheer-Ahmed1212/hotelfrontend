import React from 'react'
import { Link } from 'react-router-dom'

function TheTable() {
return ( <main className="min-h-screen bg-[#CBDEEF] text-[#0783B6]"> <section className="px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-36 lg:pt-40"> <div className="mx-auto max-w-7xl"> <Link
         to="/"
         className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]/70 transition-opacity hover:opacity-60"
       >
← Back </Link>

      <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]">
            The Table
          </p>

          <h1 className="mt-6 font-display text-6xl font-normal leading-[0.9] sm:text-7xl lg:text-[7rem]">
            Good food.
            <br />
            <span className="text-[#c9a86a]">Longer</span> evenings.
          </h1>
        </div>

        <p className="max-w-md font-body text-base leading-8 text-[#0783B6]/75 lg:col-span-4 lg:col-start-9">
          Dining here is less about rushing through a meal and more about
          giving yourself somewhere to linger. Our table follows the
          rhythm of the seasons, bringing together thoughtful ingredients,
          familiar flavours, and dishes made to be shared.
        </p>
      </div>

      <div className="mt-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=85"
          alt="Dining experience"
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <h2 className="font-display text-4xl font-medium leading-none sm:text-5xl lg:col-span-5">
          From slow mornings to evenings worth staying up for.
        </h2>

        <div className="space-y-6 font-body text-sm leading-8 text-[#0783B6]/75 sm:text-base lg:col-span-6 lg:col-start-7">
          <p>
            Breakfast begins quietly, with seasonal produce, freshly
            prepared plates, and coffee that gives the morning permission
            to move slowly.
          </p>

          <p>
            As the day fades, the atmosphere changes. Tables fill, glasses
            are raised, and the kitchen settles into the rhythm of the
            evening.
          </p>

          <p>
            Whether you join us for a morning coffee or stay for dinner,
            The Table is designed to make a meal feel like part of the
            journey rather than simply a stop along the way.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>


)
}

export default TheTable
