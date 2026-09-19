import React, { useLayoutEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const journalArticles = [
{
category: 'THE HOUSE',
title: 'The Art of Staying In',
slug: 'the-art-of-staying-in',
date: 'August 18, 2026',
intro: 'Why the best escapes sometimes begin with closing the front door and staying exactly where you are.',
heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
sections: [
{
heading: 'Nothing to rush towards.',
paragraphs: [
'There is a particular kind of luxury in knowing you do not have to leave. No reservations to make, no landmarks to reach, no list of places waiting to be crossed off.',
'At Ardea House, staying in is part of the experience. The room becomes the destination for a while, with a slow breakfast, an open book, and sunlight moving quietly across the floor.'
]
},
{
image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
heading: 'Let the day become simple.',
paragraphs: [
'Start with coffee beside the window. Take a long bath. Order something to eat and let lunch become afternoon without noticing the exact moment it happens.',
'The best days are not always the ones filled with plans. Sometimes they are the ones where there is finally enough space to hear yourself think.'
]
},
{
heading: 'A room worth lingering in.',
paragraphs: [
'Every space at Ardea was considered around this idea: comfort should not ask for attention. Natural textures, generous light, and quiet details give you somewhere to settle rather than somewhere to simply sleep.',
'Stay in. Close the door. Let the outside world wait for another day.'
]
}
]
},
{
category: 'FOOD & TABLE',
title: 'A Long Lunch, Done Properly',
slug: 'a-long-lunch-done-properly',
date: 'July 29, 2026',
intro: 'Good food, an open table, and nowhere else to be. A closer look at the ritual of the long lunch.',
heroImage: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85',
sections: [
{
heading: 'Take your time.',
paragraphs: [
'A good lunch should not feel like something squeezed between two appointments. It should have room to stretch, to become a conversation, to turn into another glass of wine and eventually an afternoon.',
'At Ardea, the table is less about ceremony and more about bringing people together around something worth sharing.'
]
},
{
image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85',
heading: 'Simple food. Good ingredients.',
paragraphs: [
'Our approach begins close to home. Seasonal ingredients, familiar flavours, and dishes that do not need to explain themselves.',
'There is something comforting about food that feels connected to where you are. It gives a meal a sense of place without making a performance of it.'
]
},
{
heading: 'The table stays open.',
paragraphs: [
'Stay for dessert. Stay for coffee. Stay because the conversation is still good.',
'The clock can wait. Some of the best memories begin when nobody is watching the time.'
]
}
]
},
{
category: 'LOCAL GUIDE',
title: 'Take the Scenic Route',
slug: 'take-the-scenic-route',
date: 'July 12, 2026',
intro: 'A slower way to discover the places, paths, and small discoveries surrounding Ardea House.',
heroImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85',
sections: [
{
heading: 'The longer way is often better.',
paragraphs: [
'There is always a faster route. But faster is not necessarily more interesting.',
'Leave the map for a while. Follow the road that looks quieter, take the path beside the water, and allow yourself to arrive a little later than planned.'
]
},
{
image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
heading: 'Look around.',
paragraphs: [
'The character of a place lives in the details. A small bakery opening in the morning. An old building you nearly walked past. A view that appears when you turn a corner.',
'These are the discoveries that rarely make it onto a conventional itinerary.'
]
},
{
heading: 'Go without a checklist.',
paragraphs: [
'The surrounding area is best explored with enough time to change your mind.',
'Ask us where we would go. Then take the long way there.'
]
}
]
},
{
category: 'WELLNESS',
title: 'The Luxury of Doing Nothing',
slug: 'the-luxury-of-doing-nothing',
date: 'June 24, 2026',
intro: 'There is an art to an empty afternoon. Here is why doing less might be the most restorative thing you can do.',
heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
sections: [
{
heading: 'An empty afternoon is not wasted.',
paragraphs: [
'We are very good at filling time. There is always somewhere to go, something to see, or another task waiting to be completed.',
'But rest needs space. Sometimes the most valuable part of a trip is the afternoon where absolutely nothing happens.'
]
},
{
image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
heading: 'Slow down enough to notice.',
paragraphs: [
'Read a few pages. Sit outside. Take a nap. Listen to the sounds around you.',
'When the need to be productive disappears, small things become surprisingly enjoyable. Morning light. Fresh sheets. A cup of tea that stays warm beside you.'
]
},
{
heading: 'Rest is part of the journey.',
paragraphs: [
'A slower pace does not mean missing out. It means being present enough to experience where you actually are.',
'Give yourself permission to do less. You may find that you return home feeling like you have done more.'
]
}
]
},
{
category: 'TRAVEL',
title: 'How to Have a Slower Weekend',
slug: 'how-to-have-a-slower-weekend',
date: 'June 08, 2026',
intro: 'Forget the checklist. A simple guide to making two days feel considerably longer.',
heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85',
sections: [
{
heading: 'Arrive without a plan.',
paragraphs: [
'The weekend does not need to begin with a list. Leave some space between arriving and deciding what comes next.',
'Put your bags down. Take a breath. Walk around the house. Let yourself arrive before thinking about where you need to go.'
]
},
{
image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85',
heading: 'Choose one thing.',
paragraphs: [
'Instead of trying to see everything, choose one thing you genuinely want to experience.',
'Spend the morning exploring. Have lunch somewhere local. Return in the afternoon and leave the evening completely open.'
]
},
{
heading: 'Make Sunday slower.',
paragraphs: [
'Sleep a little longer. Have breakfast without checking the time. Take one final walk before heading home.',
'Two days can feel surprisingly long when you stop trying to fit everything into them.'
]
}
]
},
{
category: 'THE HOUSE',
title: 'Rooms With a Story to Tell',
slug: 'rooms-with-a-story-to-tell',
date: 'May 21, 2026',
intro: 'Natural materials, old pieces, and thoughtful details come together to give Ardea its character.',
heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
sections: [
{
heading: 'Nothing here is accidental.',
paragraphs: [
'A room can be beautiful without feeling designed. We wanted the spaces at Ardea to feel collected rather than constructed.',
'Old pieces sit beside new ones. Natural materials soften the architecture. Small imperfections are allowed to remain.'
]
},
{
image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85',
heading: 'Materials that get better with time.',
paragraphs: [
'Wood, linen, stone, ceramic, and brushed metal were chosen for how they feel as much as how they look.',
'The idea was simple: create rooms that become more comfortable the longer you spend in them.'
]
},
{
heading: 'A sense of somewhere.',
paragraphs: [
'A hotel room should tell you something about where you are. Not through decoration alone, but through its atmosphere, its materials, and the details that make it feel connected to its surroundings.',
'That is what gives an Ardea room its character. Quietly considered, comfortably lived in, and never trying too hard.'
]
}
]
}
]

function JournalArticle() {
const { slug } = useParams()
const article = journalArticles.find((item) => item.slug === slug)
const pageRef = useRef(null)

useLayoutEffect(() => {
if (!article) return


const ctx = gsap.context(() => {
  const heroItems = gsap.utils.toArray('.article-hero-reveal')

  gsap.fromTo(
    heroItems,
    { y: 35, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1
    }
  )

  gsap.fromTo(
    '.article-hero-image',
    { opacity: 0, scale: 1.04 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.article-hero-image',
        start: 'top 82%',
        once: true
      }
    }
  )

  gsap.utils.toArray('.article-section').forEach((section) => {
    const image = section.querySelector('.article-section-image')
    const heading = section.querySelector('.article-section-heading')
    const paragraphs = section.querySelectorAll('.article-paragraph')

    if (image) {
      gsap.fromTo(
        image,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            once: true
          }
        }
      )
    }

    gsap.fromTo(
      [heading, ...paragraphs],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true
        }
      }
    )
  })

  gsap.fromTo(
    '.article-cta-reveal',
    { y: 35, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.article-cta',
        start: 'top 80%',
        once: true
      }
    }
  )
}, pageRef)

