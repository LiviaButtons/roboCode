document.addEventListener("DOMContentLoaded", function (event) {
   validation.addEventListener("click", function(){
       
       var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    console.log('Vous avez réussi!');
                    console.log(correct.innerHTML);
                }
                else {
                    console.log ("Erreur dans AJAX");
                }
            }
        }

        xhr.open ("POST", "./SaveActions.php");
       
        let fd = new FormData();
        fd.append('action', correct.innerHTML);
        xhr.send (fd);
   }) 
});