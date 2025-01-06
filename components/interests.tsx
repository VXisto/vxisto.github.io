'use client'

import { useLanguage } from "@/contexts/language-context"
import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Win98Window } from "./win98-window"
import { Gamepad2, Music, Terminal, Users } from 'lucide-react'

const icons = {
  Music,
  Gamepad2,
  Terminal,
  Users,
}

export function Interests() {
  const { language } = useLanguage()

  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <Win98Window title={content.interests.title[language]}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.interests.items.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons]
              return (
                <motion.div
                  key={item.name.en}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-300 p-2 text-center"
                >
                  <div className="mb-2">
                    <Icon className="w-6 h-6 mx-auto" />
                  </div>
                  <h3 className="font-medium text-sm">{item.name[language]}</h3>
                </motion.div>
              )
            })}
          </div>
        </Win98Window>
      </div>
    </section>
  )
}

