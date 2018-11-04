function calculer() {
    var nombre1 = parseInt(document.getElementById("nb1").value);
    var nombre2 = parseInt(document.getElementById("nb2").value);
    var addition, soustraction, multiplication, division;
    
    if (document.getElementById("op1").checked) {
        addition = nombre1 + nombre2;
        document.getElementById("afficher").innerHTML = addition;
    }
    else if (document.getElementById("op2").checked) {
        soustraction = nombre1 - nombre2;
        document.getElementById("afficher").innerHTML = soustraction;
    }
    else if (document.getElementById("op3").checked) {
        multiplication = nombre1 * nombre2;
        document.getElementById("afficher").innerHTML = multiplication;
    }
    else if (document.getElementById("op4").checked) {
        division = nombre1 / nombre2;
        document.getElementById("afficher").innerHTML = division;
    }
    else {
        document.getElementById("afficher").innerHTML = "Merci de compléter les cases vides ou de sélectioner une opération.";
    }
}