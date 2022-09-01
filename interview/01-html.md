# 元素
## 表单

表单是用户提交信息的途径，是网页实现交互的重要途径。所以表单是HTML中非常重要的一部分。

### HTML中表单标签及其属性

- form标签

  form标签用来创建一个表单。创立表单的目的是向服务器提交数据，所以表单元素一般需要指定其处理程序和数据提交方式。表单的处理程序与数据提交方式由action属性和method属性进行定义；

  表单在提交时，首先搜集表单元素的name属性和value属性，一般name与value属性一一对应。然后根据enctype属性的值，选择合适的编码方式，对数据进行编码。编码方式会在HTTP的头部信息中进行说明；

  1. action属性：值为URL，相对地址或绝对地址均可，还可以是其他的形式，如E-mail等(使用E-mail地址时，action属性的值为"mailto:xxx@xxx.com")；
  2. method属性：HTTP协议所规定的传输方法，值为post和get，get方法速度更快，post更加安全，对发送信息长度没有限制；
  3. enctype属性：表单提交信息时的编码方式；
     - 值为text/plain时，传输的信息为纯文本；
     - 值为application/x-www-form-urlencoded，基于uri的percent-encoding编码的，表单里的数据被编码为名称/值对，但是在用文本的传输和MP3等大型文件的时候，使用这种编码就显得效率低下。默认使用此编码方式；
     - 值为multipart/form-data，MIME编码，指定传输数据为二进制类型，比如图片、mp3、文件，一般用于文件上传(type="file" method="post")；
  4. target属性：表单返回信息显示方式，值为_blank时，在新的窗口打开；值为_self时，在当前窗口打开；

表单元素中用于用户输入与选择的是控件。控件按照形式分类为文本类、按钮个菜单；按照标签分类为input类和select类；

- input标签

  input标签可以用作文本输入框，也可以作为按钮，其形式取决于属性type的值，下面根据type的值介绍input控件；

  1. text：文本域，可以输入任何类型的文本，输入内容显示为单行。文本域的属性有：
     - name属性：提交表单的数据为name-value对，用户输入的值为value，所以name属性是必须的；
     - minlength/maxlength属性：定义最短/最长字符数；
     - placeholder属性：给出用户提示信息；
     - value属性：可以输入预定值，或者是提示信息，如https://等；
  2. password：密码域，密码以"*"的形式显示。密码域的属性与文本域基本相同：
     - name属性：提交表单的数据为name-value对，用户输入的密码为value，所以name属性是必须的；
     - minlength/maxlength属性：定义最短/最长密码长度；
     - placeholder属性：给出用户提示信息；
     - value属性：输入默认密码；
  3. radio：单选按钮。单选按钮的属性有：
     - name属性：提交表单的数据为name-value对，所以name属性是必须的；同一组单选按钮，name属性的值一样，提交时匹配选择按钮的value值；
     - value属性：提交表单的数据为name-value对，单选按钮用户无输入，所以value属性是必须的；
     - checked属性：布尔属性，表示此单选按钮默认选中，同一组单选按钮只能有一个radio元素有此属性，多个的话，只有最后一个生效；
  4. checkbox：多选按钮。多选按钮的属性有：
     - name属性：提交表单的数据为name-value对，所以name属性是必须的；同一组多选按钮，name属性的值一样，提交时匹配选择按钮的value值；
     - value属性：提交表单的数据为name-value对，多选按钮用户无输入，所以value属性是必须的；
     - checked属性：布尔属性，表示此多选选按钮默认选中，同一组多选按钮可以有多个checkbox元素有此属性；
  5. button：普通按钮，可以结合JS脚本来实现特定功能，其属性有：
     - name属性：普通按钮不会提交数据，所以name属性可选；
     - value属性：普通按钮不会提交数据，所以value属性可选。按钮上的显示信息一般使用value属性；
     - onclick属性：全局属性，表示鼠标点击按钮是进行处理的JS代码；
  6. submit：提交按钮。用于整个表单数据的提交；
     - value属性：可以定义提交按钮上显示的值；
  7. image：图像域。用作按钮作用；其属性有：
     - src属性：图片的URL；
  8. reset：重置按钮。将表单恢复为默认状态；
     - value属性：可以定义提交按钮上显示的值；
  9. hidden：隐藏域。用户提交时，隐藏域中的name与value均会提交，但是用户不会看到；其属性有：
     - name属性：提交表单的数据为name-value对，name属性是必须的；
     - value属性：提交表单的数据为name-value对，value属性是必须的；
  10. file：文件域：用于提交文件；其属性有：
      - name属性：提交用于服务器程序处理；

