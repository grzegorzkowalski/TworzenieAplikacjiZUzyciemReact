//Zadanie 2

const Person : {
    name: string,
    lastName: string,
    age: number,
    sex: [string],
    profession: string,
    skills: readonly string[]
} = {
    name: "Grzegorz",
    lastName: "Kowalski",
    age: 37,
    sex: ["male"],
    profession: "programista",
    skills: ["sztuki walki"]
}

Person.skills.push("programowanie");
console.log(Person.skills);

//Stwórz funkcję, która przyjmuje tablicę liczb i zwraca ich średnią (użyj obiektu Math i metody round).
// Otypuj parametry funkcji i zwracaną wartość.

const avg = (tab: number[]) : number => {
    const sum : number = tab.reduce((acc : number, curr : number) => acc + curr, 0);
    const average: number = sum / tab.length;
    return Math.round(average);
}

//Zdefiniuj interface:
//
// Imię.
// Nazwisko.
// Wiek.
// Płeć – do wyboru kobieta | mężczyzna.
// Zainteresowania kilka: np. programowanie, moda. muzyka.
// Miasto (opcjonalnie)
// Funkcja, która zwróci imię i nazwisko.
// Rozszerz interface o adres i telefon.

interface IUser {
    name: string,
    surname: string,
    age: number,
    sex?: "male" | "female",
    hobby: ["programowanie", "moda", "muzyka"],
    city?: string,
    returnName: Function,
}

interface IAddressAndPhone extends IUser {
    adress: string,
    phone: string
}


export {Person, avg};
export type {IAddressAndPhone}