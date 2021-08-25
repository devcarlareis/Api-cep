import fetch from 'node-fetch';
import IAddress from '../Interfaces/AddressType';

export default class {
async getAddress(cep: number) {
  const address = await fetch('https://brasilapi.com.br/api/cep/v1/' + cep)
    .then(res => res.json())
    .then((json) => {
      return json
    });
    return address;
}
}