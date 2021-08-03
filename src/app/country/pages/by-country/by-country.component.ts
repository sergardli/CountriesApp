import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: [ './by-country.component.css' ]
})
export class ByCountryComponent {

  search: string = "";
  isError: boolean = false;
  countries: Country[] = [];

  suggestedCountries: Country[] = [];


  constructor(private countryService: CountryService) { }

  searchCountry( search: string ) {
    this.isError = false;
    this.search = search;
    this.suggestedCountries = [];
    
    this.countryService.searchCountry( this.search )
      .subscribe( countries => {
        this.countries = countries;
      }, (error) => {
        console.info(error);

        this.countries = [];
        this.isError = true;
      });
  }

  suggestions(search: string) {
    this.isError = false;
    this.search = search;
    this.suggestedCountries = [];

    this.countryService.searchCountry( search )
      .subscribe( 
        countries => this.suggestedCountries = countries.splice(0,5),
        (err) => this.suggestedCountries = []
      );
  }


  openCountry( country: Country ) {
    console.log(country.name);
  }
}
