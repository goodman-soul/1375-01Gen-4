import type { TourRoute, TransitInfo } from '../types';

const tourRoutes: TourRoute[] = [
  {
    id: 'r1',
    name: '经典半日游（约3小时）',
    durationHours: 3,
    difficulty: '轻松',
    highlights: ['码头遗址', '老茶馆歇脚', '船闸遗址', '适合亲子家庭'],
    segments: [
      {
        order: 1,
        from: '地铁「运河站」',
        to: '运河大码头遗址公园',
        walkMinutes: 5,
        description: '出地铁站B口，沿运河西岸向北，沿途欣赏运河水面风光。',
      },
      {
        order: 2,
        from: '运河大码头遗址公园',
        to: '老码头茶馆',
        walkMinutes: 8,
        description: '沿大码头街步行，穿过老街区，可在茶馆歇脚品茶。',
      },
      {
        order: 3,
        from: '老码头茶馆',
        to: '通济闸古遗址',
        walkMinutes: 20,
        description: '沿河堤步道一路向北，穿过运河古桥，沿途风景最佳。',
      },
      {
        order: 4,
        from: '通济闸古遗址',
        to: '船闸博物馆',
        walkMinutes: 10,
        description: '沿闸口西街进入博物馆区，了解船闸智慧。',
      },
    ],
    transitStart: {
      lineType: 'subway',
      lineName: '地铁 2 号线',
      stationName: '运河站',
      transferWalkMinutes: 5,
      fare: '3 元',
    },
    transitEnd: {
      lineType: 'bus',
      lineName: '公交 5 路',
      stationName: '通济闸站',
      transferWalkMinutes: 3,
      fare: '2 元',
    },
  },
  {
    id: 'r2',
    name: '深度一日游（约6小时）',
    durationHours: 6,
    difficulty: '适中',
    highlights: ['四大板块全覆盖', '含午餐推荐', '船工村体验', '适合文化爱好者'],
    segments: [
      {
        order: 1,
        from: '地铁「仓场站」',
        to: '丰济仓历史文化街区',
        walkMinutes: 6,
        description: '出地铁A口向东，进入仓场路，沿途可见老仓墙。',
      },
      {
        order: 2,
        from: '丰济仓历史文化街区',
        to: '漕运博物馆',
        walkMinutes: 3,
        description: '位于街区内部，从丰济仓东院入口进入。',
      },
      {
        order: 3,
        from: '漕运博物馆',
        to: '运河大码头遗址公园',
        walkMinutes: 25,
        description: '沿河堤一路向南，途经运河生态公园，中途可休息用餐。',
      },
      {
        order: 4,
        from: '运河大码头遗址公园',
        to: '盐码头历史陈列馆',
        walkMinutes: 12,
        description: '沿河继续向南，穿过盐运巷，进入陈列馆。',
      },
      {
        order: 5,
        from: '盐码头历史陈列馆',
        to: '船工村',
        walkMinutes: 30,
        description: '过运河古桥至东岸，沿运河步道向东，路经居民区。',
      },
      {
        order: 6,
        from: '船工村',
        to: '水上人家展示馆',
        walkMinutes: 5,
        description: '位于村内中心广场旁。',
      },
    ],
    transitStart: {
      lineType: 'subway',
      lineName: '地铁 3 号线',
      stationName: '仓场站',
      transferWalkMinutes: 6,
      fare: '3 元',
    },
    transitEnd: {
      lineType: 'bus',
      lineName: '公交 12 路',
      stationName: '船工村站',
      transferWalkMinutes: 2,
      fare: '2 元',
    },
  },
  {
    id: 'r3',
    name: '船工文化深度游（约8小时）',
    durationHours: 8,
    difficulty: '较累',
    highlights: ['所有景点全包含', '适合深度文化体验', '可看号子表演', '适合历史研究者'],
    segments: [
      {
        order: 1,
        from: '地铁「运河站」',
        to: '运河大码头遗址公园',
        walkMinutes: 5,
        description: '早晨出发，感受晨光中的码头。',
      },
      {
        order: 2,
        from: '运河大码头遗址公园',
        to: '老码头茶馆',
        walkMinutes: 8,
        description: '茶馆内用早餐，体验船工早茶。',
      },
      {
        order: 3,
        from: '老码头茶馆',
        to: '盐码头历史陈列馆',
        walkMinutes: 12,
        description: '向南参观盐码头。',
      },
      {
        order: 4,
        from: '盐码头历史陈列馆',
        to: '丰济仓历史文化街区',
        walkMinutes: 25,
        description: '午餐可在丰济仓街区内用餐。',
      },
      {
        order: 5,
        from: '丰济仓历史文化街区',
        to: '通济闸古遗址',
        walkMinutes: 35,
        description: '长距离沿河步行，建议乘坐公交18路转5路可节省体力。',
      },
      {
        order: 6,
        from: '通济闸古遗址',
        to: '船闸博物馆',
        walkMinutes: 10,
        description: '参观船闸博物馆。',
      },
      {
        order: 7,
        from: '船闸博物馆',
        to: '船工村',
        walkMinutes: 40,
        description: '建议乘坐公交5路转12路，节省时间用于村内参观。',
      },
      {
        order: 8,
        from: '船工村',
        to: '水上人家展示馆 / 号子传习所',
        walkMinutes: 5,
        description: '下午可赶上号子表演（周三、周六）。',
      },
    ],
    transitStart: {
      lineType: 'subway',
      lineName: '地铁 2 号线',
      stationName: '运河站',
      transferWalkMinutes: 5,
      fare: '3 元',
    },
    transitEnd: {
      lineType: 'bus',
      lineName: '公交 12 路',
      stationName: '船工村站',
      transferWalkMinutes: 2,
      fare: '2 元',
    },
  },
];

export default tourRoutes;

export interface TransitOption {
  type: 'subway' | 'bus';
  name: string;
  description: string;
  stations: { name: string; destinations: string[]; walkMinutes: number }[];
}

export const publicTransit: TransitOption[] = [
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
