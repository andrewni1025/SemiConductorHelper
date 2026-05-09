# AGENTS.md

> 给未来开 Copilot CLI 的你 / AI 的操作手册。
> 本项目 **没有定时任务、没有 LLM API、没有后台服务**——所有更新都靠用户主动开 Copilot CLI 触发。
> AI 在更新时请严格遵守本文规定。

---

## 1. 项目目标（不要走偏）

这是一个 **「半导体深度地图」** 静态站，目的是：
1. 帮用户和朋友建立对半导体行业的系统认知
2. 持续追踪行业动态（政策、财报、AI 链条、关键事件）
3. 长期沉淀，可分享

**不是**：交易工具、实时盯盘、自动化炒股系统、买卖建议生成器。
**绝对不要在内容中给出"买入/卖出/目标价"等具体投资建议。**

---

## 2. 项目结构速览

```
SemiConductorHelper/
├── src/
│   ├── content.config.ts        ← 5 个内容集合 schema（intro/segments/companies/tech/weekly）
│   ├── content/
│   │   ├── intro/              ← 入门地图（.md / .mdx）
│   │   ├── segments/           ← 产业链词典
│   │   ├── companies/          ← 公司档案库
│   │   ├── tech/               ← 技术路线 & 投资周期
│   │   └── weekly/             ← 时事周报（每次更新主要写在这里）
│   ├── layouts/                 ← BaseLayout / DocLayout
│   ├── components/              ← NavBar / CompanyCard / SegmentCard / ThemeToggle
│   ├── pages/                   ← 列表页 + [...slug] 详情页
│   └── styles/global.css        ← Tailwind v4 + 主题
├── templates/                   ← 5 类内容的模板（复制后修改）
├── scripts/                     ← Python 工具脚本（如 snapshot_prices.py）
├── data/snapshots/              ← 股价/估值快照 JSON
├── astro.config.mjs             ← Astro 配置（注意 base 路径！）
├── package.json
└── AGENTS.md                    ← 本文件
```

---

## 3. Frontmatter 规范（务必严格匹配 schema）

### 入门 (`intro`)
```yaml
---
title: 文章标题
description: 一句话简介          # 可选
order: 1                          # 排序权重，越小越靠前
tags: [入门, 概念]                # 可选
updated: 2026-05-10               # 建议每次修改时更新
---
```

### 产业链 (`segments`)
```yaml
---
title: 晶圆代工 (Foundry)
summary: 一句话讲清这个环节       # 必填，会显示在卡片
representativeCompanies: [TSMC, Samsung Foundry, SMIC]
moat: 资本开支门槛 + 制程领先
cyclicality: 强周期
keyTech: [N3, N2, GAA, CoWoS]
order: 3
updated: 2026-05-10
---
```

### 公司 (`companies`)
```yaml
---
name: 台积电                       # 必填
nameEn: Taiwan Semiconductor Manufacturing Company (TSMC)
ticker: TSM / 2330.TW
country: 台湾
segment: 晶圆代工                  # 必填，用于公司列表分组
moat: 一句话护城河
keyPeople: [魏哲家 C.C. Wei]
keyTech: [N3, N2, CoWoS]
customers: [Apple, Nvidia, AMD]
competitors: [Samsung Foundry, Intel Foundry, SMIC]
website: https://www.tsmc.com     # 必须是完整 URL
tags: [AI, 先进制程]
updated: 2026-05-10
---
```

### 技术 (`tech`)
```yaml
---
title: CoWoS 先进封装
description: 一句话简介
category: 封装                     # 制程/封装/互联/功率器件/周期/估值/其他
order: 1
tags: [AI, 封装]
updated: 2026-05-10
---
```

### 周报 (`weekly`)
```yaml
---
title: 半导体周报 · 2026-W19
weekStart: 2026-05-04             # 必填
weekEnd: 2026-05-10               # 必填
highlights:                        # 3-5 条本周要点
  - HBM 价格本周再涨 X%
  - Nvidia 财报指引超预期
sources:                           # 来源链接（务必保留！）
  - title: Reuters — 标题
    url: https://www.reuters.com/...
---
```

---

## 4. 标准「每周/按需更新时事」流程

当用户说「**更新本周时事**」「**做一份周报**」「**跟踪一下最新动态**」时，按以下步骤执行：

### Step 1：抓取最新信息
- 用 `web_search` 搜索本周（或上次更新以来）半导体行业关键事件
- **必抓的主题**（按重要性）：
  1. **政策** — 美国出口管制、CHIPS Act、欧盟、中国大基金
  2. **财报** — Nvidia / TSMC / ASML / SK Hynix / Micron / AMD / 中芯国际等
  3. **AI 链条** — GPU 出货、HBM 价格、CoWoS 产能、云厂商 CapEx
  4. **关键技术** — 制程进展、封装、SiC/GaN、新产品发布
  5. **中国国产替代** — 设备、材料、EDA、制造关键事件
