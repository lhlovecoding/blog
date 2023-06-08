import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'ikun study blog',
  description: 'ikun study blog',
  head: [['link', { rel: 'icon', type:"x-icon",href: '/images/ikun.ico' }]],
  pagePatterns:['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']
})