let btn = document.querySelectorAll(".ner");
var value = '0';

btn.forEach(function(btn){btn.addEventListener('click', function(){
    value = btn.textContent;
})});

let submit = document.getElementById("submit");
submit.addEventListener("click", function(){
  
  let secondcard = document.querySelector(".outer");
    secondcard.style.display = "block";

    let firstcard =  document.querySelector(".inner");
  firstcard.style.display = "none";
  let changetext = document.querySelector(".textresult").innerHTML = `You selected ${value} out of 5`
    

});




