//Zadanie 4

const generateRandomNumbers = () => {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomNumbers = [];
    for (let i = 0; i < 6; i++) {
        randomNumbers.push(randomInteger(1,100));
    }
    const [first, ,third] = randomNumbers;
    console.log({first, third});
}

generateRandomNumbers();


//Zadanie 5

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = ({ name, age: catAge, getVoice }) => {
    console.log(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`);
}

showAnimal(cat);
