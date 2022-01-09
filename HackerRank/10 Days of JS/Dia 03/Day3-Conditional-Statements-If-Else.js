//exercicio for julia score

function isNumber(val){
    return typeof val === "number";
}

function getGrade(score){
    isNumber(score)?"":console.log("error");

    if((score < 0) || (score > 30)){
        console.log("error");
    }

    let grade;

    if( score >= 0 && score <= 5){
        return grade = "F";
    }
    else if( score > 5 && score <= 10){
        return grade = "E";
    }
    else if( score > 10 && score <= 15){
        return grade = "D";
    }
    else if( score > 15 && score <= 20){
        return grade = "C";
    }
    else if( score > 20 && score <= 25){
        return grade = "B";
    }
    else if( score > 25 && score <= 30){
        return grade = "A";
    }
}

console.log(getGrade(11));