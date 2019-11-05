import { Component, OnInit  } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../dto/message';
import { Chat } from '../../dto/chat';
import { User } from '../../dto/user';
import { ChatService } from '../../shared/services/chat.service';
import { DataService } from '../../shared/services/data.service';
import { UserService } from '../../shared/services/user.service';

@Component({
    selector: "app-inbox",
    moduleId: module.id,
    templateUrl: "./inbox.component.html"
})

export class InboxComponent implements OnInit {

  messages: Message[] = new Array;
  userId: number;
  chats: Chat[] = new Array;
  chatCount: number = 0;

  constructor(private router: Router, private chatService: ChatService,
    private dataService: DataService, private userService: UserService) {}

  ngOnInit() {
    this.userId = this.dataService.getUser().id;
    this.getUserChats();
  }

  getUserChats() {
    this.chatService.getUserChats(this.userId).subscribe(data => {
      this.chats = this.setLastMessage(data);
      this.chatCount = this.chats.length;
    }, error => {
      this.dataService.setError(error.toString());
      this.router.navigate(['/error']);
    })
  }

  setLastMessage(chats: Chat[]) {
    for (let int in chats) {
      this.setSenderName(chats[int]);
      let messageArrLength = chats[int].messages.length;
      chats[0].lastMessage = chats[int].messages[messageArrLength - 1];
    }
    return chats;
  }

  setSenderName(chat: Chat) {
    let senderId = 0;

    if (chat.senderId != this.userId) {
      senderId = chat.senderId;
    }
    else {
      senderId = chat.receiverId;
    };
    this.getSender(senderId, chat);
  }

  getSender(senderId: number, chat: Chat) {
    this.userService.getUser(senderId).subscribe(data => {
      let sender = data;
      chat.senderName = sender.name;
    }, error => {
      this.dataService.setError(error.toString());
      this.router.navigate(['/error']);
    })
  }

  openMessage(args) {
    this.dataService.setChat(this.chats[args.index]);
    this.navigateToChat();
  }

  navigateToChat() {
    this.router.navigate(['/inbox/chat']);
  }

  navigateBack() {
    this.router.navigate(['/profile']);
  }
}
