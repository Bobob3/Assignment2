import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Chat } from '../chatModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  url = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }
  getList(){
    console.log(this.url+'products/getList');
    return this.http.get<Chat[]>(this.url + 'chat');
  }
}
