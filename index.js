class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11155577788;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = "Rosa";
cliente2.cpf = 33355577782;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);