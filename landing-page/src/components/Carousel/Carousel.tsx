import { useState, useEffect } from "react"

interface CarouselProps {
  images: string[]
  visibleCount?: number
}

export default function Carousel({ images, visibleCount = 1 }: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0)
  const maxIndex = images.length - visibleCount

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  const goPrev = () => setStartIndex((prev) => Math.max(0, prev - 1))
  const goNext = () => setStartIndex((prev) => Math.min(maxIndex, prev + 1))

  const visibleImages = images.slice(startIndex, startIndex + visibleCount)
  const activeIndices = new Set(
    visibleImages.map((_, i) => startIndex + i)
  )

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center gap-2 md:gap-6 w-full max-w-6xl px-2 md:px-4">
        <button
          onClick={goPrev}
          disabled={startIndex === 0}
          aria-label="Previous"
          className="shrink-0 p-2 md:p-3 rounded-full bg-white shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex flex-1 justify-center gap-8">
          {visibleImages.map((src, i) => (
            <img
              key={startIndex + i}
              src={src}
              alt={`Dashboard screenshot ${startIndex + i + 1}`}
              className="w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-lg"
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={startIndex === maxIndex}
          aria-label="Next"
          className="shrink-0 p-3 rounded-full bg-white shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(Math.min(i, maxIndex))}
            aria-label={`Go to image ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              activeIndices.has(i) ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}