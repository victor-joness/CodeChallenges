//exercicio de contagem 


function getCount(objects) {
    let conta = 0;
    for(let i = 0; i < objects.length; i++){
        if( (objects[i].x) == (objects[i].y)){
            conta++
        }
    }
    return conta;
}
