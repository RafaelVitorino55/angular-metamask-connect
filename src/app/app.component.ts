import { Component } from '@angular/core';
import { ContractService } from './contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-metamask';


  constructor(
    private readonly _contractService: ContractService
  ) { }

  public connect() {
    this._contractService.openMetamask()
  }
}
