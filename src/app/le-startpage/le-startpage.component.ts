import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-le-startpage',
  templateUrl: './le-startpage.component.html',
  styleUrls: ['./le-startpage.component.scss']
})
export class LeStartpageComponent implements OnInit {

  config;
  fullpage_api: any;

  constructor() {

    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['startpage',],
      menu: '#navigation',

    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}
