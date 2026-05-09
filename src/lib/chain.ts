/**
 * 把公司 frontmatter 里的 `segment` 字符串映射到产业链上的"环节"。
 * 用在公司列表页的分组排序里。
 *
 * 顺序大致按 上游 → 中游 → 下游：
 *   EDA & IP   → 设计工具
 *   设备       → 卖铲人
 *   材料       → 原材料
 *   Fabless    → 设计
 *   Foundry    → 制造
 *   IDM        → 整合（设计+制造）
 *   存储       → 存储芯片
 *   封装测试   → 后端封测
 */

export type ChainStage = {
  key: string;
  label: string;
  position: string;
  order: number;
  accent: 'cyan' | 'emerald' | 'amber' | 'rose' | 'indigo' | 'violet' | 'sky' | 'orange';
  blurb: string;
};

export const CHAIN_STAGES: ChainStage[] = [
  {
    key: 'eda',
    label: 'EDA & IP',
    position: '上游 · 设计工具',
    order: 1,
    accent: 'violet',
    blurb: '芯片设计的"操作系统"，订阅制 + 极高切换成本',
  },
  {
    key: 'equipment',
    label: '半导体设备',
    position: '上游 · 卖铲人',
    order: 2,
    accent: 'cyan',
    blurb: '光刻 / 刻蚀 / 沉积 / 量测，决定先进制程谁能造出来',
  },
  {
    key: 'materials',
    label: '半导体材料',
    position: '上游 · 原材料',
    order: 3,
    accent: 'emerald',
    blurb: '硅片 / 光刻胶 / 特种气体，最不性感但最不可缺',
  },
  {
    key: 'fabless',
    label: 'Fabless 设计 / AI 算力',
    position: '中游 · 设计',
    order: 4,
    accent: 'amber',
    blurb: '只设计、不制造的轻资产模式 — AI 时代利润最丰厚',
  },
  {
    key: 'foundry',
    label: '晶圆代工 (Foundry)',
    position: '中游 · 制造',
    order: 5,
    accent: 'sky',
    blurb: '资本和技术门槛极高的"超级工厂"',
  },
  {
    key: 'idm',
    label: 'IDM 整合厂',
    position: '中游 · 设计 + 制造',
    order: 6,
    accent: 'orange',
    blurb: '自己设计 + 自己制造，重资产但闭环',
  },
  {
    key: 'memory',
    label: '存储芯片',
    position: '中游 · DRAM / NAND / HBM',
    order: 7,
    accent: 'rose',
    blurb: '半导体行业最强周期，价格波动可达数倍',
  },
  {
    key: 'packaging',
    label: '封装测试',
    position: '下游 · 后端',
    order: 8,
    accent: 'indigo',
    blurb: '摩尔放缓后的新战场 — CoWoS / SoIC / HBM 堆叠',
  },
];

export function stageOf(segment: string): ChainStage {
  const s = segment;
  // 关键字命中（顺序很重要：先判精确，再判通用）
  if (/EDA|IP/.test(s)) return CHAIN_STAGES[0];
  if (/设备/.test(s)) return CHAIN_STAGES[1];
  if (/材料/.test(s)) return CHAIN_STAGES[2];
  // IDM 必须早于 Foundry / 存储
  if (/IDM/.test(s)) {
    // Samsung/Intel 这种 IDM 但主业偏存储/代工 — 都归到 IDM
    return CHAIN_STAGES[5];
  }
  if (/晶圆代工|Foundry/.test(s)) return CHAIN_STAGES[4];
  if (/存储|HBM|DRAM|NAND|Memory/.test(s)) return CHAIN_STAGES[6];
  if (/封装|Packaging|CoWoS/.test(s)) return CHAIN_STAGES[7];
  // 默认归入 Fabless（覆盖 GPU/CPU/AI/ASIC/Fabless 等）
  return CHAIN_STAGES[3];
}
