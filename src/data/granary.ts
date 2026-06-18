import type { SectionContent } from '../types';

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

export const granaryData: SectionContent = {
  id: 'granary',
  title: '粮仓篇',
  subtitle: '千里漕运的终点',
  intro: '漕运是王朝的生命线，粮仓是漕运的心脏。一船船粮食千里而来，一座座粮仓拔地而起，里面的每一粒米，都浸透了船工的汗水与岁月。',
  history: `京杭大运河承担着南粮北运的重任，每年有数百万石粮食经由运河运往京城。粮仓的选址十分讲究——既要靠近码头便于装卸，又要地势高爽避免潮湿。

仓廪的建筑技艺在清代达到顶峰，每座粮仓都有厚厚的夯土地基、高大的封火墙、透气通风的屋顶结构。守仓人日夜巡逻，防火防鼠防潮，责任重大。粮仓周边逐渐形成了独特的"仓场文化"，搬运工、守仓人、粮商在此生活，形成独特的街巷格局。`,
  photos: [
    {
      id: 'g1',
      url: img('historic Chinese granary building courtyard, large wooden grain storage, rows of large wooden rice bins, old photo sepia'),
      caption: '官仓内部',
      year: '约1918年',
      description: '一排排高大的木仓廪，整齐地储存着千里运来的漕粮。',
    },
    {
      id: 'g2',
      url: img('old photograph of Chinese imperial granary exterior, large courtyard, workers carrying grain, black and white'),
      caption: '粮仓外景',
      year: '约1930年',
      description: '高大的院墙和厚实木门，透着庄重肃穆的气氛。',
    },
    {
      id: 'g3',
      url: img('vintage photo Chinese workers pouring grain into wooden storage bin, traditional method, sepia'),
      caption: '粮食入仓',
      year: '约1936年',
      description: '工人们将粮食倒入仓廪，这是漕运的最后一道工序。',
    },
    {
      id: 'g4',
      url: img('restored Chinese granary museum interior, exhibits, wooden architecture, visitors'),
      caption: '修复后的粮仓博物馆',
      year: '当代',
      description: '旧粮仓改造为博物馆，讲述漕运与粮仓的故事。',
    },
  ],
  quotes: [
    {
      id: 'gq1',
      content: '进了仓场，规矩就大了。不许带火，不许抽烟，连鞋底带的泥都要在外面蹭干净。这是国课（国家的粮食），半点马虎不得。',
      speaker: '马守义',
      identity: '原守仓人',
      year: '2010年采访',
    },
    {
      id: 'gq2',
      content: '卸粮是最累的活。从码头到仓廪，几百步路，一袋粮从船上扛到仓里，肩膀磨出血，汗水滴进粮食里。',
      speaker: '刘长河',
      identity: '仓场搬运工',
      year: '2013年采访',
    },
    {
      id: 'gq3',
      content: '听我爷爷说，粮仓的老鼠都比别处肥。守仓的人养猫，粮仓猫是宝贝，比人吃得好。',
      speaker: '何丽华',
      identity: '守仓人后代',
      year: '2018年采访',
    },
  ],
  places: [
    {
      id: 'gp1',
      name: '丰济仓历史文化街区',
      coverImage: img('restored Chinese granary heritage district, old buildings, cultural street, visitors exploring'),
      address: '仓场路 1 号',
      openTime: '街区全天开放 / 展馆 09:00 – 18:00',
      highlights: ['清代丰济仓原址修复', '漕运主题展', '仓场街巷格局完整保留'],
      ticket: '免费进入街区',
      transportTip: '地铁3号线「仓场站」A口，步行6分钟',
    },
    {
      id: 'gp2',
      name: '漕运博物馆',
      coverImage: img('Chinese canal transportation museum interior, large grain boat model, historical exhibits'),
      address: '丰济仓内东院',
      openTime: '周二至周日 09:00 – 17:00',
      highlights: ['漕运全流程沙盘', '千年漕运史展', '运河粮船一比一模型'],
      ticket: '成人 30 元',
      transportTip: '位于丰济仓景区内',
    },
  ],
};
