import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 *  NgModel lives here
 */
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({

  /**
 *宣告跟 view 有關的元件
 *
 * @export
 * @class AppModule
 */
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],

  /**
 *匯入此模組會用到的其他模組名稱
 *
 * @export
 * @class AppModule
 */
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
   HttpClientInMemoryWebApiModule.forRoot(
   InMemoryDataService, { dataEncapsulation: false }
)
  ],

   /**
 *註冊服務的提供者
 *
 * @export
 * @class AppModule
 */
  providers: [],

   /**
 *啟動根元件
 *
 * @export
 * @class AppModule
 */
  bootstrap: [AppComponent]


})
export class AppModule { }
