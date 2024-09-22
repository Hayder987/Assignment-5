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