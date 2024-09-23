
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

function historyDisplay(donateMoney, historyHeading){
  
  let historyCardDiv = document.getElementById("historyCardDiv");

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("border-2", "p-8","rounded-xl","flex","flex-col", "gap-6");
        
        const date = new Date();
        const day = date.toDateString().split(' ')[0];
        const month = date.toDateString().split(' ')[1];
        const dayNum = date.getDate();
        const year = date.getFullYear();
        const time = date.toTimeString().split(' ')[0]; 
        const timezone = date.toTimeString().split(' ')[1].replace(/[()]/g, ''); 
        const fullDate = `${day} ${month} ${dayNum} ${year} ${time} ${timezone}`;

        const card1Heading = document.getElementById(historyHeading).innerText;

        cardDiv.innerHTML = `
        <h1 class="text-xl font-bold">${donateMoney} Taka is ${card1Heading} </h1>
         <h3 class="">Date : ${fullDate}</h3>
        `

        historyCardDiv.appendChild(cardDiv)

};