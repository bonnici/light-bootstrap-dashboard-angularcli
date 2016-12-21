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
- Update map layout & size (and make sure map/sattelite option exists)
- Change src="{{x}}" to [src]="x" where possible
- Fix checkboxes not showing up if you navigate to the dashboard page
- Animate cards loading in (animations/trigger in component.ts files)
- Move CSS into components? Use the SASS instead?
- Make components into pushstate?
- Add simple unit & e2e test
*/
