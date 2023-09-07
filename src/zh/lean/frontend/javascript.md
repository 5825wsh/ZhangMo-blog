---
cover: "https://cdn.pixabay.com/photo/2017/10/20/01/06/north-star-2869817_1280.jpg"
icon: cannabis
date: 2022-12-05
category:
  - 前端
tag:
  - JavaScript
  - 前端基础
star: true
sticky: true
---

# JavaScript

在学习前端基础—— JavaScript 的一些笔记

<!-- more -->

# JavaScript 学习

只记录与 C 语言不同的地方

### 输入输出

alert（）——浏览器弹出警示框

console.log（）——浏览器控制台打印输出信息

prompt（）——弹出输入框，用户可以输入

### 变量

声明：var 变量名；

命名：首字母小写

### 数据类型

弱类型、动态类型——js 的数据类型要在初始化之后才能确定，且可变

数字前面加“0”表示是 8 进制，加“0x”表示是十六进制

数字有最大最小值：Number.MAX_VALUE|Number.MIN_VALUE

用 infinite 表示无穷大，加符号表示无穷小

NaN 表示”不是一个数字“，可以用 isNaN()来判断

字符串声明时加引号，并且注意嵌套关系

用**length**来求字符串的长度

转义字符写到引号里面

用 typeof 来判断数据类型

**不要直接拿浮点数进行比较相等**

### 流程控制

三元表达式：

语法：条件表达式 ？ 表达式 1：表达式 2

switch 里面的判等是全等

### 数组

创建：//两种方法

- var 数组名 = new Array（）；
- var 数组名 = [];

同一数组可以存放任意类型的数据类型

可以用 **数组名.length** 来求数组的动态长度

### 函数

声明：法一：关键词声明：function 函数名（形式参数） {函数体}//形参不需要声明

法二：变量声明：var 变量名 = function（）{函数体}；//匿名函数，调用时：变量名（）；

没有 return 的函数返回 undefined

用 argument（每个函数都内置有）获取用户输入的所有实参，用伪数组的形式存储

在函数内部没有声明而直接赋值的变量时全局变量

没有块级作用域——{}//括号里面的称为块级作用域

内部函数查找外部函数的变量采取链式查找的方式来决定取那个值，这种结构称为作用域链

### 预解析

变量提升：把所有的变量声明提升到当前作用域的最前面，但是不提升赋值操作

函数提升：把所有的（关键字的）函数声明提升到当前作用域的最前面，但是不调用函数

### 对象（有点像结构）

对象是一组无序的相关属性和方法的集合，比如字符串、数组、函数

**创建：**

- 用花括号创建

  - var obj = {};

  - 多个属性用逗号隔开
  - 方法（对象里面的类似于函数）后面跟的是一个匿名函数
  - 调用对象的方法：**对象名.方法名（）**

- 用 new Object 创建

  - var obj = new Object();
  - 用等号赋值添加属性和方法
  - 用分号分开

- 用构造函数
  - function 构造函数名（）{this.属性 = 值；this.方法 = function（）}；
  - var obj = new 构造函数名（）；
  - 构造函数名首字母大写
  - 不需要 return

**遍历对象**

for(var k in obj){

console.log(k);//输出属性名

console.log(obj[k]);输出属性值

}

### 内置对象

JS 语言自带的一些对象，供开发者使用，提供常用的功能

**查文档**：MDN：https://developer.mozilla.org/zh-CN/

#### Math 对象

不是一个构造对象，直接使用，不需要用 new 来调用

比如圆周率、自然对数等等，还有很多与 math 相关的方法，eg: Math.max();

