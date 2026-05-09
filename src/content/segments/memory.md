---
title: 存储 (Memory)
summary: DRAM/NAND/HBM——半导体行业最强周期、最大单一市场
representativeCompanies: [Samsung, SK Hynix, Micron, Kioxia, 长江存储 YMTC, 长鑫存储 CXMT]
moat: 巨额资本开支 + 工艺良率 + 寡头默契
cyclicality: 极强周期，价格波动可达数倍
keyTech: [DDR5, LPDDR5X, HBM3E, HBM4, 3D NAND 200+ 层, QLC, TSV]
order: 6
updated: 2026-05-10
---

## 这个环节是干什么的

存储芯片是半导体里第二大单一品类（仅次于逻辑芯片），2024 年市场约 **1700+ 亿美元**。分两大主类：

- **DRAM（动态随机存取存储器）**：内存条、手机内存、HBM；**断电就丢数据**，速度快
- **NAND Flash**：SSD、手机闪存、U 盘；**断电不丢**，容量大、相对慢

近两年又多了一个超级品类：

- **HBM（High Bandwidth Memory，高带宽存储）**：把 8–12 颗 DRAM 用 TSV 技术堆起来 + 超宽带宽，**专供 AI GPU**（NVIDIA H100/B200、AMD MI300）

## 商业模式 & 护城河

- **资本开支怪兽**：一座先进 DRAM fab 投资 200+ 亿美元，仅次于先进逻辑 fab
- **寡头格局**：DRAM 三家（Samsung + SK Hynix + Micron）合计 ~95%，NAND 五家合计 ~95%
- **工艺良率护城河**：1c nm DRAM 良率谁先达标，谁就能拉低成本、抢市场
- **HBM 是新护城河**：SK Hynix 在 HBM3 / HBM3E 阶段领先 1–2 个世代，单价是普通 DDR5 的 5–7 倍，毛利率显著高于普通 DRAM

## 周期特征 — 半导体行业最强

存储是教科书级的"猪周期"：

- 价格上行 → 厂商扩产 → 供给过剩 → 价格暴跌 → 厂商减产 → 价格反弹
- 历史上单价波动可达 **3–5 倍**
- 上下行周期长度约 18–24 个月

**当前（2026 H1）状态**：

- HBM 价格同比 +30–40%（来源：[GPUNex 2026](https://www.gpunex.com/blog/gpu-shortage-hbm-crisis-2026/)）
- HBM 已占 DRAM 晶圆产能 **23%**（来源：[tech-insider 2026](https://tech-insider.org/memory-chip-shortage-2026-ai-consumer-electronics/)）——意味着普通 DDR5 / LPDDR5 也跟着涨
- Micron Q2 FY26 营收 $23.9B（+195% YoY），毛利率 74.9%（来源：本仓库 [2026-W19 周报](../../weekly/2026-W19/)）
- SK Hynix Q4 2025 营收 $17.5B（+47%），营业利润率 49%（同上）

> **认知点**：这一轮上行的核心驱动是 **AI**，而不是传统 PC / 手机。HBM 不仅自己涨，还把 DRAM 整体晶圆产能挤走——这是"周期 + 结构性"叠加。

## 主要参与者

| 公司 | 国家 | 强项 | 关键事件 |
|---|---|---|---|
| **Samsung Memory** | 韩国 | DRAM + NAND 双第一，HBM 追赶中 | HBM3E 12-Hi 已通过 NVIDIA 认证 |
| **SK Hynix** | 韩国 | **HBM 全球第一**（份额 50%+）、DRAM 第二 | 收购 Intel NAND 业务（Solidigm），HBM4 已合作 NVIDIA |
| **Micron** | 美国 | DRAM + NAND 第三，美国唯一存储龙头 | HBM3E 已量产，HBM4 路线图清晰 |
| **Kioxia** | 日本 | NAND 第二（前东芝存储），与 WD 合作 | 2024 年 12 月 IPO 重新上市 |
| **Western Digital** | 美国 | NAND（与 Kioxia 合资）+ HDD | 2025 年 NAND 业务（SanDisk）已分拆 |
| **长江存储 YMTC** | 中国 | 3D NAND 国产主力 | Xtacking 架构，受出口管制压制扩产 |
| **长鑫存储 CXMT** | 中国 | DRAM 国产主力 | DDR4 / LPDDR4 已规模化，DDR5 / HBM 在追赶 |

## 国产替代进展

- **CXMT（长鑫）**：DDR4 / LPDDR4 国内份额上升，DDR5 已小批量出货；**HBM 是必须攻克的战场**
- **YMTC（长江存储）**：3D NAND 200+ 层节点已突破，但被列入 BIS 实体清单后扩产受限
- **MATCH Act 风险**：一旦把"维护服务"也禁掉，CXMT / YMTC 的存量设备运营都会受影响（来源：本仓库 [2026-W19 周报](../../weekly/2026-W19/)）
- **替代节奏**：DRAM 国产化率从 < 5% 逐步抬升至 ~10%（2025 年估计），但 HBM 仍 ~0%

## 投资视角

- **看什么**：
  - 现货 / 合约价（DRAM、NAND、HBM）月度变化
  - HBM 占 DRAM 晶圆产能比例（衡量挤压效应）
  - Bit Growth、库存（DOI）、capex 指引
  - HBM4 量产节奏（SK Hynix vs. Samsung vs. Micron）
- **风险**：
  1. **超级周期**：当前上行已 6–8 季度，历史下行触发往往很突然
  2. **HBM 追赶**：Samsung / Micron 抢份额会压价
  3. **AI capex 拐点**：hyperscaler capex 一旦放缓，HBM 需求会瞬时降温
  4. **地缘政治**：中国 fab 出口管制 + 韩国对中国 fab 的设备限制都是变量

## 推荐阅读

- [Fabless 无晶圆设计](../fabless/)（NVIDIA / AMD 是 HBM 最大客户）
- [先进封装](../advanced-packaging/)（HBM 的 TSV 堆叠 + CoWoS 集成）
- [一颗芯片是怎么造出来的](../../intro/02-how-a-chip-is-made/)
- [2026-W19 周报](../../weekly/2026-W19/)
