'use client'

import { useLanguage } from "@/contexts/language-context"
import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Win98Window } from "./win98-window"

export function Experience() {
  const { language } = useLanguage()

  return (
    <section id="experience" className="py-12 bg-muted/50">
      <div className="container">
        <Win98Window title={content.experience.title[language]}>
          <div className="space-y-4">
            {content.experience.timeline.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-300 pb-4 last:border-b-0 last:pb-0"
              >
                <h3 className="font-semibold">{item.company}</h3>
                <p className="text-sm text-muted-foreground">{item.period[language] || item.period}</p>
                <p className="text-primary">{item.role[language]}</p>
              </motion.div>
            ))}
          </div>
        </Win98Window>
      </div>
    </section>
  )
}