return () => ctx.revert()


}, [article])

if (!article) {
return <Navigate to="/journal" replace />
}

return ( <main ref={pageRef} className="bg-[#FFFFFF] text-[#0783B6]"> <section className="px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-40"> <div className="mx-auto max-w-5xl"> <Link
         to="/journal"
         className="article-hero-reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] text-[#0783B6] transition-colors duration-300 hover:text-[#39ABE7]"
       > <span>←</span>
BACK TO JOURNAL </Link>


      <div className="mt-14">
        <p className="article-hero-reveal font-body text-xs tracking-[0.3em] text-[#0783B6]">
          {article.category}
        </p>

        <h1 className="article-hero-reveal mt-6 max-w-5xl font-display text-5xl leading-[0.92] text-[#0783B6] sm:text-7xl lg:text-8xl">
          {article.title}
        </h1>

        <p className="article-hero-reveal mt-7 font-body text-xs text-[#0783B6]/60">
          {article.date}
        </p>

        <p className="article-hero-reveal mt-10 max-w-3xl font-body text-lg leading-8 text-[#0783B6] sm:text-xl sm:leading-9">
          {article.intro}
        </p>
      </div>
    </div>
  </section>

  <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10 lg:pb-36">
    <div className="mx-auto max-w-7xl overflow-hidden">
      <img
        src={article.heroImage}
        alt={article.title}
        className="article-hero-image aspect-[16/8] h-full w-full object-cover"
      />
    </div>
  </section>

  <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40">
    <div className="mx-auto max-w-3xl">
      {article.sections.map((section, index) => (
        <div
          key={index}
          className={`article-section ${index > 0 ? 'mt-16 sm:mt-20' : ''}`}
        >
          {section.image && (
            <div className="article-section-image mb-12 overflow-hidden">
              <img
                src={section.image}
                alt={section.heading}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          )}

          <h2 className="article-section-heading font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl">
            {section.heading}
          </h2>

          <div className="mt-6 space-y-6">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="article-paragraph font-body text-base leading-8 text-[#0783B6] sm:text-lg sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="article-cta bg-[#CBDEEF] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
    <div className="mx-auto max-w-4xl text-center">
      <p className="article-cta-reveal font-body text-xs tracking-[0.3em] text-[#0783B6]">
        KEEP EXPLORING
      </p>

      <h2 className="article-cta-reveal mt-6 font-display text-4xl leading-tight text-[#0783B6] sm:text-5xl lg:text-6xl">
        More time for
        <span className="block text-[#39ABE7]">
          the things that matter.
        </span>
      </h2>

      <p className="article-cta-reveal mx-auto mt-7 max-w-2xl font-body text-base leading-8 text-[#0783B6] sm:text-lg">
        Stay a little longer, slow down, and experience Ardea House at
        your own pace.
      </p>

      <Link
        to="/stays"
        className="article-cta-reveal mt-9 inline-block rounded-lg bg-[#39ABE7] px-7 py-3.5 font-body text-sm font-medium text-[#FFFFFF] transition-colors duration-300 hover:bg-[#0783B6]"
      >
        Find a Stay
      </Link>
    </div>
  </section>
</main>


)
}

export default JournalArticle
