function bill(){
    let unit = Number(document.getElementById("myid").value);
    let amt;
    let diff;
    console.log(unit);
    if(unit<=50){
        amt = unit*0.75;
    }
    else if(unit>50 && unit<=150){
        diff=unit-50;
        amt = (50*0.75) + (diff*1.00); 
    }
    else if(unit>150 && unit<=250){
        diff=unit-150;
        amt = (50*0.75) + (diff*1.30) + (100*1.00); 
    }
    else{
        diff=unit-250;
        amt = (50*0.75) + (diff*1.50) + (100*1.00) + (100*1.30); 
    }
    document.getElementById("result").innerHTML="Your Bill Amount is Rs." + amt;
}