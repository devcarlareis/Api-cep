import * as readline from 'readline';
import Server from './servers/server';

const server = new Server();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Digite o seu cep', cep => {
            const cepInt = (parseInt(cep));
            const newcep = server.execute(cepInt).then(cep => {
                console.log(cep)
            })
            return newcep;
        });