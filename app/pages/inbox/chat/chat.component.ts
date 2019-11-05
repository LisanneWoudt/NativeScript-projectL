import { Component, OnInit  } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
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

   private sub: any;
   messages: Message[] = new Array;
   userId: number;
   chat: Chat;
   reply: string;
   senderId: number;
   sender: User = new User();
   returnlink: string;

  constructor(private router: Router, private route: ActivatedRoute, private chatService: ChatService,
    private dataService: DataService, private userService: UserService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.returnlink = params['returnlink'];
    });

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
    if (this.returnlink == "history") {
      this.router.navigate(['swap-requests/history/' + this.userId]);
    }
    else if (this.returnlink == "inbox") {
      this.router.navigate(['/inbox']);
    }
    else {
      this.router.navigate(['/garment/' + this.returnlink]);

    }
  }

}
