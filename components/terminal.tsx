'use client'

import { useLanguage } from "@/contexts/language-context"
import { content } from "@/data/content"
import { motion } from "framer-motion"
import { TerminalIcon, Circle } from 'lucide-react'
import { useState, useEffect } from "react"
import Image from 'next/image'

export function Terminal() {
  const { language } = useLanguage()
  const [text, setText] = useState("")
  const fullText = `> vitor.getCurrentRole()
"${content.hero.title[language]}"
> vitor.getLocation()
"Sumaré, São Paulo, Brasil"
> vitor.getExpertise()
["DevOps", "Cloud", "Infrastructure", "Automation"]
> vitor.getMission()
"${content.hero.subtitle[language]}"
`

  useEffect(() => {
    let currentText = ""
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex]
        setText(currentText)
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [fullText])

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted">
          <div className="flex gap-1.5">
            <Circle className="h-3 w-3 text-red-500" />
            <Circle className="h-3 w-3 text-yellow-500" />
            <Circle className="h-3 w-3 text-green-500" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TerminalIcon className="h-4 w-4" />
            bash
          </div>
        </div>
        <div className="p-4 font-mono text-sm flex items-start">
          <div className="flex-grow">
            <pre className="whitespace-pre-wrap">{text}</pre>
            <div className="inline-block w-2 h-4 bg-primary animate-pulse" />
          </div>
          <div className="ml-4 flex-shrink-0">
            <Image
              src="/lkinprofile.jpg?height=150&width=150"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-md"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

