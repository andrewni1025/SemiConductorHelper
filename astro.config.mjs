// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 子路径部署配置
// 部署 URL: https://<your-github-username>.github.io/SemiConductorHelper/
// 如果将来绑定自定义域名，把 site 改掉，base 改成 '/' 即可
const SITE = process.env.SITE_URL || 'https://example.github.io';
const RAW_BASE = process.env.BASE_PATH || '/SemiConductorHelper';
// 确保 base 以 '/' 结尾（避免 ${base}intro 拼成 /xxxintro）
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
