import { defineClientConfig } from "@vuepress/client";
//图标跳动效果
import "vuepress-theme-hope/presets/bounce-icon.scss";
//闪光特效
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
// import { setupRunningTimeFooter } from "vuepress-theme-hope/lib/presets/footerRunningTime.js";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    // setupRunningTimeFooter(
    //   new Date("2022-01-01"),
    //   {
    //     "/": "Running time: :day days :hour hours :minute minutes :second seconds",
    //     "/zh/": "小破站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
    //   },
    //   true
    // );
  },
  rootComponents: [],
});
