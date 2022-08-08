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