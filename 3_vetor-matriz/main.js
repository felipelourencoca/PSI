//Vetores e matrizes
var vetor = [];

vetor = [1,2,3,4,5];

for(var i = 0; i < vetor.length ; i++){
    vetor[i] = vetor[i] + 1;
}

//console.log(vetor);

var matriz  = [[10,15],
               [20,25],       
              ]

/*
for(var linha = 0; linha < 2; linha ++){
      for(var coluna = 0; coluna < 2; coluna ++){
        console.log(matriz[linha][coluna]);
      }      
}
*/

/*

for(var linha = 0; linha < matriz.length ; linha ++){
    var linhaValores = matriz[linha];
    var tamanhoColuna = linhaValores.length;

    // var tamanhoColuna = matriz[linha].length;
    for(var coluna = 0; coluna < tamanhoColuna ; coluna ++){
      console.log(matriz[linha][coluna]);
    }      
}
console.table(matriz)
*/

/*
Implemente um algoritmo que receba o tamanho de um vetor,
crie um vetor deste tamanho com elementos dados pelo usuário.
*/

var tamanho = parseInt(prompt("Digite o tamanho do vetor"));
var vetor = Array(tamanho);

for(var i = 0; i < tamanho; i ++){
    var valorDigitado = parseFloat(prompt("Digite o valor " + (i + 1)));
    vetor[i] = valorDigitado;
    //vetor.push(valorDigitado);
}

for(var i =0; i < vetor.length; i ++){
    console.log(vetor[i]);
}
