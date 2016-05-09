import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'brstck-app',
  templateUrl: 'brstck.component.html',
  styleUrls: ['brstck.component.css'],
  directives: [
    MdToolbar
  ]
})
export class BrstckAppComponent {
  title = 'brstck works!';
}
