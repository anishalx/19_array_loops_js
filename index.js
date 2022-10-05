
/*let num =[5,6,5,23,8,98,5]
for(let i=0; i<num.length ; i++){
  console.log(num[i])
}*/

//forEach loop
let numb = [2,3,4,5,6,7]
numb.forEach((ele) =>{
  console.log(ele*ele*ele)
})

//Array.from
let nam ="Anish"
console.log(typeof nam)
let ary = Array.from(nam)
console.log(ary)
console.log(typeof ary)

//for of 
for(let b of numb){
  console.log(b)
}

//for in
for(let c in numb){
  // console.log(numb[c])
  console.log(c)
}