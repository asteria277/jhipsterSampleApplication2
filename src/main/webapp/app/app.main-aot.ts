import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { JhipsterSampleApplication2AppModuleNgFactory } from '../../../../build/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(JhipsterSampleApplication2AppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