**Math.random();**随机产生一个[0，1）之间的小数，通过一定公式也可以产生随机整数

#### 日期对象

是一个构造函数，用 new 来调用——var date = new Date();

根据给出的参数不同，返回值不同；用不同的内置方法，获得不同的返回值

格式化：存储年月日相关信息之后，同一格式化输出

案例：倒计时

#### 数组对象

用 new array 来创建数组

检测是否为数组：

- 用 instanceof:变量名 instanceof array //返回 true 或者 false
- 用 Array.isArray(参数)

**添加或者删除数组元素**：

- push():添加到数组末尾
- unshift()：添加到数组的开头

- pop():删除数组的最后一个元素
- shift():删除数组的第一个元素

**数组排序**：

- reverse():翻转数组元素
- sort():对数组进行冒泡排序（但是直接用并不完善，还需要修正，并且同时规定排序的结果是升序还是降序）

**数组索引**：

- indexOf(数组元素)：返回数组里面第一个查找元素的索引号

- lastIndexOf(数组元素)：返回最后一个查找元素的索引号

**数组转化为字符串**：

- toString():将数组转换为字符串
- join(分隔符):自定义分隔符

#### 字符串对象

- **基本包装类型**：把简单数据类型包装为复杂数据类型，让其拥有一些实用的属性和方法
- 字符串的不可变：改变字符串的值实际上是在改变其地址，之前的值仍然存在，因此不要大量使用拼接字符

- 查找字符位置：

  - indexOf('要查找的字符'，[起始位置])//从前往后找
  - lastIndexOf('要查找的字符'，[起始位置])//从后往前找

- **根据位置返回字符**：

  - charAt(index):根据位置返回字符
  - charCodeAt(index):根据位置返回字符的 ASCLL 码，目的：判断用户按下的那个键
  - str[index]//有点类似与数组处理了

- **字符串操作方法**：
  - concat('字符串 1'，‘字符串 2‘......)
  - substr(‘截取的起始位置’，‘截取的字符数’)
  - slice（start,end)、substring(start,end)//截取到 end 结束，end 不取，区别：substring 不接受负值
  - replace('被替换的字符'，‘替换成为的字符’)//只会替换第一个字符
  - split('分隔符')：字符串转换为数组，其中分隔符取决于字符串所用的分隔符

### 简单数据类型和复杂数据类型

简单数据类型——放在栈里，存值；复杂数据类型——地址放在栈里，内容放在堆里

简单数据类型：null——返回的是一个空的对象（object）

### Web APIs-BOM and DOM

详细 API：https://developer.mozilla.org/zh-CN/docs/Web/API

### DOM

文档对象模型，处理可扩展标记语言的编程接口

#### DOM 树

文档（document）：一个网页就是一个文档

元素（element）：页面中的所有标签都是元素

节点（node）：网页中的所有内容都是节点

**DOM 可以把以上内容都看作对象**

#### 获取元素

- 通过 id 名字获取：document.getElementById(id)//id 是大小写敏感的字符串，所以要加‘’。

- 通过标签获取：
  - getElementsByTagName('标签')//是字符串，也要加引号，返回获取到的元素对象的集合，**都**以伪数组的形式存储
  - 获取父元素内部的指定标签元素：element.getElementsByTagName('标签');//父元素必须指明具体的一个对象，不会获取到父元素
- 通过类名获取：document.getElementByClassName('类名')；//返回对象集合
- document.querySelector('选择器')；//根据指定选择器返回第一个元素对象，注意选择器前是否加'.'/'#'来指明是类选择器还是 id 选择器等等
- document.querySelectorAll('选择器')；//返回指定选择器的所有元素对象的集合

注：可以使用 console.dir 打印返回元素对象，更好的查看里面的属性和方法

#### 获取特殊元素——body 和 HTML

- document.body //返回 body 元素对象
- document.documentElement //返回 HTML 元素对象

#### 事件基础

事件：触发——响应机制

三要素：事件源、事件类型、事件处理程序

- 事件源：事件被触发的对象
- 事件类型：鼠标点击、鼠标经过、键盘按下
- 时间处理程序：通过赋值函数的方式

<!-- ![1668327948331](C:\Users\86152\AppData\Roaming\Typora\typora-user-images\1668327948331.png) -->

#### 操作元素

- 改变元素内容（以下两个标签还可以读取元素里面的内容）

  - element.innerText//不识别 HTML 标签，并且直接显示——非标准，去除空格和换行
  - element.innerHTML//识别 HTML 标签，保留空格和换行

- 修改元素属性——src、href、id、alt、title

- 表单属性设置（value、type、checked、selected、disabled）：表单内容通过 value 属性来修改

