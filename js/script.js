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
var studenti = []

var studente1 = {};
var studente2 = {};
var studente3 = {};
var studente4 = {};
var studente5 = {};

studenti.push(studente1)
studenti.push(studente2)
studenti.push(studente3)
studenti.push(studente4)
studenti.push(studente5)

studente1.nome = "Marco";
studente2.nome = "Fabio";
studente3.nome = "Elena";
studente4.nome = "Chiara";
studente5.nome = "Simone";

studente1.cognome = "Rispoli";
studente2.cognome = "Mancini";
studente3.cognome = "Fierro";
studente4.cognome = "Passaro";
studente5.cognome = "Icardi";

studente1.eta = "28";
studente2.eta = "30";
studente3.eta = "28";
studente4.eta = "35";
studente5.eta = "35";




for (var i = 0; i < studenti.length; i++) {
    
    console.log(studenti[i].nome + " " +  studenti[i].cognome);
}


//FINITA SECONDA PARTE DELL'ESERCIZIO

/*- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */ 

var newStudent={}

studenti.push(newStudent);

var nomeInput = prompt("inserisci il nome dell'utente");
var cognomeInput = prompt("inserisci il cognome dell'utente");
var etaInput = prompt("inserisci l'età dell'utente");

newStudent.nome= nomeInput;
newStudent.cognome= cognomeInput;
newStudent.eta= etaInput;

console.log("il nuovo oggetto è:" , newStudent);
console.log("i nuovi studenti sono : ")

for (var j = 0; j < studenti.length; j++) {
    
    console.log(studenti[j].nome + " " + studenti[j].cognome);
}

