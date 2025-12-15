var i = 0;
var j = 0;
var b = 10;
function next_quiz() {
    j = j + 1;
    if (j == 1) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Laquelle des propriétés suivantes définit la taille de la police du texte ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >text-size</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> font-size</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> size</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">text</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> ';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "2";
      i = 0;
    }
    if (j == 2) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Si nous souhaitons définir le style d un seul élément,quel sélecteur CSS utiliserons-nous?</span> </div> <div class="option_list"> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> id</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >text</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> class</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">name</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "3";
      i = 0;
    }
    if (j == 3) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">La balise HTML qui spécifie un style CSS intégré dans un élément est appeléz...?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >design</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> style</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> modify</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">define</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "4";
      i = 0;
    }
    if (j == 4) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Comment rendre tous les paragraphes en "ROUGE"?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >p.all{color:red;}</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> p.all{color:#AA0000;}</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">p.all{color:#0000FF;}</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> p{color:red;}</span> <div class="icon tick" id="rep_3">✔</div> </div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "5";
      i = 0;
    }
    if (j == 5) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">la valeur par défaut de l attribut "position" est</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >fixed</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">absolute</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> static</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">relative</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "6";
      i = 0;
    }
    if (j == 6) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Quelle est la syntaxe correcte du code CSS suivant?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >body:color=black</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">{body;color:black}</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">{body:color=black(body)}</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> body{color:black}</span> <div class="icon tick" id="rep_3">✔</div> </div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "7";
      i = 0;
    }
    if (j == 7) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Quelle propriété permet de déterminer la marge intérieure d un élément ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >margin</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> padding</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">display</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">border</span> <div class="icon cross" id="rep_4">✘</div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "8";
      i = 0;
    }
    if (j == 8 ) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Quelle déclaration permet de centrer le texte d un élément ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >text: center;</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> text-align: center;</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">font-align: center;</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">align: center;</span> <div class="icon cross" id="rep_4">✘</div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "9";
      i = 0;
    }
    if (j == 9) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Quelle propriété permet de modifier la police d un élément HTML ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >police:</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">font:</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> font-family:</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">text-family:</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "10";
      i = 0;
    }
      if (j==10){
    if(b>5){
      document.getElementById('not_css').innerHTML = b
      document.getElementById('quiz_css').style.display="block"
      document.getElementById("quiz-box").style.display="none"
}
    
    else{
      document.getElementById('not_css1').innerHTML = b
      document.getElementById('quiz_css1').style.display="block"
      document.getElementById("quiz-box").style.display="none"
      
    }
  }
}
function quiz(id, id_2, a) {
    i = i + 1;
  
    if (i == 1) {
      if (a != '#d4edda') {
        document.getElementById(id).style.display = 'block';
        document.getElementById(id_2).style.backgroundColor = a;
        b=b-1
  
      }
      document.getElementById('rep_3').style.display = 'block';
      document.getElementById('op_3').style.backgroundColor = '#d4edda';
      document.getElementById('btn').style.display = 'block';
    }
  }
  var z=0
function contact() {
    z=z+1
    if (z%2==1) {
        document.getElementById('contact').style.display='flex';
        document.getElementById('contact').style.animation=''
    }
    else{
        document.getElementById('contact').style.display='none'
    }
}
function envoyer() {
    document.getElementById('contact').style.animation='loading 2.1s ease-out'
    setTimeout(() => {document.getElementById('contact').style.display='none';document.getElementById('contact-1').value='';}, 2000); 
}