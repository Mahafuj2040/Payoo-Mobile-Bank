document.getElementById("loginButton").addEventListener("click", function(e){
    e.preventDefault();
    
    const mobile = 12345678910;
    const pin = 1234;

    const mobileValue = parseInt(document.getElementById("mobile").value);
    const pinValue = parseInt(document.getElementById("pin").value);

    if(mobile === mobileValue && pin === pinValue){
        window.location.href = "./main.html"
    } else{
        alert("Invalid cradentials. Plaese enter correct info.")
    }
    
    
})