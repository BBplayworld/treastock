// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-gtag'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      title: 'BBstoqq: Real-Time Market Data, Economic Indicators, and Corporate News',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },

        { name: 'description', content: 'Explore real-time market data with BBstoqq. Dive deep into comprehensive economic indicators, corporate news, and interactive treemaps to gain valuable insights into market trends.' },
        { name: 'keywords', content: 'real-time market data, economic indicators, corporate news, stock market, financial news, treemap, market trends, financial analysis' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.bbstoqq.com/' },
        { property: 'og:title', content: 'BBstoqq: Real-Time Market Data, Economic Indicators, and Corporate News' },
        { property: 'og:description', content: 'Get real-time market insights with BBstoqq. Analyze market trends using interactive treemaps, track economic indicators, and stay updated with corporate news for smarter investment decisions.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://www.bbstoqq.com/' },
        { name: 'twitter:title', content: 'BBstoqq: Real-Time Market Data, Economic Indicators, and Corporate News' },
        { name: 'twitter:description', content: 'Stay ahead with BBstoqq\'s real-time market data, detailed economic insights, and latest corporate news. Explore interactive treemaps to make informed decisions.' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.bbstoqq.com/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "BBstoqq",
            "url": "https://www.bbstoqq.com/",
            "logo": "https://www.bbstoqq.com/favicon.ico",
            "description": "Stay updated with real-time market data, economic indicators, and corporate news on BBstoqq. Explore interactive treemaps for comprehensive market analysis.",
            "publisher": {
              "@type": "Organization",
              "name": "BBstoqq",
            }
          })
        },
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7852495050691458',
          async: true,
          crossorigin: 'anonymous',
        }
      ],
    }
  },

  gtag: {
    id: 'G-CHKS355R0L',
    config: {
      anonymize_ip: true, // GDPR에 따른 IP 익명화
      send_page_view: true,
    },
    enabled: process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'preview',
  },

  routeRules: {
    '/api/**': { cache: false },
  },

  compatibilityDate: '2024-09-01'
})
