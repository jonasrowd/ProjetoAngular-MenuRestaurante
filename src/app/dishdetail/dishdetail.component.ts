import { Location } from "@angular/common";
import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Comment } from "../shared/comment";
import { DishService } from "../services/dish.service";
import { Dish } from "../shared/dish";
import { flyInOut, visibility, expand } from "../animations/app.animation";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  // tslint:disable-next-line:use-host-property-decorator
  animations:[
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {

  @ViewChild("cform") commentFormDirective;

  dish: Dish;
  dishcopy: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  comment: Comment;
  errMess: string;
  visibility = "shown";
  favorite = false;
  formErrors = {
    'author': "",
    'comment': "",
  };

  validationMessages = {
    'author': {
      'required': "Name is required.",
      'minlength': "Name must be at least 2 characters long.",
      'maxlength': "Name cannot be more than 25 characters long.",
    },
    'comment': {
      'required': "Comment is required.",
    },
  };

  // date: Date = new Date(); Instanciei a data assim e coloquei diretamente no HTML o que resolvia o problema anteriormente

  commentForm: FormGroup;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject("BaseURL") private BaseURL,
    @Inject("ImgURL") private ImgURL) {}

  ngOnInit() {
    this.createForm();

    this.dishService
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
    this.route.params
      .pipe(
        switchMap((params: Params) => { this.visibility ='hidden'; return this.dishService.getDish(params["id"]); }))
      .subscribe(
        dish => {
          this.dish = dish;
          this.dishcopy = dish;
          this.setPrevNext(dish.id); this.visibility = 'shown';
        },
        errmess => this.errMess = <any>errmess
      );
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      rating: [5],
      comment: ["", Validators.required],
    });

    this.commentForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    console.log(this.comment);
    this.dishcopy.comments.push(this.comment);
    this.dishService.putDish(this.dishcopy)
    .subscribe(dish => {
      this.dish = dish; this.dishcopy = dish;
    },
    errmess => {this.dish = null; this.dishcopy = null; this.errMess = <any>errmess;});
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      author: "",
      rating: 5,
      message: "",
    });

  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }
}
