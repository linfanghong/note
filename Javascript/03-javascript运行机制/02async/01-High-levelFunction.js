// 高阶函数的应用
//  可以通过包装一个函数，在不影响现有逻辑上进行拓展

/*
function core(a, b, c) {
  console.log("核心代码")
  console.log(a, b, c)
}

// 为了不破坏core的结构，但是执行core之前，先进行一些操作
core.before = function(cb) { // 函数参数为函数，所以core.before是一个高阶函数
  return (...args) => {
    cb()
    this(...args)
  }
}

const newCore = core.before(function() {
  console.log("before")
})

newCore(1, 2, 3)
*/

// 高阶函数的应用
//  对函数的参数进行预置

//  将函数的参数进行保留(闭包)
//  闭包就是函数定义的参数的作用域和执行作用域不是同一个，此时就会产生闭包

// 闭包的拓展： 函数柯里化 偏函数 都是基于高阶函数实现

/*
function isType(type, val) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}

console.log(isType('Number', 123))
*/

// 上面的函数实现，对type进行预置

/*
function isType(type) {
  return function(val) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
  }
}

isNumber = isType('Number')

console.log(isNumber(123))
*/

// 最完善的方式是使用utils对象来包含所有的判断方法

function isType(type) {
  return function(val) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
  }
}

let utils = {};

['Number', 'String', 'Boolean'].forEach(item => {
  utils[`is${item}`] = isType(item)
})

console.log(utils.isNumber(123))
console.log(utils.isString('abc'))
console.log(utils.isBoolean(true))