---
name: 三星电子
nameEn: Samsung Electronics Co., Ltd.
ticker: 005930.KS
country: 韩国
segment: 存储 + Foundry (IDM)
moat: 全球最大综合电子集团 + 存储 (DRAM/NAND) 寡头之一 + 唯二的非 TSMC 先进制程 Foundry
keyPeople: [李在镕 Lee Jae-yong, 韩宗熙 Han Jong-hee, 全永铉 Jun Young-hyun]
keyTech: [HBM3E 12-Hi, HBM4, 1c DRAM, V9 NAND, 2nm GAA Foundry, SF2P, 3D 封装 X-Cube]
customers: [Apple, Nvidia, Qualcomm, AMD, Google, Tesla, 自家手机 / 显示业务]
competitors: [SK Hynix, Micron (存储), TSMC, Intel Foundry (Foundry), Apple (M 系列对内 SoC 的影响)]
website: https://www.samsung.com/semiconductor/
tags: [存储, HBM, Foundry, IDM, 韩国]
updated: 2026-05-10
---

## 一句话定位

**全球唯一一家在 DRAM、NAND、Foundry 三大资本最密集的环节同时位列前三的公司**——在 HBM 端 2024-2025 一度被 SK Hynix 拉开身位，但 2025 年下半年通过 Nvidia 12-Hi HBM3E 认证后正在追赶；Foundry 端是 TSMC 之外少数能造 2nm GAA 的厂商。

## 主营业务（半导体业务，DS 部门）

按 2025 全年（来源：Samsung IR、TrendForce 估算）：

- **Memory**：DS 部门最大现金牛，DRAM + NAND 合计在公司收入中占 ~25%。HBM 在 DRAM 收入占比 ~30% 并快速上升。
- **System LSI**：自研 Exynos 处理器、ISP、PMIC、CIS 图像传感器（Sony 的主要竞争对手）。
- **Foundry**：对外代工业务，2025 年估计份额 ~10% 左右（落后 TSMC，但领先 SMIC / Intel Foundry）。

公司层面除半导体（DS 部门）外，还有手机（MX）、显示（SDC）、家电、Harman 等，是多元化巨型企业集团。

## 核心产品 / 技术路线

### 1. 存储（Memory）

| 产品 | 状态 | 关键参数 |
|---|---|---|
| HBM3E 12-Hi | **2025 Q3 通过 Nvidia 认证** | 36GB/堆栈，已出货 ~10,000 颗 |
| **HBM4** | **2026 H1 量产准备** | 11 Gbps（demo 数据，超 SK Hynix 10 Gbps）、12-Hi 36GB |
| 1c DRAM (10nm 第六代) | 2026 量产 | EUV 多层；为 HBM4 base die 服务 |
| V9 NAND | 2025 量产 | 290 层级 |
| LPDDR5X / 6 | 量产 | 移动 + 服务器 |

### 2. Foundry

| 节点 | 状态 | 主要客户 |
|---|---|---|
| SF3 (3nm GAA) | 量产 | 自家 Exynos、部分中国客户 |
| **SF2 (2nm GAA)** | **2026 H1 量产** | Qualcomm 部分订单、自家 Exynos、HBM4 base die |
| SF2P / SF1.4 | 2027+ | 路线图 |

> Samsung Foundry 仍在追赶 TSMC：客户少、良率历史问题（如 4nm 阶段良率落后导致 Qualcomm 转单）。2nm 是关键翻身节点，能否拿到外部大客户 (Qualcomm、Tesla、Google) 决定 Foundry 业务长期价值。

### 3. 先进封装

- **X-Cube (3D)** + **I-Cube / H-Cube (2.5D)**：与 TSMC CoWoS 同类的方案；产能比 TSMC 小，但被视为 "CoWoS 紧缺时的备胎"。

## 客户与生态

- **HBM**：SK Hynix 是 Nvidia 主供，Samsung 是新晋第三供（Micron 之后）；目标到 2026 重夺 Nvidia 主流份额。
- **Foundry**：Qualcomm 部分 Snapdragon、特斯拉 HW5 / FSD 芯片（传闻）、Google Tensor、自家 Exynos。
- **NAND**：自家手机、Apple、企业级 SSD。
- **CIS**：自有手机 + 中国手机厂商，是 Sony 主要追赶者。

## 关键人物

- **李在镕（Lee Jae-yong）**：会长（Chairman），三星集团实际掌舵人。
- **韩宗熙（Han Jong-hee）**：副会长 / CEO，主管整体业务。
- **全永铉（Jun Young-hyun）**：DS（半导体）部门总裁，2024 年 5 月起接任，主导 HBM 反击战。
- **Kye Hyun Kyung**：2024 年前 DS 总裁，调任顾问。

## 投资视角

| 维度 | 关注点 |
|---|---|
| **看什么** | HBM3E / HBM4 给 Nvidia 的份额恢复；Foundry 是否拿到 2nm 大客户；NAND 价格周期；汇率 (KRW)；System LSI / Exynos 自用比例 |
| **风险** | 1) **HBM 落后 SK Hynix** 是否会成为结构性 2) **Foundry 客户拓展不及预期**（先进节点持续亏损） 3) **MATCH Act / 美国对韩政策**：在中国 Xi'an / Suzhou 工厂的设备维护风险 4) **NAND 周期** 5) **韩国财阀治理风险** |
| **估值参考** | 2026-05-09 收盘 268,500 KRW（韩元），市值 ~1,763 万亿 KRW（≈ $1.27 万亿 USD）；Forward PE **5.30**（数据来源：`data/snapshots/2026-05-09.json`）——估值在全球大型半导体股中显著偏低，反映 HBM 追赶不确定性 |

## 最近动态

- **2025-Q3 / Nvidia HBM3E 12-Hi 认证通过**：经历 18 个月验证之后，Samsung 终于成为 Nvidia 第三家 HBM3E 供应商，首批出货约 10,000 颗。（来源：[tweaktown](https://www.tweaktown.com/news/107785/samsung-finally-passes-nvidias-strict-hbm3e-12-hi-qualification-tests-10000-units-on-the-way/index.html)、[Yahoo Finance](https://ca.finance.yahoo.com/news/samsung-secures-nvidia-hbm3e-qualification-131609868.html)）
- **2025-11 / HBM4 样品送 Nvidia**：HBM4 工程样片送至 Nvidia 验证，目标 2026 早期量产。（来源：[TrendForce](https://www.trendforce.com/news/2025/11/04/news-samsung-reportedly-to-deliver-hbm4-samples-to-nvidia-this-month-eyes-early-2026-validation/)）
- **2026 / SF2 量产准备**：2nm GAA 进入风险量产到量产爬坡阶段，HBM4 base die 也将由 SF2 制造。（来源：[theoutpost.ai](https://theoutpost.ai/news-story/samsung-plans-mass-production-of-next-gen-hbm-4-memory-and-advanced-dram-technologies-for-2026-21312/)）
- **2026-Q1 / MATCH Act 风险**：MATCH Act 推进影响 Samsung 在中国西安 NAND 工厂的设备维护连续性。（来源：[techwireasia](https://techwireasia.com/2026/04/match-act-semiconductor-export-controls-china-asia/)）
