const EventEmitter=require('events')

class MyEvent extends EventEmitter{
    function1=()=>{
        this.emit  //Calling MyEvent.emit
    }
}

module.exports=MyEvent;