'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function ProjectVisual({
  src,
  alt,
  dark = false,
}: {
  src: string
  alt: string
  dark?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .94, y: 52 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: .1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.008 }}
      className={`overflow-hidden rounded-[18px] border ${dark ? 'border-white/10 bg-black' : 'border-black/10 bg-white'} shadow-[0_40px_120px_rgba(0,0,0,.12)]`}
    >
      <Image src={src} alt={alt} width={1800} height={1000} className="h-auto w-full" />
    </motion.div>
  )
}
