import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "随笔",
      icon: "pen",
      prefix: "suibi/",
      link: "suibi/",
      children: [
        {
          text: "文章",
          icon: "pen",
          link: "article/",
        },
        {
          text: "诗歌",
          icon: "pen",
          link: "poem/",
          // children: "structure",
        },
        {
          text: "美言佳句",
          icon: "pen",
          link: "sentence/",
          // children: "structure",
        },
      ],
    },
    "intro",
    "slides",
  ],
});