注：this 指向事件函数的调用者

- 样式属性操作：修改元素的大小、颜色、位置

  - element.style.属性//行内样式操作（CSS 的权重更高），属性采用驼峰命名法
  - element.className//类名样式操作，为当前元素修改类名，如果想要保留之前的类名，使用多类名选择器；减少代码量，适合于样式较多或者功能复杂的情况

- 排他思想：对多个同一种元素添加事件，用 for 循环，先清除所有效果，再对点击的元素添加事件

- 自定义属性的操作：

  - 为元素添加自定义属性，并通过 element.getAttribute('属性')来获取
  - 置元素的属性值：
    - element.属性 = '值'；//用于内置属性
    - element.setAttribute('属性'，'值')；//主要针对于自定义属性
  - 移除属性：element.removeAttribute('属性')；

- H5 自定义属性
  - 目的：为了保存并使用数据，保存在页面中而不用保存到数据库中
  - 规定：自定义属性 data-开头作为属性名并且赋值，形式为 data-index
  - 获取：
    - element.getAttribute('data-index');
    - H5 新增：element.dataset.index 或者 element.dataset['index']//dataset 是一个集合，里面存放了所有以 data 开头的自定义属性(也就是说只能获取 data 开头的)；如果自定义属性里面有多个’-‘连接的单词，我们用此方法获取的时候采用**驼峰命名法**，eg:data-list-name 用 element.dataset.listName

#### 节点操作

- 获取元素的方法

  - 利用 DOM 提供的方法，也就是上文学习的方法，但是逻辑性不强，繁琐
  - 利用节点层级关系获取，逻辑性强，但是兼容性稍差

- 节点至少拥有 nodeType(节点类型，元素节点为 1，属性节点为 2，文本节点—包括文字、空格、换行为 3)、nodeName（节点名称）、nodeVaue（节点值）

- 父级节点：node.parentNode//返回 node 的最近的一个父节点，如果没有就返回 null
- 子节点：

  - parentNode.childNodes//标准，得到的是节点的所有子节点，包含元素节点和文本节点等等
  - parentNode.children//非标准，得到所有子元素节点，实际开发中常用
  - parentNode.firstChild//所有节点中的第一个|parentNode.firstElementChild//返回第一个子元素节点，但是有兼容性问题
  - parentNode.lastChild//所有节点中的最后一个|parentNode.lastElementChild//返回最后一个子元素节点，但是有兼容性问题
  - 实际开发常用：
    - parentNode.children[0]//访问第一个子节点元素
    - parentNode.children[parentNode.children.length - 1]

- 兄弟节点：

  - node.nextSibling//得到下一个兄弟节点，包含元素节点和文本节点等等，找不到就返回 null
  - node.previoustSibling//得到上一个兄弟节点，包含元素节点和文本节点等等，找不到就返回 null
  - node.nextElementSibling//返回下一个兄弟节点，找不到就返回 null，有兼容性问题
  - node.previousElementSibling//返回上一个兄弟节点，找不到就返回 null，有兼容性问题

- 页面中添加新的元素：

  - 第一步——创建节点：document.createElement('tagName');//动态创建元素节点

  - 第二步——添加节点：
    - node.appendChild(child);//node-父级，child-子级，追加元素
    - node.insertBefore(child,指定元素)；//将节点添加到指定元素的前面

- 删除节点：node.removeChild(child)//删除一个子节点，返回删除节点

- 复制节点（克隆节点）：node.cloneNode();//若括号内容为空或为 false，则是浅拷贝，只复制节点本身，不克隆里面的子节点；参数为 true，则是深度拷贝，复制节点本身以及所有子节点

注：阻止链接跳转：href='javascript:;'或者'javascript:void(0);'

- 比较动态创建元素的区别：
  - document.write 是直接将内容写入页面的内容流，但是文档流执行完毕，它会导致页面全部重绘
  - innerHTML 是将内容写入 DOM 节点，不会导致页面重绘
  - innerHTML 创建多个元素效率更高（不是拼接字符串，而是采取数组形式拼接），结构稍微复杂
  - createElement.()创建多个元素效率稍低一些，但是结构更清晰

