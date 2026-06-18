import type { SectionContent } from '../types';

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

export const familyData: SectionContent = {
  id: 'family',
  title: '船工家庭篇',
  subtitle: '水上人家的悲欢离合',
  intro: '船工之家，船就是家，家就在船上。一舱老小，随波逐流，聚少离多。他们的生活，是一部写在水面上的家史。',
  history: `运河船工的家，一半在船上，一半在岸上。有的船工成家后，妻子随船生活，孩子们在船上出生、长大；有的船工孤身一人跑船，把根留在岸边的村庄。

船上生活狭小逼仄，一艘货船，前舱装货，后舱住人。煮饭、睡觉、做饭，吃喝拉撒都在这方寸之间。船工们最怕的是船主催着开船，最盼的是春节回家团圆。可有时遇上枯水期、风雪天，堵在半路上，回不了家是常有的事。`,
  photos: [
    {
      id: 'f1',
      url: img('vintage photo of Chinese boat family on traditional wooden canal boat, woman cooking on deck, children playing'),
      caption: '船上的一家',
      year: '约1923年',
      description: '一艘船就是一个家，孩子们在甲板上玩耍，母亲在船尾生火做饭。',
    },
    {
      id: 'f2',
      url: img('old black and white photo Chinese canal boat interior small living quarters, simple wooden furniture'),
      caption: '船舱内景',
      year: '约1934年',
      description: '狭小的后舱，一张床、一个灶，就是船工的全部家当。',
    },
    {
      id: 'f3',
      url: img('historic photo Chinese canal village, canal boats moored along shore, simple houses'),
      caption: '岸边的船工村',
      year: '约1948年',
      description: '运河边的村庄，大部分人家都有人在船上讨生活。',
    },
    {
      id: 'f4',
      url: img('traditional Chinese festival on canal, boat lantern festival, lights reflecting on water, celebration'),
      caption: '船上的节日',
      year: '约1952年',
      description: '过年时，船工们在船头贴上春联，挂上红灯，在水上过年。',
    },
    {
      id: 'f5',
      url: img('contemporary photo elderly Chinese person showing old photos, canal background, family heritage memory'),
      caption: '今日的船工后代',
      year: '当代',
      description: '船工后代讲述祖辈故事，将口述历史记录下来。',
    },
  ],
  quotes: [
    {
      id: 'fq1',
      content: '我是在船上出生的，娘说生我的时候，船正过闸呢。名字就叫「闸生」。',
      speaker: '赵闸生',
      identity: '船工之子',
      year: '2015年采访',
    },
    {
      id: 'fq2',
      content: '丈夫一走就是几个月，我带着娃在岸上种地，夜里听着河里的船笛声，就知道他回来了没有。那声音，记一辈子。',
      speaker: '张王氏',
      identity: '船工妻子',
      year: '2007年采访',
    },
    {
      id: 'fq3',
      content: '船上过年最简单，切两斤肉，包顿饺子，船头贴副对联，挂个红灯笼。再给祖宗磕个头，这年就算过了。',
      speaker: '郑德厚',
      identity: '老船工',
      year: '2017年采访',
    },
    {
      id: 'fq4',
      content: '爹每次回家，我和弟弟妹妹都围着他，他从包里掏出糖来，那糖是远方的味道。',
      speaker: '吴小梅',
      identity: '船工之女',
      year: '2019年采访',
    },
  ],
  places: [
    {
      id: 'fp1',
      name: '船工村',
      coverImage: img('traditional Chinese canal village, old houses near water, stone lanes'),
      address: '运河镇 船工村',
      openTime: '全天开放',
      highlights: ['完整的船工传统村落', '百年老宅参观', '船工号子传习所'],
      ticket: '免费',
      transportTip: '公交 12 路「船工村站」下车即到',
    },
    {
      id: 'fp2',
      name: '水上人家展示馆',
      coverImage: img('Chinese museum exhibit showing traditional boat family life, furnished boat interior display'),
      address: '船工村 中心广场',
      openTime: '周二至周日 09:00 – 17:00',
      highlights: ['一比一复原船上生活空间', '船民习俗展', '船工口述影像馆'],
      ticket: '免费',
      transportTip: '村内步行可达',
    },
    {
      id: 'fp3',
      name: '运河号子传习所',
      coverImage: img('Chinese intangible cultural heritage performance, traditional work song performers'),
      address: '船工村 东街 22 号',
      openTime: '周三/周六 14:00 – 16:00（表演）',
      highlights: ['省级非物质文化遗产展示', '每周现场表演', '可互动学习'],
      ticket: '免费',
      transportTip: '村内步行5分钟',
    },
  ],
};
