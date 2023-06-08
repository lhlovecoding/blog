import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'ikun study blog',
  description: 'ikun study blog',
  head: [['link', { rel: 'icon', type:"x-icon",href: '/images/ikun.ico' }]],
  pagePatterns:['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),
})