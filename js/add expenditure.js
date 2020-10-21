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

$("#btnSave").on('click',async()=>{
    let TypeId = parseInt($("#expenditureTypeSelect").val());
    let amount = parseInt($("#amount").val());
    if(!amount){
        $("#warning").removeClass('d-none');
        return;
     }
    console.log('value is',$("#expenditureTypeSelect").val())
    console.log('amount is ',$("#amount").val())
    let result=await fetch('http://localhost:5000/Expanditure/epxanditure-with-amount',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          
          body:JSON.stringify({amount , TypeId})
    })
    if(result.ok){
        window.location.href='/';
    }
})
$("#amount").on('keyup',()=>{
    let amount = $("#amount").val();
    if(!amount){
        $("#warning").removeClass('d-none');  
    }else {
        $("#warning").addClass('d-none');
    }
})  
