var intialPrice=document.querySelector("#intial-price");
var quantitystck=document.querySelector("#Quantity");
var currentPrice=document.querySelector("#current-price");
var checkBtn=document.querySelector("#submitbtn");
var output=document.querySelector("#outputbox");



checkBtn.addEventListener('click',clickhandler)

function clickhandler(){
    if(intialPrice.value >0 && quantitystck.value >0 && currentPrice.value >0 )
    {var ip=intialPrice.value;
        var qty=quantitystck.value;
        var curr=currentPrice.value;
    
        calculateprofitandloss(ip,qty,curr);}
        else if( intialPrice.value<0 || quantitystck.value<0 || currentPrice.value<0){ 
            alert("Negative value are not allowed")
        }else{
            alert("Please Enter valid information")
        }
    
}

function calculateprofitandloss(intial,quantity,current){
    if (intial>current){
        var loss=(intial-current) * quantity;
        var losspercentage=(loss/intial) * 100;

        output.innerText=`Your loss is ${loss} and your Loss-percentage is ${losspercentage.toFixed(2)}%😢`
        }else if(current>intial){
        var profit=(current-intial) * quantity;
        var profitpercentage=(profit/intial) * 100;

        output.innerText=`Your profit is ${profit} and your Profit-percentage is ${profitpercentage.toFixed(2)}%🤩`

}else{
    output.innerText="There is no loss no gain🙄"

    }
}