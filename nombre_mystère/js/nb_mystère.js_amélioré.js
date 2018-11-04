function verifier() {
    var nb_ordi = Math.floor(Math.random() * 10);
    var nb_joueur;
    var message;
   
    for(var nb_essai = 0; nb_essai<3; nb_essai++){
        nb_joueur = parseInt(document.getElementById("nombre"));
        if(nb_joueur == nb_ordi){
            message = prompt("Félicitations !!! Vous avez trouvé le bon chiffre !");
        }
        else if(nb_essai === 2){
            message = prompt("Dommage, vous avez utilisé vos 3 essais, vous avez perdu! Le nombre mystère était " + nb_ordi);
        }
        else {
            if (nb_joueur < nb_ordi) {
                message = prompt("Le nombre mystère est plus grand.");
            }
            else {
                message = prompt("Le nombre mystère est plus petit");
            }
        }
    }
}


//var rejouer = document.getElementById("rejouer");
//rejouer.addEventListener('click', function(){location.reload();});