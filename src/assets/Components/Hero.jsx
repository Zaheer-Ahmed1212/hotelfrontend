import React, { useLayoutEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import hero from '../Images/hero.jpg'

function Hero() {
const heroRef = useRef(null)
const contentRef = useRef(null)
const imageRef = useRef(null)
const bookingRef = useRef(null)

const navigate = useNavigate()

const [destination, setDestination] = useState('')
const [arrival, setArrival] = useState('')
const [departure, setDeparture] = useState('')
const [guests, setGuests] = useState(2)

useLayoutEffect(() => {
const ctx = gsap.context(() => {
const tl = gsap.timeline({
defaults: {
ease: 'power3.out'
}
})


  tl.from(contentRef.current.children, {
    y: 35,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12
  })
  .from(
    imageRef.current,
    {
      y: 35,
      opacity: 0,
      scale: 0.97,
      duration: 1
    },
    '-=0.55'
  )
  .from(
    bookingRef.current,
    {
      y: 25,
      opacity: 0,
      duration: 0.8
    },
    '-=0.5'
  )
}, heroRef)

return () => ctx.revert()

}, [])

const today = new Date().toISOString().split('T')[0]

const handleSearch = () => {
if (!destination || !arrival || !departure) {
alert('Please select your destination and dates.')
return
}

if (departure <= arrival) {
  alert('Departure date must be after arrival date.')
  return
}

navigate('/findstay', {
  state: {
    checkIn: arrival,
    checkOut: departure,
    guests,
    showResults: true
  }
})


}

return ( <section
   ref={heroRef}
   className="bg-[#FFFFFF] px-5 py-10 sm:px-8 md:px-12 lg:py-16"
 > <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16"> <div ref={contentRef} className="w-full lg:w-1/2"> <h3 className="font-body text-xs font-medium tracking-[0.2em] text-[#39ABE7] sm:text-sm">
A QUIETER WAY TO ARRIVE </h3>


      <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium leading-[0.95] text-[#0783B6] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
        Make room for <span className="text-[#c9a86a]">unhurried</span> days
      </h1>

      <p className="mt-6 max-w-xl font-body text-base leading-7 text-[#0783B6] md:text-lg">
        Ardea House is a collection of warm, considered spaces for sleeping
        deeply, eating slowly, and stepping away from the noise without
        stepping away from what matters.
      </p>

      <div className="mt-7 flex flex-wrap gap-4">
        <Link
          to="/house"
          className="rounded-lg bg-[#c9a86a] px-6 py-3 font-body text-sm font-semibold text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
        >
          Explore the House
        </Link>

        <Link
          to="/stays"
          className="rounded-lg border border-[#39ABE7] px-6 py-3 font-body text-sm font-semibold text-[#0783B6] transition-colors duration-300 hover:bg-[#CBDEEF]"
        >
          View Stays
        </Link>
      </div>
    </div>

    <div
      ref={imageRef}
      className="group w-full overflow-hidden rounded-lg lg:w-1/2"
    >
      <img
        src={hero}
        alt="Ardea House interior"
        className="aspect-[4/3] w-full rounded-lg object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  </div>

  <div
    ref={bookingRef}
    className="mx-auto mt-12 w-full max-w-7xl rounded-2xl p-6 shadow-sm sm:p-8"
  >
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-0 lg:divide-x lg:divide-[#c9a86a]">
      <div className="min-w-0 flex-1 lg:pr-6">
        <label className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[#c9a86a]">
          Destination
        </label>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="mt-2 w-full cursor-pointer bg-transparent font-body text-sm text-[#c9a86a] outline-none"
        >
          <option value="">Choose your Ardea House</option>
          <option value="Ardea House">Ardea House</option>
        </select>
      </div>

      <div className="min-w-0 flex-1 lg:px-6">
        <label className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[#c9a86a]">
          Arrival
        </label>

        <input
          type="date"
          value={arrival}
          min={today}
          onChange={(e) => setArrival(e.target.value)}
          className="mt-2 w-full cursor-pointer bg-transparent font-body text-sm text-[#c9a86a] outline-none"
        />
      </div>

      <div className="min-w-0 flex-1 lg:px-6">
        <label className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[#c9a86a]">
          Departure
        </label>

        <input
          type="date"
          value={departure}
          min={arrival || today}
          onChange={(e) => setDeparture(e.target.value)}
          className="mt-2 w-full cursor-pointer bg-transparent font-body text-sm text-[#c9a86a] outline-none"
        />
      </div>

      <div className="min-w-0 flex-1 lg:px-6">
        <label className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[#c9a86a]">
          Guests
        </label>

        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-2 w-full cursor-pointer bg-transparent font-body text-sm text-[#c9a86a] outline-none"
        >
          <option value={1}>1 guest</option>
          <option value={2}>2 guests</option>
          <option value={3}>3 guests</option>
        </select>
      </div>

      <div className="lg:pl-6">
        <button
          onClick={handleSearch}
          className="w-full rounded-xl bg-[#c9a86a] px-7 py-4 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6] lg:w-auto"
        >
          Search availability
        </button>
      </div>
    </div>
  </div>
</section>


)
}

export default Hero
