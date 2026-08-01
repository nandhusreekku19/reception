import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MOTION_TAG_CACHE = new Map()

function getMotionTag(Tag) {
  if (!MOTION_TAG_CACHE.has(Tag)) {
    MOTION_TAG_CACHE.set(Tag, motion(Tag))
  }
  return MOTION_TAG_CACHE.get(Tag)
}

const VARIANTS = {
  fade: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
}

export default function SectionReveal({
  children,
  variant = 'fade',
  delay = 0,
  duration = 0.9,
  as: Tag = 'div',
  className,
  ...rest
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const MotionTag = useMemo(() => getMotionTag(Tag), [Tag])

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
