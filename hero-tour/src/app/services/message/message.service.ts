import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() {
    this.add('Message Service: constructor')
  }

  add(message: string): void {
    this.messages.push(message)
  }

  clear(): void {
    this.messages = []
  }
}
