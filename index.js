//Synchronized Operations
// console.log(1);
// console.log(2);
// console.log(3);

//Asynchronized Operations
// console.log(1);
// setTimeout(() => {
//     console.log("Hii");
//     console.log(2);
// }, 2000);
// console.log(3);

//Callbacks
// function Hello() {
//     console.log("Hello World!!");
// }

// function num(cb) {
//     console.log(1);
//     console.log(2);
//     cb();
// }

//not to pass callback with parenthesis
//num(Hello);

// num(() => {
//     console.log("Hii");
// })

//Callback Hell
// function data(id, adata){
//     setTimeout(() => {
//         console.log("data" + id);
//         if(adata){
//             adata();
//         }
//     }, 2000);
// }

// data(1, () => {
//     console.log("Getting data 2...");
//     data(2, () => {
//         console.log("Getting data 3...");
//         data(3, () => {
//             console.log("Getting data 4...");
//             data(4);
//         });
//     });
// });

//Promise
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     //resolve("done");
//     reject("true");
// });

// promise.then((res) => {
//     console.log("result : " + res);
// });

// promise.catch((err) => {
//     console.log("error : " + err);
// });

function data(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data " + id);
            resolve("success");
        }, 2000);
    });
}

//promise chaining
// data(1).then(() => {
//     console.log("Getting data 2...");
//     data(2).then(() => {
//         console.log("Getting data 3...");
//         data(3).then(() => {
//             console.log("Getting data 4...");
//             data(4);
//         });
//     });
// });

// async & await

//async function returns a promise
//await is only used under aync
// async function get(){
//     await data(1);
//     //console.log("Getting data 2...");
//     await data(2);
//     //console.log("Getting data 3...");
//     await data(3);
//     //console.log("Getting data 4...");
//     await data(4);
// }


//IIFE(Immediately Invoked Function Expresson)
// (() => {
//     get();
// })();