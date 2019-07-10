import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  @Output() onChanged = new EventEmitter<Array<number>>();
  
  constructor() { }

  ngOnInit() {
    this.checkedCurrency = this.currencies[0];
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

  currencies : Array<Currency> = [
    {
      title: "RUB",
      value: "1"
    },
    {
      title: "USD",
      value: "1"
    },
    {
      title: "EUR",
      value: "1"
    }
  ];

  checkedCurrency: Currency;

  filterChange (values:any, type:string) {
    
    if(type = 'checkbox') {
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
    }
    else if(type='currency'){
      for(var i=0 ; i < this.currencies.length; i++) {
        if(this.currencies[i].value == values.currentTarget.value) {
          this.checkedCurrency = this.currencies[i];
      }
    }
    }
    
    this.onChanged.emit(this.checkedFilters, this.checkedCurrency);
  }

}
