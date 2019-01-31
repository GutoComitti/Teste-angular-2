export class Address {
  constructor(
	private cep: string,
	private logradouro: string,
	private complemento: string,
	private bairro: string,
	private localidade: string,
	private uf: string,
	private unidade: string,
	private ibge: string,
	private gia: string
  ){}
}