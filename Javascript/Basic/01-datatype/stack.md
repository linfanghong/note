JS之所以能够在浏览器中运行，是因为浏览器给JS提供了运行环境——栈内存
# 浏览器会在计算机内存中分配一块内存，专门用来供代码执行
- 栈内存 ECStack (Execution Context Stack) 执行环境栈
  - 每一个网页对应一个执行环境栈
- 执行上下文 EC 代码执行的环境
  - 全局执行上下文 EC(G)
  - 函数的执行上下文
  - EX6新增的块级执行上下文
- 变量对象 VO (Variable Object)
  - 上下文中，用来存放变量和值的地方，每个执行上下文中都有一个VO
  - 在函数的私有上下文中叫做活动对象 AO (Activation Object)
- 全局对象 GO (Global Object)
  - 内置的属性和方法，放到单独的内存中——堆内存(Heap)
  - 浏览器指向GO的是window，node是global

# 代码执行流程
1. 代码解析后，拥有执行上下文
2. 执行上下文入栈进行代码执行
3. 代码执行完毕后，执行上下文出栈
4. 全局上下文只有代码结束，才会出栈
5. 代码解析过程
    - 先创建值
    - 在创建变量
    - 最好进行变量与值的关联
    - 等号赋值都是指针关联的过程
    - 如果是引用数据类型
      - 创建堆内存
      - 创建对象的键值对
      - 将堆的地址关联到执行上下文