- textarea标签

  textarea属性定义一个文本输入框，可以输入多行文本；其属性有：

  - name属性：文本输入框内容会进行提交，所以name属性是必须的；
  - cols属性：控制输入框的宽度；
  - rows属性：控制输入框的显示行数；

- select标签

  select标签与option标签结合使用，实现下拉菜单进行选择的效果；相比于单选或多选按钮，所占面积小；

  select标签的属性：

  - name属性：选择菜单内容会进行提交，所以name属性是必须的；
  - size属性：定义下拉菜单显示的选项个数；
  - multiple属性：布尔属性，定义选择菜单能进行多选。Windows系统，多选时需要配合Ctrl按键；Mac OS系统，多选时需要配合Command按键。

  option标签的属性：

  - value属性：选择菜单内容会进行提交，所以value属性是必须的；

- label标签

  label标签用于表单中，对控件内容进行说明和补充；

  - for属性：值与修饰的控件的id属性的值相同；

### HTML5新增的表单内容

html5中针对input控件，增加了其类型，并且增加了output元素；新增的类型如下：

- input标签

  1. email：电子邮件域，控件中填入内容必须是E-mail邮箱才能提交。其属性有：
     - multiple属性：布尔属性，为True时，可以填入多个邮箱，使用逗号隔开；为false时，仅能填写一个邮箱；
  2. url：url域，控件中填入的必须是url地址，并且需要从https://或http://开始填写，否则无法提交；
  3. date：日期域，控件提供选择方式，填写信息为年月日；
  4. time：时间域，填写内容为一天中的某个时刻；
  5. datetime、datetime-local：输入年月日与时刻；
  6. month：输入月份；
  7. week：输入某年的第几周
  8. number：输入一个数字；数字域的属性有：
     - min属性：可输入的最小数字；
     - max属性：可输入的最大数字；
     - step属性：步长，用户输入的数字只能min域max范围内的按照step步长分布的数字；
  9. range：滑动条，滑动的位置决定其值的大小，默认为0-100，取整数；其属性为：
     - min属性：滑动条的下限；
     - max属性：滑动条的上限；
     - step属性：步长，滑动条的步幅；
  10. color：颜色域，可以选择一个颜色并提交；
  11. tel：电话域，因电话号码没有固定格式，所以与文本域差别不大；
  12. search：搜索域，与文本域差别不大；

- output标签

  output标签必须在表单内，output元素内容value在form元素中使用oninput属性进行定义，定义的方式为name.value=name.value；

### 属性的理解

name属性与value属性：表单提交时，使用的方式是name与value对。所以表单提交时，用户输入的，用户选择的选项等，name与value属性必须存在，区别是用户输入内容value值可以是用户输入的内容；

HTML5中新增了一些属性：placeholder属性：用于显示对用户的提示信息；autofocus属性：自动获取鼠标光标；autocomplete属性：值为on和off，告诉浏览器是否应该保留输入值，在将来使用；required属性，无输入信息时不能够提交；list属性与datalist元素：datalist元素必须有id属性，为list属性的值；datalist元素内有option元素，option元素只有value属性；三者结合使用，得到效果：用户输入时，能够出现下拉菜单进行提示，与select不同的时，用户可以输入自定义内容；

### 表单内容的验证
- form
- input
- textarea
## 自定义列表
- dl
  - dt
  - dd
  ```
  <!-- 示例 -->
  <dl>
    <dt>自定义列表项</dt>
    <dd>自定义列表项内容</dd>
  </dl>
  ```