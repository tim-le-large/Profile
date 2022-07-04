import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() showPrivateSearch!: boolean;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.showPrivateSearch)
      document.getElementById("duckduckgo")!.style.display = "None";
  }

}
