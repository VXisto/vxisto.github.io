'use client'

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { content } from "@/data/content"
import { Languages } from 'lucide-react'
import { ThemeSwitcher } from "./theme-switcher"

export function Nav() {
  const { language, setLanguage } = useLanguage()

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold">VX</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              {content.nav.about[language]}
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary">
              {content.nav.experience[language]}
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              {content.nav.skills[language]}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              {content.nav.contact[language]}
            </a>
          </div>
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          >
            <Languages className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

