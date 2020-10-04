async function loadIncome(){
    let result=await fetch('http://localhost:5000/ExpenditureType/get-types')
    
    if(result.ok){
        let expanditureTypes=await result.json();
        expanditureTypes.map((x,index) => {
        AddRow(x,index) 
        });
    }
    }
function AddRow(row,index){
console.log({row})
let newRow=$("#tempRow").clone();
newRow.removeClass('hideRow');
newRow.removeAttr("id");
newRow.find("#sno").removeAttr("id").text((index+1));
newRow.find("#typeName").removeAttr("id").text(row.expenditureTypeName);
newRow.find("#createdDate").removeAttr("id").text(row.addedOn);

$("#tableBody").append(newRow);
}


    loadIncome();

    