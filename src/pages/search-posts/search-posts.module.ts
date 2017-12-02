import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPostsPage } from './search-posts';

@NgModule({
  declarations: [
    SearchPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPostsPage),
  ],
})
export class SearchPostsPageModule {}
