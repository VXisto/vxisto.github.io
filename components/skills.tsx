'use client'

import { useLanguage } from "@/contexts/language-context"
import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Win98Window } from "./win98-window"

export function Skills() {
  const { language } = useLanguage()

  return (
    <section id="skills" className="py-12">
      <div className="container">
        <Win98Window title={content.skills.title[language]}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.skills.categories.map((category, index) => (
              <motion.div
                key={typeof category.name === 'string' ? category.name : category.name.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-300 p-2"
              >
                <h3 className="font-bold mb-2">
                  {typeof category.name === 'string' ? category.name : category.name[language]}
                </h3>
                <ul className="list-disc list-inside">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Win98Window>
      </div>
    </section>
  )
}

