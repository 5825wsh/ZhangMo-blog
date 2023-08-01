import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/", //主页面
  // "/zh/demo/", //配置页面
  {
    text: "开发笔记",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "前端",
        icon: "pen-to-square",
        prefix: "frontend/",
        children: [
          { text: "HTML学习", icon: "pen-to-square", link: "html" },
          // { text: "苹果2", icon: "pen-to-square", link: "2" },
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
    ],
  },
  {
    text: "随笔",
    icon: "pen",
    prefix: "/zh/suibi/",
    children: [
      {
        text: "文章",
        icon: "pen-to-square",
        link: "article/",
      },
      {
        text: "诗歌",
        icon: "pen-to-square",
        link: "poem/",
      },
      {
        text: "美言佳句",
        icon: "pen-to-square",
        link: "sentence/",
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
