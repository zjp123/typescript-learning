interface T {
    a: number;
    fn: (x: number) => void;
}

let obj1:T = {
    a: 1,
    fn(x: number) {
        //any类型
        console.log(this);
    }
}


let obj2:T = {
    a: 1,
    fn(this: T, x: number) {
        //通过第一个参数位标注 this 的类型，它对实际参数不会有影响
        console.log(this);
    }
}
obj2.fn(1);