#### 事件高级导读

- 注册事件：

  - 传统方法：用 on 开头的事件，具有唯一性，同一元素同一事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

  - 方法监听注册方式：addEventListener()，同一个元素同一个事件可以注册多个监听器，，按照注册顺序执行

    eventTarget.addEventListener(type,listener,uesCapture)

    type:事件类型字符串，比如 click、mouseover，参数为字符串记得加引号，且不要带 on

    listener:事件处理函数，事件发生时，会调用该监听函数

    useCapture:可选参数，是一个布尔值，默认为 false，用于确定监听的是捕获阶段还是冒泡阶段，默认为冒泡阶段

- 删除事件（解绑事件）

  - 传统方式：eventTarget.onclick = null;
  - 方法监听注册方式：eventTarget.removeEventListener(type,listener[,useCapture]);

- DOM 事件流

  事件流描述的是从页面中接受事件的顺序，事件发生时会在元素节点之间按照特定的顺序传播

  三个阶段：捕获阶段、当前目标阶段、冒泡阶段（更多关注，有时会带来麻烦，有时又有妙用）

  有些事件是没有冒泡的，比如：onblur、onfocus、onmousecenter、onmouseleave

- 事件对象：

  写到监听函数的小括号里面，当作形参来看；事件对象只有有了事件才会存在，是系统自动创建的，不需要传递参数；是一系列相关数据的集合；可以自己命名，常用 event、evt、e

  - 常见事件对象的常见属性和方法：
    - 2e.target：返回触发事件的对象（与 this 区别，this 是返回绑定的事件
    - e.type：返回事件的类型，比如：click、mouseover，不带 on
    - e.preventDefaut():阻止默认事件，比如：让连接不跳转，让表单不提交

- 阻止冒泡：

  - e.stopPropagation():阻止冒泡，平时主要使用
  - e.cancelBubble：非标准，为 true 时阻止冒泡

- 事件委托（代理、委派）：

  - 原理：不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，利用冒泡原理影响设置每个子节点

- 常用的鼠标事件：

  - 禁止鼠标右键菜单：contextmenu 主要控制应该何时显示上下文菜单（主要指右键），用于程序员取消默认的上下文菜单
  - 禁止鼠标选中：selectstart-开始选中事件
  - e.celentX：返回鼠标在浏览器窗口可视区域的 x 坐标
  - e.celentY：返回鼠标在浏览器窗口可视区域的 y 坐标
  - e.pageX：返回鼠标在文档页面的 x 坐标
  - e.pageY：返回鼠标在文档页面的 y 坐标
  - e.screenX：返回鼠标相对于屏幕的 x 坐标
  - e.screenY：返回鼠标相对于屏幕的 y 坐标
  - mousemove：鼠标移动事件

- 键盘事件：

  - onkeyup：按键弹起时触发

    onkeydown:按键按下时触发

    onkeypress：按键按下时触发，但是不能识别功能键，比如 ctrl、shift、左右箭头

    三个事件的执行顺序：keydown->keypress->keyup

    keydown 和 keypress 在文本框里面的特点：两个事件触发时，文字还没有落入文本框中；keyup 事件触发时，文字已经落入文本框了

  - 键盘事件对象：keyCode:返回按键的 ascll 码；keyup、keydown 不区分大小写，keypress 区分大小写

### BOM

#### BOM 概述

- 浏览器对象模型，提供独立于内容而与浏览器窗口进行交互的对象
- 顶级对象为 window，具有两重角色：
  - 是 JS 访问浏览器窗口的一个接口
  - 是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法，在调用时可以省略 window，此前学习的对话框都属于 window 对象的方法，如 alert()、prompt()等
  - 注：window 下的一个特殊属性 window.name

### window 对象常见事件

