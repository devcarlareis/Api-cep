import IAddress from '../modules/Api-cep/Interfaces/AddressType';
import apiCep from '../modules/Api-cep/services/ConsultaCepService';

export default class Server {
    async execute(cep: number): Promise<IAddress> {
      const sercicecep = new apiCep();
      const newCep = await sercicecep.getAddress(cep);
      return newCep;
    }

}