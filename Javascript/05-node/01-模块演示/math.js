module.exports.add = function(a, b) {
  console.log("当前正在调用math模块中的add函数");
  return a+b;
}
// module对象代表模块自身，一个文件就是一个模块