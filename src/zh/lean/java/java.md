---
cover: "https://cdn.pixabay.com/photo/2020/05/25/13/41/chalet-5218666_1280.png"
icon: otter
date: 2023-09-04
category:
  - Java
tag:
  - Java基础
star: true
sticky: true
---

# Java

在学习菜鸟教程上 [Java](https://www.runoob.com/java/java-tutorial.html) 相关知识的一些笔记。

<!-- more -->

## 简介

Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言。
Java 可运行于多个平台，如 Windows, Mac OS 及其他多种 UNIX 版本的系统。
::: details 第一个 Java 程序

```java
// 文件名必须与类名一致——HelloWorld
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

:::
若上述代码要在命令行运行，需要先后输入：

```bash
javac HelloWorld.java
java HelloWorld
```

<strong>解释：</strong>
javac 后面跟着的是 java 文件的文件名，例如 HelloWorld.java。 该命令用于将 java 源文件编译为 class 字节码文件，如： javac HelloWorld.java。
运行 javac 命令后，如果成功编译没有错误的话，会出现一个 HelloWorld.class 的文件。
java 后面跟着的是 java 文件中的类名,例如 HelloWorld 就是类名，如: java HelloWorld。

## 基础语法

概念:

- 对象：对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
- 类：类是一个模板，它描述一类对象的行为和状态。
- 方法：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。
- 实例变量：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。

基本语法：

- 大小写敏感：Java 是大小写敏感的，这就意味着标识符 Hello 与 hello 是不同的。
- 类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 MyFirstJavaClass 。
- 方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。
- 源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为 .java。（如果文件名和类名不相同则会导致编译错误）。
- 主方法入口：所有的 Java 程序由 public static void main(String[] args) 方法开始执行。

## 对象和类

概念已经在上面说过了。

类：
::: details 创建一个简单的类

```java
public class Dog {
    String breed;
    int size;
    String colour;
    int age;

    void eat() {
    }

    void run() {
    }

    void sleep(){
    }

    void name(){
    }
}
```

:::
可以包含以下变量：

- 局部变量：在方法、构造方法或者语句块中定义的变量被称为局部变量。变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁。
- 成员变量：成员变量是定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中方法、构造方法和特定类的语句块访问。
- 类变量：类变量也声明在类中，方法体之外，但必须声明为 static 类型。

方法：
每个类都有构造方法。如果没有显式地为类定义构造方法，Java 编译器将会为该类提供一个默认构造方法。在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。

对象：
对象是根据类创建的。在 Java 中，使用关键字 new 来创建一个新的对象。创建对象需要以下三步：

- 声明：声明一个对象，包括对象名称和对象类型。
- 实例化：使用关键字 new 来创建一个对象。
- 初始化：使用 new 创建对象时，会调用构造方法初始化对象。

包：
主要用来对类和接口进行分类。使用 import 语句来引入类。

## 基本数据类型

Java 的两大数据类型：内置数据类型和引用数据类型。
内置数据类型：byte、short、int、long、float、double、boolean、char、
引用数据类型：引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型。变量一旦声明后，类型就不能被改变了。

::: info 小知识
前缀 0b 代表 2 进制，前缀 0 表示 8 进制，前缀 0x 代表 16 进制。
:::

## 变量类型

- 局部变量（Local Variables）：定义在方法、构造方法或语句块中的变量，作用域只限于当前方法、构造方法或语句块中。局部变量必须在使用前声明，并且不能被访问修饰符修饰。
- 成员变量（Instance Variables）：定义在类中、方法之外的变量，作用域为整个类，可以被类中的任何方法、构造方法和语句块访问。成员变量可以被访问修饰符修饰。
- 静态变量（Class Variables）：定义在类中、方法之外的变量，并且使用 static 关键字修饰，作用域为整个类，可以被类中的任何方法、构造方法和语句块访问，静态变量的值在程序运行期间只有一个副本。静态变量可以被访问修饰符修饰。
- 参数变量（Parameters）：方法定义时声明的变量，作为调用该方法时传递给方法的值。参数变量的作用域只限于方法内部。

## 修饰符

主要分为访问修饰符和非访问修饰符。
访问控制修饰符：

- default （即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。
- private : 在同一类内可见。使用对象：变量、方法。 注意：不能修饰类（外部类）
- public : 对所有类可见。使用对象：类、接口、变量、方法
- protected : 对同一包内的类和所有子类可见。使用对象：变量、方法。 注意：不能修饰类（外部类）。

非访问修饰符：

- static 修饰符，用来修饰类方法和类变量。
- final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
- abstract 修饰符，用来创建抽象类和抽象方法。
- synchronized 和 volatile 修饰符，主要用于线程的编程。

## 运算符

- 算术运算符
- 关系运算符
- 位运算符
  - ＆ 如果相对应位都是 1，则结果为 1，否则为 0
  - | 如果相对应位都是 0，则结果为 0，否则为 1
  - ^ 如果相对应位值相同，则结果为 0，否则为 1
  - 〜 按位取反运算符翻转操作数的每一位，即 0 变成 1，1 变成 0
  - << 按位左移运算符。左操作数按位左移右操作数指定的位数
  - \> \> 按位右移运算符。左操作数按位右移右操作数指定的位数
  - \> \> \> 按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充
- 逻辑运算符
- 赋值运算符
- 其他运算符——三元运算符

```java
variable x = (expression) ? value if true : value if false
```

- instanceof 运算符——检查对象实例是否是一个特定类型（类类型或接口类型）

```java
( Object reference variable ) instanceof  (class/interface type)
```

::: info 注意
此处仅仅列出与之前所学的其他语言就较大不同之处的地方。
:::

## 循环结构

均与 C 语言相同

- while
- do...while
- for
- for 增强：`for(声明语句 : 表达式)
{
   //代码句子
}`

## 条件语句

与 C 语言完全相同

## switch case 语句

与 C 语言完全相同

## Number & Math 类

在实际开发过程中，我们经常会遇到需要使用对象，而不是内置数据类型的情形。为了解决这个问题，Java 语言为每一个内置数据类型提供了对应的包装类。所有的包装类（Integer、Long、Byte、Double、Float、Short）都是抽象类 Number 的子类。
Java 的 Math 包含了用于执行基本数学运算的属性和方法，如初等指数、对数、平方根和三角函数。
其中涉及到的方法详见[此处](https://www.runoob.com/java/java-number.html)

## Character 类

Character 类用于对单个字符进行操作。Character 类在对象中包装一个基本类型 char 的值。
其中涉及到的方法详见[此处](https://www.runoob.com/java/java-character.html)

## String 类

在 Java 中字符串属于对象，Java 提供了 String 类来创建和操作字符串。
String 创建的字符串存储在公共池中，而 new 创建的字符串对象在堆上。
string 类是不可改变的。
其中涉及到的方法详见[此处](https://www.runoob.com/java/java-string.html)

## StringBuffer 和 StringBuilder 类

当对字符串进行修改的时候，需要使用 StringBuffer 和 StringBuilder 类。
StringBuilder 类在 Java 5 中被提出，它和 StringBuffer 之间的最大不同在于 StringBuilder 的方法不是线程安全的（不能同步访问）。并且 StringBuilder 类具有速度优势。
其中涉及到的方法详见[此处](https://www.runoob.com/java/java-stringbuffer.html)

## 数组

声明数组变量：

```java
double[] myList;         // 首选的方法
或
double myList[];         //  效果相同，但不是首选方法
```

创建数组：

```java
arrayRefVar = new dataType[arraySize];
```

声明和创建数组可以一起完成：

```java
dataType[] arrayRefVar = new dataType[arraySize];
或
dataType[] arrayRefVar = {value0, value1, ..., valuek};
```

处理数组：
使用基本循环或者 For-Each 循环——也就是增强 for 循环（`for(type element: array){//函数体}`）

涉及到的处理 Arrays 类的方法详见[此处](https://www.runoob.com/java/java-array.html)

## 日期时间

1. java.util 包提供了 Date 类来封装当前的日期和时间。 Date 类提供两个构造函数来实例化 Date 对象。
   第一个构造函数使用当前日期和时间来初始化对象。

```java
Date( )
```

第二个构造函数接收一个参数，该参数是从 1970 年 1 月 1 日起的毫秒数。

```java
Date(long millisec)
```

具体的操作有获取当前日期、日期比较、格式化日期、解析字符串为时间、休眠（sleep）等。

2. Calendar 类
   Calendar 类的功能要比 Date 类强大很多，而且在实现方式上也比 Date 类要复杂一些。Calendar 类是一个抽象类，在实际使用时实现特定的子类的对象，创建对象的过程对程序员来说是透明的，只需要使用 getInstance 方法创建即可。

这两种日期时间处理类的具体方法详见[此处](https://www.runoob.com/java/java-date-time.html)

## 正则表达式

java.util.regex 包主要包括以下三个类：
Pattern 类：
pattern 对象是一个正则表达式的编译表示。Pattern 类没有公共构造方法。要创建一个 Pattern 对象，你必须首先调用其公共静态编译方法，它返回一个 Pattern 对象。该方法接受一个正则表达式作为它的第一个参数。

Matcher 类：
Matcher 对象是对输入字符串进行解释和匹配操作的引擎。与 Pattern 类一样，Matcher 也没有公共构造方法。你需要调用 Pattern 对象的 matcher 方法来获得一个 Matcher 对象。

PatternSyntaxException：
PatternSyntaxException 是一个非强制异常类，它表示一个正则表达式模式中的语法错误。

其中涉及到的正则表达式处理方法详见[此处](https://www.runoob.com/java/java-regular-expressions.html)

## 方法

感觉就是函数的意思。

- 方法是解决一类问题的步骤的有序组合
- 方法包含于类或对象中
- 方法在程序中被创建，在其他地方被引用

知识点有方法调用、viod 关键字、传参、方法重载、变量作用域、命令行参数的使用、构造方法、可变参数和 finalize() 方法。

## 流(Stream)、文件(File)和 IO

控制台输入（system. in），控制台输出（system.out）

- 读取字符——read()
- 读取字符串——readLine()
- 输出——write()、print()、println()

读写文件：FileInputStream 和 FileOutputStream
:::details 一个示例代码

```java
//文件名 :fileStreamTest2.java
import java.io.*;

public class fileStreamTest2 {
    public static void main(String[] args) throws IOException {

        File f = new File("a.txt");
        FileOutputStream fop = new FileOutputStream(f);
        // 构建FileOutputStream对象,文件不存在会自动新建

        OutputStreamWriter writer = new OutputStreamWriter(fop, "UTF-8");
        // 构建OutputStreamWriter对象,参数可以指定编码,默认为操作系统默认编码,windows上是gbk

        writer.append("中文输入");
        // 写入到缓冲区

        writer.append("\r\n");
        // 换行

        writer.append("English");
        // 刷新缓存冲,写入到文件,如果下面已经没有写入的内容了,直接close也会写入

        writer.close();
        // 关闭写入流,同时会把缓冲区内容写入文件,所以上面的注释掉

        fop.close();
        // 关闭输出流,释放系统资源

        FileInputStream fip = new FileInputStream(f);
        // 构建FileInputStream对象

        InputStreamReader reader = new InputStreamReader(fip, "UTF-8");
        // 构建InputStreamReader对象,编码与写入相同

        StringBuffer sb = new StringBuffer();
        while (reader.ready()) {
            sb.append((char) reader.read());
            // 转成char加到StringBuffer对象中
        }
        System.out.println(sb.toString());
        reader.close();
        // 关闭读取流

        fip.close();
        // 关闭输入流,释放系统资源

    }
}
```

:::

还有一些关于文件和 I/O 的类，也需要知道：
File Class(类)
FileReader Class(类)
FileWriter Class(类)

目录操作包括：创建目录、读取目录、删除目录或文件。

## Scanner 类

java.util.Scanner 是 Java5 的新特征，我们可以通过 Scanner 类来获取用户的输入。
包含主要方法有 next()、nextLine()、hasNext()、hasNextLine()、nextXxx()、hasNextXxx()
其中 Xxx 是某种数据类型，用来输入特定的数据类型。

## 异常处理
