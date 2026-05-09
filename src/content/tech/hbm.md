---
title: HBM 高带宽存储
description: AI 算力的"血液"——为什么 HBM 成了全球最稀缺的内存
category: 封装
order: 1
tags: [AI, 存储, 封装]
updated: 2026-05-10
---

## 是什么

**HBM = High Bandwidth Memory**，把多片 DRAM 用 TSV（硅通孔）垂直堆叠起来，
通过宽接口提供 **远超普通 DDR 的带宽**，专门服务 GPU/AI 加速器。

## 为什么对 AI 这么重要

AI 训练/推理是 **"内存带宽受限"** 的：模型权重和 KV cache 必须不断从内存搬到计算单元。
普通 DDR5 带宽几十 GB/s，**HBM3E 单堆叠就 1.2 TB/s+**。
没 HBM，再强的 GPU 也跑不满。

## 演进路径

| 代际 | 量产年 | 单堆叠带宽 | 容量 | 主要用户 |
|---|---|---|---|---|
| HBM2 | 2016 | ~256 GB/s | 8 GB | 早期 AI / HPC |
| HBM2e | 2020 | ~460 GB/s | 16 GB | A100 |
| HBM3 | 2022 | ~819 GB/s | 24 GB | H100 |
| **HBM3E** | **2024** | **~1.2 TB/s** | **36 GB** | **B200 / MI300** |
| **HBM4** | **2025-2026** | **~1.5 TB/s** | **48-64 GB** | **下一代 GPU/ASIC** |

## 谁在做

| 公司 | 地位 |
|---|---|
| **SK Hynix** | HBM3E 当前最强，Nvidia 主供 |
| **Micron** | 美国唯一玩家，HBM3E 已进 Nvidia 供应链 |
| **Samsung** | 容量最大但良率/认证慢于 Hynix |

## 关键瓶颈

- **产能**：HBM 堆叠工艺复杂，挤占传统 DRAM 产能 → DRAM 涨价
- **良率**：12 层堆叠良率难，HBM4 16 层更难
- **出口管制**：美国限制 HBM 流向中国，Huawei Ascend 等被卡

## 投资视角

- HBM 是 **AI 链条最稀缺资源之一**，长协订单已锁到 2026+
- 风险：1) AI capex 放缓 2) HBM4 技术延期 3) 中国本土 HBM（如长鑫旗下）追赶
- 估值：把 HBM 看成"AI 卖铲人"溢价，但本质仍是周期 DRAM

## 推荐阅读

- [SK Hynix / Micron / Samsung 公司档案](../../companies/)（待补充）
