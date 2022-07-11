import {Component, OnInit} from '@angular/core';
import {faAngular, faDocker} from '@fortawesome/free-brands-svg-icons';
import {faArrowDown91, faArrowsToCircle, faCircle, faGamepad, faMinus} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'src/app/shared/cardgrid/card';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  faDocker = faDocker
  cards: Card[] = [
    new Card(faMinus, "le pong", "https://pong.lelar.ge", 'Play against an AI trained with reinforcement-learning.'),
    new Card(faCircle, "le circle", "https://github.com/le-tim/le_nn_from_scratch.git", 'Neuronal network to draw a unit circle.'),
    new Card(faArrowDown91, "le digits", "https://github.com/le-tim/le_digits.git", 'Classification of hand writen numbers.'),
    new Card(faArrowsToCircle, "le spiral", "https://github.com/le-tim/le_spiral.git", 'Classification of two spirals.'),
    new Card(faGamepad, "Night-Express", "https://night-express.lelar.ge", '"Escape-Room-Game" developed with Unity-3D.'),
    new Card(faDocker, "le dashboard", "le-dashboard", 'Overview of my docker-hosted services.'),
    new Card(faAngular, "le profile", "https://github.com/le-tim/le_profile", 'Angular project for the website "lelar.ge".'),


  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
