import { Component, OnInit  } from "@angular/core";
import { Router } from '@angular/router';
import { User } from '../../../dto/user';
import { Message } from '../../../dto/message';
import { DataService } from '../../../shared/services/data.service';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
    selector: "app-chat",
    moduleId: module.id,
    templateUrl: "./chat.component.html"
})

export class ChatComponent implements OnInit {

   messages: Message[] = new Array;
   userId: number;
   chatId: number;
   reply: string;

  constructor(private router: Router, private chatService: ChatService,
    private dataService: DataService) {}

  ngOnInit() {
    this.userId = this.dataService.getUser().id;
    this.chatId = this.dataService.getChat().id;
    this.getChatMessages();
  }

  getChatMessages() {
    this.chatService.getMessagesByChatId(this.chatId).subscribe(data => {
      this.messages = data;
    }, error => {
      this.dataService.setError(error.toString());
      this.router.navigate(['/error']);
    })
  }

  sendReplyMessage() {
    let replyMessage = new Message();
    replyMessage.content = this.reply;
    replyMessage.chatId = this.chatId;
    replyMessage.senderId = this.userId;

    this.chatService.addMessage(replyMessage).subscribe(data => {
      this.getChatMessages();
      this.reply = '';
    }, error => {
      console.log(error);
      this.router.navigate(['/error']);
    })
  }
}
