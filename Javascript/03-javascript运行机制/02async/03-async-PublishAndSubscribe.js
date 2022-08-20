// 发布订阅模式

/*
const fs = require('fs')
const path = require('path')

const events = {
  _obj: {},
  _sub: [],
  on(cb) {
    this._sub.push(cb)
  },
  emit(key, val) {
    this._obj[key] = val
    this._sub.forEach(cb => cb(this._obj))
  }
}

events.on(()=> {
  console.log("读取完毕后触发")
})

events.on((data)=> {
  if(Object.keys(data).length === 2) {
    console.log("读取文件完毕")
  }
})

fs.readFile(path.resolve(__dirname+'/test/01.txt'), 'utf-8', (err, data) => {
  events.emit('message', data)
})
fs.readFile(path.resolve(__dirname+'/test/02.txt'), 'utf-8', (err, data) => {
  events.emit('age', data)
})
*/

// 观察者模式 基于发布订阅模式

// 被观察者
class Subject {
  constructor(name) {
    this.name = name
    this._arr = []
    this.state = "开心的"
  }
  // 绑定观察者 相当于订阅
  attach(obj) {
    this._arr.push(obj)
  }
  setState(newState) {
    this.state = newState
    this._arr.forEach((item) => {
      item.update(this)
    })
  }
}
// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  update(obj) {
    console.log(`${this.name}: ${obj.name}, ${obj.state}`)
  }
}

const baby = new Subject("宝宝")

const papa = new Observer("爸爸")
const mama = new Observer("妈妈")

baby.attach(papa)
baby.attach(mama)

baby.setState("被打了")