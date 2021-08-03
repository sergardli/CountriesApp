import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }

  `]
})
export class ByRegionComponent {

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countriesService: CountryService){}

  
  activateRegion( region: string ) {

    if (region === this.activeRegion) {
      return;
    } 

    this.activeRegion = region;
    this.countries = [];

    this.countriesService.searchCountriesByRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      });
    
  }


  getButtonClass( region: string ) {
    return (region === this.activeRegion)
      ? "btn btn-primary"
      : "btn btn-outline-primary";
  }
}
