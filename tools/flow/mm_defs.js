/* @flow */

/**
 * MagicMirror
 * Flow configuration - MM2 globals
 */

// MM2's module item
declare var Module: {
  register(name: string, module: Object): void;
};

// MM2's integrated logging system
declare var Log: {
  info(...data: any[]): void;
  log(...data: any[]): void;
  error(...data: any[]): void;
};

declare module logger {
  declare function info(...data: any[]): void;
  declare function log(...data: any[]): void;
  declare function error(...data: any[]): void;
};
