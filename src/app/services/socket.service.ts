import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() { }

  public initSocket(): void {
    this.socket = io(SERVER_URL);
  }

  public send(message: string): void {
    this.socket.emit('message', message);
   // this.socket.emit('username', username);
  }
   public onMessage(): Observable<any> {
    let observable = new Observable(observer=>{
      this.socket.on('message', (data:string) => observer.next(data));
      
    });
    return observable;
  }

  public createRoom(room: string){
    this.socket.on('create', function(room){
      this.socket.join(room);
      console.log(io.sockets.adapter.rooms);
    })
  }

}
