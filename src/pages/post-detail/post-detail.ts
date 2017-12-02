import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BlogProvider} from '../../providers/blog/blog';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {
  post;
  comments;
  post_comment;

  constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
    this.post_comment = 'post';
    this.post = this.navParams.get('post');
      this.blogProvider.getPostComments(this.post.id).subscribe(data => {
          console.log('Comments data:', data);
          this.comments = data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
  }

}
