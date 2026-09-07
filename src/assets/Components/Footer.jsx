import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#0783B6] px-6 pb-7 pt-20 text-[#FFFFFF] sm:px-10 lg:px-16 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <h2 className="font-display text-4xl font-medium tracking-wide sm:text-5xl">
                ARDEA HOUSE
              </h2>
            </Link>

            <p className="mt-6 max-w-sm font-body text-sm leading-7 text-[#FFFFFF]/75 sm:text-base">
              A quieter way to stay, shaped around warm spaces, slower moments,
              and thoughtful hospitality.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-4">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-[#9BD4E5]">
                Stays
              </p>

              <div className="mt-5 flex flex-col gap-3 font-body text-sm text-[#FFFFFF]/75">
                <Link to="/stays" className="transition-colors hover:text-[#FFFFFF]">
                  Linen Room
                </Link>
                <Link to="/stays" className="transition-colors hover:text-[#FFFFFF]">
                  Hearth Suite
                </Link>
                <Link to="/stays" className="transition-colors hover:text-[#FFFFFF]">
                  Terrace Residence
                </Link>
              </div>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-[#9BD4E5]">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3 font-body text-sm text-[#FFFFFF]/75">
                <Link to="/the-house" className="transition-colors hover:text-[#FFFFFF]">
                  The House
                </Link>
                <Link to="/experience" className="transition-colors hover:text-[#FFFFFF]">
                  Experiences
                </Link>
                <Link to="/journal" className="transition-colors hover:text-[#FFFFFF]">
                  Journal
                </Link>
              </div>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-[#9BD4E5]">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 font-body text-sm leading-6 text-[#FFFFFF]/75">
                <a
                  href="mailto:hello@ardeahouse.com"
                  className="break-all transition-colors hover:text-[#FFFFFF]"
                >
                  hello@ardeahouse.com
                </a>

                <a
                  href="tel:+442080421186"
                  className="transition-colors hover:text-[#FFFFFF]"
                >
                  +44 20 8042 1186
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="font-display text-3xl text-[#FFFFFF]">
              Notes from the House
            </p>

            <p className="mt-4 max-w-sm font-body text-sm leading-6 text-[#FFFFFF]/70">
              Occasional letters about new stays, seasonal tables, and places
              worth knowing.
            </p>

            <form className="mt-6 flex border-b border-[#9BD4E5]/60 pb-2">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent font-body text-sm text-[#FFFFFF] outline-none placeholder:text-[#FFFFFF]/45"
              />

              <button
                type="submit"
                className="font-body text-sm font-medium text-[#FFFFFF] transition-colors hover:text-[#9BD4E5]"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[#9BD4E5]/40 pt-6 font-body text-xs text-[#FFFFFF]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ardea House. All rights reserved.</p>

          <p>18 Rowan Street, London</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer