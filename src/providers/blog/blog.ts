import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogProvider {
  api_url: string = environment.site_url+environment.api;

  constructor(public http: HttpClient) {
    console.log('Hello BlogProvider Provider', this.api_url);
  }

  getPosts(){
    return this.http.get(`${this.api_url}/posts`);
  }

  getCategories(){
      return this.http.get(`${this.api_url}/categories`);
  }

  getCategoryPosts(category: any) {
      return this.http.get(`${this.api_url}/posts?categories=${category.id}`);
  }
}
