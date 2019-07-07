import { Component } from '@angular/core';
import { Filter } from './models/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tickets';
  
  checkedFilters: Array<number> = [];

  filters : Array<Filter>= [
    {
      title: "Беза пересадок",
      value: "0"
    },
    {
      title: "1 пересадка",
      value: "1"
    },
    {
      title: "2 пересадки",
      value: "2"
    },
    {
      title: "3 пересадки",
      value: "3"
    }
  ];


  filterChange (values:any) {
    
    if(values.currentTarget.checked) {
      this.checkedFilters.push(values.currentTarget.value);
    }
    else {
      for(var i=0 ; i < this.checkedFilters.length; i++) {
          if(this.checkedFilters[i] == values.currentTarget.value) {
            this.checkedFilters.splice(i,1);
        }
      }
    }
    
  }
}
