// - Creare l’array di oggetti con le informazioni fornite.
const teamMembersArray = [

    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        photo: '<img src="./img/wayne-barnett-founder-ceo.jpg" alt="">'
    },

    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        position: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
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
    memberName += infoTeam.name;
    memberPosition += infoTeam.position;
    memberPhoto += infoTeam.photo;
}

console.log(memberName);


// Stampare le stesse informazioni su DOM sottoforma di stringhe

// const cardDomElement = document.getElementById('card');
// console.log(cardDomElement);
// cardDomElement.innerHTML = memberName;

