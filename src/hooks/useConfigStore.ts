import { create } from 'zustand';
import type { VisitPlace, TourRoute, TransitOption, CanalConfig } from '../types';
import { dockData } from '../data/dock';
import { lockData } from '../data/lock';
import { granaryData } from '../data/granary';
import { familyData } from '../data/family';
import defaultRoutes from '../data/routes';

const defaultPlaces: Record<string, VisitPlace[]> = {
  dock: dockData.places,
  lock: lockData.places,
  granary: granaryData.places,
  family: familyData.places,
};

const defaultTourRoutes: TourRoute[] = defaultRoutes;

const defaultPublicTransit: TransitOption[] = [
  {
    type: 'subway',
    name: '地铁 2 号线',
    description: '沿运河西岸贯穿主要景点的骨干线路',
    stations: [
      { name: '运河站', destinations: ['运河大码头遗址公园', '老码头茶馆'], walkMinutes: 5 },
      { name: '闸口站', destinations: ['通济闸古遗址', '船闸博物馆'], walkMinutes: 15 },
    ],
  },
  {
    type: 'subway',
    name: '地铁 3 号线',
    description: '连接粮仓区与城市中心',
    stations: [
      { name: '仓场站', destinations: ['丰济仓历史文化街区', '漕运博物馆'], walkMinutes: 6 },
    ],
  },
  {
    type: 'bus',
    name: '公交 5 路',
    description: '沿运河西岸运行，通济闸方向',
    stations: [
      { name: '通济闸站', destinations: ['通济闸古遗址', '船闸博物馆'], walkMinutes: 3 },
    ],
  },
  {
    type: 'bus',
    name: '公交 12 路',
    description: '前往船工村方向',
    stations: [
      { name: '船工村站', destinations: ['船工村', '水上人家展示馆', '号子传习所'], walkMinutes: 2 },
    ],
  },
  {
    type: 'bus',
    name: '公交 18 路',
    description: '连接盐码头与丰济仓',
    stations: [
      { name: '盐码头站', destinations: ['盐码头历史陈列馆'], walkMinutes: 1 },
      { name: '丰济仓站', destinations: ['丰济仓历史文化街区'], walkMinutes: 4 },
    ],
  },
];

interface ConfigState {
  loaded: boolean;
  places: Record<string, VisitPlace[]>;
  tourRoutes: TourRoute[];
  publicTransit: TransitOption[];
  loadConfig: () => Promise<void>;
  getPlaces: (sectionId: string) => VisitPlace[];
}

function mergePlaces(
  defaults: Record<string, VisitPlace[]>,
  configSections: CanalConfig['sections'],
): Record<string, VisitPlace[]> {
  const merged = { ...defaults };
  if (!configSections) return merged;
  for (const [key, val] of Object.entries(configSections)) {
    if (val?.places) {
      merged[key] = val.places;
    }
  }
  return merged;
}

export const useConfigStore = create<ConfigState>((set, get) => ({
  loaded: false,
  places: defaultPlaces,
  tourRoutes: defaultTourRoutes,
  publicTransit: defaultPublicTransit,

  loadConfig: async () => {
    if (get().loaded) return;
    try {
      const resp = await fetch('/config.json');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const config: CanalConfig = await resp.json();
      set({
        loaded: true,
        places: mergePlaces(defaultPlaces, config.sections),
        tourRoutes: config.tourRoutes ?? defaultTourRoutes,
        publicTransit: config.publicTransit ?? defaultPublicTransit,
      });
    } catch {
      set({ loaded: true });
    }
  },

  getPlaces: (sectionId: string) => {
    return get().places[sectionId] ?? [];
  },
}));
