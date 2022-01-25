/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/

const student = {
    nome: 'Giacomo',
    cognome: 'Bottaro',
    eta: 23,
};

const displayElement = document.getElementById('display');

for (let key in student){
    const innerDiv = document.createElement('div');
    innerDiv.append(key + ': ' + student[key])

    displayElement.appendChild(innerDiv);
}
