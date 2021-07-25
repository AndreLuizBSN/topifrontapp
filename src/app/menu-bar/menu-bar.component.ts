import { Component, OnInit } from '@angular/core';
import { faUserFriends, faList, faPager, faCheckDouble, faFileAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
  faUserFriends = faUserFriends;
  faList = faList;
  faPager = faPager;
  faCheckDouble = faCheckDouble;
  faFileAlt = faFileAlt;
  faInfo = faInfoCircle;

  constructor() { }

  ngOnInit() {
  }

}
