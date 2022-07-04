import {Component, OnInit} from '@angular/core';
import {faDocker} from '@fortawesome/free-brands-svg-icons';
import {faGamepad, faMinus} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'src/app/shared/cardgrid/card';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  faDocker = faDocker
  cards: Card[] = [
    new Card(faGamepad, "Night-Express", "https://night-express.lelar.ge", '"Escape-Room-Game" developed with Unity-3D.'),
    new Card(faMinus, "Pong", "https://github.com/le-tim/le_pong.git", 'Play against an AI trained with reinforcement-learning (Q-learning).'),
    new Card(faDocker, "le dashboard", "le-dashboard", ' Overview of my docker-hosted services like cloud, git and password manager.'),


  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
