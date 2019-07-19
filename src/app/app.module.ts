import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MzButtonModule, MzInputModule, MzNavbarModule, MzCardModule, MzCheckboxModule, MzSelectModule, MzModalModule, MzToastModule  } from 'ngx-materialize';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OrderTicketComponent } from './components/modals/order-ticket/order-ticket.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TicketsComponent,
    FiltersComponent,
    OrderTicketComponent,
    ProfileComponent,
    AboutComponent,
    ProductComponent
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
    HttpClientModule,
    MzModalModule,
    MzToastModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderTicketComponent],
})
export class AppModule { }
