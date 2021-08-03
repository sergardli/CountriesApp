import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country !: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({country}) => this.countryService.searchCountryByCode(country) ),
        tap ( console.log )
      )
      .subscribe( country => {
        this.country = country;
      });
    /*
    this.activatedRoute.params
      .subscribe( ( {country} ) => {

        console.log(country);

        this.countryService.searchCountryByCode( country )
          .subscribe( (country) => {
            this.country = country;
          });
      });
      */
  }
}
