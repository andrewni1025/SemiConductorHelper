---
title: Fabless 无晶圆设计
summary: 只设计、不制造的轻资产模式——AI 时代利润最丰厚的环节
representativeCompanies: [NVIDIA, AMD, Broadcom, Qualcomm, MediaTek, Marvell]
moat: 架构 + 软件生态 + IP 积累 + 与 foundry 的产能协议
cyclicality: 中等周期，跟终端需求和库存调整，但 AI 当前明显逆周期
keyTech: [GPU, CPU, DPU, AI ASIC, 5G 基带, RF, 网络芯片]
order: 2
updated: 2026-05-10
---

## 这个环节是干什么的

Fabless 公司只做一件事：**设计芯片，但不自己建晶圆厂**——制造完全外包给 TSMC、Samsung Foundry 等代工厂。

这是 1980 年代后期 TSMC 出现后才形成的行业模式。在那之前，所有芯片公司都是 IDM（自己设计 + 自己造）。Fabless 模式的出现极大降低了进入门槛，让 NVIDIA、Qualcomm、Apple Silicon 这样的玩家可以专注做架构与软件，把最重的资本支出（一座 fab 200+ 亿美元）甩给代工厂。

今天的 AI 时代，**Fabless 是利润最高、市值增长最快的环节**：NVIDIA 一家公司的市值在 2024–2025 年长期居全球前三。

## 商业模式 & 护城河

- **轻资产、高毛利**：典型 fabless 毛利率 50–75%，资本开支占营收 < 5%（vs. fab 占 30%+）
- **设计成本陡升**：3nm 单次流片成本约 5 亿美元，5nm 也要 2 亿——只有出货量足够大的玩家才能覆盖
- **护城河四要素**：
  1. **架构**：GPU（NVIDIA / AMD）、CPU（Apple Silicon、AMD x86）、AI ASIC（Broadcom + 客户共研）
  2. **软件生态**：CUDA 是 NVIDIA 最深的护城河——18 年研发投入 + 数百万开发者锁定
  3. **IP 与算法积累**：基带（Qualcomm 5G）、网络（Broadcom Tomahawk）需要十几年专利与工程经验
  4. **TSMC 产能 + CoWoS 锁定**：AI 时代谁拿到先进封装产能谁就能出货——NVIDIA 一家锁定 TSMC CoWoS-L 产能 60–70%（来源：[ainvest 2026](https://www.ainvest.com/news/nvidia-feynman-platform-clog-tsmc-cowos-supply-chain-2026-creating-critical-ai-compute-bottleneck-2603/)）

## 周期特征

- **传统 fabless 行业** 是中等强度周期：消费电子、PC、智能手机库存波动会传导到出货
- **AI fabless** 在 2024–2026 年明显逆周期：
  - NVIDIA FY2026 数据中心收入 $193.7B，+68% YoY
  - AMD Q1 2026 数据中心 $5.8B，+57% YoY
  - 来源：本仓库 [2026-W19 周报](../../weekly/2026-W19/)
- **风险信号**：库存（DOI）、客户 capex 指引、HBM / CoWoS 是否仍紧缺

## 主要参与者

| 公司 | 国家 | 拳头产品 | 2024–2026 关键事件 |
|---|---|---|---|
| **NVIDIA** | 美国 | AI GPU（H/B/Feynman 系列）+ CUDA | 数据中心营收占 ~85%，AI 训练 / 推理双吃 |
| **AMD** | 美国 | x86 CPU（EPYC）+ Instinct MI 系列 GPU | MI300/MI325 切入 AI 训练 + 推理市场 |
| **Broadcom** | 美国 | 网络芯片 + 定制 AI ASIC（XPU） | Google TPU、Meta MTIA 是其 ASIC 客户 |
| **Qualcomm** | 美国 | 5G 基带 + 智能手机 SoC + 车用芯片 | 推 AI PC + 智驾域控转型 |
| **MediaTek** | 台湾 | 中端手机 SoC + 智能电视 + WiFi | 与 NVIDIA 合作 AI PC 芯片 |
| **Marvell** | 美国 | 数据中心定制 ASIC + 光 DSP + 网络 | AWS Trainium / Microsoft Maia 关键合作方 |
| Apple | 美国 | M 系列 / A 系列 SoC（自用） | 严格说是 fabless 模式，但芯片不外卖 |
| 海思（HiSilicon） | 中国 | 麒麟 / 鲲鹏 / 昇腾 | 受美国制裁后转向自给国产链 |
| 寒武纪 / 海光 / 壁仞 / 摩尔线程 | 中国 | AI 加速器 / GPU | 国产替代主战场 |

## 国产替代进展

- **整体格局**：fabless 是中国半导体最成功的环节——出货量份额已不低，但**先进节点和 AI 高端芯片**仍受 EDA + 制造卡脖子
- **AI 加速器**：寒武纪、海光、壁仞、摩尔线程、华为昇腾在国内云客户份额上升，但软件生态和性能差距仍存在
- **手机 / 消费电子 SoC**：紫光展锐、华为麒麟、汇顶、韦尔股份等已规模化
- **风险**：先进节点（≤7nm）只能在 SMIC N+2 上做，且良率与 TSMC N3 / N2 仍有代差

## 投资视角

- **看什么**：
  - 数据中心营收同比、库存周转、客户 capex 指引（hyperscaler）
  - 与 TSMC 的 CoWoS / HBM 配额、新一代芯片量产时间表
  - 软件生态（CUDA / ROCm / 客户 ASIC SDK）的渗透率
- **风险**：
  1. **客户集中**：NVIDIA 数据中心 Top 5 客户占 ~40%，订单短期波动会被放大
  2. **ASIC 替代 GPU**：hyperscaler 自研 ASIC（TPU、MTIA、Maia、Trainium）会侵蚀 GPU 增速
  3. **出口管制**：Blackwell 级出口至中国受 AI OVERWATCH Act 等立法影响
  4. **估值**：AMD TTM PE 已 ~150 倍（截至 2026-05-09，来源：本仓库 [2026-W19 周报数据快照](../../weekly/2026-W19/)），盈利兑现节奏稍有差池就会有回调

## 推荐阅读

- [TSMC 公司档案](../../companies/tsmc/)
- [晶圆代工 (Foundry)](../foundry/)
- [先进封装](../advanced-packaging/)
- [上下游全景图](../../intro/03-supply-chain-overview/)
