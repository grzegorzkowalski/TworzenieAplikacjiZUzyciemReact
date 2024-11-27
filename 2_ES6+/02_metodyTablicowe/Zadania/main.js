// Zadanie 1

function distFromAverage(tab) {
    const len = tab.length;
    const sum = tab.reduce((total, current) => total + current, 0);
    const avg = sum/len;
    //const avg2 = tab.reduce((total, current) => total + current, 0)/tab.length;
    console.log(tab.map(el => Math.abs(el-avg)));
    return tab.map(el => Math.abs(el-avg));
}

distFromAverage([1,2,3,4,5,6,7]) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)