document.getElementById("menu-hamburger").onclick = function() { menu() };
function menu(){
    const barre1 = document.getElementById("barre1").style;
    const barre2 = document.getElementById("barre2").style;
    const barre3 = document.getElementById("barre3").style;
    const menu = document.getElementById("menu").style;
	if(barre2.opacity == '0'){
		barre2.opacity = '1';
        barre1.transform = 'rotate(0deg)';
        barre3.transform = 'rotate(0deg)';
        barre1.marginTop = '0px';
        barre3.marginTop = "5px";
        menu.marginRight = '-500px';
	}
	else{
		barre2.opacity = '0';
        barre1.transform = 'rotate(47deg)';
        barre3.transform = 'rotate(-47deg)';
        barre1.marginTop = '20px';
        barre3.marginTop = "-25px";
        menu.marginRight = '500px';
	}
}
document.getElementById('accueil').onmouseover = function() { accueil()};
function accueil(){
    document.getElementById('accueil').style.color = 'black';
    document.getElementById('accueil').style.backgroundColor = 'rgba(255,255,255,0.8)';
    document.getElementById('accueil').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('accueil').onmouseout = function() { accueilOut()};
function accueilOut(){
    document.getElementById('accueil').style.color = 'white';
    document.getElementById('accueil').style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById('accueil').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('apropos').onmouseover = function() { apropos()};
function apropos(){
    document.getElementById('apropos').style.color = 'black';
    document.getElementById('apropos').style.backgroundColor = 'rgba(255,255,255,0.8)';
    document.getElementById('apropos').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('apropos').onmouseout = function() { aproposOut()};
function aproposOut(){
    document.getElementById('apropos').style.color = 'white';
    document.getElementById('apropos').style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById('apropos').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('projets').onmouseover = function() { projets()};
function projets(){
    document.getElementById('projets').style.color = 'black';
    document.getElementById('projets').style.backgroundColor = 'rgba(255,255,255,0.8)';
    document.getElementById('projets').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('projets').onmouseout = function() { projetsOut()};
function projetsOut(){
    document.getElementById('projets').style.color = 'white';
    document.getElementById('projets').style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById('projets').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('parcours').onmouseover = function() { parcours()};
function parcours(){
    document.getElementById('parcours').style.color = 'black';
    document.getElementById('parcours').style.backgroundColor = 'rgba(255,255,255,0.8)';
    document.getElementById('parcours').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('parcours').onmouseout = function() { parcoursOut()};
function parcoursOut(){
    document.getElementById('parcours').style.color = 'white';
    document.getElementById('parcours').style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById('parcours').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('contact').onmouseover = function() { contact()};
function contact(){
    document.getElementById('contact').style.color = 'black';
    document.getElementById('contact').style.backgroundColor = 'rgba(255,255,255,0.8)';
    document.getElementById('contact').style.borderRadius = '5px 5px 5px 5px';
}
document.getElementById('contact').onmouseout = function() { contactOut()};
function contactOut(){
    document.getElementById('contact').style.color = 'white';
    document.getElementById('contact').style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById('contact').style.borderRadius = '5px 5px 5px 5px';
}