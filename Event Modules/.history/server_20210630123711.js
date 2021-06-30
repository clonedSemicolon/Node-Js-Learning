const EventEmitter= require('events')
const emitter=new EventEmitter();

emitter.on('event1',()=>{
    console.log("Event 1 is Called")
})

emitter.on('event2',(e)=>{
    console.log("Event 2 is called",e) // This 'e' contains the object pass
})

emitter.emit('event2',{
    name:"Avishak Chakroborty",
    Age:"23"
})