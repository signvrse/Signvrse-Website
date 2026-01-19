export enum FeatureMode {
  LANDING = 'LANDING',
  LIVE_AVATAR = 'LIVE_AVATAR',
  VEO_STUDIO = 'VEO_STUDIO',
  IMAGE_ANALYSIS = 'IMAGE_ANALYSIS',
  KNOWLEDGE_BASE = 'KNOWLEDGE_BASE',
  SIGN_LEARN = 'SIGN_LEARN',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string;
  isAudio?: boolean;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface GeneratedMedia {
  type: 'image' | 'video';
  url: string;
  prompt: string;
}