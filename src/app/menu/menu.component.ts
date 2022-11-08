import { BaseURL } from './../shared/baseurl';
import { Component, Inject, OnInit } from "@angular/core";

import { DishService } from "../services/dish.service";
import { Dish } from "../shared/dish";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  constructor( private dishService: DishService, 
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe((dishes) => this.dishes = dishes);
  }

}
