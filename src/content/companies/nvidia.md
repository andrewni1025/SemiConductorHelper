---
name: 英伟达
nameEn: NVIDIA Corporation
ticker: NVDA
country: 美国
segment: AI 算力 / GPU
moat: GPU 硬件 + CUDA 软件生态 + NVLink 互联三位一体的 AI 算力护城河
keyPeople: [黄仁勋 Jensen Huang, Jay Puri, Colette Kress]
keyTech: [Hopper H100/H200, Blackwell B200/GB200/GB300, Vera Rubin, CUDA, NVLink, NVSwitch, Spectrum-X 网络]
customers: [Microsoft, Google, Meta, Amazon AWS, Oracle, OpenAI, Tesla, xAI, CoreWeave]
competitors: [AMD, Broadcom (定制 ASIC), Google TPU, AWS Trainium, 华为昇腾]
website: https://www.nvidia.com
tags: [AI, GPU, 数据中心, CUDA]
updated: 2026-05-10
---

## 一句话定位

**全球 AI 算力的"事实标准"**——从训练到推理、从超大规模数据中心到机器人/汽车，几乎每一颗主流 AI 加速器都跑在 Nvidia 的 GPU + CUDA 软件栈上。FY2026 数据中心收入 **$193.7B（YoY +68%）**，已经定义了"AI 卖铲人"这个赛道。

## 主营业务

按 FY2026 营收（截至 2026 年 1 月，全年 $215.9B）拆分：

- **数据中心（Data Center）**：约 $193.7B，**占比 ~90%**，包括 Hopper/Blackwell GPU、NVLink、网络（Mellanox/Spectrum-X）。这是 AI 周期的核心引擎。
- **游戏（Gaming）**：GeForce RTX 50 系列，约占 8-9%，相对稳定。
- **专业可视化 + 汽车 + OEM**：合计个位数百分比，但汽车（DRIVE Thor）和机器人（Isaac/Jetson）被视为下一条增长曲线。

按地理：北美 + 中国（含 H20/H200 出口许可窗口）+ 中东主权 AI 项目（沙特 HUMAIN、阿联酋 G42）构成主要客户。

## 核心产品 / 技术路线

| 平台 | 量产时间 | 工艺 / 内存 | 关键参数 | 主要部署 |
|---|---|---|---|---|
| Hopper H100 | 2022 | TSMC N4 + HBM3 | 80GB | ChatGPT 时代主力 |
| Hopper H200 | 2024 | TSMC N4 + HBM3E | 141GB | 推理 + 中国合规出口版 |
| Blackwell B200 | 2024 H2 | TSMC N4P + HBM3E | 192GB | 当前主力训练卡 |
| GB200 NVL72 | 2025 | 72×B200 + 36×Grace | 720 PFLOPS FP8 | Hyperscaler 机柜 |
| **Blackwell Ultra GB300** | **2025 H2 → 2026** | HBM3E **288GB** | 1.5× B200 | 2026 主力出货 |
| **Vera Rubin (R200)** | **2026 H2** | TSMC N3 + **HBM4 288GB** | 50 PFLOPS FP4/卡 | 取代 Blackwell |
| Rubin Ultra (NVL576) | 2027 | 4-reticle GPU | ~100 PFLOPS FP4 | 下一代旗舰 |
| Feynman | 2028 | 路线图阶段 | — | TSMC CoWoS-L 关键瓶颈 |

> 数据来源：Nvidia GTC 2026 主题演讲；TrendForce 关于 2026 出货占比的预测；ainvest 关于 Feynman 与 CoWoS 的产能分析。

## 关键技术护城河

