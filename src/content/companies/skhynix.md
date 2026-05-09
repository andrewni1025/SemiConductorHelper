---
name: SK 海力士
nameEn: SK hynix Inc.
ticker: 000660.KS
country: 韩国
segment: 存储 / HBM
moat: HBM3E / HBM4 全球绝对领导者 + Nvidia 主供 + 与 TSMC 联合开发 base die
keyPeople: [郭鲁正 Kwak Noh-Jung, 金宇贤 Kim Woo-Hyun]
keyTech: [HBM3E 12-Hi, HBM4 12-Hi, MR-MUF 封装, 1b/1c DRAM, 321 层 NAND (Solidigm), CXL 内存]
customers: [Nvidia (主供), AMD, Broadcom, Microsoft, Apple, Tesla, 中国手机厂商]
competitors: [Samsung, Micron (存储 / HBM)]
website: https://www.skhynix.com
tags: [HBM, DRAM, NAND, AI 存储]
updated: 2026-05-10
---

## 一句话定位

**全球 AI 算力的"内存独家供应商"**——Nvidia H100/H200/B200/GB200/GB300 上的 HBM 主要由 SK Hynix 提供，HBM4 一代也率先供货 Vera Rubin。在 AI 算力链上，SK Hynix 与 TSMC 并列为最受益于 AI capex 的两家公司。

## 主营业务

按 2025 全年（来源：SK Hynix IR、TradingKey 分析）：

- **DRAM**：约占总营收 60%+，其中 **HBM 已超过 50% DRAM 营收**（2026 估计）
- **NAND（含 Solidigm）**：从 Intel 收购 NAND 业务后的整合阶段，已经盈利
- **CIS / 其他**：占比小

财务亮点：**Q4 2025 营收 $17.5B（+47% YoY），运营利润率 49%**——是历史上少见的盈利能力。HBM 销售已售罄至 2026 年底（来源：[TradingKey](https://www.tradingkey.com/analysis/stocks/us-stocks/261577980-skhynix-hbm4-samsung-nvda-micron-mu-tradingkey)）。

## 核心产品 / 技术路线

| 产品 | 状态 | 关键参数 |
|---|---|---|
| **HBM3E 12-Hi (36GB)** | 量产，**Nvidia 主供** | 1.2 TB/s+ 带宽，用于 H200 / B200 / GB200 / GB300 |
| **HBM4 12-Hi** | **2025-Q3 首发样品 → 2026 量产** | 8 Gbps（早期）→ 10 Gbps，36GB；用于 Vera Rubin |
| HBM4E | 2027+ 路线图 | 16-Hi 堆栈、48GB+ |
| 1b nm DRAM (10nm 五代) | 量产 | HBM3E base die |
| **1c nm DRAM (10nm 六代)** | 2026 量产 | HBM4 base die（与 TSMC N5 base die 路线并行） |
| 321 层 NAND (Solidigm) | 2025-2026 量产 | 企业级 SSD 主力 |

## 关键技术护城河

1. **MR-MUF 封装工艺**：HBM 堆栈散热与翘曲控制的关键，是 SK Hynix 良率领先的核心。
2. **TSMC 战略联盟**：HBM4 起 base die 由 TSMC 代工（部分采用 N5 / N3），实现"逻辑级 base die"——把更多控制器、PHY 集成到 base die，能效更高。
3. **Nvidia 深度绑定**：从 HBM3 → HBM3E → HBM4，连续三代第一供，构成高切换成本。
4. **早于对手的产能扩张**：M16 (Icheon)、M15X 持续投产；2026-2027 月产能 HBM 持续翻倍。

## 客户与生态

- **HBM 客户**：Nvidia（最大单一客户）、AMD、Broadcom（用于 Google TPU / Meta MTIA）、Marvell（用于 AWS Trainium / Microsoft Maia）。
- **DRAM / NAND**：Apple、Microsoft、Google、Tesla、几乎所有云厂商。
- **战略股东**：SK 集团（韩国第二大财阀）。
- **政治背景**：受惠于韩国半导体战略 + 美国 CHIPS Act（在 Indiana 投资先进封装厂 $39B 计划）。

## 关键人物

- **郭鲁正（Kwak Noh-Jung）**：CEO，2024 年 3 月接任；主导 HBM 全球攻势的核心人物。技术出身，对 HBM 路线图有强烈个人主张。
- **金宇贤（Kim Woo-Hyun）**：CFO。
- **Justin Kim**：AI Infrastructure 部门主管，与 Nvidia 对接。

## 投资视角

| 维度 | 关注点 |
|---|---|
| **看什么** | HBM 收入与 ASP；HBM4 给 Nvidia Rubin 的份额 (vs Samsung)；季度毛利率与 OPM；Solidigm 整合后的 NAND 盈利能力；M15X 等扩产节奏 |
| **风险** | 1) **Samsung 反追**：HBM4 一代如果 Samsung 拿回 Nvidia 份额，将冲击定价 2) **Micron 追赶**：Micron HBM3E 已部分供货，HBM4 仍在追 3) **DRAM 周期回落**：23% DRAM 晶圆已被 HBM 吃掉，但若 AI 减速可能反向冲击 4) **MATCH Act 风险**：在中国无锡的 fab 设备维护中断 5) **韩元汇率波动** |
| **估值参考** | 2026-05-09 收盘 1,686,000 KRW，市值 ~1,197 万亿 KRW（≈ $861B）；Forward PE **4.56**（数据来源：`data/snapshots/2026-05-09.json`）。极低 Forward PE 反映市场对 HBM 周期持续性的犹豫 |

## 最近动态

- **2026-W19**：HBM 已占 DRAM 晶圆产能 23%，并已售罄至 2026 年底；价格仍在上修。（来源：[tech-insider](https://tech-insider.org/memory-chip-shortage-2026-ai-consumer-electronics/)、[GPUNex](https://www.gpunex.com/blog/gpu-shortage-hbm-crisis-2026/)）
- **2026-02-03 / Q4 2025 财报**：营收 $17.5B（+47% YoY），OPM 49%，HBM 营收同比翻倍以上；指引 HBM 全年售罄。（来源：SK Hynix IR）
- **2025-Q3 / HBM4 首发样品**：领先 Samsung、Micron 率先送样 HBM4 给 Nvidia，锁定 Vera Rubin 主供地位。
- **2024 / 美国 Indiana 工厂**：宣布投资 $3.87B 在 Indiana 建设 HBM 先进封装工厂，是首个海外 HBM 制造投资。
- **2025-12 / 与 TSMC 战略协议**：HBM4 起 base die 由 TSMC 代工，强化"逻辑级 base die"路线。
