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
       
        // swap the PNG for gif (launching "animation")
        gameImg.src = "./assets/gif/robot_marche.gif";
        // to adapt for each level!!
       
        progressBar.innerHTML = progressBar.style.width + " complete";
   }) 
});