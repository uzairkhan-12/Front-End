async function loadExpanseDetail(){
    let result=await fetch('http://localhost:5000/Expanditure/detail-by-id?typeId=2005')    
    if(result.ok){
        let Expanditure=await result.json();
        let sum = 0;
        Expanditure.map((x,index) => {
            sum = sum + x.amount;
            AddRow(x,index);
        });
        $("#tableBody").append("<tr><td>Total :</td>,<td>"+sum+"</td>+</tr>");
    }
}
loadExpanseDetail();
function AddRow(row , index){
    let newRow=$("#tempRow").clone();
    console.log({row});
    newRow.removeClass('hideRow');
    newRow.removeAttr("id");
    newRow.find("#sno").removeAttr("id").text((index+1));
    newRow.find("#amount").removeAttr("id").text(row.amount);
    newRow.find("#createdDate").removeAttr("id").text(new Date(row.createdDate).toLocaleString())
    //newRow.find("#createdDate").removeAttr("id").text(new Date(row.addedOn).toLocaleString());
    $("#tableBody").append(newRow);
    
    console.log(row.amount , row.createdDate)
}