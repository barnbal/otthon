import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { User } from "../model/User";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input("pageChanged") pageChanged : EventEmitter<string>;
  users = [];
  currentPage : string = '/';

  constructor() {
    this.users.push(new User(1, "Barna", "Balazs", "barnab88@gmail.com", "+36208004333", "Toth Brigitta Orsolya"));
  }

  ngOnInit() {
    this.pageChanged.subscribe(
      (url) => {
        this.currentPage = url;
        console.log(url);
      }
    )
  }

}
