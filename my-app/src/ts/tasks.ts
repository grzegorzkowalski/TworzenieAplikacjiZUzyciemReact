//Zadanie 2

const person : {
    name: string,
    lastName: string,
    age: number,
    sex: [string],
    profession: string,
    skills: ReadonlyArray<string>;
} = {
    name: "Grzegorz",
    lastName: "Kowalski",
    age: 37,
    sex: ["male"],
    profession: "programista",
    skills: ["sztuki walki"]
}
//person.skills = [];
//person.skills.push("programowanie");
console.log(person.skills);

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
    hobby: Array<string>,
    city?: string,
    returnName: Function,
}

interface IAddressAndPhone extends IUser {
    adress: string,
    phone: string
}


export {person, avg};
export type {IAddressAndPhone}