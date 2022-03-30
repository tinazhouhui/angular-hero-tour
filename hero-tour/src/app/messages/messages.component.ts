import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/message/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
    this.messageService.add('Message component: constructor')
  } // must be public because going to bind to it in the template.

  ngOnInit(): void {
    this.messageService.add('Message component: OnInit')
  }

}
