import { AA } from './外部enum'

enum Color {Red, Green, Blue = 3};// 这样会产生实际的代码
let c: Color = Color.Green;
console.log(c);
console.log(Color[2]);

const enum Directions { // 这样写不会产生实际的代码
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
console.log(directions);



let newe = [AA.B, AA.C]
console.log(newe);