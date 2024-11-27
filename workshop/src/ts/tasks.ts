//Zadanie 2

type Person = {
    name: string,
    lastName: string,
    age: number,
    sex: [string],
    profession: string,
    skills: readonly string[]
}

const person : Person  = {
    name: "Grzegorz",
    lastName: "Kowalski",
    age: 37,
    sex: ["male"],
    profession: "programista",
    skills: ["sztuki walki"]
}

// Zadanie 2
const avg : Function = (tab: number[]) : number => {
    const sum : number = tab.reduce((acc : number, curr : number) : number => acc + curr, 0);
    const average: number = sum / tab.length;
    return Math.round(average);
}

//Zadanie 3

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

export {person};
