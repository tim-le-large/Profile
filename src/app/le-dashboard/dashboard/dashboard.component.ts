import { Component, Inject, Input, OnInit } from '@angular/core';


import { faCloud, faKey } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { Card } from 'src/app/le-dashboard/cardgrid/card';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

  faCloud = faCloud;
  faGitAlt = faGitAlt;
  faKey = faKey;

  cards: Card[] = [
    new Card(faCloud, "le_nextcloud", "https://cloud.lelar.ge", ""),
    new Card(faGitAlt, "le_git", "https://git.lelar.ge", ""),
    new Card(faKey, "le_bitwarden", "https://bitwarden.lelar.ge", ""),
  ]






  ngOnInit(): void {
  }

}
