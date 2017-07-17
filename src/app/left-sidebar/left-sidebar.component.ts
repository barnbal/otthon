import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  @Output("change") pageChange : EventEmitter<string> = new EventEmitter<string>();
  private currentPage: string = "/";

  constructor() {
  }

  ngOnInit() {
  }

  navigate($event : Event) {
    $event.preventDefault();
    let element = $event.target as HTMLLinkElement;
    this.currentPage = element.href.replace(location.origin, "");
    this.pageChange.emit(this.currentPage);
    console.log(this.currentPage);
  }

}
