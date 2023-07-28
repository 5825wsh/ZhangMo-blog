import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "ZhangMo",
      description: "A small world that belongs to me",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "丈墨",
      description: "属于我的一片小世界",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
