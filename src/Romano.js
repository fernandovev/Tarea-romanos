function numeros1_8(b){
    if(b===1){
        return "i";
    }
    if(b===2){
        return "ii";
    }
    if(b===3){
        return "iii";
    }
    if(b===4){
        return "iv";
    }
    if(b===5){
        return "v";
    }
    if(b===6){
        return "vi";
    }
    if(b===7){
        return "vii";
    }
    if(b===8){
        return "viii";
    }
}


function Romano(a) {
    let b;
    if(a<31 && a>0)
    {
        if(a<29 && a>18){

        }
        if(a<19 && a>8){
            let unidades=a%10;
            b = "X" + numeros1_8(unidades);
        }
        if(a<9 && a>0){
            b = numeros1_8(a);
        }
    }
    return b;
  }
  
  export default Romano;
  