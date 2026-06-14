export const SECTIONS = [
  { id: "hero",       label: "start",       num: "01" },
  { id: "work",       label: "work",        num: "02" },
  { id: "how-i-work", label: "approach",     num: "03" },
  { id: "experience", label: "experience",  num: "04" },
  { id: "projects",   label: "projects",    num: "05" },
  { id: "education",  label: "education",   num: "06" },
  { id: "languages",  label: "languages",   num: "07" },
  { id: "skills",     label: "skills",      num: "08" },
  { id: "contact",    label: "contact",     num: "09" },
] as const;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.offsetTop - 72;
  window.scrollTo({ top, behavior: "smooth" });
}
