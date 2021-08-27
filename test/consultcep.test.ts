//import assert from "assert/strict"
import { strict as assert } from 'assert';
import Server from "../src/servers/server"


describe('Consulta cep', async () => {
 
  it('retornar um json com o endereço', async () => {
    const server = new Server()
    return assert.ok(server.execute(69050520));
  })
})