const MyEvent=require('./myEvents')
const myEvent=new MyEvent();

myEvent.on('event1',()=>{
    console.log("Event 1 is Triggered");
})