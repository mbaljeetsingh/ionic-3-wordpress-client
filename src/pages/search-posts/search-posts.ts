import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BlogProvider} from '../../providers/blog/blog';

/**
 * Generated class for the SearchPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-posts',
  templateUrl: 'search-posts.html',
})
export class SearchPostsPage {
  posts;

  constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
      this.blogProvider.searchPosts('').subscribe(data => {
          // console.log('Posts data:', data);
          this.posts = data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPostsPage');
  }

  getPosts(event){
    console.log(event.target.value);
      this.blogProvider.searchPosts(event.target.value).subscribe(data => {
          // console.log('Posts data:', data);
          this.posts = data;
      })
  }

    onSelectPost(post) {
        this.navCtrl.push('PostDetailPage', {post: post});
    }

}
