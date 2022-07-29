import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://github.com/HGthecode",

  author: {
    name: "HG",
    url: "https://hg-code.com",
  },

  iconPrefix: "iconfont icon-",

  // logo: "/logo.svg",

  repo: "https://github.com/HGthecode",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: `<a href="https://beian.miit.gov.cn" target="_blank" class="text-color">桂ICP备2020008704号-1</a>`,

  displayFooter: true,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  blog: {
    description: "代码爱好者",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=376401263&site=qq&menu=yes",
      Email: "https://example.com",
      GitHub: "https://github.com/HGthecode",
      Gitee: "https://gitee.com/hg-code",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // comment: {
    //   type: "waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    
  },
  themeColor: {
    blue: "#1991ff",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  }
});
