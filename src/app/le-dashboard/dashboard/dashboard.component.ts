import {Component, OnInit} from '@angular/core';


import {faCloud, faKey} from '@fortawesome/free-solid-svg-icons';
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';
import {Card} from 'src/app/shared/cardgrid/card';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {


  faGitAlt = faGitAlt;


  cards: Card[] = [
    new Card(faCloud, "le nextcloud", "https://cloud.lelar.ge", ""),
    new Card(faGitAlt, "le git", "https://git.lelar.ge", ""),
    new Card(faKey, "le bitwarden", "https://bitwarden.lelar.ge", ""),
  ]


  ngOnInit(): void {
  }

}
