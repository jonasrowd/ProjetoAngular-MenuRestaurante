import { BaseURL } from './../shared/baseurl';
import { Component, OnInit, Inject } from "@angular/core";

import { DishService } from "../services/dish.service";
import { LeaderService } from "../services/leader.service";
import { PromotionService } from "../services/promotion.service";
import { Dish } from "../shared/dish";
import { Leader } from "../shared/leader";
import { Promotion } from "../shared/promotion";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess: string;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);
  }

}
