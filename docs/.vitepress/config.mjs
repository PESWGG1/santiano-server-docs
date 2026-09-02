import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Santiano · 海境',
  description: 'Peace · Freedom · Exploration — Santiano 海境服务器官网',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '苏醒之后', link: '/guide/getting-started' },
      { text: '海境漫游', link: '/guide/gameplay' },
      { text: '游玩规则', link: '/guide/rules' },
      { text: '百科残本', link: '/guide/commands' },
      { text: '赞助支持', link: '/guide/support' },
      { text: '致谢', link: '/guide/credits' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '官网板块',
          items: [
            { text: '苏醒之后', link: '/guide/getting-started' },
            { text: '海境漫游', link: '/guide/gameplay' },
            { text: '游玩规则', link: '/guide/rules' },
            { text: '百科残本', link: '/guide/commands' },
            { text: '赞助支持', link: '/guide/support' },
            { text: '致谢', link: '/guide/credits' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PESWGG1/santiano-server-docs' }
    ],
    footer: {
      message: 'Santiano · 海境',
      copyright: 'Copyright © 2026 Santiano'
    },
    outline: { label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新' },
    search: { provider: 'local' }
  }
})
