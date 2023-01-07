/* @flow */

/**
 * Magic Mirror
 * Server side part of module.
 */

const { Log, NodeHelper} = require('./mm2_facades');
const { NOTIF_INIT, NOTIF_SET_CONFIG } = require('../support/notifications.js');

// ES6 module export does not work here...
module.exports = NodeHelper.create({
  start: function() {
    this.started = false;
  },
    
  socketNotificationReceived: function(notification: string, payload: Object) {
    Log.log('** helper:socketNotificationReceived', { notification, payload });
    
    if (notification === NOTIF_SET_CONFIG && !this.started) {
      this.config = payload;
      this.started = true;
        
      this.sendSocketNotification(NOTIF_INIT);
    }
  },    
});
