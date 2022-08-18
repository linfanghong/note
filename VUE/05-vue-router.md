# vue-router
## 路由插件库
- 用于实现SPA
## 对SPA的理解
- 单页 Web 应用(single page web application, SPA)，整个应用只有一个完整的页面。 点击页面中的导航链接不会刷新页面，只会做页面的局部更新。数据需要通过ajax或axios请求获取
## 对路由的理解
- 什么是路由？
    - 一个路由就是一组映射关系(key - value)
    - key 为路径，value 可能是 function 或 component
- 路由的分类
    - 后端路由：
	    - 理解：value 是 function，用于处理客户端提交的请求
	    - 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
    - 前端路由：
        - 理解：value 是 component，用于展示页面内容
        - 工作过程：当浏览器的路径改变时，对应的组件就会显示