import { Component } from '@angular/core';

import { RandomPage } from '../random/random';
import { ContactPage } from '../contact/contact';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = RandomPage;
  // tab3Root = ContactPage;

  constructor() {

  }
}
