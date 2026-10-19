import type { Translations } from "./types";

export const sv: Translations = {
  meta: {
    title: "Eliya Amanoeel — Senior fullstack-utvecklare inom .NET",
    description:
      "Senior .NET-utvecklare baserad i Stockholm med 13+ år på Microsoft-stacken — interna plattformar, migrationslösningar och styrningsverktyg, och på senare tid Blazor-applikationer i .NET 10 byggda AI-först med Claude.",
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
      about: "personen",
      contact: "kontakt",
    },
  },
  hero: {
    subtitle: "Senior fullstack-utvecklare inom .NET — Stockholm",
    bio1: "Jag har arbetat professionellt med mjukvaruutveckling sedan 2013. För mig är det viktigt med system som håller över tid, lösningar som är ärliga med sin komplexitet, och att bibehålla en genuin nyfikenhet på vad nya verktyg kan möjliggöra.",
    bio2: "Drygt 13 års .NET-utveckling på Microsofts plattform: interna plattformar, migrationslösningar och styrningsverktyg (governance), och på senare tid Blazor-applikationer i .NET 10 byggda AI-först med Claude. Jag arbetar tvärfunktionellt genom hela leveranskedjan, från arkitektur till release.",
    scroll: "scrolla",
  },
  links: {
    source: "Källkod",
  },
  selectedWork: {
    sectionLabel: "UTVALDA PROJEKT",
    entries: {
      "forsvarsmakten-inventeringsportalen": {
        role: "Ledande .NET-utvecklare",
        description: "Ledande utvecklare för Inventeringsportalen, en Blazor Server-applikation i .NET 10 som chefer inom hela Försvarsmakten använder för att hålla sina personaluppgifter i linje med Active Directory. Byggd AI-först inom organisationens regler för AI-användning, med Claude som parprogrammerare. Jag designade lösningen enligt Clean Architecture kring en domänmodell som själv upprätthåller inventeringsreglerna, byggde single sign-on med rollbaserad åtkomst, och levererade administrationsverktyg för dataimport, referensdata och kontrollerade inventeringsperioder. Driftsätts via Azure DevOps-pipelines, täcks av xUnit- och Playwright-tester (end-to-end) och verifierades i sin helhet mot fiktiv data inför driftstart.",
        period: "2026 – nu",
      },
      akerogarden: {
        role: "Ensam .NET-utvecklare & arkitekt",
        description: "Designade och byggde, och driver nu, boknings- och administrationssystemet för Åkerögården, en gård utanför Norrtälje, i drift med riktiga gäster sedan september 2026. En Blazor-lösning i .NET 10 med en statiskt renderad publik webbplats och bokningsflöde, och en adminpanel i Interactive Server som täcker hela bokningens livscykel: en tillståndsmaskin som upprätthålls i domänen, hantering av handpenning, schemalagda nattliga jobb, GDPR-styrd gallring och spårbarhet (audit trail). Byggd AI-först med Claude Code som parprogrammerare. Jag skrev kravspecifikationen och höll den i projektets delade kontext tillsammans med arkitekturreglerna och en granskningschecklista inför merge, så att varje ändring planerades innan någon kod skrevs och kontrollerades mot checklistan före merge. Körs på Azure-infrastruktur helt definierad i Bicep och driftsätts via Azure DevOps-pipelines. Täcks av enhetstester i xUnit, integrationstester mot riktiga PostgreSQL- och Redis-containrar samt Playwright-tester (end-to-end) med tillgänglighetskontroller.",
        period: "2025 – nu",
      },
      "forsvarsmakten-fullstack": {
        role: "Fullstack-utvecklare inom .NET",
        description: "Utvecklade funktioner i hela stacken för Mitt Försvarsmakten — en omfattande intern HR-applikation som används inom hela Försvarsmakten, byggd med Angular och ASP.NET MVC. Arbetade i ett Scrum-team med helhetsansvar: från att fånga upp krav och skriva kod, till driftsättning i produktion. Införde end-to-end-testtäckning för applikationen med Playwright.",
      },
      trafikverket: {
        role: ".NET-utvecklare & migrationsarkitekt",
        description: "Designade och byggde en skräddarsydd migrationsplattform från grunden i C# och .NET för att flytta Trafikverkets SharePoint-miljöer från 2010 till 2016: två WinForms-skrivbordsapplikationer för export och import, sammankopplade via ett XML-transformeringslager och byggda på SharePoints klientobjektmodell (CSOM). Tillsammans hanterade de allt innehåll, all struktur och metadata i över 2 000 webbplatssamlingar (site collections) i flera komplexa miljöer.",
      },
      receptkontroll: {
        role: ".NET- & SharePoint-utvecklare",
        description: "Ledande utvecklare för ReceptKontroll — en plattform byggd för Inspektionen för vård och omsorg (IVO) för att övervaka narkotikaförskrivningar och upptäcka potentiell överförskrivning. Utvecklade ny funktionalitet i C# på SharePoint Server 2007, byggde och underhöll BizTalk-integrationslagret mot E-hälsomyndigheten, samt ansvarade för hela releasecykeln under sex år.",
      },
    },
  },
  howIWork: {
    sectionLabel: "METOD",
    items: [
      {
        heading: "Begränsningar före kod",
        body: "Med över 13 år i branschen har jag lärt mig att de flesta tekniska problem egentligen är organisatoriska problem i förklädnad. Innan jag skriver en enda rad kod lägger jag tid på att förstå de begränsningar — i form av legacy-system, governance-krav och intressenters förväntningar — som avgör om lösningen faktiskt kommer att hålla i produktion. På Försvarsmakten, där jag har varit engagerad sedan 2019, har det inneburit att både ansvara för aktiv funktionsutveckling och en fullständig plattformsmigration, samtidigt som den löpande driften säkrats.",
      },
      {
        heading: "AI som vardagsverktyg",
        body: "Jag använder AI — Claude, GitHub Copilot och OpenAI:s modeller — som vardagsverktyg, inte som en gimmick, i både kunduppdrag och egna projekt. Mitt arbetssätt utgår från planering: lösningen arbetas fram och granskas innan någon kod skrivs, och arkitekturregler, designbeslut och dokumentation ligger i delad kontext så att varje ändring följer projektets konventioner. Det gör att jag kan röra mig snabbare, arbeta inom domäner jag inte hade tagit mig an på egen hand, och lägga mer tid på de beslut som faktiskt kräver erfarenhet — medan omdömet och ansvaret för det som levereras ligger kvar hos mig.",
      },
      {
        heading: "Helhetsansvar i leveransen",
        body: "Jag fungerar lika bra som ensam teknisk expert i rummet som i rollen som senior utvecklare i ett större team. Jag är bekväm med att agera brygga mellan verksamheten och det tekniska genomförandet, leda Scrum-ceremonier samt ta ett helhetsansvar hela vägen från krav till release.",
      },
    ],
  },
  experience: {
    sectionLabel: "ERFARENHET",
    dates: [
      "2019 – nu",
      "2015 – 2018",
      "apr – nov 2016",
      "maj – jun 2016",
      "2015 – 2016",
      "2013 – 2019",
      "2013 – 2014",
      "2012 – 2013",
    ],
    entries: [
      { role: "SharePoint-utvecklare", description: "Utvecklade ny funktionalitet på en omfattande SharePoint-plattform och ledde den tekniska migrationen från SharePoint 2016 till SharePoint Subscription Edition helt utan driftavbrott." },
      { role: ".NET-utvecklare", description: "Byggde och underhöll skräddarsydda .NET-lösningar för kommunala digitala tjänster inom Stockholms stad." },
      { role: "PowerShell-utvecklare", description: "Automatiserade operativa arbetsflöden via PowerShell åt Skatteverket." },
      { role: "Kravanalytiker", description: "Fångade upp och strukturerade tekniska krav åt Valmyndigheten." },
      { role: "SharePoint Online-utvecklare", description: "Utvecklade SharePoint Online-funktioner för CGI:s interna, globala samarbetsplattform." },
      { role: ".NET- & SharePoint-utvecklare", description: "Levererade och underhöll .NET- och SharePoint-lösningar för Inspektionen för vård och omsorg (IVO)." },
      { role: "SharePoint-konsult & support på plats", description: "SharePoint-konsultation och support på plats hos en av Sveriges största tjänstepensionsförvaltare." },
      { role: "Trainee SharePoint-utvecklare", description: "Sex månaders praktik (LIA) inom min utbildning vid Nackademin — byggde SharePoint-lösningar och lade grunden för .NET-utveckling." },
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
        description: "Marknadswebbplats för ett startupbolag grundat av två elektriker. Designad och byggd från ax till limpa — från layout och innehåll till driftsättning.",
      },
      homerack: {
        status: "HOBBY",
        ownership: "Hobbyprojekt — för att lära mig Proxmox · nätverk · self-hosting",
        description: "Jag har lärt mig hur ett hemmalabb fungerar genom att bygga ett eget. Jag har satt upp ett Proxmox-kluster med tre noder i ett 3D-printat 10-tumsrack och flyttat mina webbplatser dit från Windows Server och IIS, även den här. På vägen har jag lärt mig Linux, Docker och nätverkskonfiguration, och satt upp en Raspberry Pi bredvid klustret för DNS-filtrering med Pi-hole, VPN med WireGuard, reverse proxy och övervakning. Varje beslut och varje runbook dokumenteras löpande. Byggt tillsammans med Claude Code.",
      },
    },
  },
  employment: {
    sectionLabel: "ANSTÄLLNINGAR",
    periods: ["jun 2019 – nu", "aug 2013 – jun 2019"],
  },
  education: {
    sectionLabel: "UTBILDNING",
    period: "aug 2011 – jan 2013",
    programme: "SharePoint-utveckling",
    certifications: "CERTIFIERINGAR",
    certs: [
      "Core Solutions of Microsoft SharePoint Server 2013 (70-331)",
      "Programming in HTML5 with JavaScript and CSS3 (70-480)",
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
      { label: "AI & moderna verktyg" },
      { label: "Plattformar" },
      { label: "Språk" },
      { label: "Verktyg & DevOps" },
      { label: "Metoder" },
    ],
  },
  about: {
    sectionLabel: "PERSONEN BAKOM KODEN",
    paragraphs: [
      "Jag sjunger. Sedan 2008 har jag varit med i en lokal kör i Södertälje — solist ända från början, och körledare sedan 2021. Det är också för den kören jag byggde kor.marnarsay.se — programverktyget längre upp kom ur ett problem jag satt med själv.",
      "Resten av tiden går åt till teknik i mer handfast form. Jag 3D-printar och designar en hel del av modellerna själv, bland annat racket som mitt hemmalabb står i, och gillar DIY-projekt som blandar 3D-printade delar, kretskort och assemblerprogrammering. Och så finns det alltid något hemma som ska fixas eller lagas — jag har svårt att låta bli.",
    ],
  },
  contact: {
    sectionLabel: "KONTAKT",
    title: "Senior fullstack-utvecklare inom .NET",
    emailLabel: "E-post",
    phoneLabel: "Telefon",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
};
