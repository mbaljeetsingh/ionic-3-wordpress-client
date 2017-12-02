import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BlogProvider} from '../../providers/blog/blog';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  category;
  posts;

  constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
      this.category = this.navParams.get('category');
      this.blogProvider.getCategoryPosts(this.category).subscribe(data => {
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

}
