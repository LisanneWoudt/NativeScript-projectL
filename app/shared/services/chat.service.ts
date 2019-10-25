import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environment';
import { Message } from '../../dto/message';

@Injectable()
export class ChatService {

    baseUrl: string = 'chats/';

    constructor(private http: HttpClient) {}

    getUserChats(userId: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + 'user/' + userId);
    }

    getMessagesByChatId(chatId: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + chatId + '/messages');
    }

    addMessage(message: Message): Observable<any> {
      return this.http.post(environment.host + '/messages/add', message);
    }



}
