/* Etape 1 créer une variable de type array qui va contenir des objets qui ressemblent à : {nom:string,age:number,sexe:string } */
const person = [
  { nom: "Pierre", age: 34, sexe: "m" },
  { nom: "Benjamin", age: 10, sexe: "m" },
  { nom: "Chen Li", age: 28, sexe: "f" },
];

/* Étape 2 affiche les infos sous forme de liste en utilisant ul présent dans html du projet  */
const getList = document.getElementById("list_exo");
for (const element of person) {
  const lineOfList = document.createElement("li");
  lineOfList.append("nom : ", element.nom);
  lineOfList.append(", age : ", element.age, " ans, ");
  lineOfList.append("sexe : ", element.sexe === "m" ? "Homme" : "Femme");
  getList.appendChild(lineOfList);
}

/* Etape 3 créer un input de recherche que tu vas injecter dans le DOM en js avec un appenchild  */
const inputSearch = document.createElement("input");
inputSearch.className = "search-name";
inputSearch.type = "search";
inputSearch.placeholder = "Tapez le nom recherché !";

const mainElement = document.getElementById("app");
mainElement.appendChild(inputSearch);

inputSearch.addEventListener("keyup", (e) => {
  e.preventDefault;

  const resultat = person.filter((obj) => {
    return obj.nom === e.target.value;
  });
  for (const el of resultat) {
    console.log("résultat2 = ", el.nom);
    const spanResult = document.createElement("div");
    spanResult.className = "span-result";
    spanResult.innerHTML = `${el.nom} a ${
      el.age
    } ans, il est de sexe Masculin ${(el.sexe = "m" ? "Masculin" : "Féminin")}`;
    mainElement.appendChild(spanResult);
  }

  console.log("resultat : ", result);
  const find = searchName(result);
  console.log("j'ai trouvé : ", find);
});
console.log("la valeur de e target value : ", result);
/* Étape 4 utiliser la propriété du type array qui permet de recherche avec un filter les éléments qui correspond a ce que utilisateur va entrer dans l'input de recherche   */
let renvoye;
function searchName(nameSearched) {
  console.log("Nom recherché : ", nameSearched);
  console.log(person);
  person.filter(function (nameParam) {
    console.log("ecoute : ", nameParam.nom, nameSearched);
    if (nameParam.nom === nameSearched) {
      renvoye = nameParam.nom;
      return renvoye;
    }
    console.log("renvoyé et et : ", renvoye);
    return renvoye;
  });
  console.log("avant renvoi : ", renvoye);
  return renvoye;
}
