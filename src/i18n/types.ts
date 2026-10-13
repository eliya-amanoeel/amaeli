export type Translations = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    menu: string;
    sections: Record<string, string>;
  };
  hero: {
    subtitle: string;
    bio1: string;
    bio2: string;
    scroll: string;
  };
  links: {
    source: string;
  };
  selectedWork: {
    sectionLabel: string;
    entries: Record<string, { role: string; description: string; period?: string }>;
  };
  howIWork: {
    sectionLabel: string;
    items: Array<{ heading: string; body: string }>;
  };
  experience: {
    sectionLabel: string;
    dates?: string[];
    entries: Array<{ role: string; description: string }>;
  };
  personalProjects: {
    sectionLabel: string;
    ownershipNote: string;
    entries: Record<string, { status: string; description: string; ownership?: string }>;
  };
  employment: {
    sectionLabel: string;
    periods: string[];
  };
  education: {
    sectionLabel: string;
    period: string;
    programme: string;
    certifications: string;
    certs: string[];
  };
  spokenLanguages: {
    sectionLabel: string;
    entries: Array<{ name: string; level: string }>;
  };
  skills: {
    sectionLabel: string;
    groups: Array<{ label: string }>;
  };
  about: {
    sectionLabel: string;
    paragraphs: string[];
  };
  contact: {
    sectionLabel: string;
    title: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
};
