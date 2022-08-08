# 小程序背景图
## 背景满屏显示
- 使用CSS background-image的方式
1. app.json中进行配置
```
"window": {
  ...pre,
  "navigationStyle":"custom"
},
```
2. 上面这种方式对全局进行了修改，也可以只更改当前页面的配置，如index.json文件
```
{
  "usingComponents": {},
  "navigationStyle": "custom"
}
```
2. wxml文件
```
<page>
  <!-- 内容区 -->
</page>
```
3. wxss文件
```
/* url使用https://sm.ms/获取 */
page {
  background-image:url(https://s2.loli.net/2022/08/08/6GjciB4KoLNVl28.png);
  width:100%;
  height:100vh;
  background-size: 100% 100%;
}
```