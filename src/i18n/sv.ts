import type { Translations } from "./types";

export const sv: Translations = {
  meta: {
    title: "Eliya Amanoeel — Senior Developer & Solutions Architect",
    description:
      "Senior .NET- och SharePoint-utvecklare baserad i Stockholm med 13+ års erfarenhet av att bygga interna plattformar, migrationslösningar och styrningsverktyg på Microsoft-stacken.",
  },
  nav: {
    menu: "[ meny ]",
    sections: {
      hero: "start",
      work: "arbete",
      "how-i-work": "metod",
      experience: "erfarenhet",
      projects: "projekt",
      education: "utbildning",
      employment: "anställningar",
      languages: "språk",
      skills: "kompetenser",
      contact: "kontakt",
    },
  },
  hero: {
    subtitle: "Senior utvecklare & lösningsarkitekt — Stockholm",
    bio1: "Jag har arbetat professionellt med mjukvaruutveckling sedan 2013. För mig är det viktigt med system som håller över tid, lösningar som är ärliga med sin komplexitet, och att bibehålla en genuin nyfikenhet på vad nya verktyg kan möjliggöra.",
    bio2: "Drygt 13 års erfarenhet av att bygga interna plattformar, migrationslösningar och styrningsverktyg (governance) på Microsofts plattform. Jag arbetar tvärfunktionellt genom hela leveranskedjan — från arkitektur till release — och använder idag AI-modeller som en kärndel i hur jag designar och bygger mjukvara.",
    scroll: "scrolla",
  },
  selectedWork: {
    sectionLabel: "UTVALDA PROJEKT",
    entries: {
      "forsvarsmakten-fullstack": {
        role: "Fullstack .NET-utvecklare",
        description: "Utvecklade funktioner i hela stacken för Mitt Försvarsmakten — en omfattande intern HR-applikation som används inom hela Försvarsmakten, byggd i Blazor. Arbetade i ett Scrum-team med helhetsansvar: från att fånga upp krav och skriva kod, till driftsättning i produktion. Införde end-to-end-testtäckning för applikationen med Playwright.",
      },
      "forsvarsmakten-sharepoint": {
        role: "SharePoint-utvecklare",
        description: "Utvecklade och driftsatte ny funktionalitet på en omfattande SharePoint-plattform, samt ledde den tekniska migrationen från SharePoint 2016 till SharePoint Subscription Edition. Detta inkluderade att designa migrationsstrategin, utveckla verktygen och genomföra övergången helt utan driftavbrott.",
        period: "2019 – nu",
      },
      trafikverket: {
        role: "SharePoint-utvecklare & Migrationsarkitekt",
        description: "Designade och byggde en skräddarsydd migrationsplattform från grunden för att flytta Trafikverkets SharePoint-miljöer från 2010 till 2016. Arkitekterade och kodade hela pipelinen — exportskript, XML-transformeringslager och importverktyg — som hanterade allt innehåll, all struktur och metadata över flera komplexa miljöer.",
      },
      receptkontroll: {
        role: ".NET & SharePoint-utvecklare",
        description: "Huvudutvecklare för ReceptKontroll — en plattform byggd för Inspektionen för vård och omsorg (IVO) för att övervaka narkotikaförskrivningar och upptäcka potentiell överförskrivning. Utvecklade ny funktionalitet i C# på SharePoint Server 2007, byggde och underhöll BizTalk-integrationslagret mot E-hälsomyndigheten, samt ansvarade för hela releasescykeln under sex år.",
      },
    },
  },
  howIWork: {
    sectionLabel: "METOD",
    items: [
      {
        heading: "Begränsningar före kod",
        body: "Med över 13 år i branschen har jag lärt mig att de flesta tekniska problem egentligen är organisatoriska problem i kostym. Innan jag skriver en enda rad kod lägger jag tid på att förstå de begränsningar — i form av legacy-system, governance-krav och intressenters förväntningar — som avgör om lösningen faktiskt kommer att hålla i produktion. På Försvarsmakten, där jag har varit engagerad sedan 2019, har det inneburit att både ansvara för aktiv funktionsutveckling och en fullständig plattformsmigration, samtidigt som den löpande driften säkrats.",
      },
      {
        heading: "AI som vardagsverktyg",
        body: "Jag använder AI-modeller — såsom OpenAI, Claude och GitHub Copilot — som vardagsverktyg, inte som en gimmick. De gör att jag kan röra mig snabbare, arbeta inom domäner jag inte hade tagit mig an på egen hand, och lägga mer tid på de beslut som faktiskt kräver erfarenhet. Jag har byggt och driftsatt kompletta produkter på det här sättet, inklusive en fullskalig Blazor-applikation och ett projekt som sträcker sig över både mobil och inbäddad programvara (firmware).",
      },
      {
        heading: "Helhetsansvar i leveransen",
        body: "Jag fungerar lika bra som ensam teknisk expert i rummet som i rollen som senior utvecklare i ett större team. Jag är bekväm med att agera brygga mellan affärsidé och tekniskt genomförande, leda Scrum-ceremonier samt ta ett helhetsansvar hela vägen från krav till release.",
      },
    ],
  },
  experience: {
    sectionLabel: "ERFARENHET",
    dates: [
      "2015 – 2018",
      "apr – nov 2016",
      "maj – jun 2016",
      "2015 – 2016",
      "2013 – 2019",
      "2013 – 2014",
      "2012 – 2013",
    ],
    entries: [
      { role: ".NET-utvecklare", description: "Byggde och underhöll skräddarsydda .NET-lösningar för kommunala digitala tjänster inom Stockholms stad." },
      { role: "PowerShell-utvecklare", description: "Automatiserade operativa arbetsflöden via PowerShell åt Skatteverket." },
      { role: "Kravanalytiker", description: "Fångade upp och strukturerade tekniska krav åt Valmyndigheten." },
      { role: "SharePoint Online-utvecklare", description: "Utvecklade SharePoint Online-funktioner för CGI:s interna, globala samarbetsplattform." },
      { role: "SharePoint-utvecklare", description: "Mitt längsta uppdrag — levererade och underhöll SharePoint-lösningar för Inspektionen för vård och omsorg (IVO)." },
      { role: "SharePoint-konsult & On-site Support", description: "SharePoint-konsultation och support på plats hos en av Sveriges största tjänstepensionsförvaltare." },
      { role: "Trainee SharePoint-utvecklare", description: "Första professionella rollen — byggde SharePoint-lösningar och lade grunden för .NET-utveckling." },
    ],
  },
  personalProjects: {
    sectionLabel: "EGNA PROJEKT",
    ownershipNote: "Fullt ägarskap — krav · UI/UX · utveckling · drift · underhåll",
    entries: {
      marnarsay: {
        status: "LIVE",
        description: "En komplett webbapplikation för en lokal kör för att skapa, lagra och redigera psalmer, samt sammanställa tryckta program till gudstjänster. Byggd helt på egen hand i Blazor med en skräddarsydd datamodell för psalmstruktur och programsammansättning. Används aktivt idag.",
      },
      voltio: {
        status: "LIVE",
        description: "Marknadswebbplats för ett startup grundat av två elektriker. Designad och byggd från ax till limpa — från layout och innehåll till driftsättning.",
      },
      firmware: {
        status: "PÅGÅR",
        description: "Ett projekt i produktfas inom outdoor och jakthundar — samutvecklat med en partner. Projektet omfattar specialanpassad hårdvara med firmware skriven i C++, parkopplad med en mobilapplikation. AI-modeller är centrala i utvecklingsprocessen, vilket gör att två personer effektivt kan arbeta tvärfunktionellt med både inbäddade system och mobilutveckling.",
      },
    },
  },
  employment: {
    sectionLabel: "ANSTÄLLNINGAR",
  },
  education: {
    sectionLabel: "UTBILDNING",
    certifications: "CERTIFIERINGAR",
    certs: [
      "Core Solutions of Microsoft SharePoint Server 2013 (70-331, MCTS)",
      "Programming in HTML5 with JavaScript and CSS3 (70-480, MCSD)",
    ],
  },
  spokenLanguages: {
    sectionLabel: "SPRÅK",
    entries: [
      { name: "Svenska", level: "Flytande" },
      { name: "Engelska", level: "Flytande" },
    ],
  },
  skills: {
    sectionLabel: "KOMPETENSER",
    groups: [
      { label: "AI & Moderna verktyg" },
      { label: "Plattformar" },
      { label: "Språk" },
      { label: "Verktyg & DevOps" },
      { label: "Metoder" },
    ],
  },
  contact: {
    sectionLabel: "KONTAKT",
    title: "Senior utvecklare & lösningsarkitekt",
    emailLabel: "E-post",
    phoneLabel: "Telefon",
    linkedinLabel: "LinkedIn",
  },
};
