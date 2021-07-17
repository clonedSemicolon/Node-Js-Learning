const MyEvent=require('./myEvents')
const 

emitter.on('event1',()=>{
    console.log("Event 1 is Called")
})

emitter.on('event2',(e)=>{
    console.log("Event 2 is called",e) // This 'e' contains the object which is passed while emitting the event2.
})

emitter.emit('event2',{
    name:"Avishak Chakroborty",
    Age:"23"
})