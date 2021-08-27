import Server from '../src/servers/server';

const server = new Server();

test('the data is peanut butter', async () => {
   const cep = 7097987
    return server.execute(cep).then(data => {
        expect(data).toBe(JSON);
      });
  });