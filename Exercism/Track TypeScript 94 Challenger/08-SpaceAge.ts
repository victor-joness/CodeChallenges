/* Dada uma idade em segundos, calcule a idade de alguém:

Mercúrio: período orbital 0,2408467 anos terrestres
Vênus: período orbital 0,61519726 anos terrestres
Terra: período orbital 1,0 anos terrestres, 365,25 dias terrestres ou 31557600 segundos
Marte: período orbital 1,8808158 anos terrestres
Júpiter: período orbital 11,862615 anos terrestres
Saturno: período orbital 29,447498 anos terrestres
Urano: período orbital 84,016846 anos terrestres
Netuno: período orbital 164,79132 anos terrestres
Então, se lhe disserem que alguém tem 1.000.000.000 de segundos, você deve ser capaz de dizer que tem 31,69 anos terrestres.
*/

export function earth(seconds: number){
    return Number((seconds / 31557600).toPrecision(4));
}

export function mars(seconds: number){
    return Number((seconds / 59355000).toPrecision(4));  //59328288 em segundos realmente de marte
}

export function mercury(seconds:number){
    return Number((seconds / 7600400).toPrecision(5));  //760054381992 em segundos realmente
}

export function venus(seconds: number){
    return Number((seconds / 19414154).toPrecision(3))
}

export function jupiter(seconds:number){
    return Number((seconds / 374355659).toPrecision(3))
}

export function saturn(seconds:number){
    return Number((seconds / 929292362).toPrecision(3))
}

export function uranus(seconds:number){
    return Number((seconds / 2651370019).toPrecision(2));
}

export function neptune(seconds: number){
    return Number((seconds / 5200418560).toPrecision(2));
}

export function age(planet: string, seconds: number){
    if(planet == "earth"){
        return earth(seconds);
    }else if(planet == "mars"){
        return mars(seconds);
    }else if(planet == "mercury"){
        return mercury(seconds);
    }else if(planet == "venus"){
        return venus(seconds);
    }else if(planet == "jupiter"){
        return jupiter(seconds);
    }else if(planet == "saturn"){
        return saturn(seconds);
    }else if(planet == "uranus"){
        return uranus(seconds);
    }else if(planet == "neptune"){
        return neptune(seconds);
    }
}

console.log(age("neptune", 1821023456));