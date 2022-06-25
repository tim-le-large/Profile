import {Component, OnInit} from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  faArrowLeft = faArrowLeft;

  constructor() {
  }

  ngOnInit(): void {

  }

}
