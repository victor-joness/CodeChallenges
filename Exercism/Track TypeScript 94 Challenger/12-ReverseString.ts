/* Reverse a string

For example: input: "cool" output: "looc"

*/

export function reverse(string: string) {
    let resultado = ""
    for(let i = string.length - 1; i >= 0; i--){
        resultado = resultado.concat(string[i]);
    }

    return resultado;
}

console.log(reverse(""));