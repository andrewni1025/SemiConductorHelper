---
name: AMD
nameEn: Advanced Micro Devices, Inc.
ticker: AMD
country: 美国
segment: CPU + AI 加速器
moat: x86 服务器 CPU 第二供 + Instinct GPU 形成 AI 算力第二来源 + Xilinx FPGA / Pensando DPU 全栈数据中心组合
keyPeople: [苏姿丰 Lisa Su, Jean Hu, Mark Papermaster, Forrest Norrod, Vamsi Boppana]
keyTech: [Zen 5 / Zen 6 CPU, EPYC, Instinct MI300X / MI325X / MI350 / MI400, ROCm, Infinity Fabric, CDNA 4, Xilinx FPGA, Pensando DPU]
customers: [Microsoft, Meta, Oracle, Google Cloud, IBM, Tesla]
competitors: [Nvidia, Intel, Broadcom, Marvell, ARM 阵营 (Ampere/Graviton)]
website: https://www.amd.com
tags: [AI, CPU, GPU, 数据中心]
updated: 2026-05-10
---

## 一句话定位

**Nvidia 之外的 AI 算力第二极**——同时也是 x86 服务器 CPU 市场份额从 0 一路抢到 30%+ 的逆袭者。AMD 是市场上**少数能同时给客户提供"CPU + GPU + DPU + FPGA"全栈数据中心硅**的厂商。

## 主营业务

按 2026 Q1 营收 **$10.3B（YoY +38%）** 拆分（数据来源：[AMD IR](https://www.amd.com/en/newsroom/press-releases/2026-5-5-amd-reports-first-quarter-2026-financial-results.html)）：

- **数据中心（Data Center）**：$5.8B，**+57% YoY**，已超过总营收一半。EPYC CPU 与 Instinct GPU 双轮驱动，Instinct 已开始季度过 $2B 规模。
- **客户端 / Client**：Ryzen CPU + Radeon GPU，高端 AI PC 是新增量。
- **游戏 / Gaming**：主机半定制 SoC（PS5/Xbox）周期性较强，已过峰值。
- **嵌入式 / Embedded**：Xilinx 收购后形成的 FPGA + 工业 / 汽车 / 通信业务，2026 进入复苏期。

GAAP 毛利率 53%，Non-GAAP 接近 54-55%；EPS $0.84。

## 核心产品 / 技术路线

| 产品线 | 节点 | 关键参数 / 用途 |
|---|---|---|
| EPYC "Turin" (Zen 5) | TSMC N3 / N4 | 192 核 / 384 线程，2024-2026 数据中心主力 |
| EPYC "Venice" (Zen 6) | TSMC **N2** | 2026 H2 → 2027 上市，进一步扩张服务器份额 |
| Instinct MI300X | TSMC N5 + N6 + HBM3 192GB | 2024 主力训练 / 推理 GPU |
| Instinct MI325X | TSMC + HBM3E 256GB | 2025 H1，对标 H200 |
| **Instinct MI350 系列** | **TSMC N3 + HBM3E 288GB** | **2025 H2 量产**，对标 GB200 |
| **Instinct MI400** | **TSMC N3/N2 + HBM4** | **2026 H2**，机柜级方案 "Helios" |
| Ryzen AI 300 / 400 | TSMC N4 / N3 | NPU + iGPU，AI PC 主力 |
| Versal AI Edge / Premium | Xilinx 系，7nm | 自适应 SoC，电信 / 汽车 / 国防 |
| Pensando DPU | 7nm | 数据中心网络卸载 |

## 关键技术与策略

1. **Chiplet 先行者**：EPYC 的 chiplet 架构（CCD + IOD）让 AMD 在同一节点下用更小的 die、更高的良率拿到更好成本，是甩开 Intel 的核心武器。
2. **ROCm 软件栈**：开源 AI 加速框架，是缩小与 CUDA 差距的关键变量；2024-2026 已与 Hugging Face、PyTorch、vLLM 深度集成。
3. **机柜级路线 "Helios"**：MI400 + Pensando + 自研以太网交换形成对标 NVL72 的整柜方案。
4. **收购组合**：Xilinx (FPGA, $49B, 2022)、Pensando (DPU, $1.9B, 2022)、Silo AI (欧洲最大 AI 实验室, $665M, 2024)、ZT Systems (机柜系统集成, $4.9B, 2024)。

## 客户与生态

- **大客户**：Microsoft Azure（MI300X / MI325X 大单）、Meta（MI300X 推理集群）、Oracle、Google Cloud、IBM、Tesla（自动驾驶训练）。
- **AI 加速器订单**：MI350 系列 2026 拿到 OpenAI、xAI 部分推理工作负载（来源：多家媒体报道，2025-Q4）。
- **EPYC 客户**：超大规模数据中心 + 几乎所有传统服务器 OEM（HPE、Dell、Lenovo、Supermicro）。

## 关键人物

- **苏姿丰（Lisa Su）**：董事长 / CEO，2014 年接任后带领公司从濒临破产到 7,000 亿美元市值；MIT 博士、技术与商业能力俱佳。
- **Jean Hu**：CFO，2023 年加入。
- **Forrest Norrod**：数据中心 EVP，主导 EPYC + Instinct 在云客户的攻城略地。
- **Vamsi Boppana**：AI EVP，主导 ROCm 与 AI 战略。

## 投资视角

| 维度 | 关注点 |
|---|---|
| **看什么** | 季度数据中心营收增速；Instinct（GPU）单季金额是否过 $3B；MI400 / Helios 客户名单；ROCm 生态进展；EPYC 服务器份额（vs Intel）；毛利率改善 |
| **风险** | 1) **CUDA 软件壁垒**：客户切到 ROCm 的工程成本仍是阻力 2) **CoWoS / HBM 供应**：与 Nvidia 抢同一份产能 3) **客户自研 ASIC**：Microsoft Maia、Google TPU、AWS Trainium 都在替代部分 GPU 工作负载 4) **估值高位**：151× TTM PE 已隐含极高的盈利兑现预期 5) **PC / 游戏周期** |
| **估值参考** | 2026-05-09 收盘 $455.19，市值 $7,422 亿；TTM PE 151.7、Forward PE 35.3（数据来源：`data/snapshots/2026-05-09.json`）。从 Forward PE 看市场预期 FY26 利润相比 TTM 大幅放量 |

## 最近动态

- **2026-05-05 / Q1 2026 财报**：营收 $10.3B（+38%），DC $5.8B（+57%），GAAP GM 53%，EPS $0.84；指引 Q2 营收 $10.9B 中位。（来源：[AMD IR](https://www.amd.com/en/newsroom/press-releases/2026-5-5-amd-reports-first-quarter-2026-financial-results.html)）
- **2026-Q1 / MI350 量产**：Instinct MI350 系列在 Microsoft Azure / Oracle 上线推理实例。
- **2025-12 / 美国对华出口**：MI325X 列入 BIS"逐案放行"框架，部分中国合规版本恢复出货。（来源：[Introl](https://introl.com/blog/bis-h200-china-export-policy-ai-overwatch-act-2026)）
- **2024-08 / 收购 ZT Systems**：$4.9B 现金 + 股票，补齐机柜级系统集成能力，为 MI400 "Helios" 铺路。
