---
cover: "https://cdn.pixabay.com/photo/2023/09/09/12/38/fisherman-8243131_1280.jpg"
icon: tornado
date: 2023-10-09
category:
  - Java 后端开发
tag:
  - XML
  - Java 基础
star: true
sticky: true
---

# XML 配置解析技术

在学习菜鸟教程上 [XML](https://www.runoob.com/xml/xml-tutorial.html) 相关知识的一些笔记。

<!-- more -->

## 基础

### 简介

XML 指可扩展标记语言（EXtensible Markup Language）。
XML 是一种很像 HTML 的标记语言。但是，XML 的设计宗旨是传输数据，HTML 设计宗旨是显示数据。
XML 标签没有被预定义，需要自行定义标签，HTML 中使用的是预定义的标签。
XML 被设计为具有自我描述性。
XML 是 W3C 的推荐标准。

### 用途

应用于 web 开发的许多方面，常用于简化数据和存储共享。

- 简化数据共享：在真实的世界中，计算机系统和数据使用不兼容的格式来存储数据。XML 数据以纯文本格式进行存储，因此提供了一种独立于软件和硬件的数据存储方法。
- 简化数据传输：对开发人员来说，其中一项最费时的挑战一直是在互联网上的不兼容系统之间交换数据。由于可以通过各种不兼容的应用程序来读取数据，以 XML 交换数据降低了这种复杂性。

### 树结构

XML 文档必须包含根元素。该元素是所有其他元素的父元素。
XML 文档中的元素形成了一棵文档树。这棵树从根部开始，并扩展到树的最底端。

```xml
<root>
<child>
<subchild>.....</subchild>
</child>
</root>
```

### 语法

1、声明：XML 声明文件的可选部分，如果存在需要放在文档的第一行，如下所示：

```xml
<?xml version="1.0" encoding="utf-8"?>
```

2、实体引用（就是特殊字符的转义）：

```xml
&lt;	<	less than
&gt;	>	greater than
&amp;	&	ampersand
&apos;	'	apostrophe
&quot;	"	quotation mark
```

3、注释：与 HTML 相同：`<!-- This is a comment -->`。

注意：
所有元素必须有关闭标签。声明不是 XML 文档本身的一部分，没有关闭标签。
标签是大小写敏感的。
需要正确的嵌套。
与 HTML 相似，XML 元素也有属性值，且 XML 元素的属性值必须加引号。
XML 中，空格会被保留，HTML 会把多个连续的空格字合并为一个。
XML 以 LF 存储换行。

### 元素

指的是从（且包括）开始标签直到（且包括）结束标签的部分。
一个元素可以包含：

- 其他元素
- 文本
- 属性

命名规则：

- 名称可以包含字母、数字以及其他的字符
- 名称不能以数字或者标点符号开始
- 名称不能以字母 xml（或者 XML、Xml 等等）开始
- 名称不能包含空格
- 可以使用任何合法名称，因为没有保留字符。

是可扩展的：XML 的优势之一，就是可以在不中断应用程序的情况下进行扩展（增加新的标签而不会中断）。

### 属性

属性（attribute）提供元素的额外信息，通常提供不属于数据组成部分的信息。
在 XML 中，应该尽量避免使用属性，如果信息感觉起来很像数据，那就使用元素来提供信息。
因使用属性而引起的一些问题：

- 属性不能包含多个值，元素可以。
- 属性不能包含树结构，元素可以。
- 属性不容易扩展，难以阅读和维护。

总结：元数据（有关数据的数据）应当存储为属性，而数据本身应当存储为元素。

### 验证

拥有正确语法的 XML 被称为"形式良好"的 XML。通过 DTD 验证的 XML 是"合法"的 XML。

文档类型定义（[DTD]()（暂时无法跳转））：目的是定义 XML 文档的结构。
Schema：W3C 支持一种基于 XML 的 DTD 代替者，它名为 XML [Schema]()（暂时无法跳转。

### 使用 CSS 显示 XML

通过使用 CSS（Cascading Style Sheets 层叠样式表），您可以添加显示信息到 XML 文档中。
把 XML 文件链接到 CSS 文件：`<?xml-stylesheet type="text/css" href="file.css"?>`,使用 CSS 格式化 XML 不是常用的方法。

### 使用 XSLT 显示 XML

通过使用 XSLT（eXtensible Stylesheet Language Transformations），您可以把 XML 文档转换成 HTML 格式。XSLT 是首选的 XML 样式表语言。XSLT 是在浏览器显示 XML 文件之前，先把它转换为 HTML。

## JavaScript

### XMLHttpRequest 对象

用于在后台与服务器交换数据。

- 在不重新加载页面的情况下更新网页
- 在页面已加载后从服务器请求数据
- 在页面已加载后从服务器接收数据
- 在后台向服务器发送数据
  更多相关知识见[XML DOM]()（暂时无法跳转）。

### Parser

所有现代浏览器都有内建的 XML 解析器。XML 解析器把 XML 文档转换为 XML DOM 对象 —— 可通过 JavaScript 操作的对象。
跨域访问：出于安全方面的原因，现代的浏览器不允许跨域的访问。这意味着，网页以及它试图加载的 XML 文件，都必须位于相同的服务器上。

### DOM

DOM（Document Object Model 文档对象模型）定义了访问和操作文档的标准方法。所有元素可以通过 DOM 树来访问。可以修改或删除它们的内容，并创建新的元素。元素，它们的文本，以及它们的属性，都被认为是节点。
更多相关知识见[XML DOM]()（暂时无法跳转）。

## 进阶

### 命名空间

命名冲突：在 XML 中，元素名称是由开发者定义的，当两个不同的文档使用相同的元素名时，就会发生命名冲突。XML 解析器无法解决命名冲突。

使用前缀来避免命名冲突：在 XML 中的命名冲突可以通过使用名称前缀从而容易地避免。
::: details 示例代码

```xml
<h:table>
<h:tr>
<h:td>Apples</h:td>
<h:td>Bananas</h:td>
</h:tr>
</h:table>

<f:table>
<f:name>African Coffee Table</f:name>
<f:width>80</f:width>
<f:length>120</f:length>
</f:table>
```

:::

命名空间 —— xmlns 属性:当在 XML 中使用前缀时，一个所谓的用于前缀的命名空间必须被定义。命名空间是在元素的开始标签的 xmlns 属性中定义的。
::: details 语法

```xml
<!-- xmlns:前缀="URI" -->
<root>

<h:table xmlns:h="http://www.w3.org/TR/html4/">
<h:tr>
<h:td>Apples</h:td>
<h:td>Bananas</h:td>
</h:tr>
</h:table>

<f:table xmlns:f="http://www.w3cschool.cc/furniture">
<f:name>African Coffee Table</f:name>
<f:width>80</f:width>
<f:length>120</f:length>
</f:table>

</root>
```

:::
也可以在被使用的元素中或者在 XML 根元素中声明：
::: details 示例代码

```xml
<root xmlns:h="http://www.w3.org/TR/html4/"
xmlns:f="http://www.w3cschool.cc/furniture">

<h:table>
<h:tr>
<h:td>Apples</h:td>
<h:td>Bananas</h:td>
</h:tr>
</h:table>

<f:table>
<f:name>African Coffee Table</f:name>
<f:width>80</f:width>
<f:length>120</f:length>
</f:table>

</root>
```

:::

### CDATA

XML 文档中的所有文本均会被解析器解析。只有 CDATA 区段中的文本会被解析器忽略。

PCDATA —— 被解析的字符数据：XML 解析器通常会解析 XML 文档中所有的文本，因为 XML 元素可包含其他元素。解析字符数据（PCDATA）是 XML 解析器解析的文本数据使用的一个术语。
CDATA —— （未解析）字符数据：术语 CDATA 是不应该由 XML 解析器解析的文本数据，比如一些特殊字符： `<` 和 `&` 。将脚本代码定义为 CDATA，CDATA 部分中的所有内容都会被解析器忽略，CDATA 部分由 `<![CDATA[` 开始，由 `]]>` 结束。CDATA 部分不能包含字符串 `]]>`。也不允许嵌套的 CDATA 部分。标记 CDATA 部分结尾的 `]]>` 不能包含空格或换行。

### 编码

XML 文档可以包含非 ASCII 字符，为了避免错误，需要规定 XML 编码，或者将 XML 文件存为 Unicode。
注意：

- 始终使用编码属性（encoding）
- 使用支持编码的编辑器
- 确保知道编辑器使用什么编码
- 在编码属性中使用相同的编码

### 在服务器上的 XML

XML 文件是类似 HTML 文件的纯文本文件。XML 能够通过标准的 Web 服务器轻松地存储和生成。
1、通过 ASP(动态服务器页面) 生成 XML：XML 可在不安装任何 XML 软件的情况下在服务器端生成。如需从服务器生成 XML 响应 —— 只需简单地编写以下代码并在 Web 服务器上把它保存为一个 ASP 文件。
::: details 实例代码

```xml
<%
response.ContentType="text/xml"
response.Write("<?xml version='1.0' encoding='ISO-8859-1'?>")
response.Write("<note>")
response.Write("<from>Jani</from>")
response.Write("<to>Tove</to>")
response.Write("<message>Remember me this weekend</message>")
response.Write("</note>")
%>
<!-- 请注意，此响应的内容类型必须设置为 "text/xml"。 -->
```

:::

2、通过 PHP 生成 XML：如需使用 PHP 从服务器上生成 XML 响应，请使用下面的代码。
::: details 实例代码

```xml
<?php
header("Content-type: text/xml");
echo "<?xml version='1.0' encoding='ISO-8859-1'?>";
echo "<note>";
echo "<from>Jani</from>";
echo "<to>Tove</to>";
echo "<message>Remember me this weekend</message>";
echo "</note>";
?>
<!-- 请注意，响应头部的内容类型必须设置为 "text/xml"。 -->
```

:::

3、从数据库生成 XML：XML 可在不安装任何 XML 软件的情况下从数据库生成。如需从服务器生成 XML 数据库响应，只需简单地编写以下代码，并把它在 Web 服务器上保存为 ASP 文件。
::: details 示例代码

```xml
<%
response.ContentType = "text/xml"
set conn=Server.CreateObject("ADODB.Connection")
conn.provider="Microsoft.Jet.OLEDB.4.0;"
conn.open server.mappath("/db/database.mdb")

sql="select fname,lname from tblGuestBook"
set rs=Conn.Execute(sql)

response.write("<?xml version='1.0' encoding='ISO-8859-1'?>")
response.write("<guestbook>")
while (not rs.EOF)
response.write("<guest>")
response.write("<fname>" & rs("fname") & "</fname>")
response.write("<lname>" & rs("lname") & "</lname>")
response.write("</guest>")
rs.MoveNext()
wend

rs.close()
conn.close()
response.write("</guestbook>")
%>
```

:::

4、在服务器上通过 XSLT 转换 XML：下面的 ASP 代码在服务器上把 XML 文件转换为 XHTML。
::: details 示例代码

```XML
<%
'Load XML
set xml = Server.CreateObject("Microsoft.XMLDOM")
xml.async = false
xml.load(Server.MapPath("simple.xml"))

'Load XSL
set xsl = Server.CreateObject("Microsoft.XMLDOM")
xsl.async = false
xsl.load(Server.MapPath("simple.xsl"))

'Transform file
Response.Write(xml.transformNode(xsl))
%>

<!-- 实例解释：
第一个代码块创建微软 XML 解析器的实例（XMLDOM），并把 XML 文件载入内存。
第二个代码块创建解析器的另一个实例，并把 XSL 文件载入内存。
最后一个代码使用 XSL 文档来转换 XML 文档，并把结果以 XHTML 发送到您的浏览器。 -->
```

:::

5、通过 ASP 把 XML 保存为文件：下面 ASP 实例会创建一个简单的 XML 文档，并把该文档保存到服务器上：
::: details 示例代码

```xml
<%
text="<note>"
text=text & "<to>Tove</to>"
text=text & "<from>Jani</from>"
text=text & "<heading>Reminder</heading>"
text=text & "<body>Don't forget me this weekend!</body>"
text=text & "</note>"

set xmlDoc=Server.CreateObject("Microsoft.XMLDOM")
xmlDoc.async=false
xmlDoc.loadXML(text)

xmlDoc.Save("test.xml")
%>
```

:::

### DOM 高级

下面实例使用的 XML 文件：[books.xml](https://www.runoob.com/try/xml/books.xml)
获取元素值：

```xml
txt=xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
```

获取属性的值：

```xml
txt=xmlDoc.getElementsByTagName("title")[0].getAttribute("lang");
```

改变元素值：

```xml
x=xmlDoc.getElementsByTagName("title")[0].childNodes[0];
x.nodeValue="Easy Cooking";
```

创建新的属性值:

```xml
x=xmlDoc.getElementsByTagName("book");
for(i=0;i<x.length;i++)
  {
  x[i].setAttribute("edition","first");
  }
```

创建元素：
XML DOM 的 createElement() 方法创建一个新的元素节点。
XML DOM 的 createTextNode() 方法创建一个新的文本节点。
XML DOM 的 appendChild() 方法向节点添加子节点（在最后一个子节点之后）。
如需创建带有文本内容的新元素，需要同时创建元一个新的元素节点和一个新的文本节点，然后把他追加到现有的节点。
示例代码：

```xml
newel=xmlDoc.createElement("edition");
newtext=xmlDoc.createTextNode("First");
newel.appendChild(newtext);
x=xmlDoc.getElementsByTagName("book");
x[0].appendChild(newel);
```

删除元素：

```xml
x=xmlDoc.getElementsByTagName("book")[0];
x.removeChild(x.childNodes[0]);
```

### 相关技术

XML 技术的列表：

- XHTML (可扩展 HTML)：更严格更纯净的基于 XML 的 HTML 版本。
- XML DOM (XML 文档对象模型)：访问和操作 XML 的标准文档模型。
- XSL (可扩展样式表语言) XSL 包含三个部分：
  - XSLT (XSL 转换) - 把 XML 转换为其他格式，比如 HTML
  - XSL-FO (XSL 格式化对象)- 用于格式化 XML 文档的语言
  - XPath - 用于导航 XML 文档的语言
- XQuery (XML 查询语言)：基于 XML 的用于查询 XML 数据的语言。
- DTD (文档类型定义)：用于定义 XML 文档中的合法元素的标准。
- XSD (XML 架构)：基于 XML 的 DTD 替代物。
- XLink (XML 链接语言)：在 XML 文档中创建超级链接的语言。
- XPointer (XML 指针语言)：允许 XLink 超级链接指向 XML 文档中更多具体的部分。
- SOAP (简单对象访问协议)：允许应用程序在 HTTP 之上交换信息的基于 XML 的协议。
- WSDL (Web 服务描述语言)：用于描述网络服务的基于 XML 的语言。
- RDF (资源描述框架)：用于描述网络资源的基于 XML 的语言。
- RSS (真正简易聚合)：聚合新闻以及类新闻站点内容的格式。
- SVG (可伸缩矢量图形)：定义 XML 格式的图形。

## 总结

XML 可用于交换、共享和存储数据。
XML 文档形成 树状结构，在"根"和"叶子"的分支机构开始的。
XML 有非常简单的 语法规则。带有正确语法的 XML 是"形式良好"的。有效的 XML 是针对 DTD 进行验证的。
XSLT 用于把 XML 转换为其他格式，比如 HTML。
所有现代的浏览器有一个内建的 XML 解析器，可读取和操作 XML。
DOM（Document Object Model）定义了一个访问 XML 的标准方式。
XMLHttpRequest 对象提供了一个网页加载后与服务器进行通信的方式。
XML 命名空间提供了一种避免元素命名冲突的方法。
CDATA 区域内的文本会被解析器忽略。

🏄 下一步学习 🏄：XML DOM 和 XSLT，有关验证 XML 的知识： DTD 和 XML Schema
