import { Component, OnInit } from '@angular/core';
import {SocketService} from '../services/socket.service';
import {FormsModule} from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageContent:string="";
  messages:string[] = [];
  username:string = "";
  newuser:User;
  ioConnection:any;
  Test = "";
  constructor(private socketService:SocketService, private router:Router) { }

  ngOnInit(){
    this.initIoConnection();
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.username = this.newuser.username;
    var json = JSON.parse(sessionStorage.getItem('msg'));
    console.log(json);
    
  }
  //Attempt to create a room
  createR(){
    this.socketService.createRoom(this.Test);
  }
  //Initialises socket connection
  private initIoConnection(){
     if(this.username != null){
      this.socketService.initSocket();
      this.ioConnection = this.socketService.onMessage()
        .subscribe((message:string)=>{
          this.messages.push(message);
         // console.log(this.chatmsg);
          sessionStorage.setItem('msg',JSON.stringify(this.messages));
        });
    }else{
      this.router.navigate(['/login']);
    } 
  }
  //Checks if a message was typed and sends it to the server
  public chat(messageContent){
    if(this.messageContent){
      this.socketService.send(this.messageContent);
      this.messageContent=null;
    }else{
      console.log("No message");
    }
  }
}
