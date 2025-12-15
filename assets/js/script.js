var i=0;
var j=0;
function show() {
    document.getElementById('nomError').innerHTML='';
    document.getElementById('prenomError').innerHTML='';
    document.getElementById('emailError').innerHTML='';
    document.getElementById('nom').value='';
    document.getElementById('prenom').value='';
    document.getElementById('email').value='';
    i=i+1;
    if (i%2==1) {
        document.getElementById('inscri').style.display='flex';
        document.getElementById('flow').style.filter='blur(20px)';
        if (document.getElementById('visible').style.display=='block') {
            document.getElementById('vedio').pause();
        }
    }
    else {
        document.getElementById('inscri').style.display='none';
        document.getElementById('flow').style.filter='blur(0px)';
        if (document.getElementById('visible').style.display=='block') {
            document.getElementById('vedio').play();
        }
    }
}
function show_2() {
    j=j+1;
    if (j%2==1) {
        document.getElementById('visible').style.display='block'
        document.getElementById('vedio').play();
        document.getElementById('btn').innerHTML='En savoir moins'
        window.scrollBy(0, 600);            
    }
    else {
        document.getElementById('visible').style.display='none';
        document.getElementById('vedio').pause();
        document.getElementById('btn').innerHTML='Savoir Plus'
    }
}
function login() {
document.getElementById('nomError').innerHTML = '';
document.getElementById('prenomError').innerHTML = '';
document.getElementById('emailError').innerHTML = '';
let a = 0;
let b = document.getElementById('email').value;
if (verif('nom') == false) {
document.getElementById('nomError').innerHTML = 'Entrez votre nom correctement';
a += 1;               
}
if (verif('prenom') == false) {
document.getElementById('prenomError').innerHTML = 'Entrez votre prénom correctement';
a += 1;
}
if (b.indexOf('@gmail.com') <= 0 && b!='') {
document.getElementById('emailError').innerHTML = 'Entrez votre email correctement';
a += 1;
}
if (a == 0) {
i=i+1;
document.getElementById('flow').style.filter='blur(0px)';
document.getElementById('inscri').style.display = 'none';
n= document.getElementById('nom').value;
p= document.getElementById('prenom').value;
document.getElementById('n_p').innerHTML=n[0].toUpperCase()+n.substr(1,).toLowerCase()+' '+p[0].toUpperCase()+p.substr(1,).toLowerCase()
document.getElementById('n_p').style.animationPlayState='running';
}
}

function verif(id) {
let a = document.getElementById(id).value;
if (!(a.length >= 3 && a[0] != ' ' && a[a.length - 1] != ' ')) {
return false;
} else {
let b = 0;
for (let i = 0; i < a.length; i++) {
    if ((a[i].toUpperCase() > 'Z' || a[i].toUpperCase() < 'A') && a[i] != ' ') {
        b += 1;
    }
}
if (b != 0) {
    return false;
} else {
    return true;
}
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