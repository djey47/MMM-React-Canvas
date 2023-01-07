/**
 * Utility to decouple MM2 provided dependencies with custom implementation and makes mocking possible.
 */

const NodeHelper = require('node_helper');
const Log = require('logger');

module.exports = {
  NodeHelper,
  Log,
};
