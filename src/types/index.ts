export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  year: string;
  description?: string;
}

export interface OralQuote {
  id: string;
  content: string;
  speaker: string;
  identity: string;
  year?: string;
}

export interface VisitPlace {
  id: string;
  name: string;
  coverImage: string;
  address: string;
  openTime: string;
  highlights: string[];
  ticket?: string;
  transportTip?: string;
}

export interface RouteSegment {
  order: number;
  from: string;
  to: string;
  walkMinutes: number;
  description: string;
}

export interface TransitInfo {
  lineType: 'subway' | 'bus';
  lineName: string;
  stationName: string;
  transferWalkMinutes: number;
  fare?: string;
}

export interface TourRoute {
  id: string;
  name: string;
  durationHours: number;
  difficulty: '轻松' | '适中' | '较累';
  highlights: string[];
  segments: RouteSegment[];
  transitStart?: TransitInfo;
  transitEnd?: TransitInfo;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  history: string;
  photos: PhotoItem[];
  quotes: OralQuote[];
  places: VisitPlace[];
}

export interface HomeCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  image: string;
  accentColor: string;
  icon: string;
}
