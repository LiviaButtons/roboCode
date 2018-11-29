document.addEventListener("DOMContentLoaded", function (event) {
   validation.addEventListener("click", function(){
       
        // activate the "next level" button
        next.classList.remove("not-active");
       
        // grow the progress bar
        if (progressBar.style.width == "0%") {
            progressBar.style.width = "20%";
        } else if (progressBar.style.width == "20%") {
            progressBar.style.width = "40%";
        } else if (progressBar.style.width == "40%") {
            progressBar.style.width = "60%";
        } else if (progressBar.style.width == "60%") {
            progressBar.style.width = "80%";
        }else if (progressBar.style.width == "80%") {
            progressBar.style.width = "100%";
        }
       
        progressBar.innerHTML = progressBar.style.width + " complete";

        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4){
                if (xhr.status == 200){
//                    console.log('Vous avez réussi!');
//                    console.log(correct.innerHTML);
                }
                else {
                    console.log ("Erreur dans AJAX");
                }
            }
        }

        xhr.open ("POST", "./php/SaveActions.php");
       
        let fd = new FormData();
        fd.append('action', correct.innerHTML);
        xhr.send (fd);
   }) 
});