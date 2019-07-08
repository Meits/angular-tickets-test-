import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass']
})

@Input("tickets")

export class TicketsComponent implements OnInit {

  @Input() tickets: Array<Ticket>; string;
  
  constructor() { }

  ngOnInit() {
  }

}
