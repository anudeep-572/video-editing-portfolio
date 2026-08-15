import { useState, useLayoutEffect } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

export default function TravelingImage() {
  const { scrollY } = useScroll()
  const [rects, setRects] = useState({ hero: null, about: null })

  useLayoutEffect(() => {
    const updateRects = () => {
      const h = document.getElementById('hero-photo-placeholder')
      const a = document.getElementById('about-photo-placeholder')
      if (h && a) {
        const hRect = h.getBoundingClientRect()
        const aRect = a.getBoundingClientRect()
        setRects({
          hero: {
            top: hRect.top + window.scrollY,
            left: hRect.left + window.scrollX,
            width: hRect.width,
            height: hRect.height
          },
          about: {
            top: aRect.top + window.scrollY,
            left: aRect.left + window.scrollX,
            width: aRect.width,
            height: aRect.height
          }
        })
      }
    }
    // Small delay to ensure React has fully rendered and laid out the placeholders
    setTimeout(updateRects, 100)
    window.addEventListener('resize', updateRects)
    return () => window.removeEventListener('resize', updateRects)
  }, [])

  // Ensure hooks are called unconditionally
  const startY = 0
  const endY = rects.about ? Math.max(10, rects.about.top - window.innerHeight * 0.4) : 100

  const top = useTransform(scrollY, [startY, endY], [rects.hero?.top || 0, rects.about?.top || 0])
  const left = useTransform(scrollY, [startY, endY], [rects.hero?.left || 0, rects.about?.left || 0])
  const width = useTransform(scrollY, [startY, endY], [rects.hero?.width || 0, rects.about?.width || 0])
  const height = useTransform(scrollY, [startY, endY], [rects.hero?.height || 0, rects.about?.height || 0])
  
  const rotate = useTransform(scrollY, [startY, endY], [0, 360])
  const grayscale = useTransform(scrollY, [startY, endY], [100, 0])
  const filter = useMotionTemplate`grayscale(${grayscale}%)`
  const borderRadius = useTransform(scrollY, [startY, endY], ["16px 16px 0px 0px", "12px 12px 12px 12px"])

  if (!rects.hero || !rects.about) return null

  return (
    <motion.img
      src="/Profile.png"
      alt="Profile"
      style={{
        position: 'absolute',
        top,
        left,
        width,
        height,
        rotate,
        filter,
        borderRadius,
        objectFit: 'cover',
        zIndex: 50,
        pointerEvents: 'none'
      }}
    />
  )
}
