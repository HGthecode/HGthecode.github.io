import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  "/openSource",
 
  {
    text: "笔记",
    icon: "note",
    prefix: "/notes/",
    children: [
      {
        text: "前端",
        prefix: "web/",
        children: [
          {
            text: "Vue",
            icon: "vue",
            link: "vue",
          },
          {
            text: "React",
            icon: "react",
            link: "react",
          },
          {
            text: "基础",
            icon: "stack",
            link: "base",
          },

        ],
      },
      {
        text: "后端",
        icon: "edit",
        prefix: "service/",
        children: [
          {
            text: "PHP",
            icon: "php",
            link: "php",
          },
          
        ],
      },
    ],
  },
]);
