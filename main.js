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

// Zadanie 5

// Napisz skrypt, który pobierze od użytkownika dwie liczby a następnie wyświetli ich sumę, różnicę,
// iloczyn i iloraz. Wartości powinny być wyświetlone jedna pod drugą w postaci pojedynczego ciągu znaków.

// var userValue1 = prompt("Podaje pierwszą wartość liczbową:");
// var userValue2 = prompt("Podaje drugą wartość liczbową:");

// console.log("suma: " + (userValue1 + userValue2) + "\n" + "róznica: " + (userValue1 - userValue2) + "\n" + "iloczyn: " + (userValue1*userValue2) + "\n" + "iloraz: " + (userValue1/userValue2));


// >-----------------------------------------------------------------------------------------------------------------------------------------<

// Zadanie 6

// Napisz skrypt który zapyta użytkownika o wiek a następnie:
// 1. jeśli ten nie jest pełnoletni wyświetli komunikat o braku dostępu
// 2. jeśli jest pełnoletni wyświetli zapytanie o potwierdzenie wejścia
// 3. w zależności od decyzji wyświetli powitanie bądź informację o braku dostępu

// var userAge = prompt("Podaj swój wiek: ");

// if (userAge >= 18){
//     var userAnswer = confirm("Czy chcesz wejść do środka?");
//     switch (userAnswer){
//         case (true):
//             alert("Wskakuj!");
//         case (false):
//             alert("Moze innym razem!");
//     }
// }
// else{
//     alert("Wybacz, wstęp mają tylko osoby pełnoletnie!");
// }

// >-----------------------------------------------------------------------------------------------------------------------------------------<

// Zadanie 7

// Napisz skrypt, który wygeneruje losową liczbę z przedziału od 1 do 10 a następnie poprosi
// użytkownika o zgadnięcie tej liczby. Jeżeli użytkownik jej nie odgadnie skrypt powinien wyświetlić
// informację czy szukana liczba jest większa czy mniejsza od podanej przez użytkownika. W
// przypadku odgadnięcia skrypt powinien wyświetlić gratulacje.

var randomNum = Math.round(Math.random() * 10);
console.log(randomNum);

var userValue = 0;
var i = 0;

do{
    userValue = prompt("Zgadnij losową liczbę od 1 do 10 podając swój typ:");
    if(userValue == randomNum){
        alert("Brawo, zgadłeś!");
    }
    else if(userValue < randomNum){
        alert("Podałeś wartość mniejszą niz wylosowana. Spróbuj ponownie!");
    }
    else{
        alert("Podałeś wartość większą niz wylosowana. Spróbuj ponownie!");
    }
}
while (userValue != randomNum);

