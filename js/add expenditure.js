async function loadExpanditure(){
let result=await fetch('http://localhost:5000/Expanditure/select')
if(result.ok){
    let jsonResult=await result.json();
    //console.log(jsonResult)
    jsonResult.map(x=>{
        const {id,name}=x;
        $("#expenditureTypeSelect").append(`<option value='${id}'>${name}</option>`)
    })
    //expenditureTypeSelect
}
}
loadExpanditure();

$("#btnSave").on('click',e=>{
    console.log('value is',$("#expenditureTypeSelect").val())
    console.log('amount is ',$("#amount").val())
})