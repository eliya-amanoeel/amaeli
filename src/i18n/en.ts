import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    title: "Eliya Amanoeel — Senior Full-Stack .NET Developer",
    description:
      "Senior .NET developer based in Stockholm with 13+ years on the Microsoft stack — internal platforms, migration solutions and governance tools, and most recently .NET 10 Blazor applications built AI-first with Claude.",
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
    subtitle: "Senior Full-Stack .NET Developer — Stockholm",
    bio1: "I've been writing software professionally since 2013. I care about systems that hold up, solutions that are honest about their complexity, and staying genuinely curious about what new tooling makes possible.",
    bio2: "13+ years of .NET development on the Microsoft stack: internal platforms, migration solutions and governance tools, and most recently .NET 10 Blazor applications built AI-first with Claude. I work across the full delivery chain, from architecture to release.",
    scroll: "scroll",
  },
  links: {
    source: "Source",
  },
  selectedWork: {
    sectionLabel: "SELECTED WORK",
    entries: {
      "forsvarsmakten-inventeringsportalen": {
        role: "Lead .NET Developer",
        description:
          "Lead developer on Inventeringsportalen, a .NET 10 Blazor Server application that managers across the Swedish Armed Forces use to keep their staff records in line with Active Directory. Built AI-first within the organisation's rules for AI use, with Claude as a pair programmer. I designed the solution in Clean Architecture around a domain model that enforces the inventory rules itself, built single sign-on with role-based access, and delivered admin tooling for data imports, reference data and controlled inventory periods. Deployed through Azure DevOps pipelines, covered by xUnit and Playwright end-to-end tests, and tested against fictional data once complete.",
      },
      akerogarden: {
        role: "Sole .NET Developer & Architect",
        description:
          "Designed and built, and now operate, the booking and administration system for Åkerögården, a rural retreat in Norrtälje, live with real guests since September 2026. A .NET 10 Blazor solution with a static-rendered public site and booking funnel, and an Interactive Server admin panel covering the full booking lifecycle: a state machine enforced in the domain, deposit handling, nightly scheduled jobs, GDPR-driven retention and an audit trail. Built AI-first with Claude Code as a pair programmer. I wrote the requirements specification, and kept it in the project's shared context together with the architecture rules and a pre-merge review checklist, so every change was planned before any code was written and checked against that checklist before merge. Runs on Azure infrastructure defined entirely in Bicep and deployed through Azure DevOps pipelines. Covered by xUnit unit tests, integration tests against real PostgreSQL and Redis containers, and Playwright end-to-end tests with accessibility checks.",
      },
      "forsvarsmakten-fullstack": {
        role: "Full-Stack .NET Developer",
        description:
          "Developed features across the full stack of Mitt Försvarsmakten — a large internal HR application used across the Swedish Armed Forces, built with Angular and ASP.NET MVC. Worked in a Scrum team with end-to-end responsibility: picking up requirements, writing code and shipping to production. Introduced end-to-end test coverage for the application using Playwright.",
      },
      trafikverket: {
        role: ".NET Developer & Migration Architect",
        description:
          "Designed and built a custom migration platform from scratch in C# and .NET to move Trafikverket's SharePoint environments from 2010 to 2016: two WinForms desktop applications for export and import, connected by an XML transformation layer and built on the SharePoint client object model (CSOM). Together they handled all content, structure and metadata across more than 2,000 site collections in multiple complex environments.",
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
        body: "I use AI — Claude, GitHub Copilot and OpenAI's models — as everyday tools, not novelties, in client work and my own projects alike. My workflow is plan-first: the approach is worked out and reviewed before any code is written, and architecture rules, design decisions and documentation are kept in shared context so every change follows the project's conventions. It lets me move faster, work across domains I wouldn't have touched alone, and spend more time on the decisions that actually require experience — while the judgment and the responsibility for what ships stay with me.",
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
        role: "SharePoint Developer",
        description:
          "Developed new functionality on a large SharePoint platform and led the technical migration from SharePoint 2016 to SharePoint Subscription Edition without disrupting live services.",
      },
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
        role: ".NET & SharePoint Developer",
        description:
          "Delivered and maintained .NET and SharePoint solutions for the Swedish Health and Social Care Inspectorate (IVO).",
      },
      {
        role: "SharePoint Consultant & On-site Support",
        description:
          "On-site SharePoint support and consultation for one of Sweden's largest occupational pension providers.",
      },
      {
        role: "Trainee SharePoint Developer",
        description:
          "Six-month traineeship as part of my studies at Nackademin; built SharePoint solutions and grew core .NET development skills.",
      },
    ],
  },
  personalProjects: {
    sectionLabel: "PERSONAL PROJECTS",
    ownershipNote: "Full ownership — requirements · UI/UX · development · hosting · maintenance",
    entries: {
      marnarsay: {
        status: "LIVE",
        description:
          "A complete web application for a local choir to create, store and edit hymns, and assemble printed programmes for services. Built solo in Blazor with a custom data model for hymn structure and programme composition. Actively used.",
      },
      voltio: {
        status: "LIVE",
        description:
          "Marketing website for a startup founded by two electricians. Designed and built end-to-end — from layout and content to deployment.",
      },
      firmware: {
        status: "IN PROGRESS",
        ownership: "Software ownership — firmware · mobile app · website · hardware by my partner",
        description:
          "A product-stage venture in the field of outdoor sports and hunting dogs — co-developed with a partner. Involves custom hardware with firmware written in C++, paired with a companion mobile application. AI models are central to how this is being built, enabling two people to work effectively across embedded systems and mobile development.",
      },
    },
  },
  employment: {
    sectionLabel: "EMPLOYMENT",
    periods: ["Jun 2019 – present", "Aug 2013 – Jun 2019"],
  },
  education: {
    sectionLabel: "EDUCATION",
    period: "Aug 2011 – Jan 2013",
    programme: "SharePoint Development",
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
    title: "Senior Full-Stack .NET Developer",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
};
