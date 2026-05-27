import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { SideNav } from "./components/SideNav";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { HowIWork } from "./components/HowIWork";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { SpokenLanguages } from "./components/SpokenLanguages";
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
    console.log(
      "%cHello, curious one.\n%c>_ You're nosing around in the right places.\n%c   — Eliya",
      "color: #F0EDE8; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;",
      "color: #6EBF9E; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500;",
      "color: #5B9BD5; font-family: 'JetBrains Mono', monospace; font-size: 13px;"
    );
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: "#0E0F11", minHeight: "100vh", fontFamily: "Inter, sans-serif", color: "#F0EDE8" }}>
      <Nav />
      <SideNav />
      <main>
        <Hero />
        <SelectedWork />
        <HowIWork />
        <Experience />
        <Education />
        <SpokenLanguages />
        <PersonalProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
