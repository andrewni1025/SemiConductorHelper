---
title: 先进封装
summary: 摩尔定律放缓后的新战场——CoWoS、SoIC、HBM 堆叠
representativeCompanies: [TSMC, ASE 日月光, Amkor, 长电科技, 通富微电]
moat: 设备 + 工艺 + 与 logic / memory 的协同设计
cyclicality: AI 拉动下当前为强成长，长期跟随 logic + 存储周期
keyTech: [CoWoS-S, CoWoS-L, SoIC, EMIB, Foveros, Hybrid Bonding, TSV, RDL]
order: 7
updated: 2026-05-10
---

## 这个环节是干什么的

传统封装是"穿衣服"——把一颗裸片（die）放进塑料壳、引出针脚。

**先进封装** 是"做手术"——把多颗裸片（GPU + HBM + I/O）通过硅基板（interposer）、TSV（硅通孔）、RDL（重布线层）甚至直接键合的方式集成到一起，让它们像同一颗芯片一样工作。

> 类比：以前每个员工独立办公；现在把 8 个工位塞进一个 1m² 的会议室，但要求所有人之间的沟通比之前还快 10 倍。

## 为什么先进封装突然变成主战场

1. **摩尔定律变贵变慢**：先进制程节点缩一代要 2–3 年，成本翻倍——继续靠"做小晶体管"提升性价比变差
2. **AI 需要带宽，不只算力**：GPU 算力翻倍的同时，必须有更高带宽的内存（HBM）紧贴着，否则会"算力空转"
3. **Chiplet 化**：把大芯片拆成多个小裸片再封到一起，提高良率、降低成本（AMD MI300 是典型）

结果：**封装从产业链最末端的"打杂"变成了 AI 算力供给的核心瓶颈**。

## 关键技术路线

| 技术 | 主导方 | 用在哪 |
|---|---|---|
| **CoWoS-S / CoWoS-L** | TSMC | NVIDIA H100 / H200 / B200、AMD MI300 |
| **SoIC**（3D 堆叠） | TSMC | AMD V-Cache、未来 AI 旗舰 |
| **Foveros** | Intel | Intel Meteor Lake / Lunar Lake、AI PC |
| **EMIB** | Intel | Intel Sapphire Rapids HBM 版、Xeon Max |
| **HBM TSV 堆叠** | SK Hynix / Samsung / Micron | 所有 HBM 内部 |
| **Hybrid Bonding**（无凸点直接键合） | TSMC、Intel、Sony | 未来 3D 高密度互连 |

## 商业模式 & 护城河

- **TSMC 模式**：CoWoS / SoIC 在 TSMC 内部即"前道延伸"，与 logic 工艺协同设计——这是**最深的护城河**（NVIDIA / AMD 几乎绕不开）
- **OSAT 模式**：ASE / Amkor / 长电承接传统封装 + 部分先进封装外包，毛利率 25–35%（远低于 TSMC 50%+）
- **设备 + 材料**：基板（Ajinomoto ABF 膜独占）、键合机（BESI、ASMPT）、TSV 设备各有寡头

## 周期与产能

- **CoWoS 月产能**：2024 年 ~1.5 万片 → 2025 年 ~7.5 万片 → 2026 年底目标 **120–130K 片**（来源：本仓库 [2026-W19 周报](../../weekly/2026-w19/) 及 [ainvest 2026](https://www.ainvest.com/news/nvidia-feynman-platform-clog-tsmc-cowos-supply-chain-2026-creating-critical-ai-compute-bottleneck-2603/)）
- **CoWoS 已售罄至 2026 年底**，NVIDIA 一家锁定 60–70%
- **HBM 需求挤压**：HBM 已占 DRAM 晶圆产能 23%——相当于把内存"前道"产能也卷进了 AI 链条
- **下行风险**：CoWoS 是当前 AI 红利最直接受益者，但反过来也是 AI capex 拐点最先反应的环节

## 主要参与者

| 公司 | 国家 | 角色 |
|---|---|---|
| **TSMC** | 台湾 | CoWoS / SoIC 全球独家垄断，AI 时代最强护城河 |
| **Intel Foundry** | 美国 | Foveros / EMIB，自用 + 对外 |
| **Samsung Foundry** | 韩国 | I-Cube、X-Cube，份额追赶 |
| **ASE 日月光** | 台湾 | 全球 OSAT 第一（占 ~30%），FOCoS、SiP 强项 |
| **Amkor** | 美国 / 韩裔 | 全球 OSAT 第二，先进封装占比上升 |
| **长电科技 JCET** | 中国 | 全球 OSAT 第三，国内龙头，FCBGA / Bumping 已突破 |
| **通富微电 TFME** | 中国 | AMD 主要封测合作方（含 Chiplet 封装） |
| **华天科技** | 中国 | 国内 OSAT 第三 |

## 国产替代进展

- **传统封装**：长电 + 通富 + 华天三家合计已是全球第二阵营，通富因 AMD 订单深度受益 Chiplet 化
- **先进封装（2.5D / 3D）**：与 TSMC CoWoS 仍有 1–2 代差距，但**长电 XDFOI 等技术已小批量出货**
- **关键瓶颈**：硅 interposer 产能（仍依赖 TSMC / UMC）、HBM 集成能力、ABF 基板（日本独占）
- **未来 1–3 年**：随 SMIC + CXMT + 长电的"国产 AI 链路"打通，国产先进封装订单有望加速

## 投资视角

- **看什么**：
  - CoWoS / SoIC 月产能扩张节奏、客户名单（NVIDIA 占比是关键）
  - OSAT 公司：先进封装占营收比、毛利率结构、AMD / NVIDIA 订单
  - ABF 基板供给：Ajinomoto、Ibiden、Unimicron 产能
- **风险**：
  1. **AI capex 一旦放缓**，CoWoS 是最先调整的环节
  2. **NVIDIA 单一客户依赖**：TSMC CoWoS-L 60–70% 是 NVIDIA
  3. **新技术替代**：Hybrid Bonding 普及后 CoWoS 可能被部分替代
  4. **基板供给瓶颈**：ABF 基板紧缺会反过来卡封装产能

## 推荐阅读

- [晶圆代工 (Foundry)](../foundry/)
- [存储 (Memory)](../memory/)（HBM 是先进封装的核心组件）
- [一颗芯片是怎么造出来的](../../intro/02-how-a-chip-is-made/)
- [TSMC 公司档案](../../companies/tsmc/)
