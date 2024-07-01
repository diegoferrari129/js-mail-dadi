// dichiaro una variabile con valore random da 1 a 6 per l'utente
let heroDamage =  Math.floor(Math.random() * 6 + 1);

// dichiaro un'altra variabile con valore random da 1 a 6 per il pc
let monsterDamage =  Math.floor(Math.random() * 6 + 1);

// SE il valore assegnato all'utente è maggiore del valore assegnato al pc
if (heroDamage > monsterDamage) {
    console.log('The hero won !');
}

// ALTRIMENTI ?SE il valore assegnato all'utente è minore del valore assegnato al pc
else if (heroDamage < monsterDamage) {
    console.log('The hero has been slayed !');
}

// ALTRIMENTI stampo un'altro messaggio nella console del browser
else {
    console.log('Carneficina !');
}