import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from "rxjs/Observable"
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import {Post} from "./post"

@Injectable()
export class PostService {
private posts:Post[];
private url='http://jsonplaceholder.typicode.com/posts'
  constructor(private http: Http) { }

  getPosts():Observable<Post[]>{
  return this.http.get(this.url).map(ress => ress.json())

  }

}


/* html code---------------

<div *ngFor="let i of postss">
  <h6 *ngFor="let j of Object.keys(i)">{{i[j]}}</h6>
  </div>

  post.ts----------------
export interface Post{
  title:string;
  body:string;
  id?:number;  //as id is optional

}
appComponent.ts ------------------------
import { Component } from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
})
export class AppComponent {
  Object = Object;
  title="abc";
  private postss:Post[];
  private titles;
  private body;
  private newPost;
  constructor(private postservice:PostService){
    this.postservice.getPosts().subscribe(p=>{
this.postss=p;
console.log(this.postss);
    })
  }


}


 */
 //----------------------------------------
function abc() {
  console.log('chal gaya');
  let i = 0;
  this.lundsadata = new Observable(ob => {
    setInterval(()=>{
      ob.next(i);
      i=i+1;
    },1000);

  });
  let x = this.lundsadata.subscribe(data => {
    this.someval=data
  });
}