- 窗口加载事件：

  - 语法：window.onload = function(){}或者 window.addEventListener("load",function(){});
  - 当文档内容完全加载完成会触发该事件（包括图像、脚本文件、CSS 文件等）

  - 注：传统的注册事件（window.onload）方式只能写一次，如果有多个，会以最后一个为准，如果使用 addEventListener 则没有限制
  - 语法：document.addEventListener('DOMContentLoaded',function(){})
  - DOMContentLoaded 事件触发时，仅当 DOM 加载完成，不包括样式表，图片，flash；Ie9 以上支持；如果页面的图片很多从用户访问到 onload 触发可能需要较长的时间，交互效果不能实现，必然影响用户体验，此时用 DOMContentLoaded 事件比较合适

- 调整窗口大小事件：

  - 语法：window.onresize = function(){}或者 window.addEventListener("resize",function(){});
  - 调整窗口大小加载事件，当触发时就调用处理函数
  - 注：只要窗口大小发生像素变化，就会触发这个事件；经常利用这个事件完成响应式布局（window.innerWidth：获取当前屏幕宽度）

- 定时器：

  - window.setTimeout(调用函数，[延迟的毫秒数])；（window 可以省略，第二个参数默认为 2000ms）

    用于设置一个定时器，定时器到期后执行调用函数（这种需要等待时间到了之后才执行，而不是按照代码顺序执行的函数称为回调函数 callback），且只执行一次；页面中可能有很多定时器，我们经常给定时器加标识符（名字）

    window.setTimeout(timeoutID)(window 可以省略)：取消了 setTimeout()建立的定时器，参数为定时器的标识符

  - window.setInterval(回调函数，[间隔的毫秒数])；

    每隔设置的时间，就去调用一次回调函数

    window.clearInterval(intervalID);：取消了 setInterval()建立的定时器

  - this 指向问题：一般情况下，this 的最终指向的是调用它的对象

    全局作用域或者普通函数中 this 指向全局对象 window（注意定时器里面的 this 指向 window）

    方法调用中谁调用了 this 就指向谁；构造函数中 this 指向构造函数的实例（var fun = new Fun();——其中 fun 就是实例对象）

- JS 执行机制

  - JS 之前是单线程——同一时间只能做一件事，最新的标准允许创建异步的了
  - 同步：前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的
  - 异步：在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，还可以去处理其他事情。
  - 同步任务：在主线程上执行，形成一个执行栈
  - 异步任务：通过回调函数实现，放在任务队列中，一般分为三类：普通事件，如 click、resize；资源加载，如 load、error；定时器，包括 setInterval、setTimeout
  - JS 执行机制：1、先执行执行栈中的同步任务；2、异步任务（回调函数）放在任务队列中；3、一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行

- location 对象

  - window 对象提供的一个 location 属性，用于获取或设置窗体的 URL，并且可以解析 URL；此属性返回的是一个对象

  - URL：统一资源定位符，是互联网上标准资源的地址。互联网上的每个文件都有唯一的 URL，包含的信息：指出文件的位置以及浏览器应该如何处理

    语法：protoool://host[:port]/path/[?query]#fragment(具体含义可以上网查找)

  - location 对象的属性：

    location.href：获取或者设置整个 URL

    location.host：返回主机（域名）

    location.port：返回端口号，如果未写，返回空字符串

    location.pathname：返回路径

    location.search：返回参数

    location.hash：返回片段，#后面内容常见于链接锚点

  - location 对象的方法：

    location.assign()：跟 href 一样，可以跳转页面（也称为重定向页面），可以后退页面

    location.replace()：替换当前页面，因为不记录历史，所以不能后退页面

    location.reload()：重新加载页面，相当于刷新按钮 f5，如果参数为 true 强制刷新 ctrl+f5

- navigator 对象：包含有关浏览器的信息，常用的是 userAgent，此属性可以返回有客户机发送服务器的 user-agent 头部的值，用于判断用户是用那个终端打开的页面，实现跳转

- history 对象：与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的 URL

  history 对象的方法：back()：后退功能 forword()：前进功能 go(参数)：前进后退功能，参数为 1，前进一个页面，为-1，后退一个页面

#### PC 端网页特效导读

