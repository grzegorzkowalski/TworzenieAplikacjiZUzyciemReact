const names = ["Zosia", "Marcin", "Kamil"];
const moreNames = ["Ala", "Puszek", ...names, "Jan", "Karol" ]; // Tablica 2

const names3 = [...names, ...moreNames];

console.log(names);
console.log(moreNames);
console.log(names3);


//Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {
    ...state,
    isUserLogged: true,
    availableYears: state.availableYears.filter(el => el <= 1999)
}

console.log(stateCopy);

