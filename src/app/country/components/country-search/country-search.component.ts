import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {  } from "@angular/common/";

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styles: [
  ]
})
export class CountrySearchComponent implements OnInit {
  
  search: string = "";
  
  @Input() placeholder: string = "";
  @Output() onEnter    : EventEmitter<string> = new EventEmitter;
  @Output() onDebounce : EventEmitter<string> = new EventEmitter;

  debouncer: Subject<string> = new Subject();
  
  
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(200))
      .subscribe( value =>{
      this.onDebounce.emit( value );
    });
  }
  

  keyPressed() {
    this.debouncer.next( this.search );
  }

  searchCountry() {
    this.onEnter.emit( this.search );
  }
}
