const getSecondMaxNumber = (tab) => {
    tab.sort((a,b) => a-b);
    console.log(tab);
    return tab[tab.length-2];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
//Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku

//Zadanie 2
const runInterval = (n = 8) => {
    if(n < 1 || n > 10) {
        return false;
    }
    let intervalCount = 0;
    const intervalId = setInterval(() => {
        console.log('Hello ' + intervalId);
        intervalCount++;
        if (intervalCount === n) {
            clearInterval(intervalId);
        }
    }, 500);
};

//Zadanie 3
const generateLinks = (arrLinks) => {
    return arrLinks.map((link) => `https://${link}.com`);
};
