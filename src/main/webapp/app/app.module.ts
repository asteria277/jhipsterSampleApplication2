import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleApplication2SharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplication2AppRoutingModule} from './app-routing.module';
import { JhipsterSampleApplication2HomeModule } from './home/home.module';
import { JhipsterSampleApplication2AdminModule } from './admin/admin.module';
import { JhipsterSampleApplication2AccountModule } from './account/account.module';
import { JhipsterSampleApplication2EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleApplication2AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplication2SharedModule,
        JhipsterSampleApplication2HomeModule,
        JhipsterSampleApplication2AdminModule,
        JhipsterSampleApplication2AccountModule,
        JhipsterSampleApplication2EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplication2AppModule {}
