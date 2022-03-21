/* Dado um momento, determine o momento que ocorreria após um gigasegundo passar.

Um gigasegundo é 10^9 (1.000.000.000) segundos.

*/
export class Gigasecond2 {
    currentDate: Date;

    constructor(currentDate: Date) {
        this.currentDate = currentDate
    }

    public date(): Date {
        let gigaseconds = Math.pow(10,12)
        return new Date(this.currentDate.valueOf() + gigaseconds)
    }
}

let nova = new Gigasecond2(new Date(Date.UTC(2015, 8, 14)))

console.log(nova.date())
console.log(new Date(Date.UTC(2047, 4, 23, 1, 46, 40)))