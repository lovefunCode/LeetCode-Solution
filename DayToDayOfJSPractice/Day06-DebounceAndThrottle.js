// Cancel the previous call, only execute the final call
function debounce(fn, delay){
    let timerId = null
    return function(...args){
        clearTimeout(timerId)   // Clear the previous timer
        timerId = setTimeout(()=>{
            fn.apply(this, args)  // Execute the function after the delay
        }, delay)
    }
}


function searchApi(query){
    console.log("API Request for query:", query);
}
const debounceSearch = debounce(searchApi, 300)

// Simulating typing events in JS
function simulateTyping(inputSequence){
    inputSequence.forEach((input, index) => {
        setTimeout(()=>{
            debounceSearch(input)
        }, index * 100)
    }); 
}

// Simulate user typing "hello" with a 100ms interval between keypresses
simulateTyping(["h", "he", "hel", "hell", "hello"]);


// Rate limiting
function throttle(fn, delay){
    let throttleFlag = false
    let timerId = null
    return function(...args){
        if(!throttleFlag){
            throttleFlag = true
            timerId = setTimeout(()=>{
                fn.apply(this, args)
                throttleFlag = false    // Reset the flag after delay
            }, delay)
        }
    }
}

function handleScroll(){
    console.log("Scroll event fired at", new Date().toLocaleTimeString());
}

const  throttleScroll = throttle(handleScroll, 1000)

function simulateFrequentCalls(){
    for(let i = 0; i < 10; i++){
        setTimeout(()=>{
            throttleScroll()
        }, i*200)
    }
}
// Run the test
simulateFrequentCalls();