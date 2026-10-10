import { useEffect, useState } from "react"

export function useScrollPosition(threshold = 16) {
  const [isPastThreshold, setIsPastThreshold] = useState(false)

  useEffect(() => {
    const update = () => setIsPastThreshold(window.scrollY > threshold)

    update()
    window.addEventListener("scroll", update, { passive: true })

    return () => window.removeEventListener("scroll", update)
  }, [threshold])

  return isPastThreshold
}
