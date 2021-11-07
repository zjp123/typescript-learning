let obj1 = {
    a: 1,
    fn(x) {
        //any类型
        console.log(this);
    }
};
let obj2 = {
    a: 1,
    fn(x) {
        //通过第一个参数位标注 this 的类型，它对实际参数不会有影响
        console.log(this);
    }
};
obj2.fn(1);
