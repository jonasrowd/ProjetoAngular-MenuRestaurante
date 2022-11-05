import "hammerjs";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule } from "@angular/material";
import { AboutComponent } from './about/about.component';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ContactComponent } from './contact/contact.component';
import { DishService } from "./services/dish.service";
import { DishdetailComponent } from "./dishdetail/dishdetail.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { LeaderService } from "./services/leader.service";
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from "@angular/material/button/";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MenuComponent } from "./menu/menu.component";
import { NgModule } from "@angular/core";
import { PromotionService } from "./services/promotion.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
