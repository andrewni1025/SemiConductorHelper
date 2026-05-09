---
name: 美满电子
nameEn: Marvell Technology, Inc.
ticker: MRVL
country: 美国
segment: 定制 ASIC + 网络
moat: AWS Trainium / Microsoft Maia 主供 + 光 DSP + 高速 SerDes IP 综合优势
keyPeople: [Matt Murphy, Willem Meintjes, Loi Nguyen, Nick Kucharewski]
keyTech: [5nm/3nm/2nm 定制 SoC, 800G/1.6T 光 DSP, PAM4, 自研 SerDes, CXL, HBM IP]
customers: [Amazon AWS (Trainium 2/3/4), Microsoft (Maia 200/300), Google, Cisco, Nokia]
competitors: [Broadcom, Alchip (世芯), Socionext, MediaTek (定制 ASIC)]
website: https://www.marvell.com
tags: [AI, ASIC, 光通信, DSP]
updated: 2026-05-10
---

## 一句话定位

**Hyperscaler 定制 AI 芯片的"二号供应商"**——在 Broadcom 之外，AWS 自研 Trainium 和 Microsoft 自研 Maia 的硅工程几乎都依赖 Marvell；同时它在 800G/1.6T 光模块 DSP 领域近乎垄断，是 AI 数据中心"互联"端的关键玩家。

## 主营业务

按 FY2026（2026 财年，截至 2026 年 1 月）数据（来源：[tech-insider](https://tech-insider.org/marvell-technology-stock-surge-custom-ai-chip-2026/)、[asiaict](http://asiaict.com/ai/9683.html)）：

- **数据中心**：占总营收 **74%+**，AI 相关硅 YoY +78%，是主增长引擎
- **企业网络 / 运营商网络**：相对稳定，包括 OCTEON 处理器与运营商前传 / 中传芯片
- **汽车 / 工业**：以太网 PHY 在车载领域逐步起量
- **消费**：硬盘控制器（剩余尾巴业务，逐步退出）

FY2026 全年营收 **~$8.2B（+42% YoY）**，Non-GAAP 毛利率 ~59-60%，Non-GAAP EPS $2.84。

## 核心产品 / 技术线

### 1. 定制 AI ASIC

| 客户 | 产品 | 节点 / 内存 | 出货节奏 |
|---|---|---|---|
| **Amazon AWS** | **Trainium 2** | 5nm | 2025-2026 主力，年出货百万级 |
| Amazon AWS | **Trainium 3** | 3nm + HBM3E | 2026 大规模放量 |
| Amazon AWS | Trainium 4 | 2nm | 2027 预备 |
| **Microsoft** | Maia 200（部分） | 5nm | 2026 推理集群 |
| **Microsoft** | **Maia 300** | **2nm + HBM4** | **2026 Q4 起量**，是 2026-2027 主增量 |
| Google | 部分 ASIC（次要供应商） | — | Broadcom 主供 |
| 主权 / 国防 | 高安全级 SoC | — | 长尾稳定单 |

> Fubon Research 估计 Microsoft Maia 300 在 2026 年底前出货 30-40 万颗，给 Marvell 贡献 ~$2.4B 营收，2027 可能进一步放量到 $10-12B（来源：[techi](https://www.techi.com/marvell-stock-microsoft-maia300-ai-chip-boost/)）。

### 2. 光通信 DSP

- **800G PAM4 DSP**：当前数据中心可插拔光模块的事实标准，市占率领先。
- **1.6T DSP**：2025-2026 起量，匹配 GB200 / GB300 集群的网络升级。
- **共封装光学 (CPO)**：与超大规模厂商联合验证。

### 3. SerDes / IP / 网络

- 自研 112G/224G SerDes 是定制 ASIC 与光模块共同的底层 IP。
- OCTEON DPU、Falcon switch 用于运营商核心网。

## 关键技术护城河

1. **HBM-on-substrate 集成 IP**：与 TSMC CoWoS 流程深度联合优化。
2. **224G SerDes 工艺领先**：是 1.6T 互联可行的前提。
3. **客户长期合约**：Trainium 与 Maia 都是 3-5 年的多代联合 roadmap，不易切换。

## 客户与生态

- **客户集中度高**：AWS + Microsoft 合计占数据中心营收过半，Top 5 客户占总营收 60%+，是最大风险点也是最大优势。
- **上游**：TSMC（N5 → N3 → N2）+ Samsung/SK Hynix（HBM）+ 设备 / IP 生态。
- **生态合作**：Astera Labs（CXL）、Coherent / Lumentum（光模块）、Cisco / Arista（系统层）。

## 关键人物

- **Matt Murphy**：董事长 / CEO，2016 年从 Maxim 接任，主导从硬盘 + 网络芯片转型为"定制 ASIC + 数据中心"的关键决策；2017 年 $6B 收购 Cavium、2021 年 $10B 收购 Inphi（光 DSP）是两次决定性转型并购。
- **Willem Meintjes**：CFO（2025 年起）。
- **Loi Nguyen**：光通信业务执行副总裁。

## 投资视角

| 维度 | 关注点 |
|---|---|
| **看什么** | 季度数据中心营收 + AI 营收单独披露；Maia 300 出货爬坡；Trainium 3/4 进展；1.6T 光模块周期；Non-GAAP 毛利率（custom ASIC 是低毛利业务） |
| **风险** | 1) **客户极度集中**：失去 AWS 或 Microsoft 任一项目即重创估值 2) **Hyperscaler 内化**：客户最终自己做硅设计的可能 3) **Broadcom 竞争**：Broadcom 在 ASIC 端规模与利润率领先 4) **毛利稀释**：custom ASIC 毛利低于公司平均 5) **光模块周期** |
| **估值参考** | 2026-05-09 收盘 $170.13，市值 $1,488 亿；TTM PE 55.6、Forward PE 31.3（数据来源：`data/snapshots/2026-05-09.json`） |

## 最近动态

- **2026-Q1 / Maia 300 利好**：Microsoft 确认 Maia 300 量产计划，Marvell 股价单日大涨；Fubon 报告预计 2026 出货 30-40 万颗。（来源：[techi](https://www.techi.com/marvell-stock-microsoft-maia300-ai-chip-boost/)、[sherwood](https://sherwood.news/markets/jpmorgan-said-marvells-management-told-them-their-microsoft-and-amazon-custom-chip-business-on-track-reports/)）
- **2025-10 / AWS Trainium 升势**：Amazon 提升 AI capex 至 $125B+，Trainium 2/3 持续放量，给 Marvell 带来 18-20% 自定义 ASIC 业务增长。（来源：[sahmcapital](https://www.sahmcapital.com/news/content/amazons-trainium-push-adds-fuel-to-marvells-2026-growth-outlook-2025-10-31)）
- **2026-01 / Maia 200 部署**：Microsoft 公开 Maia 200 推理加速器，Marvell 是核心物理实现合作方。（来源：[Microsoft Blog](https://blogs.microsoft.com/blog/2026/01/26/maia-200-the-ai-accelerator-built-for-inference/)）
- **2025 / 1.6T DSP 量产**：1.6T PAM4 DSP 进入主流 Hyperscaler BOM。
