let str: String = 'ggghh'

// 接口写法
interface Person {
    username: string;
    age: number;
};

let a: Person = {
    username: 'zMouse',
    age: 35,
};

// 类的写法 --它会产生实体代码
class Person2 {
	constructor(public username: string, public age: number) {
  }
}

let b: Person2 = {
    username: 'zMouse',
    age: 35,
};