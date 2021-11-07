function foo (firstName: string, endName: number, lastName?: string) {
    // ...
    return 'firstName: ' + firstName + ' endName: ' + endName + ' lastName: ' + lastName
}

console.log(foo('three', 2, 'one'))


// function test (firstName?: string, endName?: number, lastName: string) {
//     // ...
//     return 'firstName: ' + firstName + ' endName: ' + endName + ' lastName: ' + lastName
// }

// console.log(foo('three', 2, 'one'))