import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-le-profile',
  templateUrl: './le-profile.component.html',
  styleUrls: ['./le-profile.component.scss']
})
export class LeProfileComponent implements OnInit {


  config;
  fullpage_api: any;
  sections = ["profile", "projects", "contact"]
  @Input() showPrivateSearch: boolean = false;

  constructor() {

    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['home', 'profile', 'projects', 'contact'],
      menu: '#navigation',
      navigation: true,
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}
