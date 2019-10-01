// 1

// const num = 42

// const result = num > 20 ? 'more than 20' : 'less than 20'

// console.log(result)

// ==============================================
// 2
// let variable
// let variable2

// // if (variable !== undefined && variable !== null && variable !== '') {
// //     variable2 = variable
// // } else {
// //     variable2 = 'some value'
// // }
// //     console.log(variable2)

// variable2 = variable || 'some value'

// console.log(variable2)

// ==============================================

// 3

// let x
// let y
// let z = 42

// let x, y, z = 42

// ==============================================
// 4
// let isSame = true

// if (isSame === true) {} // if (isSame !== true) {}
// if (isSame) {} // if (!isSame) {}

// ==============================================
// 5
// const someArray = ['one', 'two', 'three']

// // for value of element of array
// for (let number of someArray) {
//     console.log(number)
// }

// // for indexes in array
// for (let index in someArray) {
//     console.log(index)
// }

// // someArray.forEach(function(elem, index, array) {
// //     console.log(`someArray[${index}] = ${elem}`)
// // })

// function logSomeArray(elem, index, array) {
//     console.log(`someArray[${index}] = ${elem}`)
// }

// someArray.forEach(logSomeArray)

// ==============================================
// 6
// let port

// if (process.env.PORT) {
//     port = process.env.PORT
// } else {
//     port = 4200
// }

// const port = process.env.PORT || 4200

// ==============================================
// 7
// for (let i = 0; i < 1000000; i++) {}
// for (let i = 0; i < 10e6; i++) {}

// ==============================================
// 8
// const a = 1, b = 3

// const myObj = {
//     a: a,
//     b: b
// }

// const myObj = {a, b}

// ==============================================
// 9
// setTimeout(function(){
//     console.log('After 2 seconds')
// }, 2000)

// function tripple(num) {
//     return num * 3
// }

// setTimeout(() => {console.log('After 2 seconds')}, 2000)

// const tripple = num => num * 3

// ==============================================
// 10
// function rgb(r, g, b) {
//     if (!r) {
//         r = 0
//     }
//     if (!g) {
//         g = 255
//     }
//     return `${r}${g}${b}`
// }

// const rgb = (r = 0, g = 255, b) => `${r}${g}${b}` 

// ==============================================
// 11
// interpolation

// function createUrl(base, domain) {
//     return `http://${base}.${domain}`
// }

// const createUrl = (base, domain) => `http://${base}.${domain}`

// console.log(createUrl('yandex', 'ru'))

// ==============================================
// 12

// const alert = window.alert
// const confirm = window.confirm
// const prompt = window.prompt

// const {alert, confirm, prompt} = window

// ==============================================
// 13 (spread operator)

// const arr = [1, 2, 3]
// // const nums = [4, 5, 6].concat(arr)

// // const nums = [...arr, 4, 5, 6] // => [ 1, 2, 3, 4, 5, 6 ]
// // const nums = [4, ...arr, 5, 6] // => [ 4, 1, 2, 3, 5, 6 ]
// // const nums = [4, 5, 6, ...arr] // => [ 4, 5, 6, 1, 2, 3,]
// const nums = [...arr, 4, 5, 6, ...arr] // => [ 1, 2, 3, 4, 5, 6, 1, 2, 3 ]

// console.log(nums)

// ==============================================
// 14 (absolute float)

// console.log(Math.floor(9.6))
// // alter
// console.log(~~9.6)

// ==============================================
// 15

// console.log(Math.pow(2, 3))
// // alter
// console.log(2 ** 3)

// ==============================================
// 16 (conversion sring to number type)

// const int = parseInt('42')
// const float = parseFloat('42.43')

// const int = +'42'
// const float = +'42.43'

// console.log(typeof int, typeof float)

// ==============================================
// 17 (searching an array)

// (indexOf() - returns '-1' if not found)

// if ([1, 2, 3].indexOf(3) > -1) {
//     console.log('found')
// }

// if (~[1, 2, 3].indexOf(3)) {
//     console.log('found')
// }

// if (!~[1, 2, 3].indexOf(3)) {
//     console.log('not found')
// }

// if ([1, 2, 3].includes(3)) {
//     console.log('found')
// }

// ==============================================
// 18 ( Objact(Hash) to multylevel array)

// const car = {
//     model: 'Ford',
//     year: 2019,
//     color: 'red'
// }

// console.log(Object.entries(car))
// console.log(Object.keys(car))
// console.log(Object.values(car))
