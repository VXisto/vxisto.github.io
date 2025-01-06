import type { TranslationType } from '@/types/language'

export const content = {
  hero: {
    title: {
      en: "Senior DevOps Engineer",
      pt: "Engenheiro DevOps Sênior"
    },
    subtitle: {
      en: "Bridging the gap between development and operations through innovative solutions and cultural transformation.",
      pt: "Construindo pontes entre desenvolvimento e operações através de soluções inovativas e transformação cultural."
    }
  },
  nav: {
    about: {
      en: "About",
      pt: "Sobre"
    },
    experience: {
      en: "Experience",
      pt: "Experiência"
    },
    skills: {
      en: "Skills",
      pt: "Habilidades"
    },
    contact: {
      en: "Contact",
      pt: "Contato"
    }
  },
  experience: {
    title: {
      en: "Professional Journey",
      pt: "Jornada Profissional"
    },
    timeline: [
      {
        company: "WEX Brasil Tech",
        period: { en: "2023-Present", pt: "2023-Presente" },
        role: { en: "Senior DevOps Engineer", pt: "Engenheiro DevOps Sênior" }
      },
      {
        company: "Sigma Software Group",
        period: "2022-2023",
        role: { en: "Junior DevOps Engineer", pt: "Engenheiro DevOps Júnior" }
      },
      {
        company: "Rubeus",
        period: "2020-2022",
        role: { en: "DevOps/SRE Analyst", pt: "Analista DevOps/SRE" }
      },
      {
        company: "VR SOFTWARE",
        period: "2017-2020",
        role: { en: "Technical Analyst", pt: "Analista Técnico" }
      }
    ]
  },
  skills: {
    title: {
      en: "Technical Expertise",
      pt: "Expertise Técnica"
    },
    categories: [
      {
        name: { en: "Cloud Platforms", pt: "Plataformas Cloud" },
        items: ["GCP", "AWS", "Azure"]
      },
      {
        name: { en: "Containerization", pt: "Containerização" },
        items: ["Docker", "Kubernetes (GKE)"]
      },
      {
        name: "CI/CD",
        items: ["GitHub Actions", "JFrog Platform", "GitLab", "Jenkins"]
      },
      {
        name: { en: "Infrastructure as Code", pt: "Infraestrutura como Código" },
        items: ["Terraform", "Ansible"]
      },
      {
        name: { en: "Scripting", pt: "Programação" },
        items: ["Bash", "Python", "Golang"]
      }
    ]
  },
  interests: {
    title: {
      en: "Personal Interests",
      pt: "Interesses Pessoais"
    },
    items: [
      {
        name: { en: "Music", pt: "Música" },
        icon: "Music"
      },
      {
        name: { en: "Gaming", pt: "Jogos" },
        icon: "Gamepad2"
      },
      {
        name: { en: "Technology", pt: "Tecnologia" },
        icon: "Terminal"
      },
      {
        name: { en: "Community", pt: "Comunidade" },
        icon: "Users"
      }
    ]
  }
}

