export type TSkillItem = {
  _id: string;
  name: string;
  icon: string; // This is an image URL
};

export type TSkillCategory = {
  _id: string;
  title: string;
  icon: string; // This is a Lucide icon name as string like "ServerIcon"
  items: TSkillItem[];
};

export type TContactEmailPayload = {
  name: string;
  email: string;
  subjectLine: string;
  message: string;
};