import { DISHES } from "./../shared/dishes";
import { DishService } from "./../services/dish.service";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MenuComponent } from "./menu.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Observable, of } from "rxjs";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Dish } from "../shared/dish";
import { BaseURL } from "../shared/baseurl";
import { MatGridListModule } from "@angular/material/grid-list";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    const dishServiceStub = {
      getDishes: function (): Observable<Dish[]> {
        return of(DISHES);
      },
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([
          { path: "menu", component: MenuComponent },
        ]),
      ],
      declarations: [MenuComponent],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: "BaseURL", useValue: BaseURL },
      ],
    }).compileComponents();

    const dishService = TestBed.get(DishService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("o que o teste está testando no momento, neste caso a criação do componente Menu, se foi criado, sim ou não.", () => {
    expect(component).toBeTruthy();
  });

  it("carrega os quatro pratos", () => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[1].name).toBe(DISHES[1].name);
    expect(component.dishes[3].featured).toBeFalsy();
  });

  it("deve usar os pratos no template", () => {
    fixture.detectChanges();

    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css("h1"));
    el = de.nativeElement;

    expect(el.textContent).toContain(DISHES[0].name.toUpperCase());
  });
});
