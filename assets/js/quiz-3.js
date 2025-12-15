var i = 0;
var j = 0;
var b = 10;
function next_quiz() {
    j = j + 1;
    if (j == 1) {
      document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Quelle propriété qui retourne une sous-chaine commencant a la position p et de longueur l ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >ch.substring()</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> ch.substr(p,l)</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">substr(ch,p,l)</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">convch(p,l)</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('p').innerHTML = "2";
      i = 0;
    }
    if (j == 2) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Quelle propriété qui retourne la valeur absolue ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >abs| |</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">ch.abs</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">sqrt()</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> abs()</span> <div class="icon tick" id="rep_3">✔</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "3";
        i = 0;
      }
      if (j == 3) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">propriété crée un nouvel objet Date est ..</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >ch.getDate()</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">ch.Date</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">ToDate()</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> Date()</span> <div class="icon tick" id="rep_3">✔</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "4";
        i = 0;
      }
      if (j == 4) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">la propriété qui converti une chaine ch en un nombre est ..</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >Int(ch)</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> Number(ch)</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">valeur(ch)</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">ch.Number</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "5";
        i = 0;
      }
      if (j == 5) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">la propriété qui converti une valeur a en chaine est ..</span> </div> <div class="option_list"> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> String(a)</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >ToString(a)</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">a.String</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">convch(a)</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "6";
        i = 0;
      }
      if (j == 6) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Quelle propriété qui supprimé tous les espaces existant au début et a la fin de ch ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >Delete(ch)</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">trim(ch)</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">ch.trim()</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">ch.delete()</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "7";
        i = 0;
      }
      if (j == 7) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">propriété qui afficher un message dans une boite de dialogue est ..</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >consol.log()</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">prompt()</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">document.write()</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">alert()</span> <div class="icon tick" id="rep_3">✔</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "8";
        i = 0;
      }
      if (j == 8) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Comment écrire une condition IF en JavaScript?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >if a = 2 then</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">if a = 2</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">if a == 2 else</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">if (a == 2)</span> <div class="icon tick" id="rep_3">✔</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "9";
        i = 0;
      }
      if (j == 9) {
        document.getElementById('sec').innerHTML = '<div class="que_text"> <span id="q">Comment créer une fonction en JavaScript ? </span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >function = myFunction()</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">function:myFunction()</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">function myFunction()</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">function_myFunction()</span> <div class="icon cross" id="rep_4">✘</div> </div> </div>';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('p').innerHTML = "10";
        i = 0;
      }
      if (j==10){
        if(b>5){
          document.getElementById('not_js').innerHTML = b
          document.getElementById('quiz_js').style.display="block"
          document.getElementById("quiz-box").style.display="none"
    }
        
        else{
          document.getElementById('not_js1').innerHTML = b
          document.getElementById('quiz_js1').style.display="block"
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