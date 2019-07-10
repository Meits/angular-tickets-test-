import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
import { TicketService } from '../ticket.service';
import { Currency } from '../models/currency';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  constructor(private ticketsService : TicketService) { }
  
  ticketsSource: Array<Ticket>;
  checkedFilters: Array<number>

  ngOnInit() {
    this.getTickets();
  }

  onChanged(checkedFilters: Array<number>, checkedCurrency: Currency){
      this.checkedFilters = checkedFilters;
  }

  get tickets() {
    let tmp = [];
    
    if(this.checkedFilters && this.checkedFilters.length > 0) {
      for(var i=0 ; i < this.ticketsSource.length; i++) {
        console.log(this.ticketsSource[i].stops);
        console.log(this.checkedFilters);
        if(this.checkedFilters.indexOf(this.ticketsSource[i].stops) >= 0) {
          tmp.push(this.ticketsSource[i]);
        }
      }
    }
    else {
      tmp = this.ticketsSource;
    }
    return  tmp;
  }

  getTickets () {
    this.ticketsService.getTickets().subscribe((data: any) =>  {
      if(data.tickets) {
        this.ticketsSource = data.tickets;
      }
    });
  }

}
