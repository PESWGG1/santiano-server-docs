import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Santiano 服务器文档',
  description: '欢迎来到海境 · Santiano 服务器玩家手册',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新手入门', link: '/guide/getting-started' },
      { text: '指令手册', link: '/guide/commands' },
      { text: '常见问题', link: '/guide/faq' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '玩家手册',
          items: [
            { text: '新手入门', link: '/guide/getting-started' },
            { text: '指令手册', link: '/guide/commands' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PESWGG1/server-docs' }
    ],
    footer: {
      message: 'Santiano 服务器玩家手册',
      copyright: 'Copyright © 2026 Santiano'
    },
    outline: { label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新' },
    search: { provider: 'local' }
  }
})
