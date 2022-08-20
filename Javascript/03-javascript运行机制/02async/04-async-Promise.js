// Promise 干什么的，解决的问题是什么？


// 传统的实现异步的方式：传入回调函数，发布订阅模式，观察者模式
// 1. 存在嵌套多层的情况，不利于代码维护
// 2. 错误处理不统一
// 3. 无法并发回调


// Promise依旧是基于回调的

// 1. Promise是一个构造函数，创建一个Promise实例的时候，需要传入一个函数，这个函数称作executor
// 2. executor会立刻执行，executor接受两个参数resolve和reject
// 3. Promise实例有三个状态fulfill、reject和pending
// 4. Promise类有个then方法，传入两个函数，分别为为fulfill/reject后执行的回调函数
// 5. 可以通过resolve和reject来改变状态，但是这种改变只能发生一次
// 6. executor函数中出现错误，也会走then中失败的处理方式
// 7. then方法可以被调用多次的

/*
const p = new Promise((resolve, reject) => {
  // resolve("成功了")
  reject("失败了")
})

p.then(
  (data) => {
    console.log('success', data)
  },
  (reason) => {
    console.log('fail', reason)
  },
)

console.log("end")
*/

// Promise的基本原理实现

/*
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class fakePromise {
  constructor(executor){
    this.status = PENDING
    this._arrFulfilled = []
    this._arrRejected = []
    const resolve = (data) => {
      if(this.status === PENDING) {
        this.status = FULFILLED
        this.data = data
        this._arrFulfilled.forEach(cb => cb())
      }
    }
    const reject = (reason) => {
      if(this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this._arrRejected.forEach(cb => cb())
      }
    }
    try{
      executor(resolve, reject);
    }
    catch(e) {
      reject(e)
    }
  }
  then(onFuifill, onReject) {
    if(this.status === FULFILLED) {
      onFuifill(this.data)
    }
    else if(this.status === REJECTED) {
      onReject(this.reason)
    }
    else if(this.status === PENDING) {
      this._arrFulfilled.push(() => {
        onFuifill(this.data)
      })
      this._arrRejected.push(() => {
        onReject(this.reason)
      })
    }
  }
}

const p = new fakePromise((resolve, reject) => {
  // throw new Error('出错了')
  resolve("成功了")
  setTimeout(function() {
    reject("失败了")
  }, 1000)
})

p.then(
  (data) => {
    console.log('success', data)
  },
  (reason) => {
    console.log('fail', reason)
  },
)

p.then(
  (data) => {
    console.log('success', data)
  },
  (reason) => {
    console.log('fail', reason)
  },
)

console.log("end")
*/

// Promise实现链式调用

// 传统的多层嵌套

/*
const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname+'/test/01.txt'), 'utf-8', (err, data) => {
  if(err) return console.log(err)
  fs.readFile(path.resolve(__dirname+`/test/${data}`), 'utf-8', (err, data) => {
    console.log(data)
  })
})
*/

// 使用Promise实现链式调用

const fs = require('fs')
const path = require('path')

const readtext = (pathName, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathName, encoding, (err, data) => {
      if(err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

readtext(path.resolve(__dirname+'/test/01.txt'), 'utf-8')
.then(
  (data) => {
    console.log('success', data)
  },
  (reason) => {
    console.log('fail', reason)
  }
)