function Currency(){
    y = document.getElementById("converter").value;
    return y;
    }

     
    function Calculate(){
    y = Currency();
   
    
     
    x = document.getElementById("value1").value;
    z=document.getElementById("converter1").value;
    
     
    if(x == ""){
    document.getElementById("value2").value = "";
    }else{
    switch(y){
    case "Dollar":
      console.log(y+"to"+ z +"="+x)
    document.getElementById("value2").value = Dollarfun(x,z);
    console.log(Dollarfun(x,z))

    break;
          case "usd":
    document.getElementById("value2").value = usdfun(x,z);
    break;
          case "Pound":
    document.getElementById("value2").value = Poundfun(x,z);
    break;
     
    case "Euro":
    document.getElementById("value2").value = Eurofun(x,z);
    break;
    case "INR":
    document.getElementById("value2").value = INRfun(x,z);
    break;
    

    }
    }
    }


    function Dollarfun(amount,type)
{ 
    if(type=="usd"){
        
        return  parseFloat(amount) * 0.71;
        
    }
    if(type=="Pound"){
        return  parseFloat(amount) * 0.57;
        

    }
    if(type=="Euro")
    {
        return  parseFloat(amount) * 0.65;

    }
        
    if(type=="INR"){
     return parseFloat(amount) * 54.12;
     }
     if(type=="Dollar")
     {
         return parseFloat(amount)*1;
         
     }
}
function Eurofun(amount,type)
{
    if(type=="Dollar"){
        return parseFloat(amount) *1.53;
        
    }
    if(type=="Pound"){
     
        return parseFloat(amount) * 0.87;

    }
    if(type=="usd")
    {
        return  parseFloat(amount) * 1.08;

    }
        
    if(type=="INR"){
     return parseFloat(amount) * 83.22;
     }
     
     if(type=="Euro")
     {
         return parseFloat(amount)*1;
     }
   
 
}
function INRfun(amount,type)
{
    if(type=="Dollar"){
        return parseFloat(amount) * 0.018;
        
    }
    if(type=="Euro"){
     
        return parseFloat(amount) * 0.012;

    }
    if(type=="usd")
    {
        return  parseFloat(amount) * 0.013;

    }
        
    if(type=="Pound"){
     return parseFloat(amount) * 0.011;
     }
     if(type=="INR")
     {
         return parseFloat(amount)* 1.00;
     }
 
}

function Poundfun(amount,type)
{
    if(type=="Dollar"){
        return parseFloat(amount) * 1.76;
        
    }
    if(type=="Euro"){
     
        return parseFloat(amount) * 1.14;

    }
    if(type=="usd")
    {
        return  parseFloat(amount) * 1.24;

    }
        
    if(type=="INR"){
     return parseFloat(amount) * 83.22;
     }
     if(type=="Pound")
     {
         return parseFloat(amount)*1;
     }

   
 
}




function usdfun(amount,type)
{
    if(type=="Dollar"){
        return parseFloat(amount) * 1.42;
        
    }
    if(type=="Euro"){
     
        return parseFloat(amount) * 0.9;

    }
    if(type=="INR")
    {
        return  parseFloat(amount) * 76.78;

    }
        
    if(type=="Pound"){
     return parseFloat(amount) * 0.81;
     }
     if(type=="usd")
     {
         return parseFloat(amount)*1;
     }
   
 
}
