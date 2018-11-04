var joueur = prompt("Choisissez un nombre entre 0 et 9");
var nombre = Math.floor(Math.random() * 10);
var partie_finie = true;
var nb_essai = 0;

while (partie_finie) {
    if (joueur == nombre) {
        alert("Félicitations !!! Vous avez trouvé le bon chiffre !");
        var partie_finie = false;
    }
    else if (nb_essai === 2) {
        alert("Dommage, vous avez utilisé vos 3 essais, vous avez perdu! Le nombre mystère était " + nombre);
    }
    else {
        if (joueur < nombre) {
            alert("Le nombre mystère est plus grand.");
            joueur = prompt("Choisissez un nombre entre 0 et 9");
            nb_essai++;
        }
        else {
            alert("Le nombre mystère est plus petit");
            joueur = prompt("Choisissez un nombre entre 0 et 9");
            nb_essai++;
        }
    }
}