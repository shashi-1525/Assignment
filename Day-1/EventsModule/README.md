# Events Module
Events in an inbuilt node module. It has some useful methods and fields to use event listners. We aregoing to use EventEmitter class.

## How to import events module
To import Events module we can use any of the below code:
```
const EventEmitter = require('events');
```

## How to use EventsEmitter class
To use EventEmitter class to start an event we need to follow below steps:
1. Load EventEmitter class
2. Create an EventEmitter Object
3. Register an event listner
4. Raise an event
```
cconst EventEmitter = require('events');

// EventEmitter class object
const emitter = new EventEmitter();

// register a listner
emitter.on('messageLogged', () => {
    console.log('Listner called');
});

// raise an event
emitter.emit('messageLogged');
```

## How to run this application
To run this application open terminal and move to Day-1/EventsModule directory. The the below command
```
node app.js
```
