# Set集合
## 特点
与数组类似，但是无索引和顺序，元素不会重复(使用全等进行判断)
Set对象是可迭代的，可以使用for/of循环枚举集合元素，可以使用拓展操作符将集合转换为数组/函数参数
Set对象的迭代顺序为插入顺序
## 创建方式
- 构造函数Set()
  - Set()构造函数的可选参数必须是一个可迭代对象
    ```
    let empty = new Set() // 创建了一个空集合
    let prices = new Set([2, 5, 4, 2]) // Set(3) {2, 5, 4}
    let chars = new Set("hello") // Set(4) {'h', 'e', 'l', 'o'}
    ```
## 集合的内建属性
- size 与数组的length一样
## 集合的内建方法
- add() 给集合添加一个元素，如果是数组/对象，则添加的元素就是数组/对象，不会有打平的效果；add方法返回的是集合，可以连续调用；
- delete() delete方法返回布尔值，若删除参数在集合中，为true，否则为false；
- clear() 清空集合
- has() 检查是否是集合中的元素，has方法的效率比较高
- forEach() 遍历 给回调函数的第一个和第二个参数都是元素本身
# Map映射
## 特点
Map对象是可迭代的，可以使用for/of循环枚举映射元素，迭代的值形式为[key, value]
Map对象的迭代顺序为插入顺序
## 创建方式
- 构造函数Map()
  - Map()构造函数的可选参数需要是一个可迭代对象，其产出值形式为数组[key, value]
    ```
    let empty = new Map()
    let prices = new Map([
      ["apple", 8],
      ["tomato", 5]
    ])
    let pricesNew = new Map(prices)
    let capacity = new Map(
      Object.entries({
        cup: 500,
        kettle: 1000
      })
    )
    ```
## 映射的内建属性
- size 与数组的length一样
## 映射的内建方法
- get() 查询某个键对应的值
- set() 添加新的键值对/修改原有的键对应的值，可以连缀
- has() 判断映射中是否有这个键
- remove() 删除映射中指定的键值对
- clear() 清除映射内容
- keys() 按照迭代顺序返回键
- values() 按照迭代顺序返回值
- entries() 按照迭代顺序返回[key, value]的数组
- forEach() 遍历 给回调函数的参数: value, key