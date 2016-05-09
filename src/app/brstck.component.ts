import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'brstck-app',
  templateUrl: 'brstck.component.html',
  styleUrls: ['brstck.component.css'],
  directives: [
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
}
