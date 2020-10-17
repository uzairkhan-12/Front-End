async function loadExpanditure(){
let result=await fetch('http://localhost:5000/Expanditure/select')

$("#inputGroupSelect01").each(function(id ,  value) 
{
    // $("#inputGroupSelect01").append('<option value=' + 1 + '>' + ab + '</option>');
    console.log(id , value)
});
}
loadExpanditure();

 
var temp= ['one' , 'two' , 'three'] //'${temp}';
//alert(options);
var $select = $('<select>'); //$('#down');                        
$select.find('option').remove();                          
$.each(temp, function(key, value) {              
    $('<option>').val(key).text(value).appendTo($select);
});
console.log($select.html());
