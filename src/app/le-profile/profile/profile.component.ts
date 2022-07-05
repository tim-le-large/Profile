import {Component, Input, OnInit} from '@angular/core';
import {faRepeat} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() showPrivateSearch!: boolean;
  faRepeat = faRepeat;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.showPrivateSearch)
      document.getElementById("duckduckgo")!.style.display = "None";
  }

}
