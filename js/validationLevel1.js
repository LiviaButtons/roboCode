document.addEventListener("DOMContentLoaded", function (event) {
    // if there's some text in the input field, activate validation button
//    
//    console.log (textInput.value);
//    
//    textInput.addEventListener("keypress", function (e) {
//        if (textInput.value != "") {
//            validation.disabled = "false";  
////        };
//    });
    
//    console.log ('test1');
    
    let bulletext = document.querySelector('#bulle');

    validation.addEventListener('click', function(e){
        // disable the button once it's been pressed
        validation.disabled = true;
        
        bulletext.children[0].textContent = "";
        let insertion = textInput.value
//        console.log (insertion);
        
        if(insertion !=""){
            bulletext.classList.remove('none');  
            next.classList.remove('not-active');
            insertion = "Bonjour " + insertion + " !";
            let montext = document.createTextNode(insertion);
            bulletext.children[0].appendChild(montext);
        } 
        
        // change width of progress bar
        document.getElementById("progressBar").style.width = "20%";
        document.getElementById("progressBar").innerHTML = "20% complete";
    });
    
    // listen to keyboard press
    window.onkeyup = keyup;
    //creates a global Javascript variable
    var inputTextValue;

    function keyup(e) {
        // retrieve the value of input (AKA target) on each press
        if (e.target.value != "") {
            document.getElementById("validation").disabled = false;
        };
    };
})