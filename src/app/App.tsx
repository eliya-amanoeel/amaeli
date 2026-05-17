import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { HowIWork } from "./components/HowIWork";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { PersonalProjects } from "./components/PersonalProjects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function setMetaTag(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setFavicon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#0E0F11"/>
    <rect width="32" height="32" rx="6" fill="none" stroke="#2A2C30" stroke-width="1"/>
    <text x="7" y="22" font-family="monospace" font-size="13" font-weight="500" fill="#52504D">&#x3E;_</text>
    <text x="21" y="22" font-family="monospace" font-size="13" font-weight="500" fill="#6EBF9E">EA</text>
  </svg>`;
  const url = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
}

export default function App() {
  useEffect(() => {
    setFavicon();
    document.title = "Eliya Amanoeel — Senior Developer & Solutions Architect";
    document.documentElement.lang = "en";
    setMetaTag("description", "Senior .NET and SharePoint developer based in Stockholm with 13+ years of experience building internal platforms, migration solutions, and governance tools on the Microsoft stack.");
    setMetaTag("og:title", "Eliya Amanoeel — Senior Developer & Solutions Architect", true);
    setMetaTag("og:description", "Senior .NET and SharePoint developer based in Stockholm with 13+ years of experience building internal platforms, migration solutions, and governance tools on the Microsoft stack.", true);
    setMetaTag("og:url", "https://amaeli.se", true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:image", "https://amaeli.se/og-image.svg", true);
    setMetaTag("og:image:width", "1200", true);
    setMetaTag("og:image:height", "630", true);
    setMetaTag("twitter:card", "summary");
    setMetaTag("twitter:title", "Eliya Amanoeel — Senior Developer & Solutions Architect");
    setMetaTag("twitter:description", "Senior .NET and SharePoint developer based in Stockholm with 13+ years of experience building internal platforms, migration solutions, and governance tools on the Microsoft stack.");
  }, []);

  return (
    <div style={{ backgroundColor: "#0E0F11", minHeight: "100vh", fontFamily: "Inter, sans-serif", color: "#F0EDE8" }}>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <HowIWork />
        <Experience />
        <Education />
        <PersonalProjects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
