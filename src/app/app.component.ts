import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


import { ViacepApiService } from './shared/services/viacep-api.service';
import { Address } from './shared/models/address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor (private viacepApiService: ViacepApiService) {}

	address: Address;

	@ViewChild('f') form: NgForm;

	onSubmit() {
		this.viacepApiService.buscarEndereco(this.form.value.cep)
		.subscribe(
			(response) => {
				console.log(response);
				this.address = response;
			}
		);
	}
}