/* 
	
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=9
I=3 J=8
I=3 J=7
...
I=9 J=15
I=9 J=14
I=9 J=13
*/

for(let i = 1; i <= 9; i += 2){
    for(let j = 6; j > 3; j--){
        console.log("I=" + i + " J=" + (i +j));
    }
}