import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  @Output() onChanged = new EventEmitter<Array<number>>();
  
  constructor() { }

  ngOnInit() {
  }

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
      this.checkedFilters.push(parseInt(values.currentTarget.value));
    }
    else {
      for(var i=0 ; i < this.checkedFilters.length; i++) {
          if(this.checkedFilters[i] == values.currentTarget.value) {
            this.checkedFilters.splice(i,1);
        }
      }
    }
    this.onChanged.emit(this.checkedFilters);
  }

}
