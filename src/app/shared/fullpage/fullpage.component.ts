import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fullpage',
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.scss']
})
export class FullpageComponent implements OnInit {


  config;
  fullpage_api: any;

  // sections!:

  constructor() {

    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['profile', 'projects', 'contact'],
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
