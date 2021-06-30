const EventEmitter= require('events')
const emitter=new EventEmitter();

emitter.on('event1',()=>{
    console.log("Event 1 is Called")
})

emitter.on('event2')