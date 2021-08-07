// const inpVal = document.getElementById('inputVal');
const testInput = '5+2*4+3/3';
console.log(eval(testInput));
return;
        function calculate(){
            const totalInput = testInput; 
            // const totalInput = inpVal.value; 

            var tempInputContainer = [];
            let tempStr = ''; 

            // read the whole str 
            for(i=0; i<totalInput.length; i++){
                const inputChr =  totalInput[i];
                // if it is number as string then concat the numbers....
                if (convertToDigit(inputChr) != false){
                    tempStr = tempStr + inputChr ; 
                    // console.log(tempStr);
                }
                else if(checkOperator(inputChr)==true){
                    // if any operator found then 
                    const tempStrToFloat = parseFloat(tempStr);
                    tempInputContainer.push(tempStrToFloat);
                    // console.log(tempStrToFloat);
                    tempInputContainer.push(inputChr);
                    tempStr = '';
                }
               
                
                // > partFloat the stringAsNumber to float 
                
                // > add the floatNumber to inputArray 
                
                // > add operator to input array

                // const isItOperator = checkOperator(totalInput[i]);
                // if(isItOperator == true ){
                //   console.log(isItOperator)
                //   // it's a operator 
                //   tempInputContainer.push( parseFloat(tempStr) );
                //   tempInputContainer.push(totalInput[i]);
                //   tempStr='';
                 
                // }
                // else{
                //     let numVal =  convertToDigit(totalInput[i]);
                //     tempStr =tempStr + numVal; 
                //     console.log(typeof numVal, numVal)
                // }
            }
            if(tempStr != ''){
                const tempStrToFloat = parseFloat(tempStr);
                tempInputContainer.push(tempStrToFloat);
                // console.log(tempStrToFloat);
                // tempInputContainer.push(inputChr);
                tempStr = '';
            }
            return tempInputContainer ;
            console.log('tempInputContainer',tempInputContainer)
        }
        function convertStringToNumber(strNum){

        }
        function convertToDigit(val){
            if(val == '0' || val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9' ){
                return true;
            }
            else if(val == '.'){
                return '.';
            }
            else{
                return false; 
            }
        }
        function checkOperator(val){
            if(val == '+' || val == '-' || val == '*' || val == '/' ){
                return true;
            }
            else{
                return false; 
            }

        }

       

       var resultArr =  calculate();

       function sumOfValue(arr){
           let sum =0;
           let beforeOperator =0;
           let afterOperator =0;
           let operator = '';
            for(val of arr){
                // check if int or float 
                if(typeof val == 'number'  ){
                    beforeOperator = val; 
                }
                else if (typeof val=='string'){

                }
                

            }
            return sum ;
       }
       const totalValue =  sumOfValue(resultArr);

       console.log('test');
       console.log(totalValue);