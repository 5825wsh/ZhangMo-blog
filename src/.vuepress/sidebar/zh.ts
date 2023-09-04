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
      text: "学习笔记",
      icon: "note-sticky",
      prefix: "lean/",
      collapsible: true,
      children: [
        {
          text: "前端",
          icon: "network-wired",
          prefix: "frontend/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "python",
          icon: "code",
          prefix: "python/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Java",
          icon: "camera-retro",
          prefix: "java/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "随笔",
      icon: "feather",
      prefix: "suibi/",
      collapsible: true,
      children: [
        {
          text: "文章",
          icon: "newspaper",
          prefix: "article/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "诗歌",
          icon: "pen-nib",
          prefix: "poem/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "美言佳句",
          icon: "heart",
          prefix: "sentence/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "intro",
    "slides",
  ],
});
