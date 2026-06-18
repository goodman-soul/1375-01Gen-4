import type { SectionContent } from '../types';

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

export const dockData: SectionContent = {
  id: 'dock',
  title: '码头篇',
  subtitle: '船来船往的黄金口岸',
  intro: '码头是运河的门户，是船工旅途的起点与终点。千百年来，无数粮船、货船在此停泊靠岸，码头上的号子声、装卸声、吆喝声交织成运河最鲜活的市井画卷。',
  history: `明清两代，运河沿线码头林立，大者可容船数百艘，小者也有数十艘停泊。每日黎明开闸放行，傍晚封闸收工。码头上的搬运工人被称为"扛包的"，他们多是附近村落的农民，趁农闲时节来码头讨生活。一袋粮食两百来斤，两人扛着走跳板，讲究的是稳当。

码头最繁忙时，从早到晚人来人往，石板路上被鞋底磨出一道道浅沟。船工们上岸后，第一件事是找澡堂子，然后去茶馆喝茶听书，难得的放松时光里，想家的念头也被冲淡了几分。`,
  photos: [
    {
      id: 'd1',
      url: img('vintage black and white photo of a busy Chinese canal dock with wooden boats, workers carrying sacks, 1930s style sepia tone'),
      caption: '运河大码头装卸场景',
      year: '约1935年',
      description: '码头上人头攒动，扛包工人们将一包包粮食从船舱搬至岸上的粮仓。',
    },
    {
      id: 'd2',
      url: img('old photograph Chinese canal waterfront with stone steps landing pier, wooden cargo boats docked, sepia aged photo 1920s'),
      caption: '青石台阶码头',
      year: '约1928年',
      description: '历经百年的青石台阶，被无数鞋底磨得光滑发亮。',
    },
    {
      id: 'd3',
      url: img('historic Chinese canal dock workers unloading rice sacks, group of men in traditional clothing, black and white photography'),
      caption: '搬运工人合影像',
      year: '约1947年',
      description: '一群扛包工在码头合影留念，记录下辛劳岁月中的片刻。',
    },
    {
      id: 'd4',
      url: img('sunset over Chinese canal with traditional wooden boats anchored at pier, calm water reflection, nostalgic mood'),
      caption: '黄昏中的港湾',
      year: '约1955年',
      description: '忙碌了一天的船只在此停泊，炊烟袅袅，是船工们最安心的时刻。',
    },
    {
      id: 'd5',
      url: img('vintage teahouse near Chinese canal, wooden benches, men drinking tea, old photo style'),
      caption: '码头边的茶馆',
      year: '约1938年',
      description: '船工上岸歇脚之处，一碗粗茶便能解去数日乏累。',
    },
  ],
  quotes: [
    {
      id: 'dq1',
      content: '那时候码头是城里最热闹的地方，天没亮号子声就起来了。"嘿——哟！嘿——哟！"一嗓子下去，半个城都听得见。',
      speaker: '周德顺',
      identity: '原码头搬运工',
      year: '2009年采访',
    },
    {
      id: 'dq2',
      content: '我爹扛了一辈子包，肩膀上磨出厚厚的茧。他说，每一包粮食都是庄户人家的血汗，摔了就是丧良心。',
      speaker: '李桂兰',
      identity: '搬运工后代',
      year: '2014年采访',
    },
    {
      id: 'dq3',
      content: '船一靠岸，我第一个跳下去，脚踩在实地上的感觉真好。可再踏实，也待不了两天，又得上路。',
      speaker: '王大春',
      identity: '老船工',
      year: '2011年采访',
    },
  ],
  places: [
    {
      id: 'dp1',
      name: '运河大码头遗址公园',
      coverImage: img('restored historic Chinese canal dock park, stone steps, heritage signage, visitors walking'),
      address: '运河西岸 大码头街12号',
      openTime: '全年开放 / 24小时',
      highlights: ['明清青石台阶原址保存', '码头工人雕塑群', '古代码头平面示意图碑'],
      ticket: '免费',
      transportTip: '地铁2号线「运河站」B口出，步行5分钟',
    },
    {
      id: 'dp2',
      name: '老码头茶馆（原址复原）',
      coverImage: img('traditional Chinese teahouse interior wooden furniture, canal view, antique style'),
      address: '太平街 38 号',
      openTime: '每日 09:00 – 21:00',
      highlights: ['按1930年代原样复原', '可品尝船工茶（大碗茶）', '定期上演码头号子非遗表演'],
      ticket: '免费入场',
      transportTip: '从大码头步行约8分钟',
    },
    {
      id: 'dp3',
      name: '盐码头历史陈列馆',
      coverImage: img('small Chinese history museum interior with old photos, canal artifacts, exhibition'),
      address: '盐码头巷 8 号',
      openTime: '周二至周日 09:00 – 17:00',
      highlights: ['历代码头文物 200 余件', '运河盐运专题展', '搬运工人影像资料室'],
      ticket: '免费，需预约',
      transportTip: '公交 18 路「盐码头站」下车即到',
    },
  ],
};
