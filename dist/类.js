class User {
    constructor(
    // 可以访问，但是一旦确定不能修改 --- 正常但是不能修改
    id, 
    // 可以访问，但是不能外部修改 --内部或者子类
    username, 
    // 外部包括子类不能访问，也不可修改 ---只能内部
    password) {
        this.id = id;
        this.username = username;
        this.password = password;
        // ...
        this.id = id;
        this.username = username;
        this.password = password;
    }
    setV() {
        this.username = 'oo';
        this.password = 'gg';
    }
}
let user1 = new User(1, 'zMouse', '123456');
// console.log(user1.id);
class Gh extends User {
    constructor(id, username, password) {
        super(id, username, password);
    }
}
// console.log(Gh.username);
// 抽象类也产生实体代码
class MessageBox {
    constructor() { }
    show() { }
    close() { }
}
