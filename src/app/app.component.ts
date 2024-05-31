import {Component, OnInit} from '@angular/core';
import {PostsService} from "./services/posts.service";
import {PostsType} from "./model/posts";
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-blog';
  posts: PostsType[] = [];
  deleteLoading: boolean = false;
  constructor(private postService: PostsService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.listPosts();

    this.postService.postAdded().subscribe(() => {
      this.listPosts();
    });
  }

  listPosts() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (err) => console.log(err.message)
    })
  }

  remove(id: string) {
    this.deleteLoading = true
    this.postService.removePost(id).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: "Success",
          detail: 'Post deleted',
        })
        this.listPosts();
      },
      error: () => {},
      complete: () => {
        this.deleteLoading = false
      }
    })
  }
}
