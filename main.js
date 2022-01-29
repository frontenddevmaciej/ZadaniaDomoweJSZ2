// Zadanie 1
// Stwórz prostą stronę internetową i załącz do niej zewnętrzny skrypt który wyświetli w konsoli deweloperskiej tekst Hello JavaScript!.

// console.log("Hello JavaScript!");

// >-----------------------------------------------------------------------------------------------------------------------------------------<

// Zadanie 2
// Napisz skrypt, który dla podanej w oknie dialogowym wartości wyświetli komunikat informujący o liczbie wprowadzonych znaków.

// var userTxt = prompt("Podaj dowolną wartość tekstową");

// alert("Twoje słowo ma " + userTxt.length + " znaków.");

// >-----------------------------------------------------------------------------------------------------------------------------------------<

// Zadanie 3
// Napisz skrypt, który pobierze od użytkownika informacje o jego imieniu oraz wieku a następnie wyświetli je w oknie alarmowym w formacie JSON.

// var userName = prompt("Podaj swoje imię:");
// var userAge = prompt("Podaj swój wiek:");

// // JS object
// var person = {name: userName, age: userAge};

// // JSON object
// var str = JSON.stringify(person);

// // JS object from JSON
// var parsedObject = JSON.parse(str);

// console.log(parsedObject);
// alert(str);

// // PYTANIE - czemu konsola wyświetla obiekt JS, ale alert nie chce go wyświetlić (wyświetla jako {object object}), ale wyświetla obiekt JSON?

// >-----------------------------------------------------------------------------------------------------------------------------------------<

// Zadanie 4

// Napisz skrypt, który pobierze od użytkownika wartość liczbową a następnie obliczy i wyświetli w formacie JSON pole
// oraz obwód koła o podanym promieniu. obwód koła: 2 * pi * R pole: pi * (R ** 2) PI: Math.PI lub 3.1415

// var userValue = prompt("Podaj dowolną wartość promienia koła:");

// var kolo = {"obwod":2*Math.PI*userValue, "pole":Math.PI*(userValue**2)};

// alert(JSON.stringify(kolo));

// >-----------------------------------------------------------------------------------------------------------------------------------------<

