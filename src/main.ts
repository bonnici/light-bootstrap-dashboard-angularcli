import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

/*
TODO
----
- Make dashboard stuff into components
- Add routing and make other pages into components
- Change demo.js into ts code in the right files
- Add simple unit & e2e test
- Fix favicon?
- Move CSS into components? Use the SASS instead?
- Make components into pushstate?
*/
