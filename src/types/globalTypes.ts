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

export type TProject = {
  _id: string;
  title: string;
  description: string; // HTML string
  details: string; // HTML string
  techStack: string[];
  liveUrl: string;
  serverLiveUrl?: string;
  frontendGithubRepoLink?: string;
  backendGithubRepoLink?: string;
  imageUrl: string[];
  createdAt: string;
  updatedAt: string;
};


export type TProjectApiResponse = {
  success: boolean;
  message: string;
  statusCode: number;
  data: TProject[];
};


export type TBlog = {
  _id: string;
  title: string;
  content: string;
  coverImage: string[]; // Array of image URLs
  description: string;
  createdAt: string;
  updatedAt?: string; // Optional, because one blog doesn’t have it
  __v?: number;       // Optional, only present in one object
};
