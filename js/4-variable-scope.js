let imie = "Klaudia";

const dodajNazwisko = () => {
 let nazwisko = "Nowak";
 let imieNazwisko = imie + " " + nazwisko;
 console.log(imieNazwisko);

}
console.log(imie);

dodajNazwisko();



const dodaj2RazyNazwisko = () => {
 let nazwisko = "Nowak";
 let imieNazwisko = imie + " " + nazwisko + nazwisko;
 console.log(imieNazwisko);

}


dodaj2RazyNazwisko();