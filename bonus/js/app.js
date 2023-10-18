// - Creare l’array di oggetti con le informazioni fornite.
const teamMembersArray = [

    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        photo: './img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        photo: './img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        photo: './img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        photo: './img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        position: 'Developer',
        photo: './img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        photo: './img/barbara-ramos-graphic-designer.jpg'
    },
];

// - Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(teamMembersArray);


let memberName = ''
let memberPosition = ''
let memberPhoto = ''

for (let i = 0; i < teamMembersArray.length; i++) {
    const infoTeam = teamMembersArray[i];
    // console.log(teamMembersArray[i]);
    memberName = infoTeam.name;
    memberPosition = infoTeam.position;
    memberPhoto = infoTeam.photo;

    const cardDomElement = document.getElementById('card');
    console.log(cardDomElement);

    const cardString = `
    <div class="col">
    <img src="${memberPhoto}" alt="">
    <p>${memberName}</p>
    <p>${memberPosition}</p>`

    cardDomElement.innerHTML += cardString;
}

console.log(memberName);


// Stampare le stesse informazioni su DOM sottoforma di stringhe





