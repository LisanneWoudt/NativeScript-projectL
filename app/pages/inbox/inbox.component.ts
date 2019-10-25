import { Component, OnInit  } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../dto/message';
import { Chat } from '../../dto/chat';
import { ChatService } from '../../shared/services/chat.service';
import { DataService } from '../../shared/services/data.service';

@Component({
    selector: "app-inbox",
    moduleId: module.id,
    templateUrl: "./inbox.component.html"
})

export class InboxComponent implements OnInit {

  messages: Message[] = new Array;
  userId: number;
  sender: string;
  chats: Chat[] = new Array;

  constructor(private router: Router, private chatService: ChatService,
    private dataService: DataService) {}

  ngOnInit() {
    this.userId = this.dataService.getUser().id;
    //TODO: get sender name by userid
    this.sender = "Lisanne";
    this.getUserChats();
  }

  getUserChats() {
    this.chatService.getUserChats(this.userId).subscribe(data => {
      this.chats = this.setLastMessage(data);
    }, error => {
      this.dataService.setError(error.toString());
      this.router.navigate(['/error']);
    })
  }

  setLastMessage(chats: Chat[]) {
    for (let int in chats) {
      let messageArrLength = chats[int].messages.length;
      chats[0].lastMessage = chats[int].messages[messageArrLength - 1];
    }
    return chats;
  }

  openMessage(args) {
    this.dataService.setChat(this.chats[args.index]);
    this.navigateToChat();
  }

  navigateToChat() {
    this.router.navigate(['/inbox/chat']);
  }
}
