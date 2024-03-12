import { SConverterService } from './s-converter.service';
import { Component } from '@angular/core';

type convertedObject = {
  amount: number;
  base: string;
  date: string;
  rates: object;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {

  currencies: string[] = [];

  fromCurrency: string = '';
  toCurrency: string = '';
  amount: string = '';

  convertedAmount: string = '';

  constructor (private SConverterService: SConverterService){
    this.getCurrencies();
  }

  getCurrencies(){
    this.SConverterService.getCurrencies().subscribe({
      next: (info: object) => {
        const currencies = info as string[];

        this.currencies = currencies;
      }
    })
  }

  convert(){
    if (this.toCurrency === ''){
      this.toCurrency = 'USD';
    }

    this.SConverterService.convertValue(this.amount, this.fromCurrency, this.toCurrency).subscribe({
      next: (result: object) => {
        const converted = result as convertedObject;

        const amountConverted: string = Object.entries(converted.rates)[0][1];
        const amountFormated = Number(amountConverted).toFixed(2);

        this.convertedAmount = `${this.amount} ${this.fromCurrency} is equal to ${amountFormated} ${this.toCurrency}`;
      }
    });
    console.log(this.amount);
    console.log(this.fromCurrency);
    console.log(this.toCurrency);
  }

}
