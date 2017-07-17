import { Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() pageChanged : EventEmitter<string> = new EventEmitter();
  title : string = '';

  public constructor(private titleHandler : Title) {
    this.titleHandler.setTitle(environment.appTitle);
  }

  public onPageChanged(pageUrl:string) {
    this.pageChanged.emit(pageUrl);
    console.log("onPageChanged", pageUrl)
  }
}
