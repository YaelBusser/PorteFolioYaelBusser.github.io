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