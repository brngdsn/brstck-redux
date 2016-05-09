import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { BrstckAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(BrstckAppComponent, [
	HTTP_PROVIDERS,
	FIREBASE_PROVIDERS, defaultFirebase('https://brstck.firebaseio.com')
]);
