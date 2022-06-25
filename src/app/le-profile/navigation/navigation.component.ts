import { Component, OnInit } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCircleNodes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  faDotCircle = faDotCircle;
  faBars = faBars;
  faCircleNodes = faCircleNodes;
  constructor() { }

  ngOnInit(): void {

  }

}
