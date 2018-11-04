var nb1 = Math.floor(Math.random() * 10);
var nb2 = Math.floor(Math.random() * 10);
var ope_random = Math.floor(Math.random() * 3);
var reponse , total;

switch (ope_random) {
    case 0:
        total = nb1 + nb2;
        reponse = prompt("Combien font " + nb1 + " + " + nb2 + " ?");
        break;

    case 1:
        total = nb1 - nb2;
        reponse = prompt("Combien font " + nb1 + " - " + nb2 + " ?");
        break;

    case 2:
        total = nb1 * nb2;
        reponse = prompt("Combien font " + nb1 + " * " + nb2 + " ?");
        break;
}

if (reponse == total){
    alert("Réponse juste !");
}
else{
    alert("Réponse fausse !");
}
