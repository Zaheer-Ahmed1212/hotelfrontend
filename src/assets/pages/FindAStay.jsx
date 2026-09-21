import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const rooms = [
  {
    id: 'linen-room',
    name: 'The Linen Room',
    price: 165,
    details: '1 king bed • 2 guests • 32 m²',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'hearth-suite',
    name: 'The Hearth Suite',
    price: 245,
    details: '1 king bed • 2 guests • 48 m²',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'terrace-residence',
    name: 'The Terrace Residence',
    price: 390,
    details: '1 king bed • 3 guests • 68 m²',
    image:
      'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80'
  }
]

function FindAStay() {
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const bookingRef = useRef(null)
  const inspirationRef = useRef(null)
  const location = useLocation()
  const searchData = location.state || {}

  const initialRoom =
    rooms.find((room) => room.id === searchData.selectedRoomId) || null

  const [checkIn, setCheckIn] = useState(searchData.checkIn || '')
  const [checkOut, setCheckOut] = useState(searchData.checkOut || '')
  const [guests, setGuests] = useState(searchData.guests || 2)
  const [selectedRoom, setSelectedRoom] = useState(initialRoom)
  const [step, setStep] = useState(
    searchData.selectedRoomId || searchData.showResults ? 2 : 1
  )
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [booking, setBooking] = useState(null)
  const [error, setError] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return selectedRoom ? 1 : 0
    }

    const start = new Date(`${checkIn}T00:00:00`)
    const end = new Date(`${checkOut}T00:00:00`)
    const difference = end - start

    return difference > 0
      ? Math.ceil(difference / (1000 * 60 * 60 * 24))
      : 0
  }, [checkIn, checkOut, selectedRoom])

  const total = selectedRoom ? selectedRoom.price * nights : 0

  useEffect(() => {
    const savedBooking = localStorage.getItem('ardeaHouseBooking')

    if (savedBooking) {
      setBooking(JSON.parse(savedBooking))
    }
  }, [])
  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const intro = gsap.timeline({
      defaults: {
        ease: 'power2.out'
      }
    })

    intro.from(heroRef.current?.querySelector('p'), {
      y: 20,
      opacity: 0,
      duration: 0.6
    })

    intro.from(
      heroRef.current?.querySelector('h1'),
      {
        y: 35,
        opacity: 0,
        duration: 0.8
      },
      '-=0.4'
    )

    intro.from(
      heroRef.current?.querySelector('div > p:last-child'),
      {
        y: 20,
        opacity: 0,
        duration: 0.6
      },
      '-=0.45'
    )

    gsap.utils.toArray('.gsap-reveal').forEach((element) => {
      gsap.from(element, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          once: true
        }
      })
    })
  }, mainRef)

  return () => ctx.revert()
}, [step])

  const handleSearch = () => {
    setError('')

    if (!checkIn || !checkOut) {
      setError('Please select both check-in and check-out dates.')
      return
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setError('Check-out must be after check-in.')
      return
    }

    if (guests < 1) {
      setError('Please select at least one guest.')
      return
    }

    if (selectedRoom) {
      const capacity =
        selectedRoom.id === 'terrace-residence' ? 3 : 2

      if (guests > capacity) {
        setSelectedRoom(null)
        setError(
          'This room cannot accommodate your selected number of guests. Please select another room.'
        )
        setStep(2)
        return
      }
    }

    setStep(2)
  }

  const selectRoom = (room) => {
    const capacity = room.id === 'terrace-residence' ? 3 : 2

    if (guests > capacity) {
      setError('This room cannot accommodate your selected number of guests.')
      return
    }

    setSelectedRoom(room)
    setError('')
  }

  const continueToGuestDetails = () => {
    if (!selectedRoom) {
      setError('Please select a room before continuing.')
      return
    }

    setError('')
    setStep(3)
  }

  const handleGuestChange = (e) => {
    setGuestInfo({
      ...guestInfo,
      [e.target.name]: e.target.value
    })
  }

  const generateConfirmation = () => {
    return `AR-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  }

  const confirmBooking = (e) => {
    e.preventDefault()
    setError('')

    if (!guestInfo.name || !guestInfo.email || !guestInfo.phone) {
      setError('Please complete all guest details.')
      return
    }

    const confirmation = generateConfirmation()

    const newBooking = {
      confirmation,
      room: selectedRoom.name,
      roomId: selectedRoom.id,
      checkIn,
      checkOut,
      guests,
      nights,
      pricePerNight: selectedRoom.price,
      total,
      guest: guestInfo,
      bookedAt: new Date().toISOString()
    }

    localStorage.setItem('ardeaHouseBooking', JSON.stringify(newBooking))
    setBooking(newBooking)
    setStep(4)
  }

  const resetBooking = () => {
    localStorage.removeItem('ardeaHouseBooking')
    setBooking(null)
    setSelectedRoom(null)
    setCheckIn('')
    setCheckOut('')
    setGuests(2)
    setGuestInfo({
      name: '',
      email: '',
      phone: ''
    })
    setError('')
    setStep(1)
  }

  if (booking && step === 4) {
    return (
      <main className="min-h-screen bg-[#FFFFFF] text-[#0783B6]">
        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 font-body text-xs tracking-[0.3em] text-[#0783B6]">
              BOOKING CONFIRMED
            </p>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#39ABE7] text-2xl text-[#FFFFFF]">
              ✓
            </div>

            <h1 className="mt-8 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Your stay is
              <span className="block text-[#39ABE7]">reserved.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl font-body text-base leading-7 text-[#0783B6]">
              Everything is ready. We look forward to welcoming you to Ardea
              House.
            </p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl overflow-hidden border border-[#9BD4E5]">
            <div className="bg-[#0783B6] px-7 py-5 sm:px-10">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body text-xs tracking-[0.2em] text-[#FFFFFF]">
                  ARDEA HOUSE
                </p>

                <p className="font-body text-xs text-[#FFFFFF]">
                  {booking.confirmation}
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <h2 className="font-display text-4xl text-[#0783B6]">
                {booking.room}
              </h2>

              <div className="mt-8 grid gap-6 border-y border-[#CBDEEF] py-7 sm:grid-cols-2">
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]/60">
                    Check-in
                  </p>
                  <p className="mt-2 font-body text-base text-[#0783B6]">
                    {booking.checkIn}
                  </p>
                </div>

                <div>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]/60">
                    Check-out
                  </p>
                  <p className="mt-2 font-body text-base text-[#0783B6]">
                    {booking.checkOut}
                  </p>
                </div>

                <div>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]/60">
                    Guests
                  </p>
                  <p className="mt-2 font-body text-base text-[#0783B6]">
                    {booking.guests}
                  </p>
                </div>

                <div>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]/60">
                    Nights
                  </p>
                  <p className="mt-2 font-body text-base text-[#0783B6]">
                    {booking.nights}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-[#0783B6]">
                  Total
                </span>
                <span className="font-display text-3xl text-[#0783B6]">
                  ${booking.total}
                </span>
              </div>

              <div className="mt-8 border-t border-[#CBDEEF] pt-6">
                <p className="font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]/60">
                  Guest
                </p>

                <p className="mt-2 font-body text-sm text-[#0783B6]">
                  {booking.guest.name}
                </p>

                <p className="mt-1 font-body text-sm text-[#0783B6]">
                  {booking.guest.email}
                </p>

                <p className="mt-1 font-body text-sm text-[#0783B6]">
                  {booking.guest.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="flex-1 rounded-lg bg-[#39ABE7] px-6 py-3.5 text-center font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
            >
              Back to Home
            </Link>

            <button
              onClick={resetBooking}
              className="flex-1 rounded-lg border border-[#0783B6] px-6 py-3.5 font-body text-sm font-medium text-[#0783B6] transition-colors duration-300 hover:bg-[#0783B6] hover:text-[#FFFFFF]"
            >
              Make Another Booking
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main ref={mainRef} className="bg-[#FFFFFF] text-[#0783B6]">
      <section ref={heroRef} className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-body text-xs tracking-[0.3em] text-[#0783B6]">
            FIND A STAY
          </p>

          <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-[#0783B6] sm:text-7xl lg:text-8xl">
            Your room is
            <span className="block text-[#c9a86a]">waiting.</span>
          </h1>

          <p className="mt-7 max-w-2xl font-body text-base leading-7 text-[#0783B6] sm:text-lg">
            Choose your dates, find the space that feels right, and make your
            stay at Ardea House your own.
          </p>
        </div>
      </section>

      <section ref={bookingRef} className="gsap-reveal px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-center gap-3 sm:gap-5">
            {[1, 2, 3].map((number) => (
              <React.Fragment key={number}>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full font-body text-sm ${step >= number
                      ? 'bg-[#0783B6] text-[#FFFFFF]'
                      : 'border border-[#9BD4E5] text-[#0783B6]'
                    }`}
                >
                  {number}
                </div>

                {number !== 3 && (
                  <div
                    className={`h-px w-10 sm:w-20 ${step > number ? 'bg-[#0783B6]' : 'bg-[#9BD4E5]'
                      }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {step === 1 && (
            <div className="mx-auto max-w-5xl">
              <div className="border border-[#9BD4E5] bg-[#FFFFFF] p-6 sm:p-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]">
                      Check-in
                    </label>

                    <input
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full border border-[#9BD4E5] bg-[#FFFFFF] px-4 py-3 font-body text-sm text-[#0783B6] outline-none focus:border-[#0783B6]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]">
                      Check-out
                    </label>

                    <input
                      type="date"
                      min={checkIn || today}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full border border-[#9BD4E5] bg-[#FFFFFF] px-4 py-3 font-body text-sm text-[#0783B6] outline-none focus:border-[#0783B6]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]">
                      Guests
                    </label>

                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full border border-[#9BD4E5] bg-[#FFFFFF] px-4 py-3 font-body text-sm text-[#0783B6] outline-none focus:border-[#0783B6]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <p className="mt-5 font-body text-sm text-red-500">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleSearch}
                  className="mt-7 w-full rounded-lg bg-[#39ABE7] px-6 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
                >
                  Check Availability
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-10">
                <p className="font-body text-xs tracking-[0.2em] text-[#0783B6]">
                  AVAILABLE SPACES
                </p>

                <h2 className="mt-3 font-display text-4xl text-[#0783B6] sm:text-5xl">
                  Choose your room.
                </h2>

                <p className="mt-3 font-body text-sm text-[#0783B6]">
                  {nights} {nights === 1 ? 'night' : 'nights'} · {guests}{' '}
                  {guests === 1 ? 'guest' : 'guests'}
                </p>
              </div>

              <div className="grid gap-7 lg:grid-cols-3">
                {rooms.map((room) => {
                  const capacity =
                    room.id === 'terrace-residence' ? 3 : 2
                  const unavailable = guests > capacity
                  const selected = selectedRoom?.id === room.id

                  return (
                    <article
                      key={room.id}
                      className={`overflow-hidden border transition-all duration-300 ${selected
                          ? 'border-[#0783B6] ring-2 ring-[#0783B6]'
                          : 'border-[#9BD4E5]'
                        }`}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <p className="font-body text-xs tracking-[0.2em] text-[#0783B6]">
                          {room.details}
                        </p>

                        <h3 className="mt-3 font-display text-3xl text-[#0783B6]">
                          {room.name}
                        </h3>

                        <div className="mt-6 flex items-end justify-between border-t border-[#CBDEEF] pt-5">
                          <div>
                            <span className="font-display text-2xl text-[#0783B6]">
                              ${room.price}
                            </span>

                            <span className="font-body text-xs text-[#0783B6]">
                              {' '}
                              / night
                            </span>
                          </div>

                          <button
                            disabled={unavailable}
                            onClick={() => selectRoom(room)}
                            className={`rounded-lg px-4 py-2.5 font-body text-xs font-medium transition-colors duration-300 ${unavailable
                                ? 'cursor-not-allowed bg-[#CBDEEF] text-[#0783B6]/50'
                                : selected
                                  ? 'bg-[#0783B6] text-[#FFFFFF]'
                                  : 'bg-[#39ABE7] text-[#FFFFFF] hover:bg-[#0783B6]'
                              }`}
                          >
                            {unavailable
                              ? 'Not Available'
                              : selected
                                ? 'Selected'
                                : 'Select Room'}
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              {error && (
                <p className="mt-6 font-body text-sm text-red-500">
                  {error}
                </p>
              )}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-lg border border-[#0783B6] px-6 py-3.5 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:bg-[#0783B6] hover:text-[#FFFFFF]"
                >
                  Back
                </button>

                <button
                  onClick={continueToGuestDetails}
                  className="rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-body text-xs tracking-[0.2em] text-[#0783B6]">
                  GUEST DETAILS
                </p>

                <h2 className="mt-3 font-display text-4xl text-[#0783B6] sm:text-5xl">
                  Almost there.
                </h2>

                <form onSubmit={confirmBooking} className="mt-10 space-y-6">
                  <div>
                    <label className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]">
                      Full name
                    </label>

                    <input
                      name="name"
                      type="text"
                      value={guestInfo.name}
                      onChange={handleGuestChange}
                      placeholder="Your full name"
                      className="w-full border border-[#9BD4E5] px-4 py-3 font-body text-sm text-[#0783B6] outline-none placeholder:text-[#0783B6]/40 focus:border-[#0783B6]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]">
                      Email address
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={guestInfo.email}
                      onChange={handleGuestChange}
                      placeholder="you@example.com"
                      className="w-full border border-[#9BD4E5] px-4 py-3 font-body text-sm text-[#0783B6] outline-none placeholder:text-[#0783B6]/40 focus:border-[#0783B6]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-[#0783B6]">
                      Phone number
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      value={guestInfo.phone}
                      onChange={handleGuestChange}
                      placeholder="Your phone number"
                      className="w-full border border-[#9BD4E5] px-4 py-3 font-body text-sm text-[#0783B6] outline-none placeholder:text-[#0783B6]/40 focus:border-[#0783B6]"
                    />
                  </div>

                  {error && (
                    <p className="font-body text-sm text-red-500">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-lg border border-[#0783B6] px-6 py-3.5 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:bg-[#0783B6] hover:text-[#FFFFFF]"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>

              <aside className="h-fit border border-[#9BD4E5] bg-[#CBDEEF] p-7 sm:p-8">
                <p className="font-body text-xs tracking-[0.2em] text-[#0783B6]">
                  YOUR STAY
                </p>

                <h3 className="mt-4 font-display text-3xl text-[#0783B6]">
                  {selectedRoom.name}
                </h3>

                <div className="mt-7 space-y-4 border-y border-[#9BD4E5] py-6">
                  <div className="flex justify-between gap-4 font-body text-sm">
                    <span>Check-in</span>
                    <span>{checkIn}</span>
                  </div>

                  <div className="flex justify-between gap-4 font-body text-sm">
                    <span>Check-out</span>
                    <span>{checkOut}</span>
                  </div>

                  <div className="flex justify-between gap-4 font-body text-sm">
                    <span>Guests</span>
                    <span>{guests}</span>
                  </div>

                  <div className="flex justify-between gap-4 font-body text-sm">
                    <span>Nightly rate</span>
                    <span>${selectedRoom.price}</span>
                  </div>

                  <div className="flex justify-between gap-4 font-body text-sm">
                    <span>Nights</span>
                    <span>{nights}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-body text-sm">Total</span>
                  <span className="font-display text-3xl">
                    ${total}
                  </span>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <section ref={inspirationRef} className="gsap-reveal bg-[#0783B6] px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs tracking-[0.3em] text-[#FFFFFF]">
            NEED SOME INSPIRATION?
          </p>

          <h2 className="mt-5 font-display text-4xl text-[#FFFFFF] sm:text-5xl">
            See what awaits.
          </h2>

          <Link
            to="/experiences"
            className="mt-8 inline-block rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFFFFF] hover:text-[#0783B6]"
          >
            Explore Experiences
          </Link>
        </div>
      </section>
    </main>
  )
}

export default FindAStay