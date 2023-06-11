// Static typing
// String a = 'abc'
// int b = 10
// b = 'xyz' //Error

// Dynamic typing
// a = 'abc'
// a = 10

// Dynamic typing
// let a = 10

// a = true
// a = 'Alex'
// a = undefined
// console.log(a)


// Dynamic typing in js
// function a() {
//     console.log('Hey there')
// }
// a() // 'Hey there'

// a = 10
// a() // Uncaught TypeError: a is not a function

// Arrow function
const a = () => {
    console.log('Hey there')
}

a() // 'Hey there'

a = 10  // TypeError: Assignment to constant varible
a()     // Will not reach this variable

// Rulse variable
// 1 - All variables must be declared 'before' they are used.
// 2 - Try to use 'const' wherever possible

