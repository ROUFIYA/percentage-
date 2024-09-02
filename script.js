   const form = document.getElementById("form");

   form.addEventListener("submit" ,e =>{
    e.preventDefault()
    


    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var num3 = document.getElementById("input3").value;
    var radioNormal = document.getElementById("normal").checked;
    var radioAdd = document.getElementById("add").checked;
    var radioSubstract = document.getElementById("substract").checked;
    console.log(radioNormal);
    console.log(radioAdd);
    console.log(radioSubstract);
    
    
    
    if(num1 != '' && num2 != ''){
        if(radioNormal == true){
            var rse = ((num1/100)*num2).toFixed(3);
            document.getElementById("input3").value = rse;
        }else if(radioAdd == true){
            var rse = ((num1/100)*num2).toFixed(3);
            rse = Number(num1) + Number(rse);
            document.getElementById("input3").value = rse;
        }else if(radioSubstract == true){
            var rse = ((num1/100)*num2).toFixed(3);
            rse = Number(num1) - Number(rse);
            document.getElementById("input3").value = rse;
        }
    }
    
    
    else if(num1 != '' && num3 != ''){
        if(radioNormal == true){
        var rse = ((num3/num1)*100).toFixed(3);
        document.getElementById("input2").value = rse;
        }
        else if(radioAdd == true){
            var rse = (((num3-num1)*100)/num1).toFixed(3);
            document.getElementById("input2").value = rse;
        }else if(radioSubstract == true){
            var rse = (((Number(num3)+Number(num1))*100)/num1).toFixed(3);
            document.getElementById("input2").value = rse;

        }
    }
    
    
    else if(num2 != '' && num3 != ''){
        if(radioNormal == true){
            var rse = ((num3/num2)*100).toFixed(3);
            document.getElementById("input1").value = rse;
        }else if(radioAdd == true){
            var rse = ((Number(num3)*100)/(Number(num2)+100)).toFixed(3);
            document.getElementById("input1").value = rse;
        }else if(radioSubstract == true){
            var rse = ((Number(num3)*100)/-(Number(num2)-100)).toFixed(3);
            document.getElementById("input1").value = rse;
        }
    }
    
    
    
    
   
   })

   
    

    