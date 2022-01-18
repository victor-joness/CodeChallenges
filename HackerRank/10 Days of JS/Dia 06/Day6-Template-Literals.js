function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    let value = 16*area;
    
    let s1 = (perimeter + Math.sqrt(perimeter ** 2  - value)) / 4;
    let s2 = (perimeter - Math.sqrt(perimeter ** 2  - value )) / 4;
    let array = [s1, s2].sort();
    
    return array;
};


