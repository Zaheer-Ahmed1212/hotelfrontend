import React from 'react'
import { Link } from 'react-router-dom'

function Outward() {
return ( <main className="min-h-screen bg-[#CBDEEF] text-[#0783B6]"> <section className="px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-36 lg:pt-40"> <div className="mx-auto max-w-7xl"> <Link
         to="/"
         className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]/70 transition-opacity hover:opacity-60"
       >
← Back </Link>


      <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-[#0783B6]">
            Outward
          </p>

          <h1 className="mt-6 font-display text-6xl font-normal leading-[0.9] sm:text-7xl lg:text-[7rem]">
            Go a little
            <br />
            <span className="text-[#c9a86a]">further.</span>
          </h1>
        </div>

        <p className="max-w-md font-body text-base leading-8 text-[#0783B6]/75 lg:col-span-4 lg:col-start-9">
          Beyond our doors is a collection of places waiting to be
          discovered. Quiet paths, independent studios, hidden tables,
          local makers, and corners of the neighbourhood worth taking the
          long way to find.
        </p>
      </div>

      <div className="mt-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
          alt="Local landscape"
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <h2 className="font-display text-4xl font-medium leading-none sm:text-5xl lg:col-span-5">
          The best discoveries rarely come with directions.
        </h2>

        <div className="space-y-6 font-body text-sm leading-8 text-[#0783B6]/75 sm:text-base lg:col-span-6 lg:col-start-7">
          <p>
            We believe a stay should extend beyond the walls of where you
            sleep. That is why Outward brings together the places we return
            to ourselves.
          </p>

          <p>
            Follow a quiet walking route in the morning. Find a small
            gallery in the afternoon. Sit down somewhere local for dinner
            and let the evening unfold without a plan.
          </p>

          <p>
            Some discoveries are mapped. Others are simply waiting for you
            to take the next turn.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>


)
}

export default Outward
