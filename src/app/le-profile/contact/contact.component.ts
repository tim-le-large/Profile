import { Component, OnInit, } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../le-dashboard/cardgrid/card';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedin = faLinkedin
  faGithub = faGithub
  faEnvelope = faEnvelope

  cards: Card[] = [
    new Card(faEnvelope, "contact@lelar.ge", "mailto:contact@lelar.ge", ""),
    new Card(faGithub, "GitHub", "https://github.com/le-tim", ""),
    new Card(faLinkedin, "LinkedIn", "https://www.linkedin.com/in/tim-le-large", ""),
  ]


  ngOnInit(): void {
  }

}
