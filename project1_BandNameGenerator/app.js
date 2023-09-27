const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
const emotions = ["Happy", "Sad", "Excited", "Relaxed", "Energetic", "Calm"];
const vehicles = ["Car", "Bicycle", "Boat", "Airplane", "Motorcycle", "Train"];
const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Watermelon", "Grapes"];
const occupations = ["Teacher", "Doctor", "Musician", "Chef", "Engineer", "Artist"];
const utensils = ["Spoon", "Fork", "Knife", "Plate", "Bowl", "Cup"];
const tools = ["Hammer", "Screwdriver", "Wrench", "Pliers", "Saw", "Drill"];
const materials = ["Wood", "Metal", "Plastic", "Glass", "Concrete", "Fabric"];
const medicines = ["Aspirin", "Ibuprofen", "Antibiotic", "Vitamin", "Cough Syrup", "Painkiller"];
const cities = ["New York", "Los Angeles", "London", "Paris", "Tokyo", "Sydney"];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function displayWord(category, word1, word2) {
    const wordSpan1 = document.getElementById(`${category}Word1`);
    const wordSpan2 = document.getElementById(`${category}Word2`);
    wordSpan1.textContent = word1;
    wordSpan2.textContent = word2;
}

function clearGeneratedWords() {
    document.getElementById('generatedWords').textContent = '';
    document.getElementById('bandName').textContent = '';

    // Reset category words
    for (const category of ['color', 'emotion', 'vehicle', 'fruit', 'occupation', 'utensil', 'tool', 'material', 'medicine', 'city']) {
        const wordSpan1 = document.getElementById(`${category}Word1`);
        const wordSpan2 = document.getElementById(`${category}Word2`);
        wordSpan1.textContent = '';
        wordSpan2.textContent = '';
    }
}

document.getElementById('colorButton').addEventListener('click', () => {
    const word1 = getRandomElement(colors);
    let word2 = getRandomElement(colors);
    while (word2 === word1) {
        word2 = getRandomElement(colors);
    }
    displayWord('color', word1, word2);
});

document.getElementById('emotionButton').addEventListener('click', () => {
    const word1 = getRandomElement(emotions);
    let word2 = getRandomElement(emotions);
    while (word2 === word1) {
        word2 = getRandomElement(emotions);
    }
    displayWord('emotion', word1, word2);
});

document.getElementById('vehicleButton').addEventListener('click', () => {
    const word1 = getRandomElement(vehicles);
    let word2 = getRandomElement(vehicles);
    while (word2 === word1) {
        word2 = getRandomElement(vehicles);
    }
    displayWord('vehicle', word1, word2);
});





document.getElementById('fruitButton').addEventListener('click', () => {
    const word1 = getRandomElement(fruits);
    const word2 = getRandomElement(fruits);
    displayWord('fruit', word1, word2);
});

document.getElementById('occupationButton').addEventListener('click', () => {
    const word1 = getRandomElement(occupations);
    const word2 = getRandomElement(occupations);
    displayWord('occupation', word1, word2);
});

document.getElementById('utensilButton').addEventListener('click', () => {
    const word1 = getRandomElement(utensils);
    const word2 = getRandomElement(utensils);
    displayWord('utensil', word1, word2);
});

document.getElementById('toolButton').addEventListener('click', () => {
    const word1 = getRandomElement(tools);
    const word2 = getRandomElement(tools);
    displayWord('tool', word1, word2);
});

document.getElementById('materialButton').addEventListener('click', () => {
    const word1 = getRandomElement(materials);
    const word2 = getRandomElement(materials);
    displayWord('material', word1, word2);
});

document.getElementById('medicineButton').addEventListener('click', () => {
    const word1 = getRandomElement(medicines);
    const word2 = getRandomElement(medicines);
    displayWord('medicine', word1, word2);
});

document.getElementById('cityButton').addEventListener('click', () => {
    const word1 = getRandomElement(cities);
    const word2 = getRandomElement(cities);
    displayWord('city', word1, word2);
});

function generateBandName() {
    const words = [];
    for (const category of ['color', 'emotion', 'vehicle', 'fruit', 'occupation', 'utensil', 'tool', 'material', 'medicine', 'city']) {
        words.push(document.getElementById(`${category}Word1`).textContent);
        words.push(document.getElementById(`${category}Word2`).textContent);
    }

    if (words.length >= 2) {
        const randomIndex1 = Math.floor(Math.random() * words.length);
        let randomIndex2 = Math.floor(Math.random() * words.length);
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * words.length);
        }
        const bandName = `${words[randomIndex1]} ${words[randomIndex2]}`;
        document.getElementById('bandName').textContent = "The " + bandName + " Band";
    }
}

document.getElementById('generateBandNameButton').addEventListener('click', generateBandName);
document.getElementById('restartGeneratorButton').addEventListener('click', clearGeneratedWords);