import fetch from 'node-fetch';
import IAddress from '../Interfaces/AddressType';

export default class {
    async getAddress(): Promise<IAddress> {
        const Address = await fetch('https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/{cep}'
        ).then(res => res.json());
        return Address;
} 
}