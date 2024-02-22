---
cover: "https://cdn.pixabay.com/photo/2023/09/17/11/08/dahlias-8258327_1280.jpg"
icon: dog
date: 2023-11-26
category:
  - Java 后端开发
tag:
  - Spring Boot
star: true
sticky: true
---

# Spring Boot

B 站上跟着[黑马](https://www.bilibili.com/video/BV1Lq4y1J77x/?spm_id_from=333.155.header_right.fav_list.click&vd_source=ea56ce2bcf0af66f314617562fc74539)学习的 spring boot。

### Spring Boot 概述

提供一种快速使用 spring 的方法，基于约定优于配置的思想（对 spring 进行封装，相当于 spring 的脚手架）

1. spring 的缺点：配置繁琐、依赖繁琐。

2. spring boot 的功能：
   - 自动配置：运行时才决定 spring 应该用什么，自动完成。
   - 起步依赖：本质上是一个 maven 项目对象模型（ProjectObjectModel，POM），定义了对其他库的传递依赖，这些东西加在一起即支持某项功能。（将具备某种功能的坐标打包在一起，并提供一些默认的功能）
   - 辅助功能：提供一些大型项目中常见的非功能性的特性，如嵌入式服务器、安全、指标，健康检测，外部配置等。
3. springboot 并不是对 spring 功能上的增强，而是提供一种快速使用 spring 的方法

### spring boot 的快速入门

简单的构建了一个 spring boot 的小项目，发现自己属于纯纯的小白，不过最后还是跑起来了。

小结：

1. spring boot 在创建项目时，使用 jar 的打包方式。
2. spring boot 的引导类，是项目的入口，运行 main 方法就可以启动项目。
3. 使用 spring boot 和 spring 构建的项目，业务代码编写方式完全一样。

### 快速构建 spring boot 工程

使用 spring 提供的快速构建工程的方法——spring initializr，可以快速的添加依赖，构建 spring boot 项目。

### spring boot 起步依赖的原理分析

spring-boot-starter-parent：版本锁定

spring-boot-starter-web：依赖传递

小结：

1. 在 spring-boot-starter-parent 中定义了各种技术的版本信息，组合了一套最优搭配的技术版本
2. 在各种 starter 中，定义了完成该功能需要的坐标合集，其中大部分版本信息来自于父工程。
3. 自己的工程在继承 parent，引入 starter 之后，通过依赖传递，就可以简单方便地得到需要的 jar 包，并且不会版本冲突等问题。

### spring boot 配置

#### 配置文件分类

spring boot 是基于约定的，所以很多配置都是默认值，但是如果想要使用自己的配置替换默认值，就可以使用 application.properties 或者 application.yml(application.yaml)进行配置。（注意：名字要求就是这样，不能改变）

1. properties：

   键值对的方式：`server.port=8080`

   除了对程序默认识别的属性进行配置，还可以自定义属性配置。

2. yml/yaml：

   ```yaml
   server:
     port: 8080#中间有空格
   ```

注意：当在同一级目录下，三种配置文件都存在的话，对于同一属性的配置，读取优先级为 properties>yml>yaml

小结：

1. spring boot 提供了两种配置文件类型：properties 和 yml/yaml
2. 默认配置文件名为：application.properties
3. 同一级目录下，优先级顺序为：properties>yml>yaml

#### yaml 基本语法

YAML Ain`t Markup Language。YAML 是一种直观的能够被电脑识别的数据序列化格式，并且容易被人阅读，容易和脚本语言交互，可以被支持 YAML 库的不同编程语言程序导入，比如 C/C++,python,Java,Perl,C#,PHP 等。yml 文件是以数据为核心，比传统的 xml 文件更加的简洁。

文件扩展名可以使用.yml 或.yaml。

1. 比较：

   - properties:

     ```properties
     server.port=8080
     server.address=127.0.0.1
     ```

   - xml:

     ```xml
     <server>
     	<port>8080</port>
         <address>127.0.0.1</address>
     </server>
     ```

   - yml:

     ```yaml
     server:
     	port: 8080
     	address: 127.0.0.1
     	#注意空格
     	#简介，以数据为核心
     ```

2. 基本语法

   - 大小写敏感
   - 字符值前面必须有空格，作为分隔符
   - 使用缩进表示层级关系
   - 缩进的空格数目不重要，只要相同层级的元素左侧对齐就行
   - `#` 表示注释，该字符后面的一行数据都会被解释器忽略

3. 数据格式

   - 对象（map）：键值对的集合。

     ```yaml
     person:
     	name: wsh
     #行内写法，了解即可
     person: {name: wsh}
     ```

   - 数组：一组按次序排列的值

     ```yaml
     address:
     	- beijing
     	- shanghai
     #行内写法
     address: [beijing,shanghai]
     ```

   - 纯量：单个的、不可再分的值

     ```yaml
     #比较特殊的纯量
     msg1: 'hello \n world' #单引号忽略转义字符
     msg2: "hello \n world" #双引号识别转义字符
     ```

4. 参数引用

   ```yaml
   name: lili

   person:
   	name: ${name} #引用上面定义的name值
   ```

#### 读取配置文件内容

三种方法：

1. @Value

   ```java
   @Value("${配置文件中的变量表达如：name、person.age、address[0]}")
   private String/int 变量名；

   ```

2. Environment

   ```java
   @Autowired
   private Environment env;

   # 使用时
   env.getProperty("配置文件中的变量表达如：name、person.age、address[0]")

   ```

3. @ConfigurationProperties

   对象与配置属性的绑定，使用@ConfigurationProperties 注解（使用的是 framework 下的），并使用 prefix 进行指定，对象里定义的变量名需要与配置属性的名称相对应，记得还要在自定义的 JavaBean 上加上@Component 注解让其被 spring boot 所识别

#### profile

完成不同环境下的动态配置切换。

1. profile 配置方式

   - 多 profile 文件方式：行业一般规范为，分别配置 application-dev. properties、application-test. properties、application-pro. properties，他们分别代表开发、测试、生产环境的配置，在 application. properties 中进行控制切换使用：`spring.profiles.active=dev/test/pro`。
   - yml 多文档方式：在 application.yml 文件中，使用分隔符来划分出多个文档，分别配置：

   ```yaml
   --- # 分隔符
   server:
   	port: 8081

   spring:
   	profiles: dev
   ---
   server:
   	port: 8082

   spring:
   	profiles: test
   ---
   server:
   	port: 8083

   spring:
   	profiles: pro
   ---
   spring:
   	profiles:
   		active: dev/test/pro


   ```

2. profile 激活方式

   - 在配置文件中激活，上面已经提及了
   - 虚拟机参数：在 ide 中的 MV option 中指定 `-Dspring.profiles.active=dev` 完成配置。
   - 命令行参数：`--spring.profiles.active=pro` ，可以在 ide 中配置，也可以将项目打包成一个 jar 包之后，在 Windows PowerShell 中运行：`java -jar .\xxxxxxxx.jar --spring.profiles.active=test`

#### 内部配置加载顺序

spring boot 程序启动时，会从以下位置加载配置文件：

1. file:./config/ 当前项目下的/config 目录下
2. file:./ 当前项目的根目录
3. classpath:/config/ classpath 的/config 目录
4. classpath:/ classpath 的根目录（平时使用的是这个，resources 目录在打包之后就变成了 classpath 目录）

加载顺序为上文的排列顺序，高优先级配置的属性会生效

#### 外部配置加载顺序

通过[官网](https://docs.spring.io/spring-boot/docs/2.1.8.RELEASE/reference/html/boot-features-external-config.html)查看。

### spring boot 整合其他框架

- springboot 整合 Junit
- springboot 整合 Redis
- springboot 整合 mybatis

### Spring Boot 高级

#### spring boot 原理分析

##### 自动配置

1. condition

   condition 是在 spring4.0 增加的条件判断功能，通过这个功能可以实现选择性的创建 bean 操作。

   - 自定义条件：

     自定义类实现 condition 接口，重写 matches 方法，在 matches 方法中 进行逻辑判断，返回 Boolean 值。matches 方法的两个参数：

     - context：上下文对象，可以获取属性值，获取类加载器，获取 BeanFactory(IOC）等;

     - metadata：元数据对象，用于获取注解属性。

     - 判断条件：在初始化 bean 时，使用`@Conditional(条件类.class)`注解。

     判断条件：在初始化 bean 时，使用@Conditional(条件类.class)注解。

   - springboot 提供的常用条件注解：

     - `ConditionalOnProperty`：判断配置文件中是否有对应属性和值才初始化 bean；
     - `ConditionalOnClass`：判断环境中是否有对应字节码文件才初始化 bean；
     - `ConditionalOnMissingBean`：判断环境中没有对应的 bean 才初始化 bean。

2. 切换内置 web 服务器

   spring boot 在 web 环境中默认使用 tomcat 作为内置服务器，其实 spring boot 提供了 4 种内置服务器可以选择，可以进行方便的切换。

   切换时，在配置文件中，先排除掉 stater-web 内置的 tomcat，然后再引入想要使用的 web 服务器。

3. @Enable\*注解

   spring boot 中提供了很多 Enable 开头的注解，这些注解都是用于动态启用某些功能的，而其底层原理是使用@Import 注解导入一些配置类，实现 bean 的动态加载。

   注：springboot 工程不能直接获取 jar 包中定义的 bean。（原因是@ComponentScan 的扫描范围是引导类所在的包及其子包。）

4. @Import 注解

   @Enable\*底层依赖与于@Import 注解导入一些类，使用@Import 导入的类会被 spring 加载到 IOC 容器中。@Import 提供了 4 种用法。

   - 导入 bean
   - 导入配置类（配置类中全部的 bean）
   - 导入 ImportSelector 实现类。一般用于加载配置文件中的类
   - 导入 ImportBeanDefinitionRegistrar 实现类

5. @EnableAutoConfiguration 注解

   - @EnableAutoConfiguration 注解内部使用@Import(AutoConfigurationImportSelector.class)来加载配置类；
   - 配置文件位置：META-INF/spring.factories，该配置文件中定义了大量的配置类，当 spring boot 启动时，会自动加载这些配置类，初始化 bean；
   - 并不是所有的 bean 都会被初始化，在配置类中使用 Condition 来加载满足条件的 bean。

##### 监听机制

###### Java 监听机制

spring boot 的监听机制，实际上是对 Java 提供的监听机制的封装。

Java 的事件监听机制定义了以下几个角色：

- 事件：Event，继承 java.util.EventObject 类的对象
- 事件源：Source，任意对象 Object
- 监听器：Listener，实现 java.util.EventListener 接口的对象

###### spring boot 监听机制

spring boot 项目在启动时，会对几个监听器进行回调，我们可以实现这些监听器接口，在项目启动时完成一些操作。（springboot 已经为我们注册配置好了，我们只需要实现其中所提供方法的业务逻辑）

常用：ApplicationContextInitializer、SpringApplicationRunListener、CommandLineRunner、ApplicatrionRunner

##### 启动流程分析

![启动流程分析](B:\自学\springboot\springboot启动流程分析.png)

#### spring boot 监控

##### 监控概述

spring boot 自带监控功能 Actuator，可以帮助实现对程序内部运行情况监控，比如监控状况、bean 加载情况、配置属性、日志信息等。

使用步骤：

① 导入依赖坐标

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artfactId>spring-boot-starter-actuator</artfactId>
</dependency>
```

② 访问`http://localhost:8080/acruator`

注：1. 开启健康检查的完整信息：`management.endpoint.health.show-details=always`，默认情况下是关闭的，开启后可以用于检查项目错误的来源，在正式发布前建议关闭，防止信息泄漏。

2. 默认监控两个 endpoint，想要查看全部 endpoint 要进行配置：`management.endpoints.web.exposure.include=*`

##### Spring Boot Admin

- Spring Boot Admin 是一个开源社区项目，用于管理和监控 spring boot 应用程序；
- Spring Boot Admin 有两个角色，客户端（Client）和服务端（Server）；
- 应用程序作为 Spring Boot AdminClient 向 Spring Boot Admin Server 注册；
- Spring Boot Admin Server 的 UI 界面将展示 Spring Boot Admin Client 的 Actuator Endpoint 上的一些监控信息。

使用步骤：

admin-server：

1. 创建 admin-server 模块
2. 导入依赖坐标 admin-starter-server
3. 在引导类上启用监控功能@EnableAdminServer

admin-client：

1. 创建 admin-client 模块；
2. 导入依赖坐标 admin-starter-client
3. 配置相关信息：server 地址等
4. 启动 server 和 client 服务，访问 server

注：其实在 ieda 的 Endpoints 中就可以查看一些监控信息。

#### spring boot 部署

spring boot 项目开发完毕后，支持两种方式部署到服务器：

- jar 包（官方推荐，使用内置的 tomcat，完成打包之后，放到服务器上，使用服务器 jdk 直接运行就 ok 了）

- war 包（需要在 pom.xml 文件中指定打包方式，并对启动类继承一个类和重写一个方法，具体的可看[视频](https://www.bilibili.com/video/BV1Lq4y1J77x/?p=34&spm_id_from=pageDriver&vd_source=ea56ce2bcf0af66f314617562fc74539)，最后放到外部的 tomcat 上使用）
