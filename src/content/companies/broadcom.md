---
name: 博通
nameEn: Broadcom Inc.
ticker: AVGO
country: 美国
segment: AI ASIC + 网络芯片
moat: 超大规模厂商定制 ASIC 寡头 (60-70% 份额) + 数据中心交换机事实标准 + VMware 软件现金流
keyPeople: [Hock Tan, Charlie Kawwas, Kirsten Spears]
keyTech: [Tomahawk 6 (102.4 Tbps), Jericho 4, Bailly / 3.5D XDSiP 封装, Sian II (PCIe Switch), 共封装光学 CPO]
customers: [Google (TPU v7p Ironwood), Meta (MTIA v4), OpenAI, Anthropic, Apple, ByteDance]
competitors: [Marvell, Nvidia (GPU/网络), Intel, Cisco/Arista (在交换机系统层面)]
website: https://www.broadcom.com
tags: [AI, ASIC, 网络, VMware]
updated: 2026-05-10
---

## 一句话定位

**Hyperscaler 自研 AI 芯片的"幕后代工设计公司"**——从 Google TPU 到 Meta MTIA，再到 OpenAI 和 Anthropic 的下一代加速器，绝大多数定制 AI ASIC 都由 Broadcom 与客户联合设计；同时它的 Tomahawk 系列以太网交换芯片是几乎所有 AI 数据中心的"骨架"。VMware 收购后再叠加一台高毛利的软件印钞机。

## 主营业务

按 2026 财年 Q1 数据（来源：[tradingnews](https://www.tradingnews.com/news/broadcom-stock-price-forecast-avgo-shares-climbs-toward-480-usd)、[tech-insider](https://tech-insider.org/broadcom-ai-revenue-custom-chips-2026/)）：

- **半导体解决方案**：约 60% 营收。其中 **AI 半导体单季 $8.4B（+106% YoY）**，约占总营收 44%；非 AI 半导体（无线 / 宽带 / 工业）相对疲弱。
- **基础设施软件**：约 40%，主要是 VMware（订阅化后毛利 80%+）+ Symantec/CA。FY2026 软件营收预计超 $30B。
- **AI 订单 backlog**：累计 **~$73B**（18 个月可见度）。Q2 2026 AI 营收指引 $10.7B。
- **管理层"line of sight"**：2027 AI 收入有望逼近 $100B。

## 核心产品 / 技术线

### 1. 定制 AI ASIC（XPU）

| 客户 | 产品 | 节点 / 封装 | 状态 |
|---|---|---|---|
| Google | TPU v5 / v6 / **v7p (Ironwood)** | TSMC N3 + 3.5D | 2026 主力 |
| Meta | MTIA v1 / v2 / **v4** | TSMC N3 + HBM3E | 2026 大规模放量 |
| **OpenAI** | 下一代推理 XPU | 联合设计 | 2026-2027 出货，$10B+ 订单 |
| Anthropic | XPU 平台 | 联合设计 | 2026-2027 三倍化 |
| Apple | 自研 AI 加速器 (传闻) | — | 联合设计中 |
| ByteDance | 推理 ASIC | — | 中国合规版 |

### 2. 网络芯片（数据中心命脉）

| 产品 | 用途 | 关键指标 |
|---|---|---|
| **Tomahawk 6** | Top-of-rack / leaf-spine | **102.4 Tbps**，业内首发 |
| Tomahawk Ultra | 低延迟 AI fabric | 替代 InfiniBand 部分场景 |
| Jericho 4 / Ramon | 大规模数据中心 router | 深缓冲 + HBM |
| Sian II | PCIe Gen 6 Switch | 与 GPU/XPU 互联 |
| 共封装光学 (CPO) | 200T 级互联 | 与 Tomahawk 6 共封装 |

### 3. 软件 / VMware

- VMware Cloud Foundation（VCF）订阅化转型完成，毛利 80%+。
- 战略意图：**给企业 IT 提供"私有 AI 云"软件栈**，与硬件 ASIC 战略形成全栈。

## 关键技术护城河

1. **客户深度绑定**：每颗定制 ASIC 都是 18-24 个月的联合工程，切换成本极高。
2. **3.5D / XDSiP 先进封装**：TSV + 微凸点 + RDL 一体化，比 Marvell / 阿里平头哥 等领先 12+ 个月。
3. **网络规模效应**：全球 AI 训练集群里几乎找不到不用 Tomahawk 的，意味着所有 NIC / DPU 厂商必须对它兼容。
4. **VMware 现金流**：抹平半导体周期性，给 R&D 持续供血。

## 客户与生态

- **Top 客户集中度**：Google + Meta 合计占 AI ASIC 业务过半；OpenAI / Anthropic / Apple 是新增量。
- **市场份额**：定制 AI ASIC 领域估计占 **60-70%**，剩余主要是 Marvell（AWS Trainium、Microsoft Maia）和阿里平头哥 / 联发科等。
- **上游**：TSMC（N3/N2 + CoWoS）、SK Hynix / Samsung（HBM）。

## 关键人物

- **Hock Tan（陈福阳）**：CEO，2006 年起执掌；以严格的资本配置纪律和大并购整合（Broadcom 原品牌、CA、Symantec、VMware）著称，被市场视作"半导体行业的巴菲特式整合者"。
- **Charlie Kawwas**：Semiconductor Solutions Group 总裁，主管所有芯片业务。
- **Kirsten Spears**：CFO。

## 投资视角

| 维度 | 关注点 |
|---|---|
| **看什么** | 季度 AI 半导体营收（目前 $8B+）；订单 backlog；新增 ASIC 客户公告（OpenAI / Anthropic / Apple）；VMware ARR；毛利率 / 自由现金流 |
| **风险** | 1) **客户少而大**：Google / Meta / OpenAI 任一减单即重创 2) **超大客户自研化**：Hyperscaler 可能逐步内化部分设计 3) **CoWoS / HBM 供应**：与 Nvidia 抢同一份产能 4) **VMware 整合摩擦**：渠道反弹、订阅化迁移痛点 5) **估值高位** |
| **估值参考** | 2026-05-09 收盘 $430.00，市值 **$2.04T**；TTM PE 84.0、Forward PE 23.7（数据来源：`data/snapshots/2026-05-09.json`） |

## 最近动态

- **2026-Q1 / 财报**：AI 半导体单季 $8.4B（+106% YoY），占总营收 44%；Q2 指引 AI $10.7B；累计 AI 订单 $73B。（来源：[tech-insider](https://tech-insider.org/broadcom-ai-revenue-custom-chips-2026/)、[tradingnews](https://www.tradingnews.com/news/broadcom-stock-price-forecast-avgo-shares-climbs-toward-480-usd)）
- **2025-Q4 / OpenAI 大单**：与 OpenAI 签订 $10B+ 多年期定制 XPU 协议，2026 起出货。（来源：[financialcontent](https://www.financialcontent.com/article/tokenring-2026-2-2-broadcoms-custom-ai-silicon-boom-beyond-the-google-tpu)）
- **2025 / Tomahawk 6 量产**：业内首颗 102.4 Tbps 单芯片交换机量产，被 Hyperscaler 大规模采用。
- **2024 / Google Ironwood TPU v7p**：Broadcom 联合设计的第七代 TPU 在 Google Cloud 部署，支撑 Gemini 训练。
