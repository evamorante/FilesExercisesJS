//la base de JSObject (=dictionnaries in PY)
var album = {
    band : "Nirvana",
    title : "Nevermind",
    year : 1991,
    tracks : 12,
}
console.log(album);


 //afficher certaines données du JSObject
var title = album.title;
console.log(title);
var year = album["year"];
console.log(year);

//ajouter des key-values
album.genre = "Grunge";
album["producer"] = "Butch Vig";
console.log(album);

//pour enlever une propriété et sa valeur
delete album.title;
console.log(album);
