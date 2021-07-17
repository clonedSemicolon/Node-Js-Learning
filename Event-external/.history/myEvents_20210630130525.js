const EventEmitter=require('events')

class MyEvent extends EventEmitter{
    function1=()=>{
        this.emit(eve)  //Calling MyEvent.emit
    }
}

module.exports=MyEvent;