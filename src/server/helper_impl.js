/* @flow */

import {
  NOTIF_INIT,
  NOTIF_SET_CONFIG,
} from '../support/notifications.js';

/**
 * Magic Mirror
 * Custom NodeHelper implementation
 * ES6 module export does not work here...
 */
module.exports = {
  start: function () {
    this.started = false;
  },

  socketNotificationReceived: function(notification: string, payload: Object) {
    if (notification === NOTIF_SET_CONFIG && !this.started) {
      this.config = payload;
      this.started = true;
      this.sendSocketNotification(NOTIF_INIT);      
    }
  },
};
