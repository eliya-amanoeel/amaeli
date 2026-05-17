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
import { Footer } from "./components/Footer";

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

export default function App() {
  useEffect(() => {
    document.title = "Eliya Amanoeel — Senior Developer & Solutions Architect";
    document.documentElement.lang = "en";
    setMetaTag("description", "Senior .NET and SharePoint developer based in Stockholm with 13+ years of experience building internal platforms, migration solutions, and governance tools on the Microsoft stack.");
    setMetaTag("og:title", "Eliya Amanoeel — Senior Developer & Solutions Architect", true);
    setMetaTag("og:description", "Senior .NET and SharePoint developer based in Stockholm with 13+ years of experience building internal platforms, migration solutions, and governance tools on the Microsoft stack.", true);
    setMetaTag("og:url", "https://amaeli.se", true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:image", "https://amaeli.se/og-image.png", true);
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
      <Footer />
    </div>
  );
}
