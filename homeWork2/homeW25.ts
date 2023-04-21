type EventHandler = (...args: any[]) => void;

class EventEmitter {
  private events: { [eventName: string]: EventHandler[] } = {};

  registerHandler(eventName: string, handler: EventHandler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  emitEvent(eventName: string, ...args: any[]) {
    const handlers = this.events[eventName];
    if (handlers) {
      handlers.forEach(handler => handler(...args));
    }
  }
}

// Usage:
const emitter = new EventEmitter();

emitter.registerHandler('userUpdated', () => console.log('User was updated'));

emitter.emitEvent('userUpdated'); // User was updated
