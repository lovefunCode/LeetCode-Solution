//  Example 1
// console.log("Start");

// setTimeout(function() {
//   console.log("SetTimeout");
// }, 0);

// Promise.resolve().then(function() {
//   console.log("Promise");
// });

// console.log("End");

// Start
// End
// Promise
// SetTimeout

// Example 2
// console.log("Script Start");

// setTimeout(() => {
//   console.log("setTimeout 1 (0ms delay)");
// }, 0);

// setTimeout(() => {
//   console.log("setTimeout 2 (0ms delay)");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
//   setTimeout(() => {
//     console.log("setTimeout 3 (inside Promise 1)");
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

// setInterval(() => {
//   console.log("setInterval");
// }, 0);

// console.log("Script End");

// // Script Start
// // Script End
// // Promise 1
// // Promise 2
// // setTimeout 1 (0ms delay)
// // setTimeout 2 (0ms delay)
// // setTimeout 3 (inside Promise 1)
// // setInterval
// // setInterval
// // setInterval
// // ...

// Example 3

console.log("Start Script");

setTimeout(() => {
    console.log("setTimeout 1 (0ms delay)");
}, 0);

setTimeout(() => {
    console.log("setTimeout 2 (0ms delay)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("setTimeout 3 (inside Promise 1)");
            resolve();
        }, 0);
    });
}).then(() => {
    console.log("Promise 1 continuation");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

// setInterval(() => {
//     console.log("setInterval 1");
// }, 0);

setTimeout(() => {
    console.log("setTimeout 4 (100ms delay)");
}, 100);

// document.querySelector("button").addEventListener("click", () => {
//     console.log("DOM event handler (button click)");
// });

setTimeout(() => {
    console.log("setTimeout 5 (inside setTimeout 4)");
}, 0);

console.log("End Script");

//Start Script
// End Script
//  Promise 1
//  Promise 2

// setTimeout 1 (0ms delay)
// setTimeout 2 (0ms delay)
// setInterval 1
// setInterval 1
// setInterval 1
// ...
// setTimeout 5 (inside setTimeout 4)
// setTimeout 3 (inside Promise 1)
// Promise 1 continuation
// setTimeout 4 (100ms delay)
// DOM event handler (button click)
