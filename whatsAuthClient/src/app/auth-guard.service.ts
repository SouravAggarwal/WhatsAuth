import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router"
import {AuthService} from "./auth.service"
import {Observable} from "rxjs/Observable"
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {


  result: any;

  canActivate(): Observable<boolean> {
    let token = localStorage.getItem('currentToken');
    let uid = localStorage.getItem('currentUid');
    var retval;
    this.result = Observable.create(ob => {
      this.authService.socket.emit('validate', {'token': token, 'uid': uid}, (ack) => {
        if (!ack) {
          this.router.navigate(['/scan'])
        }
        ob.next(ack);
      });
    });

    return this.result;

  }

  constructor(private authService: AuthService, private router: Router) {
  }

}


@Injectable()
export class HomeRedirectService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    let token = localStorage.getItem('currentToken');
    let uid = localStorage.getItem('currentUid');
    return  Observable.create(observer=>{this.authService.socket.emit('validate',{'token':token ,'uid':uid},(ack)=>{
      if(ack){
        this.router.navigate(['/homepage']);
      }
      observer.next(!ack);
    });
    });
  }
}

