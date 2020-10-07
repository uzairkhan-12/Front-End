



$(()=>{


$("#btnSave").on('click',async()=>{
let amount=parseInt($("#txtIncome").val());

if(isNaN(amount) || amount<1){
    $("#emailHelp").removeClass('d-none');
    return;
}
try {
    let result=await fetch('http://localhost:5000/Income/addIncome',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          
          body:JSON.stringify({amount})
    })
    
 if(result.ok){
     // redirect to home screen
      window.location.href='/';
    }else{
        $("#errorMessage").removeClass('d-none');
        console.log(result)
    }
    $("#txtIncome").val('')
} catch (error) {
    $("#errorMessage").removeClass('d-none');
}
})

$("#txtIncome").on('keyup',()=>{
if(parseInt($("#txtIncome").val())<1){
    $("#emailHelp").removeClass('d-none');  
}else{
    $("#emailHelp").addClass('d-none');
}
    
})

})