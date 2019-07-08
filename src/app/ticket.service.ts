import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';
import { HttpClient } from '@angular/common/http';

interface Tickets {
  tickets : Array<Ticket>
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http : HttpClient) { }

  getTickets () {
      return this.http.get<Tickets>("./assets/tickets.json");
  }
}
