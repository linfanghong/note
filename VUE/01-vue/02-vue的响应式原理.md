# 对象的响应式原理
## 认识Object.defineProperty()方法
- Object.defineProperty的作用就是用于定义对象的属性的值，它接收三个参数：obj、prop、descriptor；分别表示添加属性的那个对象、要定义的属性名以及属性配置描述。
- 最重要的就是配置描述。分两种：数据描述符和存取描述符
  - 数据描述符可以拥有：configurable、enumerable、value、writable
  - 存取描述符可以拥有：configurable、enumerable、get、set
  - 其中configurable、enumerable 和 writable 的默认值都是 false；value、get 和 set 的默认值为 undefined
  - 如果一个描述符不具有 value、writable、get 和 set 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 value 或 writable 和get 或 set 键，则会报错，即两种各自特有的不能混合
  ## 响应式的简单代码实现
  ```
  let obj = {}

function defineReactive(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    get() {
      console.log(`你访问了${prop}属性，值为${value}`);
      return value;
    },
    set(val) {
      console.log(`要设置的obj.name的值是${val}`);
      if(value !== val){
        value = val;
      }
    }
  })
}

defineReactive(obj, 'name', 'qiantong');
obj.name;
obj.name = 'fanghong';
obj.name;

// 你访问了name属性，值为qiantong
// 要设置的obj.name的值是fanghong
// 你访问了name属性，值为fanghong
  ```