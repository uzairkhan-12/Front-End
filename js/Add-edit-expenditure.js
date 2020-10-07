$(()=>{

    $("#btnSave").on('click',async()=>{
    let ExpenditureTypeName=$("#txtIncome").val();
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

const fetchRecord= async (id) =>{
    let result=await fetch("http://localhost:5000/ExpenditureType/get-data-by-id?typeId="+id)
    if(result.ok){
        let data=await result.json();
        $("#txtIncome").val(data.expenditureTypeName);
    }
    }

let searchParams = new URLSearchParams(window.location.search)
if(searchParams.has('id')){
$("#action").text('Edit')
$("#btnSave").text('Update')
fetchRecord(searchParams.get('id'));
}
