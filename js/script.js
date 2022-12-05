// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// !MILESTONE 0:
// ! Creare l’array di oggetti con le informazioni fornite.
// !MILESTONE 1:
// !Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!
//    Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
//    Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
//    Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
//    Angela Lopez   Social Media Manager angela-lopez-social-media-manager.jpg
//    Scott Estrada  Developer         scott-estrada-developer.jpg
//    Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg


const teamMember = [
{
    name : "Wayne Barnett",
    role : "Founder & CEO",
    img : "wayne-barnett-founder-ceo.jpg"
},
{
    name : "Angela Caroll",
    role : "Chief Editor",
    img : "angela-caroll-chief-editor.jpg"
},
{
    name : "Walter Gordon",
    role : "Office Manager",
    img : "walter-gordon-office-manager.jpg"
},
{
    name : "Angela Lopez",
    role : "Social Media Manager",
    img : "angela-lopez-social-media-manager.jpg"
},
{
    name : "Scott Estrada",
    role : "Developer",
    img : "scott-estrada-developer.jpg"
},
{
    name : "Barbara Ramos",
    role : "Graphic Designer",
    img : "barbara-ramos-graphic-designer.jpg"
}];

for (let index = 0; index < teamMember.length; index++) {
    console.table(teamMember[index]);
}


for (let index = 0; index < teamMember.length; index++) {

    let rowElement = document.querySelector('div.row');
    rowElement.classList.add('pt-5');

    //Creo e appendo la colonna alla riga Bootstrap
    const divColElement = document.createElement("div");
    divColElement.classList.add("col-12", "col-md-6", "col-lg-4", "text-center");
    rowElement.append(divColElement);

    //Creo e appendo il titolo alla colonna
    const TitleElement = document.createElement("h4");
    TitleElement.innerHTML = teamMember[index].name;
    TitleElement.classList.add("text-center");
    divColElement.append(TitleElement);

    //Creo e appendo l'immagine del membro
    const imgElement = document.createElement("img");
    imgElement.src = "./css/img/" + teamMember[index].img;
    imgElement.classList.add('w-100')
    divColElement.append(imgElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.classList.add('py-4')
    paragraphElement.innerHTML = teamMember[index].role;
    divColElement.append(paragraphElement);
    }