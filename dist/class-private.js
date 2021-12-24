// class Foo {
//     protected name: string;
//     constructor(theName: string) { this.name = theName; }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work .`;
//     }
// }
// let obj = new Foo('kk')
// console.log(obj.getElevatorPitch());
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
