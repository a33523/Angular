import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ReactiveFavoriteColorComponent } from './reactive-favorite-color/reactive-favorite-color.component';
import { TemplateFavoriteColorComponent } from './template-favorite-color/template-favorite-color.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

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
    HeroSearchComponent,
    OpenCloseComponent,
    ReactiveFavoriteColorComponent,
    TemplateFavoriteColorComponent,
    NameEditorComponent,
    ProfileEditorComponent,

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
    BrowserAnimationsModule,
    ReactiveFormsModule,

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
