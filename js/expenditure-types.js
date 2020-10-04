async function loadIncome(){
    let result=await fetch('http://localhost:5000/ExpenditureType/get-types')
    
    if(result.ok){
        let expanditureTypes=await result.json();
        console.log(expanditureTypes);
        
        expanditureTypes.map(x => {
            
        });
    }
    
    }
    loadIncome();