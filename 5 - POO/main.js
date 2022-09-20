/*
Paradgima estruturado imperativo
function entrada(){ 
    var idade = prompt("Digite a idade");
    return idade;
}

function saudacao(idade){
    console.log("Seja bem vindo. Sua idade é: " + idade);
}
saudacao(entrada());
*/

//CRIACAO DAS ESTRUTURAS!!!!!!!!!!
class Pessoa{
    //método construtor
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    //método
    saudar(){
        console.log("Seja bem vindo: " + this.nome + ". Você tem " + this.idade);
    }
}
function Pessoa2(nome,idade){
    this.nome = nome;
    this.idade = idade;
}
Pessoa2.prototype.phodace = function(){
    return "Saudar";}


class Calculadora{
    constructor(op1,op2){
        this.op1 = op1;
        this.op2 = op2;
    }

    somar(){
        return `${this.op1 + this.op2}`;
    }
}


class Calculadora2{   
    somar(op1,op2){
        return `${op1 + op2}`;
    }
}




// USO MAIN
var calc = new Calculadora(2,2);
console.log(calc.somar());