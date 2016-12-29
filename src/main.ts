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
- Fix double scrollbar when sidebar is minimized & mobile navbar
- Move everything in light-bootstrap-dashboard.js into component code (test using new page as needed)
- Maybe move some component-specific CSS into components (e.g. sidebar image/color stuff)
*/
