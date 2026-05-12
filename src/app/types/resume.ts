/**
 * Plain-data resume model for {@link src/app/config/resume.ts}.
 * Rich lines use small inline parts so the UI can render <strong> / <em> without hardcoding copy in components.
 */
export type ResumeRichPart =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'em'; text: string };

export type ResumeRichLine = ResumeRichPart[];

export type ResumeContact =
  | { kind: 'plain'; text: string }
  | { kind: 'link'; text: string; href: string };

export interface ResumeExperience {
  company: string;
  dateRange: string;
  role: string;
  /** Optional italic blurb under the role (omit when empty). */
  summary?: string;
  bullets: ResumeRichLine[];
  tags: string[];
}

export interface ResumeProject {
  title: string;
  subtitle?: ResumeRichLine;
  linkLabel: string;
  linkHref: string;
  bullets: ResumeRichLine[];
  tags: string[];
}

export interface ResumeEducation {
  degree: string;
  school: string;
  date: string;
  specialization: string;
  thesisTitle: string;
}

export interface ResumeSkillGroup {
  label: string;
  highlight: boolean;
  items: string[];
}

export interface ResumeLanguage {
  name: string;
  level: string;
  pct: number;
}

export interface ResumeContent {
  header: {
    firstName: string;
    lastName: string;
    title: string;
    tagline: string;
    contacts: ResumeContact[];
  };
  sectionTitles: {
    careerPath: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    languages: string;
    awards: string;
  };
  /** Target position and scope over the next ~5 years (IC-first trajectory, not a work history). */
  careerPath: {
    lines: ResumeRichLine[];
  };
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skillGroups: ResumeSkillGroup[];
  languages: ResumeLanguage[];
  awards: string[];
  footer: {
    fullName: string;
    roleLabel: string;
    locationDate: string;
  };
}
