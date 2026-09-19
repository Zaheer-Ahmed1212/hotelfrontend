import React from 'react'
import JournalArticle from './JournalArticle'

function ArtOfStayingIn() {
  return (
    <JournalArticle
      category="THE HOUSE"
      title="The Art of Staying In"
      date="August 18, 2026"
      intro="Why the best escapes sometimes begin with closing the front door and staying exactly where you are."
      heroImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
      sections={[
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
      ]}
    />
  )
}

export default ArtOfStayingIn