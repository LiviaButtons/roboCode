<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Autobot</title>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/styleNiv1.css">
<!--     Latest compiled and minified JavaScript -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body>
   
    <main>
        <div id="left" class="container">
          <div class="col-md-12">
            <h1>Robocode</h1>
                <p>Donne ton prénom au robot et il te dira bonjour!
                 Tu viens ainsi de rajouter ton prénom au paramètre de l'action ".parl" faite par robot "Robot" </p>
                
<!--
               <div id="btnInput">
                    <button id="prenom1" class="btn btn-info prenom btn-sample">Floriane</button>
                    <button id="erase" class="btn btn-info prenom btn-sample">Effacer</button>
                </div>
-->
               
                <div id="codeDiv">
                    <div id="numbers">
                       <p>1</p>
                       <p>2</p>
                       <p>3</p>
                       <p>4</p>
                       <p>5</p>
                       <p>6</p>
                       <p>7</p>
                       <p>8</p>
                       <p>9</p>
                       <p>10</p>
                    </div>
                    
                    
                    <div id="codeText">
                        <p>
                            Robot.parle ("Hello  
                            
                        </p>
                        <input id="textInput" type="text">
                        <p> 
                            ");
                        </p>
                    </div>
                </div>
                
                <div id="valider">
                    <button class="btn btn-validate">Valider</button>
                </div>
                
                <h2>Récapitulatif</h2>
                <p>Tu trouveras dans cette partie un résumé de tes précédentes actions </p>
           
<!--              progress bar   -->
                  <div class="progress progresJeu" style="position: relative">
                    <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">20% Complete
                    </div>
                  </div>
             
             </div>
        </div>
        
        <div id="right" class="container">
           <!--Animation-->
           <div id="bulle" class=" bulle none">
               <p></p>
           </div>
           <div id="robot"></div>
           <!--Progress bar-->
<!--
            <div class="progress progresJeu">
              <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">20% Complete
              </div>
            </div>
-->
        </div>
        
    </main>
    
   <nav>
        <a id="prec" class="invisible" href="https://chrome.google.com/webstore/category/extensions?hl=en" disabled>Niveau précédent</a>
        <a id="next" class="not-active" href="./level2.php">Niveau suivant</a>
   </nav>
<!--
    <footer>
    
        <p>
            
        </p>

    </footer>
-->
    
    <script>
//        let textarea = textInput;
//        textarea.value = "";
//        prenom1.addEventListener('click', function(){
//            let prenom = prenom1.innerHTML;
//            textarea.value = prenom;
//        });
        
        let bulletext = document.querySelector('#bulle');
        console.log(bulletext);
        
        valider.addEventListener('click', function(e){
            
            bulletext.children[0].textContent = "";
            console.log(textInput.value);
            let insertion = textInput.value
              if(insertion !=""){
                bulletext.classList.remove('none');  
                console.log(insertion);
                next.classList.remove('not-active');
                insertion = "Hello " + insertion + "!";
                let montext = document.createTextNode(insertion);
                bulletext.children[0].appendChild(montext);
              }
                       
        });
    </script>
</body>
</html>