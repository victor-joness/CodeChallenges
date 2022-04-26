/* 
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

const funcaoDaSorte2 = (numero:number) => {
    let numerosorteado = Number((Math.random() * (10 - 1) + 1).toFixed());
    
    if(numerosorteado == numero){
        return `Parabéns! O número sorteado foi o ${numerosorteado}`
    }else{
        return `Que pena! O número sorteado foi o ${numerosorteado}`
    }
}

console.log(funcaoDaSorte2(10));
console.log(funcaoDaSorte2(5));
console.log(funcaoDaSorte2(4));
