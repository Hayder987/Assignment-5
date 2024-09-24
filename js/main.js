document.getElementById("blogBtn").addEventListener("click", function(){
  window.location.href = "./blog.html"
});

document.getElementById("donationBtn").addEventListener("click", function(){
    displayDiv("donationSection", "donationBtn");
    btnManipulation("donationBtn");
});

document.getElementById("historyBtn").addEventListener("click", function(){
    displayDiv("historySection", "historyBtn");
    btnManipulation("historyBtn");
});

document.getElementById("card1btn").addEventListener("click", function(){

    let inputValue1 = getInputValue("card1Input");
    let TotalAmount = getTextValue ("totalAmount");
    let currentDonation1 = getTextValue ("currentDonation1-text");
    
    if(isNaN(inputValue1) || TotalAmount<inputValue1 || inputValue1<0){
        alert("Wrong Input Please Enter Correct Value");
        return ;
    }
    else{
       
        dataCalculation (inputValue1, TotalAmount, currentDonation1, "currentDonation1-text" ) ;
        document.getElementById("modal1").setAttribute("href", "#my_modal_8");

        historyDisplay(inputValue1, "card1Heading")

        document.getElementById("modal1-p-text").innerText = `You Have Donated $ ${inputValue1} for Humankind `
        
        document.getElementById("confirmBtn1").addEventListener("click", function(){
            document.getElementById("modal1").removeAttribute("href"); 
        })
    }
      
});


document.getElementById("card2btn").addEventListener("click", function(){

    let inputValue2 = getInputValue("card2Input");
    let TotalAmount = getTextValue ("totalAmount");
    let currentDonation2 = getTextValue ("currentDonation2-text");
    if(isNaN(inputValue2) || TotalAmount<inputValue2 || inputValue2<0){
        alert("Wrong Input Please Enter Correct Value");
        return ;
    }
    else{
       
        dataCalculation (inputValue2, TotalAmount, currentDonation2, "currentDonation2-text" ) ;
        document.getElementById("modal2").setAttribute("href", "#my_modal_8");
 
        historyDisplay(inputValue2, "card2Heading")

        document.getElementById("modal1-p-text").innerText = `You Have Donated $ ${inputValue2} for Humankind `
        
        document.getElementById("confirmBtn1").addEventListener("click", function(){
            document.getElementById("modal2").removeAttribute("href"); 
        })
    }
      
});


document.getElementById("card3btn").addEventListener("click", function(){

    let inputValue3 = getInputValue("card3Input");
    let TotalAmount = getTextValue ("totalAmount");
    let currentDonation3 = getTextValue ("currentDonation3-text");
    if(isNaN(inputValue3) || TotalAmount<inputValue3 || inputValue3<0){
        alert("Wrong Input Please Enter Correct Value");
        return ;
    }
    else{
       
        dataCalculation (inputValue3, TotalAmount, currentDonation3, "currentDonation3-text" ) ;
        document.getElementById("modal3").setAttribute("href", "#my_modal_8");

        historyDisplay(inputValue3, "card3Heading")

        document.getElementById("modal1-p-text").innerText = `You Have Donated $ ${inputValue3} for Humankind `
        
        document.getElementById("confirmBtn1").addEventListener("click", function(){
            document.getElementById("modal3").removeAttribute("href"); 
        })
    }
      
});