import {Component, OnInit} from '@angular/core';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'le-profile-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  faAngleRight = faAngleRight
  faAngleLeft = faAngleLeft

  ngOnInit(): void {
  }


}
