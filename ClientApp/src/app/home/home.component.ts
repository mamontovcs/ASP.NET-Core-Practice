import { ValueService } from './../services/value.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  values: string[] ;

  constructor(private valueService: ValueService) {
    this.GetValues();
  }

  GetValues(): void {
    this.valueService.GetValuesFromDataBase()
    .toPromise().then(res => this.values = res as string[]);
  }
}
