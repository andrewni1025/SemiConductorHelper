# SemiConductorHelper

> 一份给自己和朋友的 **半导体深度地图**——上下游、关键公司、技术路线、政策与投资周期。

🌐 **在线访问**：（Phase 1 部署后填入 GitHub Pages URL）

## 这是什么

不是炒股工具，是 **认知建设 + 知识沉淀 + 对外分享** 的静态网站：

- **入门地图** — 5 分钟看懂半导体是什么、芯片怎么造、上下游如何连接
- **产业链词典** — EDA / Fabless / Foundry / 设备 / 材料 / 存储 / 封装 / 下游
- **公司档案库** — 18 家全球关键公司的结构化档案
- **技术 & 周期** — 制程、HBM、CoWoS、SiC/GaN、半导体周期与估值
- **时事周报** — 政策、财报、关键事件追踪（按需更新）

## 技术栈

- **Astro 5** + **Tailwind CSS v4** — 静态站点 + 现代 CSS
- **Markdown / MDX** — 全部内容用 markdown 写
- **Mermaid** — 流程图、产业链图
- **GitHub Pages** — 免费部署
- **Copilot CLI** — 用户按需开启 AI 助手做新闻总结、周报更新（详见 `AGENTS.md`）

## 本地开发

```bash
npm install
npm run dev          # 启动开发服务器（默认 http://localhost:4321）
npm run build        # 生产构建
npm run preview      # 预览构建产物
```

## 添加内容

复制 `templates/` 下对应模板到 `src/content/<集合>/` 下，重命名后修改 frontmatter 与正文：

```bash
cp templates/company.md src/content/companies/nvidia.md
cp templates/segment.md src/content/segments/foundry.md
cp templates/intro.md   src/content/intro/04-xxx.md
cp templates/tech.md    src/content/tech/cowos.md
cp templates/weekly.md  src/content/weekly/2026-W19.md
```

## 部署

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。
首次部署前需要在 GitHub 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。

## 维护流程

详见 [`AGENTS.md`](./AGENTS.md) — 给未来开 Copilot CLI 的你/AI 看的操作手册。

## 免责声明

内容仅供学习与认知参考，**不构成任何投资建议**。投资有风险，决策请独立判断。
