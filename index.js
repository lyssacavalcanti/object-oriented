// Create a class that works as a pattern to be followed.
class Cliente {
    nome;
    cpf;
}

class  ContaCorrente {
    agencia;
    // #saldo = 0 
    _saldo;

     sacar(valor){
         if(this._saldo >= valor) {
             this._saldo -= valor;
             return valor;
         }
     }

    depositar(valor){
        if(valor <= 0) return;
            this._saldo += valor; 
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
contaCorrenteRicardo._saldo = 0;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);