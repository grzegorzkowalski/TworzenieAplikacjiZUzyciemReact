//Zadanie 2

const person : {
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

export {person};