- **数据时效性**：所有股价、价格、产能等数字必须标明日期与来源

### Step 2：（可选）跑数据快照
```bash
# 首次运行需要安装 yfinance：pip install yfinance
python scripts/snapshot_prices.py
```
- 输出：`data/snapshots/YYYY-MM-DD.json`
- 在周报"数据快照"小节引用关键数字

### Step 3：写周报
- 复制模板：`cp templates/weekly.md src/content/weekly/<YYYY-Www>.md`
  - 文件名规则：年份-W周数，例如 `2026-W19.md`
- 填好 frontmatter（特别是 `weekStart`、`weekEnd`、`highlights`、`sources`）
- 内容结构遵循模板：一周综述 / 政策与地缘 / AI 算力链 / 财报与业绩 / 中国国产替代 / 数据快照 / 下周关注

### Step 4：（可选）顺手更新公司档案"最近动态"
- 如果某家公司有重大事件，在 `src/content/companies/<slug>.md` 末尾"最近动态"小节追加一条
- 格式：`- 2026-XX-XX：事件描述（来源：来源名）`
- **同时更新该文件的 `updated` 字段**

### Step 5：本地验证
```bash
npm run build
```
- 必须 0 error 才能提交
- 警告可以接受（比如 sitemap 链接）

### Step 6：提交并部署
```bash
git add -A
git commit -m "weekly: 2026-W19 半导体周报"
git push
```
- GitHub Actions 自动构建并发布到 GitHub Pages

---

## 5. 写作风格规范

- **写给非专业朋友**：少术语，多类比，多列表，多图表
- **保留来源**：政策、数字、引用必须标明来源 URL 和日期
- **标注时效**：写明「截至 YYYY-MM-DD」之类，避免读者把过期信息当作最新
- **中文为主，公司名/技术术语保留英文**：例如「晶圆代工（Foundry）」「高带宽存储（HBM）」
- **不给买卖建议**：可以分析逻辑、列风险，但不写"建议买入/卖出/目标价"
- **每篇文章控制在合理长度**：入门类 800-2000 字，公司档案 1000-3000 字，周报无硬性上限

---

## 6. 常见任务命令清单

| 任务 | 命令 / 操作 |
|---|---|
| 新增公司档案 | `cp templates/company.md src/content/companies/<slug>.md` |
| 新增产业链环节 | `cp templates/segment.md src/content/segments/<slug>.md` |
| 新增入门文章 | `cp templates/intro.md src/content/intro/<order>-<slug>.md` |
| 新增技术文章 | `cp templates/tech.md src/content/tech/<slug>.md` |
| 写本周周报 | `cp templates/weekly.md src/content/weekly/<YYYY-Www>.md` |
| 抓股价快照 | `python scripts/snapshot_prices.py` |
| 本地预览 | `npm run dev` |
| 构建验证 | `npm run build` |
| 部署 | `git push`（自动触发 GitHub Actions） |

---

## 7. GitHub Pages 部署注意事项

- 站点 URL: `https://<github-username>.github.io/SemiConductorHelper/`
- `astro.config.mjs` 中已设 `base: '/SemiConductorHelper'`，所有内部链接必须用 `${import.meta.env.BASE_URL}` 拼接
- 自定义域名后，把 `astro.config.mjs` 的 `base` 改回 `/`，并在 `public/` 加 `CNAME` 文件
- GitHub Actions workflow 见 `.github/workflows/deploy.yml`

---

## 8. AI 行为约束（重要）

- **不要修改 `astro.config.mjs` 的 base 路径**，除非用户明确要求换域名
- **不要删除已存在的内容**，更新时只追加或修订特定段落
- **不要伪造数据**：所有数字必须基于 web_search 实际抓到的来源；查不到就写"待补充"
- **不要在内容里给买卖建议**
- **每次更新都要保留 source 链接**，便于读者验证
- **构建失败不要硬交付**：必须修到 `npm run build` 通过为止
- **首发公司名单（18 家）**：Nvidia、AMD、Broadcom、Marvell、TSMC、Intel、Samsung、SK Hynix、Micron、ASML、Applied Materials、Lam Research、KLA、Tokyo Electron、SMIC 中芯国际、北方华创、中微公司、华大九天

---

## 9. 我（用户）的目标

> 我建这个站不是为了炒股，而是为了 **系统理解半导体行业，并把这套认知分享给身边的朋友**。
> 内容质量 > 更新频率。**宁可少写，不要写错或写得敷衍。**
