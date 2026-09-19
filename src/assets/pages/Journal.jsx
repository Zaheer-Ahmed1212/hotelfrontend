import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const articles = [
{
category: 'THE HOUSE',
title: 'The Art of Staying In',
slug: 'the-art-of-staying-in',
date: 'August 18, 2026',
image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
},
{
category: 'FOOD & TABLE',
title: 'A Long Lunch, Done Properly',
slug: 'a-long-lunch-done-properly',
date: 'July 29, 2026',
image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85'
},
{
category: 'LOCAL GUIDE',
title: 'Take the Scenic Route',
slug: 'take-the-scenic-route',
date: 'July 12, 2026',
image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85'
},
{
category: 'WELLNESS',
title: 'The Luxury of Doing Nothing',
slug: 'the-luxury-of-doing-nothing',
date: 'June 24, 2026',
image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
},
{
category: 'TRAVEL',
title: 'How to Have a Slower Weekend',
slug: 'how-to-have-a-slower-weekend',
date: 'June 08, 2026',
image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85'
},
{
category: 'THE HOUSE',
title: 'Rooms With a Story to Tell',
slug: 'rooms-with-a-story-to-tell',
date: 'May 21, 2026',
image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'
}
]

const categories = ['ALL', 'THE HOUSE', 'FOOD & TABLE', 'LOCAL GUIDE', 'WELLNESS', 'TRAVEL']

function Journal() {
const pageRef = useRef(null)

useLayoutEffect(() => {
const ctx = gsap.context(() => {
gsap.from('.journal-hero-content > *', {
y: 35,
opacity: 0,
duration: 1,
ease: 'power3.out',
stagger: 0.12
})


  gsap.from('.journal-categories', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.35,
    ease: 'power3.out'
  })

  gsap.from('.featured-story', {
    y: 55,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.featured-story',
      start: 'top 78%',
      once: true
    }
  })

  gsap.from('.featured-image', {
    scale: 1.08,
    duration: 1.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.featured-story',
      start: 'top 78%',
      once: true
    }
  })

  gsap.from('.recent-heading', {
    y: 35,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.recent-heading',
      start: 'top 80%',
      once: true
    }
  })

  gsap.utils.toArray('.article-card').forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 84%',
        once: true
      }
    })

    const image = card.querySelector('.article-image')

    gsap.fromTo(
      image,
      {
        scale: 1.06
      },
      {
        scale: 1,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 84%',
          once: true
        }
      }
    )
  })

  gsap.from('.journal-cta-content > *', {
    y: 35,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: '.journal-cta',
      start: 'top 78%',
      once: true
    }
  })
}, pageRef)

return () => ctx.revert()


}, [])

return ( <main ref={pageRef} className="bg-[#FFFFFF] text-[#0783B6]"> <section className="px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-40"> <div className="mx-auto max-w-7xl"> <div className="journal-hero-content max-w-4xl"> <p className="font-body text-xs tracking-[0.3em] text-[#0783B6]">
THE JOURNAL </p> <h1 className="mt-6 font-display text-5xl leading-[0.95] text-[#0783B6] sm:text-7xl lg:text-8xl">
Notes from <span className="block text-[#39ABE7]">Ardea House.</span> </h1> <p className="mt-8 max-w-2xl font-body text-base leading-8 text-[#0783B6] sm:text-lg sm:leading-9">
Stories, places, food and quiet moments from around Ardea House. </p> </div>

      <div className="journal-categories mt-14 flex flex-wrap gap-3 border-t border-[#CBDEEF] pt-8">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-[#CBDEEF] px-4 py-2 font-body text-[10px] tracking-[0.18em] text-[#0783B6] transition-colors duration-300 hover:border-[#39ABE7] hover:bg-[#39ABE7] hover:text-[#FFFFFF]"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </section>

  <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40">
    <div className="mx-auto max-w-7xl">
      <Link
        to={`/journal/${articles[0].slug}`}
        className="featured-story group grid overflow-hidden bg-[#CBDEEF] lg:grid-cols-2"
      >
        <div className="order-2 flex flex-col justify-center p-8 sm:p-12 lg:order-1 lg:p-16">
          <p className="font-body text-xs tracking-[0.25em] text-[#0783B6]">
            {articles[0].category}
          </p>

          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
            {articles[0].title}
          </h2>

          <p className="mt-6 font-body text-xs text-[#0783B6]/60">
            {articles[0].date}
          </p>

          <span className="mt-10 inline-flex items-center gap-3 font-body text-xs tracking-[0.18em] text-[#0783B6]">
            READ STORY
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </span>
        </div>

        <div className="order-1 overflow-hidden lg:order-2">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="featured-image aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
    </div>
  </section>

  <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40">
    <div className="mx-auto max-w-7xl">
      <div className="recent-heading mb-12 flex items-end justify-between border-b border-[#CBDEEF] pb-5">
        <div>
          <p className="font-body text-xs tracking-[0.3em] text-[#0783B6]">
            RECENT STORIES
          </p>
          <h2 className="mt-4 font-display text-4xl text-[#0783B6] sm:text-5xl">
            From the journal
          </h2>
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(1).map((article) => (
          <Link
            key={article.slug}
            to={`/journal/${article.slug}`}
            className="article-card group"
          >
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="article-image aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-6">
              <p className="font-body text-[10px] tracking-[0.25em] text-[#0783B6]">
                {article.category}
              </p>

              <h3 className="mt-3 font-display text-3xl leading-tight text-[#0783B6]">
                {article.title}
              </h3>

              <div className="mt-5 flex items-center justify-between">
                <p className="font-body text-xs text-[#0783B6]/60">
                  {article.date}
                </p>

                <span className="font-body text-xs text-[#0783B6] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  <section className="journal-cta bg-[#CBDEEF] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
    <div className="journal-cta-content mx-auto max-w-4xl text-center">
      <p className="font-body text-xs tracking-[0.3em] text-[#0783B6]">
        EXPLORE MORE
      </p>

      <h2 className="mt-6 font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
        Experience Ardea
        <span className="block text-[#39ABE7]">at your own pace.</span>
      </h2>

      <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-8 text-[#0783B6] sm:text-lg">
        Discover the places, rituals and experiences that make a stay at
        Ardea House different.
      </p>

      <Link
        to="/experiences"
        className="mt-9 inline-block rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
      >
        Explore Experiences
      </Link>
    </div>
  </section>
</main>


)
}

export default Journal
