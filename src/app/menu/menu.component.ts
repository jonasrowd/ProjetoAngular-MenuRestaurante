import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;


  constructor( private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
    .then((dishes) => this.dishes = dishes);
  }

  onSelectd(dish: Dish) {
    this.selectedDish = dish;
  }

}
