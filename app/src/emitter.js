import EventEmitter from 'events';

import UserController from './controllers/UserController.js';

// Create global event emitter.
var emitter = new EventEmitter();

var UserController = new UpcomingEventsController(emitter);
UserController.init();

export default emitter;