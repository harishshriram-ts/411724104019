// console.log("Hello World");
// console.log("Harish");

// console.log("A");
// setTimeout(()=>{
//     console.log("B")
// },2000)
// console.log("Harish")
// console.log("Monishhh")
// console.log("C")

// const pro = new Promise((scuess,failer)=>{
//     const s = true;
//     if(s){
//         console.log("YEahhh")
//     }else{
//         console.log("Soory Bruhh")
//     }
// })

// Pro.then(res=>{console.log(res)})
// .catch(err=>{console.log(err)})

// function example(){
//     console.log("Hi");
// }
// const example1 = ()=>{
//     console.log("HEllo")
// }

// // console.log(example());
// // console.log(example1)

// const promise = new promise((resolve,reject)=>{
//     setTimeout(example,4500)
//     setTimeout(example1,0)
// })

const pro = new Promise((success, failure) => {
    const s = true;
    if(s){
        success("YEahhh");   
    }else{
        failure("Soory Bruhh"); 
    }
});

pro.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});

function example(){
    console.log("Hi");
}
const example1 = () => {
    console.log("Hello");
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        example();         
        resolve("Done after 4.5s");
    }, 4500);

    setTimeout(() => {
        example1();
                
    }, 0);
});

promise.then(msg => console.log(msg))
       .catch(err => console.log(err));
