import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = "https://restcountries.eu/rest/v2";


  constructor(private http: HttpClient) { }

  
  searchCountry( search: string ): Observable<Country[]> {
  const url = `${this.baseUrl}/name/${search}`;

    return this.http.get<Country[]>(url);
  }

  searchByCapital( search: string ): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${search}`;
  
    return this.http.get<Country[]>(url);
  }


  searchCountryByCode( code: string ): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${code}`;
  
    return this.http.get<Country>(url);
  }

  searchCountriesByRegion( region: string ): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
  
    return this.http.get<Country[]>(url);
  }
}
