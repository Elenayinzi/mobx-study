@fn
@fn2(10)
@fn3
class MyClass {
    @readOnly message = 'hello'
}

function fn(target) {  //target是MyClass本身
    target.foo = 'bar'
}

function fn2(value) {
    return function (target) {
        target.count = value
    }
}

function fn3(target) {
    target.prototype.foo = 'baz'
}

function readOnly(target, name, descriptor) {
    //console.log(target)   //目标类的prototype
    //console.log(name)    //被修饰的类成员的名称
    //console.log(descriptor) //被修饰的类成员的描述对象
    //descriptor.writable = true
}
// const c1 = new MyClass()
// console.log(c1.message)
// c1.message = 'world'
// console.log(c1.message)

// console.log(MyClass.foo)  //=>bar
// console.log(MyClass.count) //=>10
// console.log(new MyClass().foo) // =>baz