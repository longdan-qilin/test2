Event Loop（事件循环/事件环）

- JS 的执行分为同步任务（同步代码）和异步任务（异步代码）

- 当碰到同步任务时，直接在执行栈（先进后出的数据结构）中执行

- 当碰到异步任务并且时机符合时（点击了按钮、定时器的事件到了、Ajax请求）就把异步添加到任务队列（先进先出的数据结构）当中

- **当执行栈中的同步代码执行完毕**，就去任务队列当中把异步代码添加到执行栈中执行

- 这种反复轮询任务队列的过程就是事件环

```javascript
// 一定是 1s 之后执行吗？
console.log(1);
setTimeout(function() {
  console.log(3)
}, 1000);
// ...
while(true) {}
```

- AJAX 的状态码（HTTP状态码）

- 事件委托是什么？原理是什么？好处是什么？

- new 的执行过程

- 防抖和节流

防抖：重复触发不执行，不触发的一段事件后才执行

节流：重复触发也执行，只不过执行的频率变低了

- 原型链：多个对象之间通过 __proto__ 链接起来的这种关系就是原型链

```javascript
function Person() {}
var p = new Person();
p.__proto__ === Person.prototype
Person.prototype.__proto__ === Object.prototype
```

- forEach2

```javascript
Array.prototype.forEach2 = function(fn, _this) {
  for(var i = 0; i < this.length; i ++) {
    fn.call(_this, this[i], i, this);
  }
};
var arr =[3, 5, 7];
arr.forEach2(function(value, i, a) {
  console.log(value, i, a, this);
}, 3);
```
