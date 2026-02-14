"use client"

import { useEffect, useRef } from "react"

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null)
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px" } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    // Observe the element and all children with animate-on-scroll
    const targets = el.querySelectorAll(".animate-on-scroll")
    targets.forEach((target) => observer.observe(target))
    if (el.classList.contains("animate-on-scroll")) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
