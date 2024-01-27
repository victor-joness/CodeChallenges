export function score(x: number, y: number): number {
    //a questao necessita apenas do conhecimento da formula de calcular a distancia entre 2 pontos, e ver se está dentro do raio

    //como é 0 o centro, então fica só x^2 e y^2
    var distanciaAoCentro = Math.sqrt(x*x + y*y);

    // Verificar se a distância está dentro do raio correspondente
    var dentroCirculo1 = distanciaAoCentro <= 1;
    var dentroCirculo2 = distanciaAoCentro <= 5;
    var dentroCirculo3 = distanciaAoCentro <= 10;

    if(dentroCirculo1) return 10;
    if(dentroCirculo2) return 5;
    if(dentroCirculo3) return 1;
    return 0;
}