import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoryType} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.api + '/category';
  constructor(private http: HttpClient) { }

  getCategory(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(this.apiUrl);
  }
}
