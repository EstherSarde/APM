import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';


import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';
import { WelcomeComponent } from './home/welcome.component';
import { SobreComponent } from './sobre/sobre.component';



registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SobreComponent
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'sobre', component: SobreComponent },
      { path: 'Welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
