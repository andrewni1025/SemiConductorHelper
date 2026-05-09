/**
 * 股价快照工具
 * - 自动加载 data/snapshots/*.json 中最新一份
 * - 提供 slug → 行情 的查找
 * - 提供 涨跌 / 距 52w 高 / 货币格式化 等派生计算
 */

export type SnapshotItem = {
  slug: string;
  name: string;
  ticker: string;
  currency: string;
  price: number;
  previousClose: number;
  marketCap: number | null;
  trailingPE: number | null;
  forwardPE: number | null;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  longName: string;
};

export type Snapshot = {
  date: string;
  generatedAt: string;
  items: SnapshotItem[];
};

const snapshots = import.meta.glob<Snapshot>('../../data/snapshots/*.json', {
  eager: true,
  import: 'default',
});

const sorted = Object.values(snapshots).sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const latestSnapshot: Snapshot | null = sorted[0] ?? null;

export const stockMap: Map<string, SnapshotItem> = new Map(
  (latestSnapshot?.items ?? []).map((item) => [item.slug, item]),
);

export function getStock(slug: string): SnapshotItem | undefined {
  return stockMap.get(slug);
}

export function changePct(item: SnapshotItem): number {
  if (!item.previousClose) return 0;
  return ((item.price - item.previousClose) / item.previousClose) * 100;
}

export function distFromHighPct(item: SnapshotItem): number {
  if (!item.fiftyTwoWeekHigh) return 0;
  return ((item.price - item.fiftyTwoWeekHigh) / item.fiftyTwoWeekHigh) * 100;
}

export function rangePosition(item: SnapshotItem): number {
  const range = item.fiftyTwoWeekHigh - item.fiftyTwoWeekLow;
  if (range <= 0) return 0;
  return Math.max(0, Math.min(100, ((item.price - item.fiftyTwoWeekLow) / range) * 100));
}

export function formatCurrency(price: number, currency: string): string {
  switch (currency) {
    case 'USD': return `$${price.toFixed(2)}`;
    case 'CNY': return `¥${price.toFixed(2)}`;
    case 'HKD': return `HK$${price.toFixed(2)}`;
    case 'KRW': return `₩${Math.round(price).toLocaleString()}`;
    case 'JPY': return `¥${Math.round(price).toLocaleString()}`;
    default: return `${price.toFixed(2)} ${currency}`;
  }
}

/**
 * 紧凑市值显示。统一显示为"约等值美元"，方便跨币种横向比较。
 * 简易 FX 换算（粗糙但够用，2026-05 量级）：
 */
const FX_TO_USD: Record<string, number> = {
  USD: 1,
  CNY: 0.14,
  HKD: 0.128,
  KRW: 0.00072,
  JPY: 0.0067,
  TWD: 0.031,
  EUR: 1.08,
};

export function formatMarketCapUSD(cap: number | null, currency: string): string {
  if (!cap) return '—';
  const usd = cap * (FX_TO_USD[currency] ?? 1);
  if (usd >= 1e12) return `$${(usd / 1e12).toFixed(2)}T`;
  if (usd >= 1e9) return `$${(usd / 1e9).toFixed(0)}B`;
  if (usd >= 1e6) return `$${(usd / 1e6).toFixed(0)}M`;
  return `$${usd.toFixed(0)}`;
}
