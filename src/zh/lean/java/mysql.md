---
cover: "https://cdn.pixabay.com/photo/2023/09/17/11/08/dahlias-8258327_1280.jpg"
icon: hippo
date: 2023-10-10
category:
  - Java 后端开发
tag:
  - MySQL
  - Java Web
star: true
sticky: true
---

# MySQL 数据库

本文目前记录的是 MySQL 的基础知识，学习资源主要来自 [MySQL 官方文档](https://dev.mysql.com/doc/refman/8.0/en/preface.html)的第 3 章和第 13 章，学习指导来自[一篇知乎文章](https://zhuanlan.zhihu.com/p/108421544)，安装使用 MySQL 的教程在[此处](https://blog.csdn.net/m0_52559040/article/details/121843945)。

<!-- more -->

## 第 3 章 教程

本章介绍如何设置和使用数据库。
要查看 MySQL 提供的选项列表，使用--help 选项调用：`mysql --help`。、

### 连接和断开与服务器的连接

连接方法：

```bash
mysql -h host -u user -p
Enter password: ********
```

提供主机名和想要连接的账户。连接本地时可以不提供主机名，甚至可以不带任何参数的匿名登录：`$> mysql`。

成功登录后会看到一些提示信息，与下面类似：

```bash
$> mysql -h host -u user -p
Enter password: ********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 25338 to server version: 8.0.34-standard

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

mysql>
```

断开连接：键入 QUIT 或者 q 或者 exit 来断开连接。

```bash
mysql> QUIT
Bye
```

### 输入查询

本节介绍输入查询的原则。
实例：

```bash
mysql> SELECT VERSION(), CURRENT_DATE;
+-----------+--------------+
| VERSION() | CURRENT_DATE |
+-----------+--------------+
| 5.8.0-m17 | 2015-12-21   |
+-----------+--------------+
1 row in set (0.02 sec)
mysql>
```

结论：

- SQL 语句加上一个分号来表示结束，并且，当一个查询语句较长时，一般会分开写成多行，因为直到读取到分号查询才会开始。
- 以表格形式显示查询结果，列名一般与数据库中表的列名相同，当查询的是表达式而非列名时，使用表达式本身作为列名。
- MySQL 返回查询的数据量和花费的查询时间。

MySQL 中关键字不区分大小写，意味着 CURRENT_DATE、current_date 和 current_DATE 代表同一个关键字。

MySQL 查询还可以做简单的计算器使用：

```bash
mysql> SELECT SIN(PI()/4), (4+1)*5;
+------------------+---------+
| SIN(PI()/4)      | (4+1)*5 |
+------------------+---------+
| 0.70710678118655 |      25 |
+------------------+---------+
1 row in set (0.02 sec)
```

当要想取消掉之前的查询输入，可以使用：\c

```bash
mysql> SELECT
    -> USER()
    -> \c
mysql>
```

下面给出提示符的含义：

```bash
mysql>	准备进行新查询
->	等待下一行多行查询
'>	等待下一行，等待的字符串以单引号开头
">	等待下一行，等待的字符串以双引号开头
`>	等待下一行，等待一个标识符并以反引号开头
/*>	等待下一行，等待以/*开头的注释
```

::: info 提示
当出现'>、">、`>时，表明上一句输入未完成，可以输入 '\c 来取消，另外两个类似。
:::

### 创建使用数据库

介绍数据库、表的创建和使用。

show 语句查看数据库：`show databases;`，此指令不会显示用户没有权限的数据库

使用数据库：`use databaseName`，不使用分号，指令必须在同一行上给出。

如果你想要获得数据库 menagerie 的权限，需要管理员设置数据库的权限：

```SQL
 GRANT ALL ON menagerie.* TO 'your_mysql_name'@'your_client_host';
# 后面两个参数分别是用户名和用户主机
```

1、创建和选择数据库：
创建数据库语句：`CREATE DATABASE menagerie;`，需要注意的是，在 Unix 下，是区分大小写的，但是在 Windows 下是不区分的，所以，坚持使用相同的大小写是比较好的。

选择数据库的方法在上面已经说明了，就不再赘述。
使用：`select database()`来查看处于哪一个数据库。

2、创建表：
显示数据库中的表：`show tables;`。

使用`create table`来创建表，下面是一个实例：

```sql
CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20),species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);
```

varchar 的范围是 1 到 65535，并且可以使用 alter table 来改变。
建议：存储在表中的数据最好是固定值，不然会对维护带来麻烦。

查看表结构使用语句：`describe table;`。

3、将数据加载到表中：
方法一：load data
对于空表，创建一个文本文件，每一行为一条记录，以换行符结尾，每个值用制表符分隔，并且按照创建表时列的顺序来排列，对于缺失内容，使用`\N`来表示。（当然，分隔符和结尾符都可以自定义）
实例：

```sql
LOAD DATA LOCAL INFILE '/pet.txt' INTO TABLE pet;
```

如果使用的是 Windows 上以`\r\n`作为行终止符的编辑器创建的文件，应该使用下面的语句：

```sql
LOAD DATA LOCAL INFILE '/pet.txt' INTO TABLE pet LINES TERMINATED BY '\r\n';
```

当想要插入单行或多行数据时，使用 insert 语句，实例：

```sql
INSERT INTO pet
       VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);
    --    若想要插入多行，可以使用多个连着的values，或者一个values加多行数据值，每行用逗号隔开。
```

4、从表中检索数据
select 语句一般形式：

```sql
SELECT what_to_select
FROM which_table
WHERE conditions_to_satisfy;
```

::: info 注意
由于时间问题，加上 SQL 相关知识已经学习过了，就不再一一罗列知识点，只记录一些较为陌生的地方。
:::

1、在对筛选结果进行排列时，比较大小的方法是不区分大小写的，所以可能会产生未知顺序，可以使用关键字`BINARY`，来强制区分大小写，`ORDER BY BINARY col_name`。

2、表达式：`TIMESTAMPDIFF(unit,datetime_expr1,datetime_expr2)`，unit 表示时间类型，比如 YEAR，MONTH，MINUTE，返回第二个时间减去第一个时间的差值。

https://dev.mysql.com/doc/refman/8.0/en/multiple-tables.html

3、查看所在的数据库：`select database()`，查看表结构：`describe table_name`，可以简写为 desc。

4、使用`show create table_name`现实创建该表时使用的创建语句。

5、使用 MySQL 进行批处理操作的详细内容请看[此处](https://dev.mysql.com/doc/refman/8.0/en/batch-mode.html)。

## 说明

由于官方文档上面关于 SQL 语句的内容实在太多，且 SQL 我也有了一定的基础，所以并不打算花费太多时间，于是重新找了一篇[文章](https://file.mo7.cc/api/public/bz)来学习（用于复习其实更加舒服）。

这样 MySQL 就简单的告一段落:cry:。
