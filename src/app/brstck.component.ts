import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Stck} from './shared/stck.model';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'brstck-app',
  templateUrl: 'brstck.component.html',
  styleUrls: ['brstck.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdInput,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_LIST_DIRECTIVES
  ],
  providers: [
    MdIconRegistry
  ]
})
export class BrstckAppComponent {
  title = 'brstck works!';
  stcks: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.stcks = af.database.list('/stcks');
  }
  add(stck: Stck) {
    this.stcks.push(stck);
  }
}
