import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../services/posts.service";
import {PostResponse, PostsType} from "../../model/posts";
import {CategoryService} from "../../services/category.service";
import {CategoryType} from "../../model/category";
import {MessageService} from "primeng/api";
import {ToastAlertService} from "../../shared/toast-alert.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  providers: [ToastAlertService, MessageService],
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{
  visible: boolean = false;
  addLoading: boolean = false;
  formGroup: FormGroup;
  categories: CategoryType[] = [];

  constructor(private postService: PostsService, private categoryService: CategoryService, private messageService: ToastAlertService) {
    this.formGroup = new FormGroup({
      title: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)]),
      author: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)]),
      categoryName: new FormControl<string | null>(null, [Validators.required]),
      content: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
     this.listCategory();
    }

  showDialog() {
    this.visible = true;
  }

  addPost(): void {
    if (this.formGroup.valid) {
      this.addLoading = true;
      const newPost = this.formGroup.value as PostResponse;
      newPost.categoryName = this.formGroup.value.categoryName.name
      this.postService.addPost(newPost).subscribe({
        next: (response) => {
          this.formGroup.reset();
          this.postService.notifyPostAdded();
          this.visible = false;
          alert("Post Added")
        },
        error: (error) => console.log('Error:', error),
        complete: () => {
          this.addLoading = false;
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }

  listCategory(): void {
    this.categoryService.getCategory().subscribe({
      next: (response) => {
        this.categories = response
      },
      error: (err) => console.log(err.message)
    })
  }

  get titleControl() {
    return this.formGroup.get('title') as FormControl;
  }

  get authorControl() {
    return this.formGroup.get('author') as FormControl;
  }


}
