import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BlogProvider} from '../../providers/blog/blog';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  posts;

  constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
    this.blogProvider.getPosts().subscribe(data => {
      console.log('Posts data:', data);
      this.posts = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  onSelectPost(post) {
      this.navCtrl.push('PostDetailPage', {post: post});
  }

  onGoToSearchPosts() {
      this.navCtrl.setRoot('SearchPostsPage');
  }
}
