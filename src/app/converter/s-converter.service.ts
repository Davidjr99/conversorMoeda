import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SConverterService {
  private host: string = `https://api.frankfurter.app`;

  constructor(private readonly http: HttpClient) { }

  getCurrencies(){
    return this.http.get(`${this.host}/currencies`);
  }

  convertValue(amount: string, from: string, to: string){
    return this.http.get(`${this.host}/latest?amount=${amount}&from=${from}&to=${to}`);
  }
}
