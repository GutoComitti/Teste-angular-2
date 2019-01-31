import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

import { Address } from '../models/address.model';

@Injectable()
export class ViacepApiService {

	constructor(private http: HttpClient) {}

	buscarEndereco(cep: number) {
		const url = `https://viacep.com.br/ws/${cep}/json/`;
		return this.http.get<Address[]>(url);
	}
}