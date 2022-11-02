import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button/"

import "hammerjs";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from "./services/dish.service";


@NgModule({
  declarations: [AppComponent, MenuComponent, DishdetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    DishService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
