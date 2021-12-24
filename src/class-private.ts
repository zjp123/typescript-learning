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
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}