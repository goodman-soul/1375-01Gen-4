import type { SectionContent } from '../types';

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

export const lockData: SectionContent = {
  id: 'lock',
  title: '船闸篇',
  subtitle: '河水升降中的智慧与等待',
  intro: '船闸是运河的咽喉。一道闸门，两边水位；开闸关闸之间，船只在数丈落差中平稳升降。过闸的时刻，是船工们最紧张也最期待的时刻。',
  history: `运河船闸的建造可追溯至宋代，至明清已形成完善的双闸制。船只过闸，先由下游驶入闸室，关闭下闸，开启上闸注水，水位与上游齐平时再开上闸放行。整个过程短则一个时辰，长则大半天。

守闸的闸夫是运河上最有"权力"的人——什么时候开闸、哪条船先过，全凭闸夫一句话。因此过闸时，船工们递烟、说好话，不敢怠慢。船闸旁的日子慢，等闸的船工们便上岸走动，与熟人聊天，消磨时间，闸口旁的集市便这样兴旺起来。`,
  photos: [
    {
      id: 'l1',
      url: img('vintage photo of Chinese canal lock with wooden gates, several boats passing through, sepia aged photo 1920s style'),
      caption: '船闸全景',
      year: '约1925年',
      description: '巨大的木质闸门，需要十几名闸夫合力才能开启。',
    },
    {
      id: 'l2',
      url: img('historic Chinese canal lock workers operating heavy wooden gate mechanism, manual winch, old black and white photograph'),
      caption: '闸夫绞关',
      year: '约1932年',
      description: '闸夫们用巨大的绞盘拉动闸门，这是最耗费体力的工作。',
    },
    {
      id: 'l3',
      url: img('old photograph of canal boats lined up waiting at Chinese lock, narrow waterway, traditional wooden boats'),
      caption: '待闸船队',
      year: '约1940年',
      description: '等待过闸的船只首尾相接，有时能排二三里路。',
    },
    {
      id: 'l4',
      url: img('modern restored Chinese canal lock with original stone walls, water channel, heritage site'),
      caption: '修复后的船闸',
      year: '当代',
      description: '今日的船闸已成为文物，静静诉说着当年的繁忙。',
    },
  ],
  quotes: [
    {
      id: 'lq1',
      content: '最怕等闸，一等就是半天。船里闷得慌，上岸转两圈，回来还没轮到。闸夫就是大爷，得罪不得。',
      speaker: '陈老根',
      identity: '老船工',
      year: '2008年采访',
    },
    {
      id: 'lq2',
      content: '开闸那一瞬间的水声，这辈子忘不了。轰隆隆的，跟打雷似的，水往下游涌。',
      speaker: '赵广福',
      identity: '原闸夫',
      year: '2012年采访',
    },
    {
      id: 'lq3',
      content: '闸门一关上，闸室里就成了另一个世界。水慢慢涨，船慢慢升，那一刻人跟船一起浮起来，像做梦。',
      speaker: '孙秀珍',
      identity: '船工家属',
      year: '2016年采访',
    },
  ],
  places: [
    {
      id: 'lp1',
      name: '通济闸古遗址',
      coverImage: img('ancient Chinese canal lock stone ruins, heritage park, walking paths, informational signs'),
      address: '运河镇 闸口村',
      openTime: '全天开放',
      highlights: ['明代石砌闸墙保存完好', '古代绞关台复原', '水位落差展示牌'],
      ticket: '免费',
      transportTip: '公交 5 路「通济闸站」下车，步行3分钟',
    },
    {
      id: 'lp2',
      name: '船闸博物馆',
      coverImage: img('Chinese museum exhibition showing canal lock engineering models, diagrams, historical displays'),
      address: '闸口西街 56 号',
      openTime: '周二至周日 09:00 – 17:30',
      highlights: ['船闸原理模型（可动手操作）', '历代闸夫使用工具', '过闸影像复原'],
      ticket: '成人 20 元 / 学生半价',
      transportTip: '从通济闸步行约10分钟',
    },
  ],
};
