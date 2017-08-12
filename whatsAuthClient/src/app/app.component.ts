import { Component } from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./post";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
})
export class AppComponent {


}
