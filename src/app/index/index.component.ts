import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  constructor(private ticketsService : TicketService) { }
  
  tickets: Array<Ticket>;

  ngOnInit() {
    this.getTickets();
  }

  getTickets () {
    this.ticketsService.getTickets().subscribe((data: any) =>  {
      if(data.tickets) {
        this.tickets = data.tickets;
      }
    });
  }

}
