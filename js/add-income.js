//console.log('in the name of ALLAH')
// document.getElementById("btnSave").addEventListener('click',()=>{
//     console.log(document.getElementById("txtIncome").value)
// })

// $(()=>{
//     console.log('jquery works fine')
// })
$(()=>{



$("#btnSave").on('click',async()=>{
    //console.log($("#txtIncome").val())


//return;
    let result=await fetch('http://localhost:5000/Income/addIncome',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({amount:parseInt($("#txtIncome").val())})
    })
    
   //let result=await fetch('http://localhost:5000/Income/get-all') //fetch('http://localhost:5000/WeatherForecast');

    if(result.ok){
        let response=await result.json();
        console.log(response)
    }else{
        console.log(result)
    }

    $("#txtIncome").val('')
})

})