import { Component, OnInit  } from "@angular/core";
import { Router } from '@angular/router';
import { Chat } from '../../../dto/chat';
import { Message } from '../../../dto/message';
import { User } from '../../../dto/user';
import { DataService } from '../../../shared/services/data.service';
import { UserService } from '../../../shared/services/user.service';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
    selector: "app-chat",
    moduleId: module.id,
    templateUrl: "./chat.component.html"
})

export class ChatComponent implements OnInit {

   messages: Message[] = new Array;
   userId: number;
   chat: Chat;
   reply: string;
   senderId: number;
   sender: User;

  constructor(private router: Router, private chatService: ChatService,
    private dataService: DataService, private userService: UserService) {}

  ngOnInit() {
    this.userId = this.dataService.getUser().id;
    this.chat = this.dataService.getChat();
    this.getChatMessages();
    this.getSender();
  }

  getChatMessages() {
    this.chatService.getMessagesByChatId(this.chat.id).subscribe(data => {
      this.messages = data;
    }, error => {
      this.dataService.setError(error.toString());
      this.router.navigate(['/error']);
    })
  }

  setSenderId() {
    if (this.chat.senderId != this.userId) {
      this.senderId = this.chat.senderId;
    }
    else {
      this.senderId = this.chat.receiverId;
    }
  }

  getSender() {
    this.setSenderId();
    this.userService.getUser(this.senderId).subscribe(data => {
      this.sender = data;
    }, error => {
      this.dataService.setError(error.toString());
      this.router.navigate(['/error']);
    })
  }

  sendReplyMessage() {
    let replyMessage = new Message();
    replyMessage.content = this.reply;
    replyMessage.chatId = this.chat.id;
    replyMessage.senderId = this.userId;

    this.chatService.addMessage(replyMessage).subscribe(data => {
      this.getChatMessages();
      this.reply = '';
    }, error => {
      console.log(error);
      this.router.navigate(['/error']);
    })
  }

  navigateBack() {
    this.router.navigate(['/inbox']);
  }

}
