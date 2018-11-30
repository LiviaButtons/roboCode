document.addEventListener("DOMContentLoaded", function (event) {
    let bulletext = document.querySelector('#bulle');
//    console.log(bulletext);

    valider.addEventListener('click', function(e){

        bulletext.children[0].textContent = "";
//        console.log(textInput.value);
        let insertion = textInput.value
            if(insertion !=""){
                bulletext.classList.remove('none');  
//                console.log(insertion);
                next.classList.remove('not-active');
                insertion = "Hello " + insertion + "!";
                let montext = document.createTextNode(insertion);
                bulletext.children[0].appendChild(montext);
//
//                // make validation button clickable
//                validation.disabled = "false";
            } 
    });
})