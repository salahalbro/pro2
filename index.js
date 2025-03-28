//  find:

// var arr = [{id:"a"},{id:"b"},{id:"c"},{id:"d"},{id:'b'}]
// const x = arr.find((e) =>{
//     return e.id === "b"
// })
// console.log(x);

// findindex:

// var arr = [{id:"a"},{id:"b"},{id:"c"},{id:"d"},{id:'b'}]
// const x = arr.findIndex((e) =>{
//     return e.id == "b"
// })
// console.log(x);

// sort:

// var arr = ['s','m','n' ,'a','c','b','f']
// // console.log(arr.sort());
// console.log(arr.reverse());

// var arr = [20,12,14,7,1,4]
//  arr.sort((x,y) =>{
//     return x-y
// })
// console.log(arr);

// var arr = [20,12,14,7,1,4]
// arr.sort((x,y) =>{
//     return y-x
// })
// console.log(arr);

// mybtn = document.getElementById('btn')

// var mybtn.onclick = function(e){
//     // console.log(e.target.textContent);
//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
// }

// function Draw(){
//     var x = 20
//     console.log(x);
// }
// Draw()
// console.log(x);

// strict mode

// "use strict"
//  x = 20
// console.log(x);

// "use strict"
// var x = 20
// delete x

// "use strict"
// function cood(x,x){
//     console.log(x+x);
// }
// cood(3,4)

// BOM:

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(screen.width);
// console.log(screen.availWidth);
// console.log(window.innerWidth);

// console.log(screen.height);
// console.log(screen.availHeight);
// console.log(window.innerHeight);

// var myopen = document.getElementById('btn1')
// var myclose = document.getElementById('btn2')
// let x
// myopen.onclick = function(){
//    x =  window.open('https://www.facebook.com' ,'titile' , "width=300 , height=300")
// }

// myclose.onclick = function(){
//    x.close()
// }


// console.log(navigator.appCodeName);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.platform);
// console.log(navigator.language);
// console.log(navigator.onLine);

// var time1 = setTimeout(function(){
//     console.log('salah');
// },3000)

// clearTimeout(time1)

// var time1 = setInterval(function(){
//     console.log('salah');
// },1000)

// clearInterval(time1)


var div1 = document.createElement('div')
var con = document.getElementById('con')
var para = document.getElementById('p1')
// div1.id = 'id1'
// div1.className = 'class1'

div1.setAttribute('id' , 'id1')
div1.setAttribute('class' , 'class1')

var text1 = document.createTextNode('Salah Mohammad Albro')
div1.appendChild(text1)

con.insertBefore(div1 , para)

console.log(div1);
