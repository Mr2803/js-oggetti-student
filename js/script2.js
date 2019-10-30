/*   Oggetti
- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */
//@ts-check


/* Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà */

//creo un oggetto student impostando nomi e valori
var student = {
    "nome": "marco",
    "cognome": "rispoli",
    "eta": 28
}

//apro il primo ciclo FOR IN per stampare in pagina (console log) le info dello studente

for (var dati in student) {
    console.log("lo studente è " + dati + ": " + student[dati]);
}

console.log("FINITA PRIMA PARTE DELL'ESERCIZIO")

/* Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome */

//creo un array vuoto che riempirò con gli oggetti creati successivamente
var studenti = []


//creo oggetti vuoti che pusherò all'interno dell'array studenti
var studente1 = {};
var studente2 = {};
var studente3 = {};
var studente4 = {};
var studente5 = {};

//pusho gli oggetti all'interno dell'array studenti
studenti.push(studente1)
studenti.push(studente2)
studenti.push(studente3)
studenti.push(studente4)
studenti.push(studente5)



//imposto le proprietà degli oggetti
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

studente1.eta = 28;
studente2.eta = 30;
studente3.eta = 28;
studente4.eta = 35;
studente5.eta = 35;



//faccio un ciclo for per la lunghezza del mio array per stampare i dati degli studenti ( solo nome e cognome)
for (var i = 0; i < studenti.length; i++) {

    console.log(studenti[i].nome + " " + studenti[i].cognome);
}


//FINITA SECONDA PARTE DELL'ESERCIZIO

/*- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


//creo un nuovo oggetto vuoto che pusherò all'interno dell'array precedente
var newStudent = {}


//pusho l'oggetto all'interno del precedente array
studenti.push(newStudent);
console.log(studenti)

//riempo l'oggetto con dei prompt 
var nomeInput ;
var cognomeInput ;
var etaInput;


newStudent.nome = whoIsName(nomeInput);
newStudent.cognome = whoIsSurname(cognomeInput);
newStudent.eta = whoIsEta(etaInput);

console.log("il nuovo oggetto è:", newStudent);
console.log("i nuovi studenti sono : ")


//apro un secondo ciclo FOR per stampare il nuovo gruppo di studenti
for (var j = 0; j < studenti.length; j++) {

    console.log(studenti[j].nome + " " + studenti[j].cognome);
}


//blocco funzioni
function whoIsName(){
    var nome = "";
    while (!isNaN(nome)){
        nome = prompt("inserisci il nome dell'utente");
        if (!isNaN(nome)) {
            alert("wow il tuo nome è un numero")
        }
    }
    
    return nome;
}

function whoIsSurname(){
    var cognome = "";
    while (!isNaN(cognome)){
        cognome = prompt("inserisci il cognome dell'utente");
        if (!isNaN(cognome)){
            alert("wow il tuo cognome è un numero")
        }
    }
    
    return cognome;
}


function whoIsEta(){

    var eta;
    
    while (isNaN(eta)) {
        eta = parseInt(prompt("inserisci la tua età"));
        if (isNaN(eta)) {
            alert("wow la tua età è una parola")
        }
    }
  

 return eta;
}

//
