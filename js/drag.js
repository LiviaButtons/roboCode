document.addEventListener("DOMContentLoaded", function (event) {
    var dragged;

    /* events fired on the draggable target */
    document.addEventListener ("drag", function (event) {

    }, false);

    document.addEventListener ("dragstart", function (event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener ("dragend", function (event) {
        // reset the transparency
        event.target.style.opacity = "";
    }, false);

    /* events fired on the drop targets */
    document.addEventListener ("dragover", function (event) {
        // prevent default to allow drop
        event.preventDefault(); 
    }, false);

    /* what happens when you drop a draggable element */
    document.addEventListener("drop", function (event) {
        // prevent default action
        event.preventDefault();

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
                }
            } else {
                // if target wasn't the solution div, that means it's empty
                // thus, make it a dropzone again
                solution.classList.add("dropzone");

                // remove the wrong fontawesome (which is the third child of solution)
                console.log (solution.childNodes);
                solution.removeChild(solution.childNodes[0]);
            };
        };    
    }, false);
});