import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BlogProvider} from '../../providers/blog/blog';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories;
  constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
      this.blogProvider.getCategories().subscribe(data => {
          console.log('Categories data:', data);
          this.categories = data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

    onSelectCategory(category) {
        this.navCtrl.push('CategoryPage', {category: category});
    }
}
