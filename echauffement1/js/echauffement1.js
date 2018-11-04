var nom = prompt("Comment tu t'appelles ? ");
if (nom == "") {
    alert("Veuillez répondre à la question");
}
else if (nom.length < 1 && nom.length > 10) {
    alert("La taille du nom n'est pas bonne");
}
else {
    alert("Bonjour " + nom);
}