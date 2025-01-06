'use client'

import { useLanguage } from "@/contexts/language-context"
import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Terminal } from "./terminal"

export function Hero() {
  const { language } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
      <div className="container relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Vitor Xisto
          </h1>
          <h2 className="text-2xl font-semibold text-primary">
            {content.hero.title[language]}
          </h2>
        </motion.div>
        <Terminal />
      </div>
    </section>
  )
}

