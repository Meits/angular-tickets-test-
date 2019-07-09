import { Component, OnInit, Input } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ngx-materialize';

import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-order-ticket',
  templateUrl: './order-ticket.component.html',
  styleUrls: ['./order-ticket.component.sass']
})
export class OrderTicketComponent extends MzBaseModal implements OnInit {

  constructor() {
    super();
  }

  @Input() ticket: Ticket;

  count: Number = 1;

  ngOnInit() {
    console.log(this.ticket)
  }

}
