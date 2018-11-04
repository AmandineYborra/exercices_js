var note;
var moyenne = 0;
for(var i = 0; i < 10; i++){
    note = parseInt(prompt("Veuillez saisir vos 10 notes une à une : "));
    if (note >= 0 && note <= 20){
        moyenne = moyenne + note; 
    }
    else {
        alert("Mauvaise saisie !!");
    }
}
moyenne = moyenne / 10;
alert("Votre moyenne est de " + moyenne);