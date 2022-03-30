import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService { //todo why is this a separate class? why not part of message component itself?
  messages: string[] = []; // todo why is this not screaming at me?
  constructor() { }

  add(message: string): void {
    this.messages.push(message)
  }

  clear(): void {
    this.messages = []
  }
}
