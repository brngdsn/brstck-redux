import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

@Component({
  moduleId: module.id,
  selector: 'brstck-app',
  templateUrl: 'brstck.component.html',
  styleUrls: ['brstck.component.css'],
  directives: [
    MdToolbar,
    MD_SIDENAV_DIRECTIVES
  ]
})
export class BrstckAppComponent {
  title = 'brstck works!';
}
