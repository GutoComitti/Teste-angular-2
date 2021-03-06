import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Address } from '../shared/models/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {

  @Input() address: Address;
  @Input() requestFailed: boolean;
  
  constructor() { }
  
  ngOnInit() {
  
  }
}
