import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/", //主页面
  // "/zh/demo/", //配置页面
  {
    text: "开发笔记",
    icon: "pen-to-square",
    prefix: "/zh/lean/",
    children: [
      {
        text: "前端",
        icon: "network-wired",
        link: "frontend/",
        // children: [
        //   { text: "HTML学习", icon: "code", link: "html" },
        //   // { text: "苹果2", icon: "pen-to-square", link: "2" },
        // ],
      },
      { text: "python", icon: "code", link: "python/" },
      { text: "Java", icon: "camera-retro", link: "java/" },
      { text: "C/CPP", icon: "cloud", link: "c/" },
    ],
  },
  {
    text: "随笔",
    icon: "feather",
    prefix: "/zh/suibi/",
    children: [
      {
        text: "文章",
        icon: "newspaper",
        link: "article/",
      },
      {
        text: "诗歌",
        icon: "pen-nib",
        link: "poem/",
      },
      {
        text: "美言佳句",
        icon: "heart",
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