1. **CUDA 生态**：累计 18 年的开发者社区、cuDNN/TensorRT/Triton 等推理框架，是 AMD ROCm、华为 CANN 长期追赶的对象。
2. **NVLink + NVSwitch**：单机柜 72 卡级别的高带宽互联，让 GB200 NVL72 成为目前唯一一种"机柜即超算"产品形态，第六代 NVLink 带宽 1.8 TB/s。
3. **网络栈**：Mellanox（InfiniBand）+ Spectrum-X（以太网），让 Nvidia 同时拥有"算 + 互联"两端定价权。
4. **CoWoS 配额**：占 TSMC CoWoS-L 总产能的 **60-70%**（来源：[ainvest](https://www.ainvest.com/news/nvidia-feynman-platform-clog-tsmc-cowos-supply-chain-2026-creating-critical-ai-compute-bottleneck-2603/)），事实上锁定了上游封装。

## 客户与生态

- **Top 5 客户**：Microsoft、Meta、Google、Amazon AWS、Oracle，合计占数据中心营收 **40%+**。
- **新增大客户**：OpenAI（自有 Stargate 项目）、xAI（Colossus 集群）、CoreWeave/Lambda 等 GPU 云。
- **主权 AI**：沙特 HUMAIN、阿联酋 G42、英国/法国/日本主权云项目持续放量。
- **战略投资**：2025 年宣布对 Intel **$5B 股权投资**，绑定其 x86 + Foundry 路线（来源：路透/Bloomberg 2025-09）。
- **上游绑定**：TSMC（晶圆 + CoWoS）、SK Hynix（HBM 主供）、Samsung/Micron（HBM 二供/三供）。

## 关键人物

- **黄仁勋（Jensen Huang）**：联合创始人 / CEO，1993 年创立公司，是 AI 革命的最显眼旗手；其个人 keynote 已成为半导体行业的"风向标"。
- **Colette Kress**：CFO，季报指引的核心传声筒。
- **Jay Puri**：全球 Field Operations EVP，负责大客户交付。

## 投资视角

| 维度 | 关注点 |
|---|---|
| **看什么** | 季度数据中心收入与 YoY；CoWoS-L 产能扩张；HBM4 良率与 Rubin 量产节奏；推理 / 训练收入占比；中国 H200/B30A 合规出货 |
| **风险** | 1) **客户集中**：Top 5 客户 40%+ 收入，且这些客户都在自研 ASIC（TPU/MTIA/Trainium/Maia） 2) **出口管制**：Blackwell 级被禁、AI OVERWATCH Act 立法风险 3) **CoWoS / HBM 供应链**：Feynman 一代可能再被卡 4) **AI capex 周期回落**：Hyperscaler 折旧周期与 ROI 兑现节奏 5) **估值**：高度反映乐观预期 |
| **估值参考** | 2026-05-09 收盘 $215.20，市值 $5.23T；TTM PE 43.8、Forward PE 19.1（数据来源：`data/snapshots/2026-05-09.json`）。Forward PE 已显著低于 TTM PE，反映市场对 FY27 利润放量的预期 |

## 最近动态

- **2026-05（W19）**：CoWoS-L 售罄至 2026 年底，Nvidia 占 60-70%；Hyperscaler Top-5 在 Q4 2025 单季 capex 达 $130.7B，多数 YoY +50% 以上。（来源：[ainvest](https://www.ainvest.com/news/nvidia-feynman-platform-clog-tsmc-cowos-supply-chain-2026-creating-critical-ai-compute-bottleneck-2603/)、[lambdafin](https://lambdafin.com)）
- **2026-03 / GTC 2026**：发布 Blackwell Ultra GB300（HBM3E 288GB），公布 Vera Rubin（R200，HBM4，2026 H2）+ Rubin Ultra NVL576（2027）+ Feynman（2028）四代路线图。（来源：[Nvidia IR](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Kicks-Off-the-Next-Generation-of-AI-With-Rubin--Six-New-Chips-One-Incredible-AI-Supercomputer/default.aspx)）
- **2026-01 / BIS 政策松动**：H200 与 AMD MI325X 在阈值下可逐案放行，公司重启对中国合规版本出货。（来源：[Introl](https://introl.com/blog/bis-h200-china-export-policy-ai-overwatch-act-2026)）
- **2025-09 / 战略投资 Intel**：宣布对 Intel 投资 $5B 股权，未来联合开发 x86 + RTX SoC。（来源：Reuters / Intel 官方公告）
- **2026-05-28（即将）**：Q1 FY27 财报，市场关注 Blackwell 出货节奏、中国合规收入与全年指引。
