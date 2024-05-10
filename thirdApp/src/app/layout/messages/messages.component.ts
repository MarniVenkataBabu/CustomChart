import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { RxStompService } from '../../rx-stomp.service';
import { Message } from '../../shared/model/message';
import { Subscription } from 'rxjs';
import { MessageService } from '../../shared/service/message.service';
import { ChannelService } from '../../shared/service/channel.service';

@Component({
  selector: 'wt-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

   filteredMessages: Array<Message> = [];
   newMessage!: string;
   channel!: string;

  @Input() username!: string;

  constructor(private stompService: RxStompService,
    private messageService: MessageService,
    private channelService: ChannelService) { }

  ngOnInit() {
    this.channelService.getChannel().subscribe(channel => {
      this.channel = channel;
      this.filterMessages();
    });

    this.messageService.getMessages().subscribe(messages => {
      this.filterMessages();
    });
  }

  sendMessage() {
    console.log("send Message called in Message Service "+ this.newMessage);
    if (this.newMessage) {
      this.stompService.publish({
        destination: '/app/messages', body:
          JSON.stringify({
            'channel': this.channel,
            'sender': this.username,
            'content': this.newMessage
          })
      });
      console.log('Channel '+ this.channel);
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  filterMessages() {
    this.filteredMessages = this.messageService.filterMessages(this.channel);
    this.scrollToBottom();
  }

  scrollToBottom() {
    const msgContainer = document.getElementById('msg-container')!;
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }
}
