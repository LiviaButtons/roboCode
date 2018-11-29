<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Robocode</title>
    <link rel="stylesheet" href="./normalize.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
<!--     Latest compiled and minified JavaScript -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="./drag.js"></script>
    <script src="ajax.js"></script>
    
</head>
<body>
   
    <main>
        <div id="left" class="container">
          <div class="col-md-12">
            <h1>Robocode</h1>
                <p>Sparky ne fait pas que parler, il peut aussi se balader sur sa planète. Fais-le maintenant marcher à droite, en sélectionant le bon paramètre !</p>
                

                <div id="answers" class="dropzone">
                    <p id="correct" class="dragEle btn btn-sample" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">Droite</p>
                    <p class="dragEle btn btn-sample" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">Gauche</p>
                    <p class="dragEle btn btn-sample" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">Tout droit</p>
                </div>
               
                <div id="codeDiv">
                    <div id="numbers">
                       <p>1</p>
                       <p>2</p>
                       <p>3</p>
                       <p>4</p>
                       <p>5</p>
                    </div>
                    
                    <div id="codeText">
                        <p>
                            robot.marche ("
                            
                        </p>
                         <div id="solution" class="dropzone"></div>
                        <p> 
                            ");
                        </p>
                    </div>
                </div>
                
                <div id="valider">
                    <button class="btn btn-validate" id="validation" disabled>Valider</button>
                </div>
                
                <h2>Récapitulatif</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aut id quos officiis, harum totam sed optio molestias magnam neque praesentium ab a dolores deserunt incidunt alias explicabo iure culpa nisi beatae. Sit alias, iure nam maiores eveniet possimus mollitia, accusamus cum quam sint deserunt odit nihil neque officiis soluta.</p>
           </div>
        </div>
        
        <div id="right" class="container">
           <!--Animation-->
           <!--Progress bar-->
            <div class="progress progresJeu">
              <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">20% Complete
              </div>
            </div>
        </div>
        
    </main>
    
    <footer>
    
        <p>
            
        </p>

    </footer>

</body>
</html>