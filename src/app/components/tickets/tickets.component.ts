import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { MzModalService } from 'ngx-materialize';
import { OrderTicketComponent } from '../modals/order-ticket/order-ticket.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass']
})

@Input("tickets")

export class TicketsComponent implements OnInit {

  @Input() tickets: Array<Ticket>; string;
  
  constructor(private modalService: MzModalService) { }

  ngOnInit() {
  }

  buttonClickhandler(ind) {
    this.modalService.open(OrderTicketComponent,{});
  }

}
