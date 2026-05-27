export const SECTIONS = [
  { id: "hero",       label: "start",       num: "00" },
  { id: "work",       label: "work",        num: "01" },
  { id: "how-i-work", label: "how i work",  num: "02" },
  { id: "experience", label: "experience",  num: "03" },
  { id: "education",  label: "education",   num: "04" },
  { id: "languages",  label: "languages",   num: "05" },
  { id: "projects",   label: "projects",    num: "06" },
  { id: "skills",     label: "skills",      num: "07" },
  { id: "contact",    label: "contact",     num: "08" },
] as const;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.offsetTop - 72;
  window.scrollTo({ top, behavior: "smooth" });
}
