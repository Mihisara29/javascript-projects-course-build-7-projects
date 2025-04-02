document.addEventListener("DOMContentLoaded",()=>{

    const et2000 = document.getElementById('et2000');
    const et500 = document.getElementById('et500');
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et20 = document.getElementById('et20');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et2 = document.getElementById('et2');
    const et1 = document.getElementById('et1');
    
    const txt2000 = document.getElementById('txt2000');
    const txt500 = document.getElementById('txt500');
    const txt200 = document.getElementById('txt200');
    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt20 = document.getElementById('txt20');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt2 = document.getElementById('txt2');
    const txt1 = document.getElementById('txt1');

    const txtFinalCash=document.getElementById('txtFinalCash');
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');


    const cashInputs =[et1,et2,et5,et10,et20,et50,et100,et200,et500,et2000];
    const cashTexts = [txt1,txt2,txt5,txt10,txt20,txt50,txt100,txt200,txt500,txt2000];

    cashInputs.forEach((input, index) => {
      if (input) {
          input.addEventListener('input', () => {
              cashCalculate(index);
          });
      }
  });
  


   function cashCalculate(index){
    const dominations = [1,2,5,10,20,50,100,200,500,2000];
    const rowValue = cashInputs[index].value*dominations[index];
    cashTexts[index].textContent=rowValue.toFixed(0); 
    
    totalCash();
  }


 function totalCash(){
  let totalCashValue = 0;
  cashTexts.forEach((text)=>{
    totalCashValue += parseInt(text.textContent);
    
  });
   
   txtFinalCash.innerHTML=`<div>Total Cash: ${totalCashValue}</div>`;
   txtFinalCashInWords.textContent = `Total Cash In Words: ${convertToWords(totalCashValue)}`
  

 }

 btnReset.addEventListener("click",clearData);

 function clearData(){
   cashInputs.forEach((input)=>{

    cashInputs.forEach((input)=>{
      input.value="";
    });

    cashTexts.forEach((text)=>{
      text.textContent="0";
    })

    txtFinalCash.innerHTML=`<div>Total Cash: 0</div>`;

   });

 }

cashInputs.forEach((input)=>{

input.addEventListener("input",()=>{
  const value = parseInt(input.value);
  if(isNaN(value)||value<0){
    input.value="";
  }
})

});


function convertToWords(number){

  const units =['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];

  const teens=['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];

  const tens = ['','','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];

  if(number === 0){
    return 'Zero';
  }

  let words = '';

  if(Math.floor(number/1000000000000000000000)>0){

    words += convertToWords(Math.floor(number/1000000000000000000000)) + ' Sextillion ';

    number %= 1000000000000000000000;

  }

  if(Math.floor(number/1000000000000000000)>0){

    words += convertToWords(Math.floor(number/1000000000000000000)) + ' Quintillion ';

    number %= 1000000000000000000;

  } 

  if(Math.floor(number/1000000000000000)>0){

    words += convertToWords(Math.floor(number/1000000000000000)) + ' Quadrillion ';

    number %= 1000000000000000;

  }  
  

  if(Math.floor(number/1000000000000)>0){

    words += convertToWords(Math.floor(number/1000000000000)) + ' Trillion ';

    number %= 1000000000000;

  }

  if(Math.floor(number/1000000000)>0){

    words += convertToWords(Math.floor(number/1000000000)) + ' Billion ';

    number %= 1000000000;

  }

  if(Math.floor(number/1000000)>0){

    words += convertToWords(Math.floor(number/1000000)) + ' Million ';

    number %= 1000000;

  }


  if(Math.floor(number/1000)>0){

    words += convertToWords(Math.floor(number/1000)) + ' Thousand ';

    number %= 1000;

  }


  if(Math.floor(number/100)>0){

    words += convertToWords(Math.floor(number/100)) + ' Hundred ';

    number %= 100;

  }


  if(number < 10){


    words += units[number];


  }else if(number<20){


    words += teens[number-10];


  }else{

    words += tens[Math.floor(number/10)];

    if(number%10 > 0){

      words  += ' ' + units[number % 10];

    }

  }


  return words.trim();
}



});





