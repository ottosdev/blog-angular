import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PostResponse, PostsType} from "../model/posts";
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl = environment.api + "/post";
  private postAddedSubject: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsType[]> {
    return this.http.get<PostsType[]>(this.apiUrl);
  }

  addPost(post: PostResponse): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.apiUrl, post);
  }

  editPost(id: string, post: PostsType): Observable<PostsType> {
    return this.http.put<PostsType>(this.apiUrl + '/' + id, post);
  }

  removePost(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id)
  }

  getPostId(postId: string): Observable<PostsType> {
    return this.http.get<PostsType>(this.apiUrl + '/' + postId);
  }

  postAdded(): Observable<void> {
    return this.postAddedSubject.asObservable();
  }

  notifyPostAdded() {
    this.postAddedSubject.next();
  }
}
