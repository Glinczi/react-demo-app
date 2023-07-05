// 通过class去构造一个类

class Person {
  // 类中有一个构造器函数,帮助你实现类的初始化
  // 但是构造器函数不是必须要写的
  constructor(name, age) {
    // 这里的this指向使用该类的实例对象
    this.name = name
    this.age = age
  }
  // 类中定义的函数需要放在这里
  spake() {
    console.log(`我的名字叫${this.name},年龄${this.age}`)
  }
}

// 继承
// 通过关键字 extends 可以继承Person这个类
// 从而可以直接使用Person类中定义的方法和属性
class Student extends Person {
  constructor(name, age, grader) {
    // 当需要在这个继承的类中添加新的属性,添加constructor函数的时候
    // 必须要写Surper关键字来继承之前类的属性
    super(name, age)
    this.grader = grader
  }

  id = 11
  static say() {
    console.log(this)
    console.log('111静态类方法')
  }
}



// 有了类之后可以通过new关键字去构造一个实例对象
const person1 = new Person('小志', 18)
const student1 = new Student("小小志", 8, '三年级')

console.log('1', person1)
person1.spake() // 这个spake方法不是直接放在实例对象上的,而是在其原型上
console.log('2', student1)

console.log('3', Student.id)
Student.say()