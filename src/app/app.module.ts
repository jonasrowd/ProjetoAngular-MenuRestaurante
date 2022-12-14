import { ImgURL } from './shared/imgURL';
import { FeedbackService } from './services/feedback.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { BaseURL } from './shared/baseurl';
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
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from "@angular/common/http";
import { HighlightDirective } from './directives/highlight.directive';

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
    LoginComponent,
    HighlightDirective
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
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    FeedbackService,
    { provide: 'BaseURL', useValue: BaseURL },
    { provide: 'ImgURL', useValue: ImgURL}
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
