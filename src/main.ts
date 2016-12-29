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
- Refactor nav stuff into its own component (maybe entire nav ul with extra classes)
- Maybe move some component-specific CSS into components (e.g. sidebar image/color stuff)
- Test with different options in all components
- Run test & lint
- Test on FF + IE
*/
