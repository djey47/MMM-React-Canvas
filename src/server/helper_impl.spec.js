import NodeHelperImpl from './helper.js';

jest.mock('./mm2_facades', () => ({
  NodeHelper: { create: (impl) => impl },
  Log: {
    log: jest.fn(),
    info: jest.fn(),
  },
}));

const sendSocketNotificationMock = jest.fn();

describe('Node helper implementation', () => {
  beforeEach(() => {
    delete(NodeHelperImpl.started);
    NodeHelperImpl.config = {
      debug: false,
    };
    NodeHelperImpl.loaded = false;
  
    NodeHelperImpl.sendSocketNotification = sendSocketNotificationMock;
  });
  
  describe('start function', () => {
    it('should set started to false', () => {
      // given
      NodeHelperImpl.started = true;
      // when
      NodeHelperImpl.start();
      // then
      expect(NodeHelperImpl.started).toEqual(false);
    });
  });
  
  describe('socketNotificationReceived function', () => {
    it('should keep started to false if unexpected notification', () => {
      // given
      delete(NodeHelperImpl.config);    
      // when
      NodeHelperImpl.socketNotificationReceived('HELLO');
      // then
      expect(NodeHelperImpl.started).toBeFalsy();
      expect(NodeHelperImpl.config).toBeFalsy();
    });
  
    it('should set started to true and received configuration, then dispatch INIT notif', () => {
      // given
      const config = {
        param1: true,
      };
      // when
      NodeHelperImpl.socketNotificationReceived('SET_CONFIG', config);
      // then
      expect(NodeHelperImpl.started).toBe(true);
      expect(NodeHelperImpl.config).toEqual(config);
      expect(sendSocketNotificationMock).toHaveBeenCalledWith('INIT');
    });
  });  
});

