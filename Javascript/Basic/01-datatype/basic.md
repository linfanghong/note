# 数据类型 7+2
## 基本数据类型 7
- string
- number
  - number 数据类型包含整数、浮点数、NaN、Infinity
    - 代码演示
      ```
      // NaN 为一个不确定量，所以一般不使用NaN来进行判断
      NaN == NaN => false
      ```
      ```
      // 全局函数isNaN( [value] ) / Number静态方法 NumberisNaN( [value] ) 用于判断value是否为数字
      isNaN( NaN ) => true
      Number.isNaN( "hello" ) => false
      ```
      ```
      // 面试题示例
      let res = parseFloat("left: 200px;")
      if(res === 200){
        console.log(200)
      }else if(res === NaN){
        console.log(NaN)
      }else if(typeof res === "number"){
        console.log("number")
      }else{
        console.log("not a number")
      }
      // => "number"
      ```
  - 把其他数据类型转换为number数据类型的方法
    - 强转换(基于底层机制转换) Number([value])
      - 隐式转换
        - isNaN("12px")
        - "12px" == 12
        - "13" - 12
      - 转换特点
        - true 1 false 0
        - null 0 undefined NaN
        - 字符串必须保证都是有效数字
        - 空字符串 0
    - 弱转换 parseInt([value]) / parseFloat([value])
      - parseInt/parseFloat 用于字符串转换为数字，从字符串左侧开始查找有效数字字符(遇到非有效数字字符，停止查找)，若处理值不是字符串，则先转换为字符串。
    ```
    // 面试题示例

    parseInt("") => NaN
    Number("") => 0
    isNaN("") => isNaN(0) => false

    parseInt(null) => 先转换为字符串parseInt('null') => NaN
    Number(null) => 0
    isNaN(null) => isNaN(0) => false

    parseInt("12px") => 12
    Number("12px") => NaN
    isNaN("12px") => isNaN(NaN) => true

    parseFloat("1.6px") + parseInt("1.2px") + typeof parseInt(null) =>1.6 + 1 +typeof NaN => 2.6 + 'number' => '2.6number'

    isNaN(Number(!!Number(parseInt("0.8")))) => isNaN(Number(false)) => false

    typeof !parseInt(null) + !isNaN(null) => 'boolean' + true => 'booleantrue'
    ```
    ```
    let result = 10 + false + undefined + [] + 'Tencent' + null + true + {}
    console.log(result)
    // => "NaNTencentnulltrue[object Object]"
    ```
- boolean
- null
- undefined
- symbol
- bigInt
## 引用数据类型 2
- object
- function

# 数据类型检测
## typeof 检测数据类型的逻辑运算符
## instanceof 检测是否为某个类的实例
## constructor 检测构造函数
## Object.prototype.toString.call 检测数据类型
## Array.isArray() 检测是否为数组对象

- typeof [value] 返回当前值的数据类型
  - 返回的结果是字符串
  - 局限性
    - typeof null => "object"
    - typeof 不能细分对象数据类型