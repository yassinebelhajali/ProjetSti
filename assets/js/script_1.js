i = 0
function exmple(id,a){
    i = i + 1
    if(i%2==1){
        document.getElementById(id).style.display="flex"
        document.getElementById(a).innerHTML="Exemples ↑"
    }
    else{
        document.getElementById(id).style.display="none"
        document.getElementById(a).innerHTML="Exemples ↓"
    }
}
function runCode(id,id_1) {
    var code = document.getElementById(id).value;
    var iframe = document.getElementById(id_1);
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
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
function scrol(link) {
    document.location.href=link;
    setTimeout(function() {window.scrollBy(0, -100);}, 1);
}