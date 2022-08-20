// nodejs中的文件读取是一个异步过程

const fs = require('fs')
const path = require('path')

let obj = {}

const after = function(times, cb) {
  return function(key, val) {
    obj[key] = val
    while(!--times) {
      console.log(obj)
    }
  }
}

const cb = after(2, (data) => {
  console.log(data)
})

fs.readFile(path.resolve(__dirname+'/test/01.txt'), 'utf-8', (err, data) => {
  console.log(data)
  cb('message', data)
})
fs.readFile(path.resolve(__dirname+'/test/02.txt'), 'utf-8', (err, data) => {
  console.log(data)
  cb('age', data)
})