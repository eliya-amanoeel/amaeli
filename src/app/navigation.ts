export const SECTIONS = [
  { id: "hero",        num: "01" },
  { id: "work",        num: "02" },
  { id: "how-i-work",  num: "03" },
  { id: "experience",  num: "04" },
  { id: "projects",    num: "05" },
  { id: "education",   num: "06" },
  { id: "languages",   num: "07" },
  { id: "skills",      num: "08" },
  { id: "contact",     num: "09" },
] as const;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.offsetTop - 72;
  window.scrollTo({ top, behavior: "smooth" });
}
