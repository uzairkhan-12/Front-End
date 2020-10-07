async function loadIncome(){
let result=await fetch('http://localhost:5000/Dashboard/get-income')

if(result.ok){
    let amount=await result.json();
    $("#income").text("PKR "+amount);
}
}
loadIncome();
