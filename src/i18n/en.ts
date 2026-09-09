import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    title: "Eliya Amanoeel — Senior Full-Stack Developer",
    description:
      "Senior .NET and SharePoint developer based in Stockholm with 13+ years of experience building internal platforms, migration solutions, and governance tools on the Microsoft stack.",
  },
  nav: {
    menu: "[ menu ]",
    sections: {
      hero: "start",
      work: "work",
      "how-i-work": "approach",
      experience: "experience",
      projects: "projects",
      education: "education",
      employment: "employment",
      languages: "languages",
      skills: "skills",
      about: "person",
      contact: "contact",
    },
  },
  hero: {
    subtitle: "Senior Full-Stack Developer — Stockholm",
    bio1: "I've been writing software professionally since 2013. I care about systems that hold up, solutions that are honest about their complexity, and staying genuinely curious about what new tooling makes possible.",
    bio2: "13+ years building internal platforms, migration solutions, and governance tools on the Microsoft stack. I work across the full delivery chain — from architecture to release — and use AI models as a core part of how I design and build software today.",
    scroll: "scroll",
  },
  selectedWork: {
    sectionLabel: "SELECTED WORK",
    entries: {
      "forsvarsmakten-fullstack": {
        role: "Fullstack .NET Developer",
        description:
          "Developed features across the full stack of Mitt Försvarsmakten — a large internal HR application used across the Swedish Armed Forces, built in Blazor. Worked in a Scrum team with end-to-end responsibility: picking up requirements, writing code, and shipping to production. Introduced end-to-end test coverage for the application using Playwright.",
      },
      "forsvarsmakten-sharepoint": {
        role: "SharePoint Developer",
        description:
          "Developed and shipped new functionality across a large SharePoint platform, and led the technical migration from SharePoint 2016 to SharePoint Subscription Edition — including designing the migration approach, writing the tooling, and executing the transition without disrupting live services.",
      },
      trafikverket: {
        role: "SharePoint Developer & Migration Architect",
        description:
          "Designed and built a custom migration platform from scratch to move Trafikverket's SharePoint environments from 2010 to 2016. Architected and coded the full pipeline — export scripts, XML transformation layers, and import tooling — that handled all content, structure, and metadata across multiple complex environments.",
      },
      receptkontroll: {
        role: ".NET & SharePoint Developer",
        description:
          "Lead developer on ReceptKontroll — a platform built for the Swedish Health and Social Care Inspectorate (IVO) to monitor narcotic prescriptions and detect potential over-prescribing. Developed new features in C# on SharePoint Server 2007, built and maintained the BizTalk integration layer connecting to the Swedish eHealth Agency, and owned the full release cycle over six years.",
      },
    },
  },
  howIWork: {
    sectionLabel: "APPROACH",
    items: [
      {
        heading: "Constraints before code",
        body: "With over 13 years in the field, I've learned that most technical problems are organisational ones in disguise. Before writing any code, I spend time understanding the constraints — legacy systems, governance requirements, stakeholder expectations — that will determine whether the solution actually holds up in production. At Försvarsmakten, where I've been engaged since 2019, that meant owning both active feature development and a full platform migration while keeping live services running.",
      },
      {
        heading: "AI as everyday tooling",
        body: "I use AI models — OpenAI, Claude, and GitHub Copilot — as everyday tools, not novelties. They let me move faster, work across domains I wouldn't have touched alone, and spend more time on the decisions that actually require experience. I've built and shipped complete products this way — two full Blazor applications, a React marketing site, and a project that spans mobile and embedded firmware.",
      },
      {
        heading: "Full-spectrum delivery",
        body: "I work well both as the sole technical person in the room and as a senior contributor in a larger team. I'm comfortable translating between business stakeholders and implementation, running Scrum ceremonies, and taking end-to-end ownership from requirements to release.",
      },
    ],
  },
  experience: {
    sectionLabel: "EXPERIENCE",
    entries: [
      {
        role: ".NET Developer",
        description:
          "Built and maintained custom .NET solutions for municipal digital services across the City of Stockholm.",
      },
      {
        role: "PowerShell Developer",
        description:
          "Automated operational workflows via PowerShell for Sweden's national tax authority.",
      },
      {
        role: "Requirements Analyst",
        description:
          "Gathered and structured technical requirements for the Swedish Election Authority.",
      },
      {
        role: "SharePoint Online Developer",
        description:
          "Developed SharePoint Online features for CGI's internal global collaboration platform.",
      },
      {
        role: "SharePoint Developer",
        description:
          "Longest engagement — delivered and maintained SharePoint solutions for the national healthcare and social care inspectorate.",
      },
      {
        role: "SharePoint Consultant & On-site Support",
        description:
          "On-site SharePoint support and consultation for one of Sweden's largest occupational pension providers.",
      },
      {
        role: "Trainee SharePoint Developer",
        description:
          "First professional role; built SharePoint solutions and grew core .NET development skills.",
      },
    ],
  },
  personalProjects: {
    sectionLabel: "PERSONAL PROJECTS",
    ownershipNote: "Full ownership — requirements · UI/UX · development · hosting · maintenance",
    entries: {
      akerogarden: {
        status: "LIVE",
        ownership:
          "Full ownership — requirements · architecture · UI/UX · development · infrastructure · maintenance",
        description:
          "A booking and administration system for a rural retreat in Norrtälje, replacing a decommissioned CMS. Built solo in .NET 10 Blazor — a static-rendered public site with a guest booking funnel, and an interactive admin panel covering the full booking lifecycle, pricing rules, meals, facilities and cleaning. Wrote the requirements specification myself and designed the data model around it, with GDPR-driven retention, consent and audit handling. Runs on Azure infrastructure defined entirely in Bicep, deployed through Azure DevOps pipelines, and covered by unit, integration and Playwright end-to-end tests.",
      },
      marnarsay: {
        status: "LIVE",
        description:
          "A complete web application for a local choir to create, store, and edit hymns, and assemble printed programmes for services. Built solo in Blazor with a custom data model for hymn structure and programme composition. Actively used.",
      },
      voltio: {
        status: "LIVE",
        description:
          "Marketing website for a startup founded by two electricians. Designed and built end-to-end — from layout and content to deployment.",
      },
      firmware: {
        status: "IN PROGRESS",
        description:
          "A product-stage venture in the field of outdoor sports and hunting dogs — co-developed with a partner. Involves custom hardware with firmware written in C++, paired with a companion mobile application. AI models are central to how this is being built, enabling two people to work effectively across embedded systems and mobile development.",
      },
    },
  },
  employment: {
    sectionLabel: "EMPLOYMENT",
  },
  education: {
    sectionLabel: "EDUCATION",
    certifications: "CERTIFICATIONS",
    certs: [
      "Core Solutions of Microsoft SharePoint Server 2013 (70-331, MCTS)",
      "Programming in HTML5 with JavaScript and CSS3 (70-480, MCSD)",
    ],
  },
  spokenLanguages: {
    sectionLabel: "LANGUAGES",
    entries: [
      { name: "Swedish", level: "Fluent" },
      { name: "English", level: "Fluent" },
    ],
  },
  skills: {
    sectionLabel: "SKILLS",
    groups: [
      { label: "AI & Modern Tooling" },
      { label: "Platforms" },
      { label: "Languages" },
      { label: "Tools & DevOps" },
      { label: "Practices" },
    ],
  },
  about: {
    sectionLabel: "THE PERSON BEHIND THE CODE",
    paragraphs: [
      "I sing. I've been part of a local choir in Södertälje since 2008 — a soloist from the very start, and its choir leader since 2021. It's also the choir I built kor.marnarsay.se for — the programme tool further up came out of a problem I was sitting with myself.",
      "The rest of my time goes to technology in a more hands-on form. I 3D-print and design a fair share of the models myself, and I enjoy DIY projects that mix printed parts, circuit boards and assembly programming. And there's always something at home that needs fixing — I find it hard to leave alone.",
    ],
  },
  contact: {
    sectionLabel: "CONTACT",
    title: "Senior Full-Stack Developer",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
  },
};
