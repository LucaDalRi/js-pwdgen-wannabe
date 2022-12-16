const NomeUtente = prompt('Inserisci il tuo nome');
const CognomeUtente = prompt('Inserisci il tuo cognome');
const ColorePreferito = prompt('Inserisci il tuo colore preferito');

document.getElementById('risultato').innerHTML = NomeUtente + ' ' + CognomeUtente + ' ' + ColorePreferito + ' ' + '21';

console.log('Tutto ok!');