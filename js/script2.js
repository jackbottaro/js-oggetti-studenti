/*
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
*/

// Prendo elemento dalla pagina
const display = document.getElementById('display');

// Creo array di oggetti
const students = [
    {
        nome: 'Giacomo',
        congnome: 'Bottaro',
        eta: 23,
    },
    {
        nome: 'Luca',
        congnome: 'Rossi',
        eta: 17, 
    },
    {
        nome: 'Paolo',
        congnome: 'Brosio',
        eta: 69, 
    },
    {
        nome: 'Michele',
        congnome: 'Annunzi',
        eta: 45, 
    }
]



// Cicliamo su array di students
for (let i = 0; i < students.length; i++){
    const student = students[i];

    for (let key in student){
    console.log(key, student[key])
    }
}