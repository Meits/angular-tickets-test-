import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http : HttpClient) { }

  getTickets () {
    return this.http.get<any>("./assets/tickets.json");
  }
}
