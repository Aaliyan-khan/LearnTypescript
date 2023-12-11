// ARRAY
// let fruits = ["apple","mango","orange","banana"]
// console.log(fruits)
// let fruits = ["apple","mango","orange","banana"]
// console.log(fruits[1])
// UNION TYPE
// let Names:(string | number)[] = ["aliyan","ahsan","hassan",123]
// console.log(Names)
// ARRAY FROM DIFFERENT METHOD
// 1. By Normal Method
// 2. By Array Method
// 1.
// let Names:string[]= ["aliyan","ahsan","hassan"]
// console.log(Names)
// 2.
// let Names:string[] = Array.of("aliyan","ahsan","hassan")
// console.log(Names)
// ARRAY METHOD
// 1. PUSH () push,insert any value but in last
// 2. POP () last element remove from the array
// 3. SHIFT () first element remove from the array
// 4. UNSHIFT () push,insert any value but in first
// let Names:string[]= ["aliyan","ahsan","hassan","azhar"]
// Names.push("rayyan")
// console.log(Names)
// //onsole.log(Names.push("rayyan"))
// let Names:string[]= ["aliyan","ahsan","hassan","azhar"]
// Names.pop()
// console.log(Names)
// // console.log(Names.pop()) \
// let Names:string[]= ["aliyan","ahsan","hassan","azhar"]
// // Names.shift()
// // console.log(Names)
// console.log(Names.shift())
var Names = ["aliyan", "ahsan", "hassan", "azhar"];
var newNames = Names.unshift("rayyan");
console.log(Names);
// console.log(Names.unshift("rayyan"))
// SLICE AND SPLICE
// let Names:string[]= ["aliyan","ahsan","hassan","azhar","arham","khizar","zia"]
// console.log(Names.slice(1,4))
// let Names:string[]= ["aliyan","ahsan","hassan","azhar","arham","khizar","zia"]
// console.log(Names.splice())
