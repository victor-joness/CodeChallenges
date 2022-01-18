//Neste desafio, aprendemos sobre JavaScript Dates . Confira o tutorial em anexo para mais detalhes.



function getDayName(dateString) {
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var date = new Date(dateString);
    
    let dayName = weekDays[date.getDay()];

    console.log(date.getDay())
    
    return dayName;
}

console.log(getDayName("11/10/2010"));

