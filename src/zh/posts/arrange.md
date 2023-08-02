---
cover: "https://w.wallhaven.cc/full/kx/wallhaven-kx98xd.jpg"
icon: pen-to-square
date: 2023-07-28
category:
  - 博客部署
tag:
  - 部署
star: true
sticky: true
---

关于本博客的部署过程，用 vercel，真的方便，真的香:heart_eyes:

<!-- more -->

# 博客部署

在部署之前，要确保自己的项目能够在本地运行 pnpm docs:build，且不能有报错，否则就不能进行下面的步骤

### GitHub 仓库

先在 GitHub 上创建好仓库，然后本地项目上传到仓库中，也可以直接 fork 我的仓库，具体的上传就不多说了。

### vercel 部署

为了方便，我使用的是[vercel](https://vercel.com/)国际版（一定要是国际版，不然会导致一些问题）。

- 先登录，这里我使用的是 GitHub 账号登录：

  [![登录vercel](https://i.postimg.cc/VvT42TpR/image.png)](https://postimg.cc/n94vDdHj)

- 然后进入之后，再创建实例：

  [![创建新实例](https://i.postimg.cc/k5cs7DLD/shili.png)](https://postimg.cc/CZRkNMhV)

- 从 GitHub 上导入项目：

  [![导入项目](https://i.postimg.cc/8CDw8LKq/image.png)](https://postimg.cc/VJGXn0cR)

- 选择要导入的项目：

  [![选择项目](https://i.postimg.cc/PrpS1XvF/image.png)](https://postimg.cc/crW7SNmQ)

- 点击 import 导入：

  [![导入](https://i.postimg.cc/pryqGxGr/import.png)](https://postimg.cc/p5bfyNtM)

- 配置部署方式：

  [![配置](https://i.postimg.cc/Dy9Bg9qf/1.png)](https://postimg.cc/tYz3RmS8)

  [![配置](https://i.postimg.cc/sg5K0TcY/2.png)](https://postimg.cc/hXP9XbNv)

- 最后只需要等待一两分钟，出现撒花界面就表示部署成功了，接下来你就可以点击 visit 去访问你的 bolg 了。

::: tip PS
还可以绑定域名，具体怎么做可以[参考这里](https://www.tangly1024.com/article/vercel-domain)，当然也可以自己去找一下文档，都会有解决方法的。
:::
