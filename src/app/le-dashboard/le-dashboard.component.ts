import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-le-dashboard',
  templateUrl: './le-dashboard.component.html',
  styleUrls: ['./le-dashboard.component.scss']
})
export class LeDashboardComponent implements OnInit {

  config;
  fullpage_api: any;

  constructor() {

    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['dashboard'],
      menu: '#navigation'
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}
