
import React from 'react'
import { Link } from 'react-router-dom'

function FinalCTA() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="font-display text-5xl font-normal leading-[0.92] text-[#0783B6] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Leave the <span className="text-[#c9a86a]">calendar</span> open a little longer.
          </h2>

          <p className="mt-8 max-w-xl font-body text-base leading-7 text-[#0783B6]/75 sm:text-lg sm:leading-8">
            Choose your dates. We will take care of the rest—and leave enough room
            for the unexpected.
          </p>

          <Link
            to="/stays"
            className="mt-9 inline-flex items-center rounded-full border-2 border-transparent bg-[#c9a86a] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-all duration-300 hover:bg-transparent hover:border-[#c9a86a] hover:text-[#c9a86a]"
          >
            Find Your Stay
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
