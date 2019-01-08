document.addEventListener("DOMContentLoaded", function (event) {
    var dragElements = document.getElementsByClassName('dragEle');
    var dragAreas = document.getElementsByClassName('dropzone');
    validation.disabled = true;
    var dragged;
    
//    console.log (dragElements);
//    console.log (dragAreas);
    
    for (let i = 0; i < dragElements.length; i++) {
        let current = dragElements[i];
        current.addEventListener ("drag", function (event) {
            
        }, false);
        
        current.addEventListener ("dragstart", function (event) {
            dragged = event.target; // store dragged element
            event.target.style.opacity = 0.5; // make it half transparent
        }, false);
        
        current.addEventListener ("dragend", function (event) {
            event.target.style.opacity = ""; // reset the opacity
        }, false);
    }
    
    for (let i = 0; i < dragAreas.length; i++) {
        let current = dragAreas[i];
        
        current.addEventListener ("dragover", function (event) {
            event.preventDefault(); // to allow drop
        }, false);
        
        current.addEventListener ("drop", function (event) {
            event.preventDefault(); // to allow drop
            
           // move dragged element to the selected drop target
            if (event.target.className == "dropzone") {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);

                // initialise solution variable for the correct div
                var solution = document.getElementById("solution");

                // check whether the parent element is the solution div
                if (event.target.id == "solution") {
                    // if it is: solution div is holding 1 value, don't allow more
                    // block other answers by removing dropzone attribute
                    event.target.classList.remove("dropzone");

                    // then, check whether the correct solution was added
                    if (dragged.id == "correct") {
                        // create a span with success fontawesome and inject it
                        let yesSpan = document.createElement('span');
                        yesSpan.classList.add("fas");
                        yesSpan.classList.add ("fa-check");
                        solution.appendChild(yesSpan);

                        // make all of the answers undraggable by removing attribute
                        var answers = document.getElementsByClassName('dragEle');
                        for (let i = 0; i < answers.length; i++) {
                            answers[i].setAttribute("draggable", "false");
                        }

                        // enable button to launch animation (which is called validation)
                        validation.disabled = false;
                    } else {
                        // create a span with failure fontawesome and inject it
                        var noSpan = document.createElement('span');
                        noSpan.classList.add("fas");
                        noSpan.classList.add("fa-times");
                        solution.appendChild(noSpan);  

                        // disable validation button
                        validation.disabled = true

                        // make the fontAwesome cross clickable
                        noSpan.addEventListener ("click", function (e) {
                            // retrieve its sibling (AKA the wrong solution)
                            let wrongEle = noSpan.parentNode.childNodes[0];

                            // append the wrong solution to its original place
                            document.getElementById('answers').appendChild(wrongEle);

                            // remove the fontAwesome span
                            document.getElementById('solution').removeChild(noSpan);

                            // make "solution" a dropzone again
                            document.getElementById('solution').classList.add('dropzone');
                        })
                    }
                } else {
                    // if target wasn't the solution div, that means it's empty
                    // thus, make it a dropzone again
                    solution.classList.add("dropzone");

                    // disable validation button
                    validation.disabled = true;

                    // remove the wrong fontawesome (which is the third child of solution)
                    solution.removeChild(solution.childNodes[0]);
                };
            };    
        }, false);
    }; 
});