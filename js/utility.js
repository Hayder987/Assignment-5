
function displayDiv(id){
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden"); 
};

function btnManipulation(id){
   let donationBtn = document.getElementById("donationBtn");
       donationBtn.classList.remove("bg-btn-bg");
       donationBtn.classList.add("border-2", "border-gray-400" );
    let historyBtn = document.getElementById("historyBtn");
        historyBtn.classList.remove("bg-btn-bg");
        historyBtn.classList.add("border-2", "border-gray-400" );

    let selectedBtn = document.getElementById(id); 
    selectedBtn.classList.add("bg-btn-bg");
    selectedBtn.classList.remove("border-2", "border-gray-400")
};


function getInputValue (id){
     let getInputValue = document.getElementById(id);
     let   inputValue = getInputValue.value
     let getInputValueNumber = parseFloat(inputValue); 
     getInputValue.value ='';

     return getInputValueNumber;
};


function getTextValue (id){
  let TextValue = document.getElementById(id).innerText;
  let TextValueNumber = parseFloat(TextValue);

  return TextValueNumber;
};

function dataCalculation (input, totalAmount, donationAmount, eachDonate){

   let restTotal = totalAmount - input;

   let totalDonation = donationAmount + input;

   document.getElementById("totalAmount").innerText = restTotal;
   document.getElementById(eachDonate).innerHTML = totalDonation;



};