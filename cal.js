var lastResult = 0;
var intervalId = setInterval(function(){
    const inpVal = document.getElementById('inputVal');
    const result  = document.getElementById('result');
    let totalInput = inpVal.value
    console.log(totalInput,typeof totalInput)
    
    /// call your function here
    // console.log('3')
    
    let val = eval(totalInput);
    if (totalInput==''){
        val =0 
    }
    // console.log(val)
    if(lastResult != val){
        console.log(val)
        result.innerHTML = val  ; 
        lastResult = eval(totalInput);
    }
    else{
        console.log(4)
    }
    }, 1000);