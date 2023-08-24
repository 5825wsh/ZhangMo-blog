---
cover: "https://w.wallhaven.cc/full/mp/wallhaven-mp6e2y.jpg"
icon: code
date: 2023-08-20
category:
  - python
tag:
  - python进阶
star: true
sticky: true
---

# Python

在学习菜鸟教程上 [python](https://www.runoob.com/python3/python3-tutorial.html) 进阶的一些笔记

<!-- more -->

## 正则表达式

通过引入 re 模块来使用

- compile 函数用于编译正则表达式;
- match 只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回 None;
- re.search 匹配整个字符串，直到找到一个匹配;
- sub 用于替换字符串中的匹配项，其中的替换项可以是函数;
- group （包含 start、end、span 方法）和 groups 用来接收匹配结果;
- span 返回匹配结果在原字符串中的位置;
- findall 在字符串中找到正则表达式所匹配的所有子串，并返回一个列表，如果有多个匹配模式，则返回元组列表，如果没有找到匹配的，则返回空列表;
- finditer 在字符串中找到正则表达式所匹配的所有子串，并把它们作为一个迭代器返回;
- split 方法按照能够匹配的子串将字符串分割后返回列表;

::: info 正则表达式模式

- r'\D'匹配任何非数字字符
- .\* 表示任意匹配除换行符（\n、\r）之外的任何单个或多个字符
- (.\*?) 表示"非贪婪"模式，只保存第一个匹配到的子串
  还有其他的，更多的可以[看这里](https://www.runoob.com/regexp/regexp-metachar.html)
  关于修饰符，是可选项，不多，需要用到时再去查找使用
  :::

## Python CGI 编程

CGI(Common Gateway Interface),通用网关接口,它是一段程序,运行在服务器上如：HTTP 服务器，提供同客户端 HTML 页面的接口。
实现了通常情况下的客户端与服务器的请求响应。

## Python MySQL
