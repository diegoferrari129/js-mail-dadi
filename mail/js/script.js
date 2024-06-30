// dichiaro un'array e assegno una lista di email
let emailList = ['eroe@gmail.com', 'cesare@gmail.com', 'gorilla@gmail.com']

// dichiaro una varibabile per l'email con valore aquisito da una prompt
let email = prompt('Inserisci la tua email')

// dichiaro una variabile di controllo con valore false
let allowedEmail = false;

// confronto il valore dell'array con quello aquisito dalla prompt
for (let i = 0; i < emailList.length; i++) {
    if (email === emailList[i])
        allowedEmail = true;
}

// mostro il risultato nella console del browser
if (allowedEmail === true) {
    console.log('Accesso autorizzato!')
}

else {
    console.log('Accesso negato')
}