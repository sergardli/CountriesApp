import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  
  search: string = "";
  isError: boolean = false;
  countries: Country[] = [];


  constructor(private countryService: CountryService) { }

  searchCountry( search: string ) {
    this.isError = false;
    this.search = search;
    
    this.countryService.searchByCapital( this.search )
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
  }
}
