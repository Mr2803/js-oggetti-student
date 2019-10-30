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


    for(var primoStudente in studenti[0]){
        console.log("lo studente è " + primoStudente + ": " + studenti[0][primoStudente]);
    }
    for(var primoStudente in studenti[1]){
        console.log("lo studente è " + primoStudente + ": " + studenti[1][primoStudente]);
    }
    for(var primoStudente in studenti[2]){

        console.log("lo studente è " + primoStudente + ":" + studenti[2][primoStudente]);
    }
