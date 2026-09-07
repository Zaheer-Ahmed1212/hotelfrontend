import React, { useEffect, useRef, useState } from 'react'

const stats = [
  {
    number: 18,
    decimals: 0,
    suffix: '',
    label: 'thoughtfully designed rooms'
  },
  {
    number: 24,
    decimals: 0,
    suffix: '/7',
    label: 'personal support'
  },
  {
    number: 4.9,
    decimals: 1,
    suffix: '',
    label: 'average guest rating'
  },
  {
    number: 12,
    decimals: 0,
    suffix: ' years',
    label: 'of considered hospitality'
  }
]

function Statistics() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const duration = 1600
    const startTime = performance.now()

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      )

      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCounts(
        stats.map((stat) =>
          Number((stat.number * easedProgress).toFixed(stat.decimals))
        )
      )

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [started])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0783B6] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative ${
                index !== 0
                  ? 'lg:border-l lg:border-[#9BD4E5]/40 lg:pl-10'
                  : ''
              }`}
            >
              <p className="font-display text-6xl font-normal leading-none text-[#FFFFFF] sm:text-7xl lg:text-6xl">
                {counts[index]}
                {stat.suffix}
              </p>

              <p className="mt-4 max-w-[180px] font-body text-sm leading-6 text-[#FFFFFF]/75">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics