---
name: 英特尔
nameEn: Intel Corporation
ticker: INTC
country: 美国
segment: IDM (CPU + Foundry)
moat: 美国本土最大先进制程 IDM + CHIPS Act 政策受益方 + x86 装机量基数
keyPeople: [Lip-Bu Tan 陈立武, David Zinsner, Naga Chandrasekaran, Sachin Katti]
keyTech: [Intel 18A (RibbonFET + PowerVia), Intel 14A, Foveros / Foveros Direct 3D 封装, EMIB, Gaudi 3 AI 加速器, Panther Lake / Clearwater Forest]
customers: [Microsoft, Amazon, Google, Apollo (财务), Nvidia (战略合作), 美国国防部]
competitors: [TSMC, Samsung Foundry, AMD, Nvidia (在 AI 加速器), ARM 阵营]
website: https://www.intel.com
tags: [IDM, Foundry, x86, AI, 美国制造]
updated: 2026-05-10
---

## 一句话定位

**美国本土"最后一道"先进制程 IDM**——既是 x86 服务器 / PC CPU 的传统霸主，也在 Lip-Bu Tan 治下押注成为 TSMC 之外的"第二代工厂"。承担着美国"芯片产业链回流"政治意志，同时面对 AMD / ARM 在产品端、TSMC 在制造端的双线挑战。2026 是 18A 量产兑现年。

## 主营业务

按 2025-2026 业务结构（Intel 已将 Foundry 与 Products 财务分离披露）：

- **Intel Products**：包含 Client Computing Group（CCG，PC CPU）+ Data Center & AI（DCAI，服务器 CPU + Gaudi）+ Network and Edge（NEX）。这是当前主要现金流来源。
- **Intel Foundry (IFS)**：对外代工 + 内部 Wafer 服务。2025 全年仍录得运营亏损，盈亏平衡目标 **2027**。
- **Mobileye、Altera (FPGA)**：已分拆 / 部分出售，独立上市公司。

## 核心产品 / 工艺路线

### 1. 制程节点（Intel Foundry）

| 节点 | 状态 | 关键技术 | 主要产品 |
|---|---|---|---|
| Intel 7 / 4 | 量产 | EUV 入门 | 上一代 CPU |
| Intel 3 | 量产 | EUV 全面 | Sierra Forest / Granite Rapids |
| **Intel 18A** | **2026 H1 HVM** | **RibbonFET (GAA) + PowerVia (背面供电)** | **Panther Lake (PC)、Clearwater Forest (服务器)** |
| Intel 14A | 2026 末 / 2027 风险量产 | High-NA EUV 引入 | 外部代工目标节点 |

> 18A 良率据公开报道接近 60%，目标 70-80%。Lip-Bu Tan 多次表态：18A 已不仅服务自家产品，**也对外开放给 Apple、Microsoft 等大客户**（来源：[wccftech](https://wccftech.com/intel-gives-rundown-on-14a-18a-and-advanced-packaging-opportunities/)、[ibselectronics](https://www.ibselectronics.com/resources/news/intel-signals-broader-external-push-for-18a-as-foundry-strategy-evolves/)）。

### 2. CPU 产品

| 产品 | 节点 | 用途 |
|---|---|---|
| Lunar Lake / Arrow Lake | TSMC N3 + Intel 18A | 当代 PC（部分 tile 外包给 TSMC） |
| **Panther Lake** | **Intel 18A** | 2026 PC 旗舰，第一颗 18A 量产产品 |
| Sierra Forest / Granite Rapids | Intel 3 | 2024-2025 数据中心 CPU |
| **Clearwater Forest** | **Intel 18A** | 2026 数据中心，288 核 E-core |

### 3. AI 加速器

- **Gaudi 3**：2024 量产，价格策略激进，但生态仍落后 Nvidia / AMD；2025 起作为"中国合规版"的备选方案。
- 路线图：与 Nvidia 战略合作开发 x86 + RTX SoC（2025-09 公告）。

### 4. 先进封装

- **Foveros / Foveros Direct**：3D 堆叠技术，已用于 Lunar Lake / Meteor Lake。
- **EMIB**：硅桥 2.5D 封装，是 Intel 在封装端唯一明显领先的环节。

## 关键人物与战略转折

- **Lip-Bu Tan（陈立武）**：2025 年 3 月接任 CEO（前 CEO Pat Gelsinger 2024 年 12 月离任）。前 Cadence CEO、Walden 创投合伙人；半导体行业最资深的"系统 + EDA + 投资"复合背景之一。**核心动作**：
  1. **裁员 24,000 人（~15%）**，目标 2026 OpEx 降 30%
  2. 削减海外项目（部分德国、波兰 Fab 暂停）
  3. **Foundry 与 Products 财务分离**，便于独立评估
  4. 重新定位 18A：不再仅为内部，**积极争取外部锚定客户**
  5. 联手 Cadence / Synopsys / Siemens / PDF Solutions 重建 EDA 生态
- **David Zinsner**：CFO。
- **Naga Chandrasekaran**：Foundry 制造主管，主导 18A 良率爬坡。
- **Sachin Katti**：CTO，主管 AI 战略。

## 美国政策与战略合作

- **CHIPS Act**：约 $7.86B 直接补贴 + 贷款额度，是美国最大单笔半导体补贴接受者。
- **Apollo PE 投资**：$11B（2024 年 Fab 34 注资）。
- **Nvidia 战略投资**：2025-09，Nvidia 入股 **$5B**，未来联合开发 x86 + RTX SoC（来源：路透社 / Bloomberg）。
- **美国国防部 / SHIP / RAMP-C 项目**：18A 用于国防芯片。

## 投资视角

| 维度 | 关注点 |
|---|---|
| **看什么** | 18A 良率与外部客户公告（Apple / Microsoft / 高通是否签单）；Panther Lake / Clearwater Forest 出货节奏；Foundry 季度亏损收窄；x86 服务器份额（vs AMD）；CapEx 节奏 |
| **风险** | 1) **18A 客户落地不及预期**：Foundry 外部收入不爆发即长期烧钱 2) **AMD 持续抢份额**：x86 服务器 share 已被 AMD 拿到 ~30% 3) **AI 加速器掉队**：Gaudi 远落后 Nvidia / AMD 4) **High-NA EUV / 14A 投入**：资本开支高、回报远 5) **政治依赖**：补贴节奏、出口管制变化 |
| **估值参考** | 2026-05-09 收盘 $124.92，市值 $6,278 亿；TTM 因亏损 PE N/A，Forward PE 81.6（数据来源：`data/snapshots/2026-05-09.json`）。从 52w 低 $18.97 到 $124.92 的 6× 反弹已大幅 price-in 18A 与 Nvidia 入股的乐观预期 |

## 最近动态

- **2026 / 18A HVM**：Panther Lake CPU 进入高量产阶段，是首颗采用 RibbonFET + PowerVia 的量产产品。（来源：[wccftech](https://wccftech.com/intel-gives-rundown-on-14a-18a-and-advanced-packaging-opportunities/)）
- **2026-02 / Lip-Bu Tan 投资者会**：确认 18A 良率向 70% 推进，14A 风险量产推后到 2026 年末 / 2027；Foundry 盈亏平衡目标 2027。（来源：[marketbeat](https://www.marketbeat.com/instant-alerts/intel-conference-lip-bu-tan-talks-foundry-turnaround-18a-yield-gains-and-14a-roadmap-push-2026-02-03/)）
- **2025-09 / Nvidia 入股 $5B**：双方宣布联合开发 x86 + RTX SoC，是 Intel 公司史上最具戏剧性的同盟。
- **2025-Q3 / 大规模裁员**：宣布 24,000 人裁员（~15% 员工），重组管理层级。（来源：[ainvest](https://www.ainvest.com/news/intel-strategic-shift-lip-bu-tan-calculated-rebirth-retreat-innovation-2507/)）
- **2024-12 / Pat Gelsinger 离任**：联合 CEO 临时过渡，2025-03 Lip-Bu Tan 接任。
