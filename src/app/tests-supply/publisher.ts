export class Publisher {
  handlers = {};

  subscribe(eventName, eventHandler): void {
    const currentEventHandlers = this.handlers[eventName];
    if (currentEventHandlers && currentEventHandlers.any(handler => handler !== eventHandler)) {
      currentEventHandlers.push(eventHandler);
    } else {
      this.handlers[eventName] = [eventHandler];
    }
  }

  emit(eventName): void {
    const currentEventHandlers = this.handlers[eventName];
    if (currentEventHandlers) {
      currentEventHandlers.forEach(handler => handler());
    }
  }
}
