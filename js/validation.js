document.addEventListener("DOMContentLoaded", function (event) {
   validation.addEventListener("click", function(){
       
        // activate the "next level" button
        next.classList.remove("not-active");
       
        // desactivate the validation button so people can only press it once
        validation.disabled = true;
       
        // grow the progress bar
        if (progressBar.style.width == "0%") {
            progressBar.style.width = "20%";
        } else if (progressBar.style.width == "20%") {
            progressBar.style.width = "40%";
        } else if (progressBar.style.width == "40%") {
            progressBar.style.width = "60%";
        } else if (progressBar.style.width == "60%") {
            progressBar.style.width = "80%";
        } else if (progressBar.style.width == "80%") {
            progressBar.style.width = "100%";
        }
       
        progressBar.innerHTML = progressBar.style.width + " complete";
       
       
        // swap the PNG for gif (launching "animation")
        // depending on the page
        if (window.location.href.indexOf("level2") > -1) {
            gameImg2.src = "./assets/gif/robot_marche.gif";
        } else if (window.location.href.indexOf("level3") > -1) {
            gameImg3.src = "./assets/gif/robot_saute.gif";
        } else if (window.location.href.indexOf("level4") > -1) {
            gameImg4.src = "./assets/gif/robot_charge.gif"; 
        } 
        // page 5 validated separately
   }) 
});