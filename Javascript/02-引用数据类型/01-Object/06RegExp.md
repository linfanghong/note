# 正则表达式
## 什么是正则表达式
- 正则表达式是一个描述文本模式的对象
- 正则表达式主要用于文本模式匹配
## 正则表达式的创建方式
### 字面量方式
```
let pattern = /str/g;
console.log(pattern instanceof RegExp);

// true
```
### 构造函数的方式
```
let pattern = RegExp('str', 'g')
console.log(pattern instanceof RegExp);

// true
```1
