/*   Oggetti
- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */
//@ts-check


/* Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà */

var student = {
    "nome" : "marco",
    "cognome": "rispoli",
    "eta" : 28
}

for(var dati in student){
    console.log("lo studente è " + dati + ": " + student[dati]);
}

console.log("FINITA PRIMA PARTE DELL'ESERCIZIO")

/* Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome */

var studenti = [
    { 
        "nome" : "fabio",
        "cognome": "mancini",
        "eta": 30

    },
    {
        "nome": "marco",
        "cognome": "salvi",
        "eta": 26

    },
    {
        "nome": "elena",
        "cognome": "fierro",
        "eta": 25

    }
]


for (var i = 0; i < studenti.length; i++) {
    
    console.log(studenti[i].nome + " " +  studenti[i].cognome);


    
}


/*     for(var firstStud in studenti[0]){
        console.log("lo studente è " + firstStud + ": " + studenti[0][firstStud]);
    }
    for(var secStud in studenti[1]){
        console.log("lo studente è " + secStud + ": " + studenti[1][secStud]);
    }
    for(var thirdStud in studenti[2]){

        console.log("lo studente è " + thirdStud + ":" + studenti[2][thirdStud]);
    } */

//FINITA SECONDA PARTE DELL'ESERCIZIO

/*- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */ 

var newStudent={}

var nomeInput = prompt("inserisci il nome dell'utente");
var cognomeInput = prompt("inserisci il cognome dell'utente");
var etaInput = prompt("inserisci l'età dell'utente");

newStudent.nome= nomeInput;
newStudent.cognome= cognomeInput;
newStudent.eta= etaInput;

console.log("il nuovo oggetto è:" , newStudent);

