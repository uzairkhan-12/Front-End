$(()=>{
    $("#btnSave").on('click',async()=>{
    let ExpenditureTypeName=$("#expenditureTypeLabel").val();
    if(!ExpenditureTypeName.trim()){
      $("#warning").removeClass('d-none');
      return;
   }
   let idForUpdate = parseInt(searchParams.get('id'));
   
   if(idForUpdate){
       updateData(idForUpdate)
   }
   else{
       addData()
   }
})

})
    $("#expenditureTypeLabel").on('keyup',()=>{
        let ExpenditureTypeName = $("#expenditureTypeLabel").val();
        if(!ExpenditureTypeName.trim()){
            $("#warning").removeClass('d-none');  
        }else {
            $("#warning").addClass('d-none');
        }

})

    const fetchRecord= async (id) =>{
    let result=await fetch("http://localhost:5000/ExpenditureType/get-data-by-id?typeId="+id)
    if(result.ok){
        let data=await result.json();
        $("#expenditureTypeLabel").val(data.expenditureTypeName);
    }
    }

let searchParams = new URLSearchParams(window.location.search)
console.log(searchParams);
if(searchParams.has('id')){
$("#action").text('Edit')
$("#btnSave").text('Update')
fetchRecord(searchParams.get('id'));
}
const addData = async() => {
    let ExpenditureTypeName = $("#expenditureTypeLabel").val();
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
        console.log("error");
    }
    $("#expenditureTypeLabel").val('')

}
const updateData =  async(id) => {
    let ExpenditureTypeName = $("#expenditureTypeLabel").val();
    let result=await fetch("http://localhost:5000/ExpenditureType/update", {
    method : 'POST' , 
    headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({Id:parseInt(id),ExpenditureTypeName})
})  
      if(result.ok){
            let data=await result.json();
            $("#expenditureTypeLabel").val(data.expenditureTypeName);
            window.location.href='/Expenditure-types.html';
        }
        else{
            console.log('error')
        }
        }
        
    
