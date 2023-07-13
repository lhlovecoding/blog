import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'JavaScript 课程大纲',
  description: '大纲涵盖二段三段四段60天课程',
  head: [['link', { rel: 'icon', type: "x-icon", href: '/images/ikun.ico' }]],
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '二段课程',
        link: '/guide/二段.md',
        activeMatch: '/'

      },
      {
        text: '三段课程',
        link: '/guide/三段.md',
      },
      {
        text: '四段课程',
        link: '/guide/四段.md',
      },
      {
        text: 'Tools',
        link: '/guide/tools.md',
      },
    ],
  }),
})