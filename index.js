const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const ok = document.getElementById ("btn")


function clique () {
let numbera = Number(a.value)
let numberb = Number(b.value)
let numberc = Number(c.value)

let delta =Math.pow (numberb, 2) + (-1 * (4*numbera*numberc))
console.log(numberc);
let x1 = ( (numberb * (-1)) + Math.sqrt(delta))/(2*numbera)
let x2 = ( (numberb * (-1)) - Math.sqrt(delta))/(2*numbera)
console.log("x1: ",  x1, "; x2: ", x2,);




const ResultadoX1= document.getElementById('resultX1')
ResultadoX1.value=  x1

const ResultadoX2= document.getElementById('resultX2')
ResultadoX2.value= x2

const ResultadoDelta= document.getElementById('resultD')
ResultadoDelta.value= delta




}

ok.onclick = clique