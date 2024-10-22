class EventEmitter{
    eventMap = {}
    // constructor(){
    //     this.eventMap = {}
    // }
    subscribe(event, cb){
        if(!this.eventMap.hasOwnProperty(event)){
            this.eventMap[event] = new Set();
        }
        this.eventMap[event].add(cb)
        return {
            unsubscribe: ()=>{
                this.eventMap[event].delete(cb)
            }
        }
    }
    emit(eventName, args=[]){
        const res = []
        if(!Array.isArray(args)){
            args = [args]
        }
        this.eventMap[eventName] && this.eventMap[eventName].forEach(cb => {
            res.push(cb(...args))
        });
        return res
    }
}

const emitter = new EventEmitter();
function onClickCallback(number){
    console.log('onClick event triggered'+ number);
}

const subscription = emitter.subscribe('onClick', onClickCallback)

// emitter.emit('onClick', [1])
// // subscription.unsubscribe();
// emitter.emit('onClick', [2])
// emitter.emit('onClick', 3)

class EventBus{
    eventList = {} // event is Set

    //subscribe to an event
    on(eventName, fn){
        if(!this.eventList.hasOwnProperty(eventName)){
            this.eventList[eventName] = new Set();
        }
        this.eventList[eventName].add(fn)
    }
    emit(eventName, args=[]){
        if(!Array.isArray(args)){
            args = [args]
        }
        if(this.eventList[eventName]){
            this.eventList[eventName].forEach((cb)=>{
                cb(...args)
            })
        }
    }
    //unsubscribe an event
    off(eventName){
        console.log(this.eventList)
        if(this.eventList[eventName]){
            delete this.eventList[eventName]
        }
    }
}

const eventBus = new EventBus()

function onClickCallback2(number){
    console.log('onClick event triggered'+ number);
}

eventBus.on('onClick', onClickCallback2)
eventBus.emit('onClick', [1])
eventBus.emit('onClick', 2)
eventBus.emit('onClick', [3])
eventBus.off('onClick')