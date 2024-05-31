import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../services/posts.service";
import {PostsType} from "../../model/posts";
import {CategoryType} from "../../model/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit{
  visible: boolean = false;
  editLoading: boolean = false;
  post: PostsType | undefined;
  categories: CategoryType[] = [];
  @Input() id!: string

  showDialog() {
    this.visible = true;
  }

  formGroup: FormGroup;

  constructor(private postService: PostsService, private categoryService: CategoryService) {
    this.formGroup = new FormGroup({
      title: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)]),
      author: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)]),
      categoryName: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)]),
      content: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
    this.loadPostData();
    this.listCategory();
  }

  loadPostData(): void {
    this.postService.getPostId(this.id).subscribe({
      next: (response) => {
        this.post = response;
        this.formGroup.patchValue({
          title: response.title,
          author: response.author,
          categoryName: response.categoryName,
          content: response.content
        });

        this.formGroup.updateValueAndValidity();
      },
      error: (error) => console.log('Error:', error)
    });
  }
  editPost(): void {
    if (this.formGroup.valid && this.post) {
      this.editLoading = true;
      const updatedPost: PostsType = { ...this.post, ...this.formGroup.value };
      this.postService.editPost(this.post.id, updatedPost).subscribe({
        next: (response) => {
          this.formGroup.reset();
          this.postService.notifyPostAdded();
          this.visible = false;
        },
        error: (error) => console.log('Error:', error),
        complete: () => {
          this.editLoading = false;
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }

  listCategory(): void {
    this.categoryService.getCategory().subscribe({
      next: (response) => {
        this.categories = response;
        if (this.post) {
          this.formGroup.patchValue({
            categoryName: this.post.categoryName
          });
        }
      },
      error: (err) => console.log(err.message)
    });
  }
  get titleControl() {
    return this.formGroup.get('title') as FormControl;
  }

  get authorControl() {
    return this.formGroup.get('author') as FormControl;
  }

}
