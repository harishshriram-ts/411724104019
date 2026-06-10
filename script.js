// console.log("Hello world");
// let val = document.getElementById("p-id")
// val.innerHTML = "Hi there harish";

// let f1 = 10;
// let f2 = 20;
// console.log(f1)

// // // const a = "Harish"
// let a = ["Apple","Orange","Yellow"];
// // // a[1]="Balana"
// // // console.log(a[1])
// let b  = document.getElementById("arr-pr")
// for(let i=0;i<a.length;i++){
//     b.innerHTML = a[i]
// }
// const fin = document.getElementById("p-id")
// fin.innerHTML = "THis is a new line"


// function newfun(){
//     console.log("I am typing somethig")
// }

const input = document.getElementById("event");

const output = document.getElementById("ptag");
input.addEventListener("input",()=>{
    output.textContent=input.value
})

 const newvar = document.createElement("p")
 newvar.textContent = "Po da ";
 document.body.appendChild(newvar)
 newvar.remove()