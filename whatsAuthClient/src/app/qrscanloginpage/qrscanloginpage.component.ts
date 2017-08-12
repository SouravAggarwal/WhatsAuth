import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {AuthGuardService} from "../auth-guard.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-qrscanloginpage',
  templateUrl: './qrscanloginpage.component.html',
  styleUrls: ['./qrscanloginpage.component.css']
})
export class QrscanloginpageComponent implements OnInit {
socket:any=null;
imagePath:String;
  constructor(private authService:AuthService,
              private authGuardService:AuthGuardService,
              private router:Router) {
    console.log("generateQR")
    this.socket=this.authService.socket;
  }

  ngOnInit() {
    this.requestQR();
  }
requestQR():void{

    this.socket.emit('GenerateQR',(ack)=>{
      this.imagePath=ack;
    })
  setInterval(()=>this.socket.emit('GenerateQR',(ack)=>{
    this.imagePath=ack;
  }),10000)
}
}
