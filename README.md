# 运河船工故事站

> 记录与展示运河沿岸船工的历史与生活——旧照片、口述历史与实地参观指南

## 项目简介

运河船工故事站是一个文化遗产专题网站，按 **码头、船闸、粮仓、船工家庭** 四大篇章展开，收录旧照片、口述历史节选与今日可参观地点，并提供包含步行时间与公共交通方案的游客路线。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建**: Vite 6
- **样式**: TailwindCSS 3（自定义主题扩展）
- **路由**: React Router v6（Hash Router）
- **状态管理**: Zustand 5
- **动画**: Framer Motion 11
- **图标**: Lucide React

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查
npm run check

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 页面结构

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | Hero 主视觉、四篇章入口、精选口述 |
| `/dock` | 码头篇 | 码头历史、旧照片、口述节选、参观地点 |
| `/lock` | 船闸篇 | 船闸原理、老照片、口述故事、参观信息 |
| `/granary` | 粮仓篇 | 粮仓功能与历史、影像、口述、现存遗迹 |
| `/family` | 船工家庭篇 | 生活场景、民俗影像、口述片段、传承展示 |
| `/routes` | 游客路线 | 步行时间轴、公共交通表格 |

## 目录结构

```
src/
├── components/          # 通用组件
│   ├── Layout/          # Header, Footer, AppLayout
│   ├── SectionTitle.tsx # 章节标题
│   ├── PhotoGallery.tsx # 旧照片长廊（含灯箱）
│   ├── OralQuote.tsx    # 口述引用
│   └── PlaceCard.tsx    # 参观地点卡片
├── data/                # 默认数据（TS 内嵌）
│   ├── dock.ts
│   ├── lock.ts
│   ├── granary.ts
│   ├── family.ts
│   └── routes.ts
├── hooks/
│   ├── useConfigStore.ts # Zustand 配置 store
│   └── useTheme.ts
├── pages/               # 页面组件
├── types/               # TypeScript 类型定义
├── App.tsx
├── main.tsx
└── index.css            # Tailwind 指令 + 自定义样式
public/
└── config.json          # 可配置数据（运行时加载）
```

## 配置系统

参观地点、游览路线和公共交通信息支持**运行时配置**，无需重新构建。

### 工作原理

1. 应用启动时自动 fetch `public/config.json`
2. JSON 中的数据覆盖 TS 代码中的默认值
3. 若 `config.json` 加载失败，自动回退到内嵌默认值

### 配置文件结构

`public/config.json` 包含三个顶层字段：

```jsonc
{
  // 各篇章的参观地点（按 section id 索引）
  "sections": {
    "dock": { "places": [/* VisitPlace[] */] },
    "lock": { "places": [/* VisitPlace[] */] },
    "granary": { "places": [/* VisitPlace[] */] },
    "family": { "places": [/* VisitPlace[] */] }
  },

  // 游览路线
  "tourRoutes": [/* TourRoute[] */],

  // 公共交通信息
  "publicTransit": [/* TransitOption[] */]
}
```

### 只覆盖需要改的部分

`sections` 中的每个 key 是可选的。只写需要覆盖的篇章即可，未写的篇章自动使用默认值。`tourRoutes` 和 `publicTransit` 同理——缺失则回退默认。

### 参观地点字段说明

```jsonc
{
  "id": "dp1",                  // 唯一标识
  "name": "运河大码头遗址公园",   // 地点名称
  "coverImage": "https://...",   // 封面图 URL
  "address": "运河西岸 大码头街12号",
  "openTime": "全年开放 / 24小时",
  "highlights": ["看点1", "看点2"],
  "ticket": "免费",             // 可选
  "transportTip": "地铁2号线..." // 可选
}
```

### 游览路线字段说明

```jsonc
{
  "id": "r1",
  "name": "经典半日游（约3小时）",
  "durationHours": 3,
  "difficulty": "轻松",          // "轻松" | "适中" | "较累"
  "highlights": ["码头遗址"],
  "segments": [
    {
      "order": 1,
      "from": "起点",
      "to": "终点",
      "walkMinutes": 5,
      "description": "步行说明"
    }
  ],
  "transitStart": {             // 可选：抵达交通
    "lineType": "subway",       // "subway" | "bus"
    "lineName": "地铁 2 号线",
    "stationName": "运河站",
    "transferWalkMinutes": 5,
    "fare": "3 元"              // 可选
  },
  "transitEnd": { /* 同上 */ }  // 可选：返程交通
}
```

### 部署后修改

构建产物中 `config.json` 位于 `dist/config.json`，可直接编辑后部署，无需再次 `npm run build`。

## 设计系统

| Token | 值 | 用途 |
|-------|-----|------|
| `canal-deep` | `#1F3A5F` | 主色：运河夜色 |
| `earth` | `#8B6914` | 辅色：旧照片底色 |
| `paper` | `#F5F0E1` | 背景：旧纸张质感 |
| `rust` | `#A9442E` | 强调：印章与点缀 |
| `serif` | Noto Serif SC | 标题字体 |
| `sans` | Noto Sans SC | 正文字体 |
