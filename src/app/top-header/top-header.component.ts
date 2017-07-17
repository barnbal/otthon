import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment"

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  appTitle : string = "";

  constructor() {
    console.log(environment);
    this.appTitle = environment.appTitle;
  }

  ngOnInit() {
  }

}
