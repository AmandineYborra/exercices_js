var id = prompt("Entrez votre identifiant...");
var password = prompt("Votre mot de passe ?");

if(id.length < 4 || id.search("@") == -1){
    alert("L'identifiant n'est pas valide");
}
else if(id == "lea@gmail.com" && password == "12345"){
    alert("Merci");
}
else{
    alert("L'identifiant et/ou le mot de passe est invalide");
}