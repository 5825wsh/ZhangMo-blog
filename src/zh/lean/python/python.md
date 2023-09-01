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

在学习菜鸟教程上 [python](https://www.runoob.com/python3/python3-tutorial.html) 进阶的一些笔记。

<!-- more -->

在阅读时遇到问题可以查询出处——[菜鸟 python 教程](https://www.runoob.com/python3/python3-tutorial.html)。

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

## MySQL

在 python 中，可以引入 mysql-connector 来连接使用 MySQL。在 Python3 中，还可以使用 PyMySQL 连接数据库，并实现简单的增删改查<br/>
其中数据库相关的操作都是使用 SQL 语句，并且两个库引入后的 MySQL 操作基本一致，仅在连接数据库时有所不同。

## 网络编程

使用内置的 Socket，创建服务器和客户端，逻辑和使用的方法都与计算机网络课程所讲授的差不多。
::: details 示例代码
::: code-tabs

@tab 服务器

```python
# 导入 socket、sys 模块
import socket
import sys

# 创建 socket 对象
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 获取本地主机名
host = socket.gethostname()

port = 9999

# 绑定端口号
serversocket.bind((host, port))

# 设置最大连接数，超过后排队
serversocket.listen(5)

while True:
    # 建立客户端连接
    clientsocket,addr = serversocket.accept()      

    print("连接地址: %s" % str(addr))
   
    msg='你成功了！'+ "\r\n"
    clientsocket.send(msg.encode('utf-8'))
    clientsocket.close()
```

@tab 客户端

```python
# 导入 socket、sys 模块
import socket
import sys

# 创建 socket 对象
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 获取本地主机名
host = socket.gethostname()

# 设置端口号
port = 9999

# 连接服务，指定主机和端口
s.connect((host, port))

# 接收小于 1024 字节的数据
msg = s.recv(1024)

s.close()

print (msg.decode('utf-8'))
```

:::

## SMTP 发送邮件

python 的 smtplib 提供了一种很方便的途径发送电子邮件。它对 smtp 协议进行了简单的封装。<br/>
可以实现文本发送，HTML 格式发送，附件发送，HTML 中添加图片发送
::: info 注意
要使用第三方 SMTP 服务器，比如 QQ 邮箱
::: details 简单文本发送的示例代码

```python
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from email.utils import formataddr

# QQ邮箱的SMTP服务器地址
smtp_server = "smtp.qq.com"
smtp_port = 465  # 使用SSL加密的端口
sender = '3216179194@qq.com'
receivers = ['wushaohui5825@qq.com']

message = MIMEText('Python 邮件发送测试...', 'plain', 'utf-8')
message['From'] = formataddr((str(Header("慎忆", 'utf-8')), sender))
message['To'] = formataddr((str(Header("测试", 'utf-8')), receivers[0]))
subject = 'Python SMTP 邮件测试' #邮件主题
message['Subject'] = Header(subject, 'utf-8')

try:
    smtpObj = smtplib.SMTP_SSL(smtp_server, smtp_port)
    smtpObj.login(sender, 'yziglqwbwreldgad')  # 使用授权码登录，而不是密码
    smtpObj.sendmail(sender, receivers, message.as_string())
    print("邮件发送成功")
except smtplib.SMTPException as e:
    print(f"Error: 无法发送邮件. Reason: {e}")
```

:::

## python3 多线程

常用的两大模块：\_thread，threading（推荐使用）<br/>
也需要注意线程同步问题，使用互斥锁。

## XML 解析

XML 指可扩展标记语言（eXtensible Markup Language），标准通用标记语言的子集，是一种用于标记电子文件使其具有结构性的标记语言。<br/>
Python 有三种方法解析 XML：

- SAX (simple API for XML )，一种基于事件驱动的 API
- DOM(Document Object Model)，是 W3C 组织推荐的处理可扩展置标语言的标准编程接口
- ElementTree

## JSON 数据解析

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式。

- json.dumps(): 对数据进行编码。
- json.loads(): 对数据进行解码。

## 日期和时间

Python 提供了一个 time 和 calendar 模块可以用于格式化日期和时间。time 模块下有很多函数可以转换常见日期格式，calendar 模块有很广泛的方法用来处理年历和月历，具体使用时再做查询。

## MongoDB

连接 MongoDB 需要 MongoDB 驱动，这里使用 PyMongo 驱动来连接。<br/>
明白数据库、集合、文档之间的关系，了解增删查改的方法，具体使用时再去查找学习。

## urllib

Python urllib 库用于操作网页 URL，并对网页的内容进行抓取处理。
包含以下几个模块：

- urllib.request - 打开和读取 URL。
- urllib.error - 包含 urllib.request 抛出的异常。
- urllib.parse - 解析 URL。
- urllib.robotparser - 解析 robots.txt 文件。

## operator 模块

替代 cmp() 函数来比较两个列表、数字或字符串等的大小关系，需要引入 operator 模块。
::: details 包含的用于比较的方法

```python
operator.lt(a, b)
operator.le(a, b)
operator.eq(a, b)
operator.ne(a, b)
operator.ge(a, b)
operator.gt(a, b)
operator.__lt__(a, b)
operator.__le__(a, b)
operator.__eq__(a, b)
operator.__ne__(a, b)
operator.__ge__(a, b)
operator.__gt__(a, b)
# 其中双下划线的是为了向下兼容，一般不用
```

:::
除了比较的方法，operator 模块还包含有逻辑运算、数学运算以及序列运算等函数方法，详情[见此](https://www.runoob.com/python3/python-operator.html)

## math 模块

math 模块提供了许多对浮点数的数学运算函数，且返回值均为浮点数，包含的方法不在此列举，需要用到时再做[查询](https://www.runoob.com/python3/python-math.html)。

## request 模块

Python requests 是一个常用的 HTTP 请求库，可以方便地向网站发送 HTTP 请求，并获取响应结果。<br/>
企业实训时做的大数据项目就是用的 request 库来编写爬虫实现数据收集的。

## random 模块

Python random 模块主要用于生成随机数。

## statistics 模块

Python statistics 是标准库中的一个模块，模块提供了许多基本统计计算的函数，可以帮助我们分析和计算数据集的统计特征。

## 结束

至此，菜鸟教程上的关于 python 高阶的学习就结束了，学习时，本人只是采取浏览、理解，部分时候辅以代码来验证学习，学习深度并不高。本人也是处于 python 的初学者，写本文也只是相当于做做笔记，增强学习效果，并方便日后可能的使用。如果发现 本文存在问题，欢迎交流学习 😘。
