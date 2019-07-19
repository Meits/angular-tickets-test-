import { Component, OnInit, Output, EventEmitter, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit, DoCheck,
OnChanges,
AfterContentInit, 
AfterContentChecked, 
AfterViewChecked, 
AfterViewInit {



  ngOnChanges() {
       
    this.log(`OnChanges`);
  }
  ngDoCheck() {
     
    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
     
    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
     
    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
     
    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
     
    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
      console.log(this.count + ". " + msg);
      this.count++;
  }

  
  @Output() onChanged = new EventEmitter<Array<number>>();
  
  constructor() { }

  ngOnInit() {
    this.checkedCurrency = this.currencies[0];
    this.log(`ngOnInit`);
  }

  checkedFilters: Array<number> = [];
  count:number=1;

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
    
    if(type =='checkbox') {
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
    else if(type=='currency'){
      
        if(this.currencies[values.currentTarget.value]) {
          this.checkedCurrency = this.currencies[values.currentTarget.value];
        }
    
    }

    //console.log(this.checkedCurrency);
    
    this.onChanged.emit(this.checkedFilters);
  }

}
