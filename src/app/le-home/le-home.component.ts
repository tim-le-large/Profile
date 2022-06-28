import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-le-home',
  templateUrl: './le-home.component.html',
  styleUrls: ['./le-home.component.scss']
})
export class LeHomeComponent implements OnInit {

  config;
  fullpage_api: any;

  constructor() {

    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['home',],
      menu: '#navigation',

    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}
