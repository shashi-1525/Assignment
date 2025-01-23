const EventEmitter = require('events');

// EventEmitter class object
const emitter = new EventEmitter();

// register a listner
emitter.on('messageLogged', (id, name) => {
    console.log('Listner called');
    console.log('Id: ', id, '\nName: ', name);
});


// raise an event
emitter.emit('messageLogged', 12, "Shashi");