- 元素偏移量 offset 系列

  - offset：偏移量，使用 offset 相关属性可以动态的得到该元素的位置(偏移)、大小等。

    获得元素距离带有定位父元素的位置；获得元素自身的大小（宽度高度）；注意：返回的数值都不带单位

  - 元素：element.offsetTop：返回元素相对于带有定位的父元素上方的偏移

    element.offsetLeft：返回元素相对于带有定位父元素左边框的偏移

    element.offsetWidth：返回自身包括 padding、边框、内容区的宽度

    element.offsetHight：返回自身包括 padding、边框、内容区的高度

    element.offsetParent：返回作为该元素带有定位的父级元素，如果父级都没有定位，则返回 body

  - offset 与 style 区别：

    得到任意样式表中的样式值 只能得到行内样式表中的样式值

    数值没有单位 得到带有单位的字符串

    包含 padding、border、width 不包含 padding、border

    是只读属性，只能获取不能赋值 可读写属性，可以获取也可以赋

- 元素的可视区 client 系列

  - 获取元素可视区的相关信息，动态的得到元素的边框大小、元素大小

    element.clientWidth：返回自身包括 padding、内容区的宽度，不含边框，返回数值不带单位

    element.clientHeight：返回自身包括 padding、内容区的宽度，不含边框，返回数值不带单位

    element.clientTop：返回元素上边框的大小

    element.clientLeft：返回元素左边框的大小

  - 立即执行函数：不需要调用，立马能够自己执行的函数

    写法：(function() {})() 或者(function(){}());//也可以传递参数，通过后面的小括号

    立即函数的最大作用就是独立创建了一个作用域，避免了命名冲突问题

- 元素滚动 scroll 系列：

  - 动态获得元素的大小、滚动距离

    element.scrollHeight：返回自身实际的高度（**内容**超出时，是内容的大小），不含边框，返回数值不带单位

    element.scrollWidth：返回自身实际的宽度（**内容**超出时，是内容的大小），不含边框，返回数值不带单位

    element.scrollTop：返回被卷去的上侧距离，返回数值不带单位

    element.scrollLeft：返回被卷去的左侧距离，返回数值不带单位

  - onscroll 事件：滚动滚动条时会触发的事件

  - **页面**被卷去头部：通过 window.pageYOffset；卷曲左侧：window.pageXOffset

- mouseenter 和 mouseover 鼠标事件：

  - 鼠标移动到元素上时触发

    区别：mouseover 是鼠标经过自身盒子会触发，经过子盒子还会出发，而 mouseenter 只有经过自身盒子触发 （原因：mouseenter 不会冒泡

    跟 mouseenter 相对应的鼠标离开事件 mouseleave 同样不会冒泡

- 动画函数封装：

  - 原理：通过定时器 setlnterval()不断移动盒子位置

    注：元素需要加定位，才能使用 element.style.left

  - 缓动动画：步长公式：var step = （目标值-现在的位置）/10；

    ​ step > 0？Math.ceil(step):Math.floor(step)；

  - 添加回调函数：就是将一个函数 1 当作是参数传到要调用函数 1 的函数 2 中，对于动画封装函数，要在计时器结束时调用函数 1。

  - 节流阀：防止轮播图按钮连续点击造成播放过快；当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发

    思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数

### 移动端网页特效导读

- 触屏事件：

  - 概述：移动端兼容性较好，不需要考虑以前 JS 的兼容性问题

  - touch 事件：

    touchstart：手指触摸到一个 DOM 元素时触发

    touchmove：手指在一个 DOM 元素上滑动时触发

    touchend：手指从一个 DOM 元素上移开时触发

  - 触摸事件对象：

    touches：正在触摸屏幕的所有手指的列表

    targetTouches：正在触摸当前 DOM 元素的手指列表（最常用），targetTouches[0]就可以得到正在触摸 DOM 元素的第一个手指的相关信息，比如手指的坐标

    changeTouches：手指状态发生了变化的列表，从无到有或者从有到无

  - classList 属性：

    添加类：element.classList.add('类名')；

    移除类：element.classList.remove('类名')；

    element.classList.toggle('类名')；

学习资源来自哔哩哔哩上的[JavaScript 前端课程](https://www.bilibili.com/video/BV1Sy4y1C7ha/?spm_id_from=333.337.search-card.all.click&vd_source=ea56ce2bcf0af66f314617562fc74539)，并为全部看完，已看到 p345。
