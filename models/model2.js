let showDays = ["", "", "", ""]
let days = ["", "", "", ""]


for(let i = 0; i < 4; i++){
    showDays[i] = document.getElementById(`showDay${i}`);
    days[i] = document.getElementById(`day${i}`).style;
}


for(let j = 0; j <  4; j++){
    showDays[j].onclick = () =>{
        for(let k = 0 ; k < 4;k++){
            if(j === k ){
                days[k].display = "block";
            }else{
                days[k].display = "none";
            }
        }
    }
}