$(()=>{

    $("#btnSave").on('click',async()=>{
    let ExpenditureTypeName=$("#txtIncome").val();

    /*
    if(!ExpenditureTypeName || typeof(ExpenditureTypeName)!=="String"){
        $("#emailHelp").removeClass('d-none');
        return;
    }*/

    if(!ExpenditureTypeName.trim()){
      $("#emailHelp").removeClass('d-none');
      return;
   }
    
        let result=await fetch('http://localhost:5000/ExpenditureType/add',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({ExpenditureTypeName})
        })
        
     if(result.ok){
          window.location.href='/Expenditure-types.html';
        }else{
        }
        $("#txtIncome").val('')
    })
      
    })
      
    $("#txtIncome").on('keyup',()=>{
        let ExpenditureTypeName = $("#txtIncome").val();
        if(!ExpenditureTypeName.trim()){
            $("#emailHelp").removeClass('d-none');  
        }else {
            $("#emailHelp").addClass('d-none');
        }

})