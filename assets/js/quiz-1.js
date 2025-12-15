var i = 0;
var j = 0;
var b = 10;

function next_quiz() {
  j = j + 1;
  if (j == 1) {
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">Quelle balise est utilisée pour créer une checkbox en HTML</span> </div> <div class="option_list"> <div class="option" onclick=\'quiz("rep_1", "op_1", "#f8d7da")\' id="op_1"> <span id="a" >checkbox</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick=\'quiz("rep_3", "op_3", "#d4edda")\'> <span id="c">input type="checkbox"</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick=\'quiz("rep_2", "op_2", "#f8d7da")\'> <span id="b">check</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick=\'quiz("rep_4", "op_4", "#f8d7da")\'> <span id="d">input type="checkbox"</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> ';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "2";
    i = 0;
  }
  if (j==2){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">Laquelle des balises HTML suivants insérera un saut de ligne ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >p</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">break</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">line</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">br</span> <div class="icon tick" id="rep_3">✔</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "3";
    i = 0;
  }
  if (j==3){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">Parmi les balises suivantes,lesquelles sont liées a un tableau en HTML ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >table_row_column</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">table_tr_td</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">table_head_body</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">table_header_footer</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "4";
    i = 0;
  }
  if (j==4){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">Pour rendre obligatoire la saisie d informations dans un champ avant de soumettre le formulaire,on utilise:</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >étoile *</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b">attribut alt</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">attribut required</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">la propriété select</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "5";
    i = 0;
  }
  if (j==5){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">Pour définir un titre dans une page HTML,on utilise...</span> </div> <div class="option_list"> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">élément title</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >élément head</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> élément body</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">un élément h1,h2,..h6</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "6";
    i = 0;
  }
  if (j==6){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">lorsque vous utilisez élément a,vous devez obligatoirement préciser...</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >un attribut target</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">un attribut href</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> un attribut herf</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">deux attributs href et target</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "7";
    i = 0;
  }
  if (j==7){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">quel élément a des propriétés trés similaires a élément DIV</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >un élément strong</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">un élément span</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> un élément table</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">un élément p</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "8";
    i = 0;
  }
  if (j==8){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">Les pages Web HTML peuvent etre lues et rendues par le...</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >compilateur</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> serveur</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c">navigateur Web</span> <div class="icon tick" id="rep_3">✔</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">interpréteur</span> <div class="icon cross" id="rep_4">✘</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "9";
    i = 0;
  }
  if (j==9){
    document.getElementById('sec').innerHTML = ' <div class="que_text"> <span id="q">Que veux dire l abréviation HTML ?</span> </div> <div class="option_list"> <div class="option" onclick="quiz(\'rep_1\' , \'op_1\',\'#f8d7da\')" id="op_1"> <span id="a" >Home Tool Mockup Language</span> <div class="icon cross" id="rep_1">✘</div> </div> <div class="option" id="op_2" onclick="quiz(\'rep_2\' , \'op_2\',\'#f8d7da\')"> <span id="b"> Home Tool Markup Language</span> <div class="icon cross" id="rep_2">✘</div> </div> <div class="option" id="op_4" onclick="quiz(\'rep_4\' , \'op_4\',\'#f8d7da\')"> <span id="d">Hyperlinks and Text Markup Language</span> <div class="icon cross" id="rep_4">✘</div> </div> <div class="option" id="op_3" onclick="quiz(\'rep_3\' , \'op_3\',\'#d4edda\')"> <span id="c"> HyperText Markup Language</span> <div class="icon tick" id="rep_3">✔</div> </div> </div> '
    document.getElementById('btn').style.display = 'none';
    document.getElementById('p').innerHTML = "10";
    i = 0;
  }
  if (j==10){
    if(b>5){
      document.getElementById('not_html').innerHTML = b
      document.getElementById('quiz_html').style.display="block"
      document.getElementById("quiz-box").style.display="none"
}
    
    else{
      document.getElementById('not_html1').innerHTML = b
      document.getElementById('quiz_html1').style.display="block"
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