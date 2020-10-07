async function loadIncome(){
    $("#tableBody").empty();
    let result=await fetch('http://localhost:5000/ExpenditureType/get-types')
    
    if(result.ok){
        let expanditureTypes=await result.json();
        expanditureTypes.map((x,index) => {
        AddRow(x,index) 
        });
    }
    }
function AddRow(row,index){
//console.log({row})
let newRow=$("#tempRow").clone();
newRow.removeClass('hideRow');
newRow.removeAttr("id");
newRow.find("#sno").removeAttr("id").text((index+1));
newRow.find("#typeName").removeAttr("id").text(row.expenditureTypeName);
newRow.find("#createdDate").removeAttr("id").text(new Date(row.addedOn).toLocaleString());
newRow.find("#actionButton").on('click',()=>{
    toggleType(row.id)
})

if(row.isActive){
    newRow.find("#actionButton").addClass('btn btn-outline-danger')
    newRow.find("#actionButton").text('Active, Mark Inactive')
}else{
    newRow.find("#actionButton").addClass('btn btn-outline-primary')
    newRow.find("#actionButton").text('InActive, Mark active')
}
newRow.find("#actionButton").removeAttr("id");
newRow.find("#linkEdit").removeAttr("id").attr('href',"/Add-edit-expenditure-types.html?id="+row.id);
$("#tableBody").append(newRow);
}

loadIncome();

async function toggleType(typeId){
    let result=await fetch('http://localhost:5000/ExpenditureType/toggle-type?typeId='+typeId)
    if(result.ok){
        loadIncome();
        console.log(typeId);
    }
    else{
        console.log('error')
    }
}

    