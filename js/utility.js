
function displayDiv(id, btnId){
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
}