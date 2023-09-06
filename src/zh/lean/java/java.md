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

异常的类型：
检查性异常：最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。
运行时异常： 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。
错误： 错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它们在编译也检查不到的。

Java 内置异常类包含非检查异常类和检查异常类，异常方法见[此处](https://www.runoob.com/java/java-exceptions.html)。

捕获异常：
try/catch 代码块中的代码称为保护代码，使用 try/catch 的语法如下：

```java
try
{
   // 程序代码
}catch(ExceptionName e1)
{
   //Catch 块
}
```

一个 try 代码块后面跟随多个 catch 代码块的情况就叫多重捕获。语法如下：

```java
try{
   // 程序代码
}catch(异常类型1 异常的变量名1){
  // 程序代码
}catch(异常类型2 异常的变量名2){
  // 程序代码
}catch(异常类型3 异常的变量名3){
  // 程序代码
}
```

throws/throw 关键字:
在 Java 中， throw 和 throws 关键字是用于处理异常的。
throw 关键字用于在代码中抛出异常，而 throws 关键字用于在方法声明中指定可能会抛出的异常类型。

finally 关键字
finally 关键字用来创建在 try 代码块后面执行的代码块。无论是否发生异常，finally 代码块中的代码总会被执行。

try-with-resources:
JDK7 之后，Java 新增的 try-with-resource 语法糖来打开资源，并且可以在语句执行完毕后确保每个资源都被自动关闭。

try-with-resources：
try-with-resources 语句中可以声明多个资源，方法是使用分号 ; 分隔各个资源。

声明自定义异常：
在 Java 中你可以自定义异常。编写自己的异常类时需要记住下面的几点：

- 所有异常都必须是 Throwable 的子类。
- 如果希望写一个检查性异常类，则需要继承 Exception 类。
- 如果你想写一个运行时异常类，那么需要继承 RuntimeException 类。

## 继承

概念：继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。

继承格式：

```java
class 父类 {
}

class 子类 extends 父类 {
}
```

提高代码的可维护性、简洁性、复用性。

继承关键字：
extends 关键字：在 Java 中，类的继承是单一继承，也就是说，一个子类只能拥有一个父类，所以 extends 只能继承一个类。
implements 关键字：使用 implements 关键字可以变相的使 java 具有多继承的特性，使用范围为类继承接口的情况，可以同时继承多个接口（接口跟接口之间采用逗号分隔）。

super 与 this 关键字：
super 关键字：我们可以通过 super 关键字来实现对父类成员的访问，用来引用当前对象的父类。
this 关键字：指向自己的引用。

final 关键字：
final 可以用来修饰变量（包括类属性、对象属性、局部变量和形参）、方法（包括类方法和对象方法）和类。
使用 final 关键字声明类，就是把类定义定义为最终类，不能被继承，或者用于修饰方法，该方法不能被子类重写。

构造器：
子类是不继承父类的构造器（构造方法或者构造函数）的，它只是调用（隐式或显式）。如果父类的构造器带有参数，则必须在子类的构造器中显式地通过 super 关键字调用父类的构造器并配以适当的参数列表。
如果父类构造器没有参数，则在子类的构造器中不需要使用 super 关键字调用父类构造器，系统会自动调用父类的无参构造器。

## 重写(Override)与重载(Overload)

重写(Override)：
重写是子类对父类的允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改变。即外壳不变，核心重写！

方法重写的规则：

- 参数列表与被重写方法的参数列表必须完全相同。
- 返回类型与被重写方法的返回类型可以不相同，但是必须是父类返回值的派生类（java5 及更早版本返回类型要一样，java7 及更高版本可以不同）。
- 访问权限不能比父类中被重写的方法的访问权限更低。例如：如果父类的一个方法被声明为 public，那么在子类中重写该方法就不能声明为 protected。
- 父类的成员方法只能被它的子类重写。
- 声明为 final 的方法不能被重写。
- 声明为 static 的方法不能被重写，但是能够被再次声明。
- 子类和父类在同一个包中，那么子类可以重写父类所有方法，除了声明为 private 和 final 的方法。
- 子类和父类不在同一个包中，那么子类只能够重写父类的声明为 public 和 protected 的非 final 方法。
- 重写的方法能够抛出任何非强制异常，无论被重写的方法是否抛出异常。但是，重写的方法不能抛出新的强制性异常，或者比被重写方法声明的更广泛的强制性异常，反之则可以。
- 构造方法不能被重写。
- 如果不能继承一个类，则不能重写该类的方法。

重载(Overload)：
重载(overloading) 是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同。每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。最常用的地方就是构造器的重载。

重载规则:

- 被重载的方法必须改变参数列表(参数个数或类型不一样)；
- 被重载的方法可以改变返回类型；
- 被重载的方法可以改变访问修饰符；
- 被重载的方法可以声明新的或更广的检查异常；
- 方法能够在同一个类中或者在一个子类中被重载；
- 无法以返回值类型作为重载函数的区分标准。

总结：
方法的重写(Overriding)和重载(Overloading)是 java 多态性的不同表现，重写是父类与子类之间多态性的一种表现，重载可以理解成多态的具体表现形式。

1. 方法重载是一个类中定义了多个方法名相同,而他们的参数的数量不同或数量相同而类型和次序不同,则称为方法的重载(Overloading)。
2. 方法重写是在子类存在方法与父类的方法的名字相同,而且参数的个数与类型一样,返回值也一样的方法,就称为重写(Overriding)。
3. 方法重载是一个类的多态性表现,而方法重写是子类与父类的一种多态性表现。

## 多态

多态是同一个行为具有多个不同表现形式或形态的能力。

多态的实现方法：

- 重写
- 接口
- 抽象类和抽象方法

## 抽象类

一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。

Abstract 关键字处理声明抽象类，还可以用来声明抽象方法，抽象方法只包含一个方法名，而没有方法体。抽象方法没有定义，方法名后面直接跟一个分号，而不是花括号

总结规定：

1. 抽象类不能被实例化(初学者很容易犯的错)，如果被实例化，就会报错，编译无法通过。只有抽象类的非抽象子类可以创建对象。
2. 抽象类中不一定包含抽象方法，但是有抽象方法的类必定是抽象类。
3. 抽象类中的抽象方法只是声明，不包含方法体，就是不给出方法的具体实现也就是方法的具体功能。
4. 构造方法，类方法（用 static 修饰的方法）不能声明为抽象方法。
5. 抽象类的子类必须给出抽象类中的抽象方法的具体实现，除非该子类也是抽象类。

## 封装

在面向对象程式设计方法中，封装（英语：Encapsulation）是指一种将抽象性函式接口的实现细节部分包装、隐藏起来的方法。

实现封装的步骤：

1. 修改属性的可见性来限制对属性的访问（一般限制为 private）；
2. 对每个值属性提供对外的公共方法访问，也就是创建一对赋取值方法，用于对私有属性的访问。

## 接口

接口（英文：Interface），在 JAVA 编程语言中是一个抽象类型，是抽象方法的集合，接口通常以 interface 来声明。一个类通过继承接口的方式，从而来继承接口的抽象方法。
接口无法被实例化，但是可以被实现。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类。

接口声明：

```java
[可见度] interface 接口名称 [extends 其他的接口名] {
        // 声明变量
        // 抽象方法
}
```

接口的实现:
当类实现接口的时候，类要实现接口中所有的方法。否则，类必须声明为抽象的类。类使用 implements 关键字实现接口。在类声明中，Implements 关键字放在 class 声明后面。
::: details 示例代码

```java
/* 文件名 : MammalInt.java */
public class MammalInt implements Animal{

   public void eat(){
      System.out.println("Mammal eats");
   }

   public void travel(){
      System.out.println("Mammal travels");
   }

   public int noOfLegs(){
      return 0;
   }

   public static void main(String args[]){
      MammalInt m = new MammalInt();
      m.eat();
      m.travel();
   }
}
```

:::

重写接口中声明的方法时，需要注意以下规则：

- 类在实现接口的方法时，不能抛出强制性异常，只能在接口中，或者继承接口的抽象类中抛出该强制性异常。
- 类在重写方法时要保持一致的方法名，并且应该保持相同或者相兼容的返回值类型。
- 如果实现接口的类是抽象类，那么就没必要实现该接口的方法。
  在实现接口的时候，也要注意一些规则：

- 一个类可以同时实现多个接口。
- 一个类只能继承一个类，但是能实现多个接口。
- 一个接口能继承另一个接口，这和类之间的继承比较相似。

标记接口：
标记接口是没有任何方法和属性的接口。

标记接口主要用于以下两种目的：

- 建立一个公共的父接口
- 向一个类添加数据类型

## 枚举（enum）

Java 枚举是一个特殊的类，一般表示一组常量。

枚举的使用：内部类中使用枚举、迭代枚举元素、在 switch 中使用枚举类。

values(), ordinal() 和 valueOf() 方法：
enum 定义的枚举类默认继承了 java.lang.Enum 类，并实现了 java.lang.Serializable 和 java.lang.Comparable 两个接口。
values(), ordinal() 和 valueOf() 方法位于 java.lang.Enum 类中：

- values() 返回枚举类中所有的值。
- ordinal()方法可以找到每个枚举常量的索引，就像数组索引一样。
- valueOf()方法返回指定字符串值的枚举常量。

枚举类成员：
枚举跟普通类一样可以用自己的变量、方法和构造函数，构造函数只能使用 private 访问修饰符，所以外部无法调用。枚举既可以包含具体方法，也可以包含抽象方法。 如果枚举类具有抽象方法，则枚举类的每个实例都必须实现它。

## 包(package)

一个包（package）可以定义为一组相互联系的类型（类、接口、枚举和注释），为这些类型提供访问保护和命名空间管理的功能。

一些 Java 中的包：

- java.lang——打包基础的类
- java.io——包含输入输出功能的函数

包创建：
创建包的时候，你需要为这个包取一个合适的名字。之后，如果其他的一个源文件包含了这个包提供的类、接口、枚举或者注释类型的时候，都必须将这个包的声明放在这个源文件的开头。
包声明应该在源文件的第一行，每个源文件只能有一个包声明，这个文件中的每个类型都应用于它。如果一个源文件中没有使用包声明，那么其中的类，函数，枚举，注释等将被放在一个无名的包（unnamed package）中。

import 关键字：
在 Java 中，import 关键字用于导入其他类或包中定义的类型，以便在当前源文件中使用这些类型

```java
import package1[.package2…].(classname|*);
```

::: info 注意
类文件中可以包含任意数量的 import 声明。import 声明必须在包声明之后，类声明之前。
:::

## 结束

至此，菜鸟教程上的关于 Java 的基础部分的学习就结束了，学习时，本人只是采取浏览、理解，部分时候辅以代码来验证学习，学习深度并不高。本人也是处于 Java 的初学者，写本文也只是相当于做做笔记，增强学习效果，并方便日后可能的使用。如果发现本文存在的问题，欢迎交流学习 😘。
