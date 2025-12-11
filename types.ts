export enum ContentType {
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO'
}

export interface Activation {
  id: string;
  title: string;
  month: string;
  description: string;
  videoUrl?: string; // Simulated
  audioUrl?: string; // Simulated
  thumbnail: string;
  isLocked: boolean;
}

export interface Meditation {
  id: string;
  title: string;
  duration: string;
  description: string;
  audioUrl?: string;
  releaseDate: string;
  isLocked: boolean;
}

export interface TeachingResource {
  id: string;
  title: string;
  type: 'VIDEO' | 'PDF' | 'AUDIO';
  description: string;
  thumbnail?: string; // For videos
  duration?: string; // For audio/video
  fileSize?: string; // For PDF
  date: string;
}

export interface User {
  name: string;
  plan: 'active' | 'inactive';
  joinedDate: string;
}