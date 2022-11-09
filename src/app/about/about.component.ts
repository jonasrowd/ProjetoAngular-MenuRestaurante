import { Component, OnInit } from "@angular/core";
import { expand, flyInOut } from "../animations/app.animation";

import { LeaderService } from "../services/leader.service";
import { Leader } from "../shared/leader";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leader: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe(leader => this.leader = leader);
  }

}
