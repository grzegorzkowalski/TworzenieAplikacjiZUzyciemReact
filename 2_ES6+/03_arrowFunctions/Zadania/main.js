//Zadanie 1

const getSecondMaxNumber = (array) => {
    return array.length > 1 ? [...array].sort((a, b) => a -b)[array.length - 2] : 0;
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
console.log(arr1);
//Wynik w consoli: 49