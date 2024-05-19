


//Zadanie 1
function add(a: number, b: number) : void {
    console.log(a+b);
}

//Zadanie 2
const Person : {
    readonly name: string,
    readonly lastName: string,
    age: number,
    sex: [string],
    profession: string
    skills: readonly string[]
} = {
    name: "Grzegorz",
    lastName: "Kowalski",
    age: 36,
    sex: ["Man"],
    profession: "Trainer",
    skills: []
};

const secondName : string = "Paweł";
const tab: readonly string[] = ["test"];

//tab.push("test2");

//Person.skills.push("Taekwondo");
//Person.skills.push("Hapkido");
//Person.name = "Kowal";

//Zadanie 3
function returnAvg(tab: number[]) : number {
    return Math.round(tab.reduce((a: number, b : number) : number => a+b)/tab.length);
}

//Zadanie4
interface INewPerson {
    name: string,
    lastName: string,
    age: number,
    sex: "kobieta" | "mężczyzna",
    hobby: string[],
    getNames(): string
}

interface INewPersonMore extends INewPerson {
    address: string,
    phoneNumber: string
}


const Grzegorz : INewPersonMore = {
    name: "Grzegorz",
    lastName: "Kowalski",
    age: 36,
    sex: "mężczyzna",
    hobby: ["programming", "marcial arts", "dogs", "trips"],
    getNames: function() {
        return `${this.name} ${this.lastName}`;
    },
    address: "Warszawa, Waszyngtona",
    phoneNumber: "333444555"
}

export { add, Person, returnAvg, Grzegorz };
export default add;
