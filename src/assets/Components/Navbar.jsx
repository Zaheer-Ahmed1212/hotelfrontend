import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

 const linkClass = ({ isActive }) =>
  `relative font-body text-sm transition-colors duration-300
  after:absolute after:left-0 after:-bottom-1 after:h-[1px]
  after:bg-[#39ABE7] after:transition-all after:duration-300
  ${
    isActive
      ? 'text-[#39ABE7] after:w-full'
      : 'text-[#0783B6] after:w-0 hover:text-[#39ABE7] hover:after:w-full'
  }`
  return (
    <header className="relative z-50 bg-[#FFFFFF] px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <h1 className="font-display text-2xl text-[#0783B6] sm:text-3xl">
              ARDEA HOUSE
            </h1>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
             <NavLink to="/stays" className={linkClass}>
              Stays
            </NavLink>

            <NavLink to="/house" className={linkClass}>
              The House
            </NavLink>

            <NavLink to="/experiences" className={linkClass}>
              Experiences
            </NavLink>

            <NavLink to="/journal" className={linkClass}>
              Journal
            </NavLink>
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/findstay"
              className="inline-block rounded-lg bg-[#39ABE7] px-5 py-2.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6] xl:px-6"
            >
              Find a Stay
            </Link>
          </div> 

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center text-[#0783B6] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen ? 'max-h-96 pt-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col border-t border-[#CBDEEF] pt-5">
                  <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#CBDEEF] py-4 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:text-[#39ABE7]"
            >
              Home
            </NavLink>
            <NavLink
              to="/stays"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#CBDEEF] py-4 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:text-[#39ABE7]"
            >
              Stays
            </NavLink>
      

            <NavLink
              to="/house"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#CBDEEF] py-4 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:text-[#39ABE7]"
            >
              The House
            </NavLink>

            <NavLink
              to="/experiences"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#CBDEEF] py-4 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:text-[#39ABE7]"
            >
              Experiences
            </NavLink>

            <NavLink
              to="/journal"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#CBDEEF] py-4 font-body text-sm text-[#0783B6] transition-colors duration-300 hover:text-[#39ABE7]"
            >
              Journal
            </NavLink>

            <Link
              to="/findstay"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-block w-fit rounded-lg bg-[#39ABE7] px-6 py-3 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
            >
              Find a Stay
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar