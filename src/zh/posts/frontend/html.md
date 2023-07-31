---
cover: /assets/images/html.png
icon: pen-to-square
date: 2022-06-27
category:
  - 前端
tag:
  - HTML
  - 前端基础
star: true
sticky: true
---

# HTML

在学习前端基础——HTML 的一些笔记

<!-- more -->

### 基本结构标签：

```html
\<!DOCTYPE html>文档类型声明标签，此时采用的是HTML5来显示网页

<html lang="en">
  //
  <html>
    是根标签，lang(language的缩写)定义显示语言，en是英语，zh-CN是中文
    <head>
       
      <meta charset="UTF-8" />
      /charset是字符集，UTF-8是万国码    
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body></body>
  </html>
</html>
```

内容

```htnl
</body>

</html>
```

小技巧：在 vscode 中，一个！就可以完整的基本框架。vscode 中，点击查看，选择换行，能够自动排版。

### vscode 推荐安装插件：

- Open in Browser——浏览器直接打开
- Auto Rename Tag----自动重命名配对标签
- CSS Peek----追踪至样式

### 常用标签

1. 标题标签：

   ```html
   <h1></h1>
   ~
   <h6></h6>
   ```

2. 段落标签：间距较大

   ```html
   <p></p>
   ```

3. 换行标签：单标签，间距较小

   ```html
   <br />
   ```

4. 文本格式化标签：

```html
- 加粗：<strong></strong>或者<b></b>

- 倾斜：<em></em>或者<i></i>

- 删除线：<del></del>或者<s></s>

- 下划线：<ins></ins>或者<u></u>
```

都推荐使用第一种，语义更加强烈。

5. 标签 div 和 span 是没有语义的，它们就是一个盒子，用来装内容。

division，分割、分区；span，跨度、跨距。

标签 div 用来布局，但是一行只能放一个 div（大盒子）

标签 span 用来布局，一行上可以有多个 span（小盒子）

6. 图像标签：单标签，\<img src="" />,一些属性、属性值以及说明：

> src: 图片路径 必须属性
>
> alt: 文本 替换文本。图像不能显示的文字
>
> title：文本 提示文本。鼠标放到图像上，显示的文字
>
> width： 像素 设置图像的宽度
>
> height： 像素 设置图像的高度//宽度和高度一般情况下修改一个就行，另外一个会等比例缩放
>
> border： 像素 设置图像的边框粗细

​ 找图片路径：相对路径：从同级出发，下一级用“/”，上一级用“../”;绝对路径：用“\”;使用完整的网络链接

7. 超链接标签：\<a href="" target="目标窗口弹出方式">文本或者图像\</a>

target——为\_self 时在本页面打开,且为默认值，为\_blank 时在新窗口中打开，href 和 target 都是必须属性

分类：

- 外部链接：一定要有 http://
- 内部链接：网站内部页面之间的相互链接，直接链接内部页面名称（要考虑路径）即可，例如\<a href="index.html">首页\</a>
- 空链接：没有连接目标时，\<a href="#">xx\</a>
- 下载链接：href 里面的地址（注意路径）时一个文件（.exe)或者压缩包(.zip)，会下载这个文件
- 网页元素链接：在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接，eg：\<a href="网址">\<img src="图片路径">\</a>，到时候点击图片就可以跳转
- 锚点链接：当我们点击链接，可以快速定位到页面中的某个位置

> 在链接文本的 href 属性中，设置属性值为**#名字**的形式，如\<a href="#two">第二集\</a>
>
> 找到目标位置标签，里面添加一个 id 属性且为刚才的名字，如：\<h3 id="two">第二集介绍\<h3>

- 注释标签：以“\<!--”开头，以“-->”结束，也可以使用快捷键：ctrl+/，注释标签里面的内容是给程序员看的，不会执行并显示在页面中
- 特殊字符：只需记住常用的，其他不常用的遇到时去查一哈就行了,一定记住要打分号。

> 空格——\&nbsp;
>
> 小于号——\&lt;
>
> 大于号——\&gt;

8. 表格标签（用来显示数据）：基本语法（要注意其中的嵌套关系）：

```html
\
<table>
  //定义表格的标签        
  <tr>
    //定义表格中的行            
    <td>单元格中的内容</td>
    //定义表格中的单元格             ...        
  </tr>
          ...  
</table>
```

表头单元格标签：一般表头单元格位于表格的第一行或者第一列，里面的内容加粗居中显示，用\<th>(table head)，表格是有属性的，但是一般不常用，而是通过 css 来设置

<!-- ![1664157627359](C:\Users\86152\AppData\Roaming\Typora\typora-user-images\1664157627359.png) -->

表格结构标签：（用来划分表格区域，且都嵌套在\<table>\</table>标签中）

```html
-
<thead></thead>
:定义表格的头部。内部必需有
<tr>
  标签，一般位于第一行 -
  <tbody></tbody>
  :定义表格主体，主要用于放数据本体
</tr>
```

合并单元格：

- 跨行合并：rowspan=“合并单元格的个数”
- 跨列合并：colspan="合并单元格的个数"

目标单元格：

跨行：所选单元格中最上侧单元格为目标单元格，写合并代码

跨列：所选单元格中最左侧为目标单元格，写合并代码

<!-- ![1664160405208](C:\Users\86152\AppData\Roaming\Typora\typora-user-images\1664160405208.png) -->

9. 列表标签（用来布局)：

- **无序列表**：用\<ul>表示无序列表，用\<li>标签定义列表项，在\<ul>中只能放\<li>，而在\<li>中可以放任意元素，虽然自带样式属性，但是还上是用 css 来设置

> 语法格式：
>
> ```html
> \
> <ul>
>   ​
>   <li>列表项1</li>
>
>   ​
>   <li>列表项2</li>
>
>   ​
>   <li>列表项3</li>
> </ul>
> ```

- 有序列表：用\<ol>标签来定义，使用\<li>标签来定义列表项，语法格式与无序列表相似，在\<ol>中只能放\<li>，而在\<li>中可以放任意元素，虽然自带样式属性，但是还上是用 css 来设置

- **自定义列表**：常用于对术语或名词进行描述，列表项没有任何项目符号，用\<dl>标签定义，与\<dt>（定义项目/名字）和\<dd>（描述每一个项目/名字）一起使用，\<dl>里面只能出现\<dt>\<dd>，而在\<dt>\<dd>中可以放任何元素，\<dt>\<dd>个数没有限制

> 基本语法：
>
>     <dl>
>      	<dt>名词</dt>
>     	<dd>解释1</dd>
>     	<dd>解释2</dd>
>     </dl>

10. 表单标签：用于收集用户信息，由表单域、表单控件（表单元素）和提示信息组成

- 表单域：包含表单元素的区域，用\<from>标签定义，实现用户信息的收集和传递

> ```html
> <from action="url地址" method="提交方式" name="表单域名称">
>   各种表单元素控件
> </from>
> ```

<!-- > ![1664162703853](C:\Users\86152\AppData\Roaming\Typora\typora-user-images\1664162703853.png) -->

- 表单控件：用\<input type="属性值" />标签，单标签，type 属性不同从而指定不同的控件类型

> input 输入表单元素：

<!-- > ![1664163278836](C:\Users\86152\AppData\Roaming\Typora\typora-user-images\1664163278836.png) -->

> 除了 type 属性，\<input>标签还有其他属性，常用如下：

<!-- > ![1664163596950](C:\Users\86152\AppData\Roaming\Typora\typora-user-images\1664163596950.png) -->

> > name 是表单元素的名字，要对单选按钮取相同的名字才能实现多选一，复选按钮也要名字相同
> >
> > value 值主要是后台人员使用，用来分辨用户给的返回值的类型，可以用于打开页面就默认显示几个文字
> >
> > name 和 value 是每个表单元素都有的属性值
> >
> > 单选按钮和复选框可以设置 checked 属性，当页面打开的时候就可以默认选中这个按钮
> >
> > \<label>标签：用于绑定一个表单元素，当点击\<label>标签内的文本时，浏览器就会自动将焦点（光标）转到或者选择对应表单元素上，用来增加用户体验
> >
> > > ```html
> > > 语法：<label for="sex">男</label>
> > >
> > > <input type="radio" name="sex" id="sex" />//其中for属性要与id属性相同
> > > ```
>
> ---
>
> select 下拉表单元素:当有多个选择，且想要节约空间时，可使用
>
> > 语法：(在\<option>中定义 selected=”selected“时，当前选项就成为了默认选中项)
> >
> > ```html
> > \<select>
> >   <option>选项1</option>
> >
> >   <option>选项2</option>
> >
> >   <option>选项3</option>
> >
> >   ...
> > </select>
> > ```
>
> textarea 文本域元素：当用户输入内容较多的情况下，就不能用文本框表单了；此控件常见于留言板、评论
>
> > 语法：（cols="每行中的字数"，rows="显示的行数"，实际开发不会用这两个属性，而用 css)
> >
> > ```html
> > \<textarea rows="3" cols="20">
> > 
> > 文本内容
> > 
> > </textarea>
> > ```

### 查阅文档

- 百度：http://www.baidu.com
- W3C:http://www.w3school.com.cn
- MDN:https://developer.mozailla.org/zh-CN/
