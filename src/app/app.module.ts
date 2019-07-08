import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MzButtonModule, MzInputModule, MzNavbarModule, MzCardModule, MzCheckboxModule, MzSelectModule  } from 'ngx-materialize';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TicketsComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MzButtonModule,
    MzInputModule,
    MzNavbarModule,
    MzCardModule,
    MzCheckboxModule,
    MzSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
