// let timerFlag = null;
// function throttle(func, delay) {
//     let timerFlag = null;
//     return function (...args) {
//         if (timerFlag == null) {
//             func.apply(this, args)
//             timerFlag = setTimeout(() => {
//                 timerFlag = null;
//             }, delay)
//         }
//     }
// }

var throttleFun = (fn, delay) => {
    let timerFlag = null;
    return function (...args) {
        let that = this
        if (!timerFlag) {
            fn.apply(that, args)
            timerFlag = setTimeout(() => {
                timerFlag = null;
            }, delay)
        }
    }
}

// function throttle(fn, gapTime = 1500) {
//     let _lastTime = null;

//     // return new function
//     return function() {
//         let _nowTime = + new Date();
//         if (_nowTime - _lastTime > gapTime || !_lastTime) {
//             fn.apply(this, arguments);   //pass this and args to the original function
//             _lastTime = _nowTime;
//         }
//     };
// }

// const throttled = throttle(logFun, 1000)
// function logFun(numers){
//     console.log(`logginglogging${numers}`)
// }
// throttled('1')
// throttled('2')
// throttled('3')
// throttled('4')

// function onMouseMove(event){
//     console.log(`Mouse position: (${event.clientX}, ${event.clientY})`);
// }

// const throttled = throttle(onMouseMove, 1000)
// window.addEventListener('mousemove', throttled)

function throttle(fn, t) {
    let isThrottled = false;
    let nextArgs = null;
    return function (...args) {
        if (isThrottled) {
            nextArgs = args
        } else {
            fn(...args)
            isThrottled = true
            setTimeout(helper, t)
        }

        function helper() {
            if (nextArgs) {
                fn(...args)
                isThrottled = true
                nextArgs = null
                setTimeout(helper, t)
            } else {
                isThrottled = false
            }
        }
    }
}

const throttled = throttle(logFun, 1000)
function logFun(numers) {
    console.log(`logginglogging${numers}`)
}

throttled('1')
throttled('2')
throttled('3')
throttled('4')