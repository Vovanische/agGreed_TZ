export class Publisher {
  handlers = {};

  subscribe(eventName: string, eventHandler: () => void): void {
    const currentEventHandlers = this.handlers[eventName];
    if (currentEventHandlers
      && currentEventHandlers.any((handler: () => void) => handler !== eventHandler)) {
      currentEventHandlers.push(eventHandler);
    } else {
      this.handlers[eventName] = [eventHandler];
    }
  }

  emit(eventName: string): void {
    const currentEventHandlers = this.handlers[eventName];
    if (currentEventHandlers) {
      currentEventHandlers.forEach((handler: () => void) => handler());
    }
  }
}
