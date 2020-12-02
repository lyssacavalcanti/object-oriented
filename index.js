// Create a class that works as a pattern to be followed.
class Cliente {
    nome;
    cpf;
}

class  ContaCorrente {
    agencia;
    saldo;

     sacar(valor){
         if(this.saldo >= valor) {
             this.saldo -= valor;
         }
     }
}

// Use the Class Cliente to create a new register of client inside a const.
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11155577788;

const cliente2 = new Cliente();
cliente2.nome = "Rosa";
cliente2.cpf = 33355577782;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);