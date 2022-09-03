## 元素的尺寸
- el.clientWidth/el.clientHeight 代表元素的width+padding/height+padding
- el.offsetWidth/el.offsetHeight 代表元素的真实宽和高，相比于clientWidth/clientHeight，增加了边框的宽度
- el.getBoundingClientRect().width/el.getBoundingClientRect().width与offsetWidth/offsetHeight一致
- el.offsetParent是当前元素的祖宗元素中，进行了定位的元素
- el.offsetTop/offsetLeft为当前元素上边框/左边框距离其祖宗元素的内边框的距离
- 关于滚动条
  - el.scrollWidth为滚动区域宽度
  - el.scrollHeight为滚动区域高度
  - el.scrollTop/el.scrollLeft为纵向/横向滚动条滚动的长度
```
// html文件示例
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>js获取元素尺寸</title>
  <style>
    .border {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      border: 5px solid #999;
      box-sizing: border-box;
    }
    .box {
      width: 200px;
      height: 200px;
      background-color: antiquewhite;
    }
    h2 {
      width: 300px;
      text-align: center;
    }
    .content {
      width: 300px;
      height: 80px;
      margin-top: 10px;
      border: 5px solid #999;
      box-sizing: border-box;
      overflow-y: scroll;
    }
  </style>
</head>
<body>
  <div class="border">
    <div class="box"></div>
  </div>
  <h2>西江月-世事一场大梦</h2>
  <div class="content">
    世事一场大梦，人生几度秋凉。夜来风叶已鸣廊。看取眉头鬓上。
    酒贱常愁客少，月明多被云妨。中秋谁与共孤光。把盏凄然北望。
  </div>
  <script>
    const div = document.querySelector('.box');
    console.log(div.offsetParent);
    console.log(div.offsetTop);
    console.log(div.offsetLeft);

    // 查看滚动条的宽度
    const content = document.querySelector('.content');
    console.log(content.offsetWidth);
    console.log(content.getBoundingClientRect().width)
    console.log(content.clientWidth);
    console.log("滚动条宽度为:", content.offsetWidth-content.clientWidth)
    console.log("滚动宽度为:", content.scrollWidth)
    console.log("滚动高度为:", content.scrollHeight)
    console.log("滚动距离顶部高度:", content.scrollTop)
  </script>
</body>
</html>
```