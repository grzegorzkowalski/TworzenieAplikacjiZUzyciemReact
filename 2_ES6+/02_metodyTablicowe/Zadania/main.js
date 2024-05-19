function distFromAverage(tab) {
 const avg = tab.reduce(function(curr, next) {return curr + next;})/tab.length;
 const calculatedTab = tab.map(function (el) {
     return Math.abs(el-avg);
 });
 console.table(tab);
 console.table(calculatedTab);
 return calculatedTab;
}

distFromAverage([1,2,3,4,5,6,7]) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)

//Zadanie 2

// Napisz funkcję multiply(array). Funkcja ma przyjmować tylko jeden argument - tablicę. Następnie funkcja multiply ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.
//
// multiply([1,2,3,4,5,6,7]) => 5040
// multiply([1,1,1,1]) => 1
// multiply([2,8,3,7]) => 336

function multiply(array) {
 return array.reduce((prev, cur) => prev*cur, 1);
}

console.log(multiply([1,2,3,4,5,6,7]));
console.log(multiply([1,1,1,1]));
console.log(multiply([2,8,3,7]));

//Zadanie 3
// Napisz funkcję getEvenAverage, która ma przyjmować tylko jeden
// argument - tablicę. Funkcja ta ma zwracać średnią wartość parzystych
// liczb z tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby. Jeśli w tablicy nie ma parzystych liczb niech zwraca null.
//
// getEvenAverage([1,2,3,4,5,6,7]) => 4
// getEvenAverage([1,1,1,1]) => null
// getEvenAverage([2,8,3,7,4]) => 4.666

function getEvenAverage(tab) {
 const evenTab = tab.filter(el => el % 2 === 0);
 if (!evenTab.length) {
  return null;
 }
 return evenTab.reduce((prev, cur) => prev+cur, 0)/evenTab.length;
}

//Od Zdziśka
// function getEvenAverage(tab){
//  var tabParz = tab.filter(t => t % 2 == 0);
//  const sum = tabParz.reduce((a, b) => a + b, 0);
//  return (sum / tabParz.length) || null;
// }


console.log(getEvenAverage([1,2,3,4,5,6,7]));
console.log(getEvenAverage([1,1,1,1]));
console.log(getEvenAverage([2,8,3,7,4]));
