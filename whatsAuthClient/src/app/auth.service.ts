import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import * as io from 'socket.io-client'

@Injectable()
export class AuthService {
  abc: string;
  serverURL: string = 'localhost:8000';
  socket: any;

  constructor(private router: Router) {
    // create new socket connection
    this.socket = io(this.serverURL)
    console.log('token ' + ' socket:');
    console.log(this.socket);
    this.socket.on('token', (ob) => {
      localStorage.setItem('currentToken', ob.token);
      localStorage.setItem('currentUid', ob.uid);
      this.router.navigate(['/homepage']);
    })
  }

  logout(): void {
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentUid');
  }


}
