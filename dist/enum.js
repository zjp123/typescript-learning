import { AA } from './外部enum';
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
; // 这样会产生实际的代码
let c = Color.Green;
console.log(c);
console.log(Color[2]);
let directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(directions);
let newe = [AA.B, AA.C];
console.log(newe);
