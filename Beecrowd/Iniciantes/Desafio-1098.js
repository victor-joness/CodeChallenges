/* 
I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=?
*/

for(let i = 0; i <= 2; i += 0.2){
    for(let j = 1; j <= 3; j++){
        if(i % 1 == 0){
            console.log("I=" + i + " J=" + (i +j));
        }else {
            if(i.toFixed(1) == 2.0){
                console.log("I=" + i.toFixed(0) + " J=" + (i +j).toFixed(0));
            }else{
                console.log("I=" + i.toFixed(1) + " J=" + (i +j).toFixed(1));
            }
        }
    }
}