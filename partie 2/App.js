/* Etape 1 crée tableaux  vide en html qui doit avoir dans sont thead nom ,prénom ,classe ,professeur ,moyenne */

// TODO : OK

/* Etape 2   crée tableau d'objet qui va contenir les des info avec la structure suivante  {nom:string,prénom:string , classe:string ,professeur:string,moyenne:number} le array doit avoir 5 objet minimum*/

students = [
  {
    name: "Tenrien",
    firstName: "Jean",
    class: "Terminal S1",
    professor: "Ivan le tendre",
    average: 19,
  },
  {
    name: "Jete",
    firstName: "pascal",
    class: "Terminal S1",
    professor: "Tony Stark",
    average: 18,
  },
  {
    name: "Muren",
    firstName: "Pierre",
    class: "Terminal S1",
    professor: "Ichiro",
    average: 17,
  },
  {
    name: "Ouaisquiz",
    firstName: "Yvon",
    class: "Terminal S1",
    professor: "jack Daniel's",
    average: 16,
  },
  {
    name: "Sense",
    firstName: "René",
    class: "Terminal S1",
    professor: "Jonhy walker",
    average: 15,
  },
];

/* Etape 3  afficher les dans le tableaux Html avec du JS  */
const tBody = document.querySelector("tbody");

students.forEach((student) => {
  const rowToAdd = document.createElement("tr");
  rowToAdd.className = "student-row";
  rowToAdd.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.firstName}</td>
                    <td>${student.class}</td>
                    <td>${student.professor}</td>
                    <td>${student.average}</td>
                    `;
  tBody.appendChild(rowToAdd);
});

/* Etape 4 Ajouter un champ de recherche au-dessus du tableaux  */

/* Etape 5 récupérer les valeurs entrées dans le champ de recherche */
const searchField = document.querySelector("#student");
searchField.addEventListener("blur", (e) => {
  e.preventDefault();
  let contentRow = document.querySelector(".student-row");
  console.log("avant le while", contentRow);

  console.log("first line", contentRow.firstChild);
});
/* Etape 6  quand on tape le nom d'un élevé ou d'un professeur faire une recherche dans le tableau */
