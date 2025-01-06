import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Interests } from "@/components/interests"

export default function Home() {
  return (
    <main className="space-y-12">
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Interests />
    </main>
  )
}

