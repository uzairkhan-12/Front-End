async function loadIncome(){
let result=await fetch('http://localhost:5000/Dashboard/get-income')

if(result.ok){
    let amount=await result.json();
    $("#income").text("PKR "+amount);
}
}
loadIncome();

async function loadExpanditure(){
    let result = await fetch('http://localhost:5000/Dashboard/get-expanditure')
    if(result.ok){
        let expanditure = await result.json();
        $("#expanditure").text("PKR "+expanditure)
    }
    else{
        console.log('error')
    }
}
loadExpanditure();