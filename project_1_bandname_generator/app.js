function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function displayWord(containerId, word) {
    const container = document.getElementById(containerId);
    container.innerHTML = word;
}

//////////////////////////////////////////////////////
//The following two parts for generating bandname   //
//and restart is done with the help of ChatGPT,     //
//There were some parts I didn't know how it worked.//
//////////////////////////////////////////////////////
function clearGeneratedWords() {
    document.getElementById('generatedWords').textContent = '';
    document.getElementById('bandName').textContent = '';

    const categories = ['adjs', 'capitals', 'cocktails', 'drugs', 'flowers', 'isms', 'kaomoji', 'materials', 'paints', 'verbs'];
    for (const category of categories) {
        const wordSpan = document.getElementById(`${category}Word`);
        wordSpan.textContent = '';
    }
}

let previousCategories = [];

function generateBandName() {
    const categories = ['adjs', 'capitals', 'cocktails', 'drugs', 'flowers', 'isms', 'kaomoji', 'materials', 'paints', 'verbs'];
    const selectedCategories = [];

    // Choose two random categories
    while (selectedCategories.length < 3) {
        const randomIndex = Math.floor(Math.random() * categories.length);
        const selectedCategory = categories[randomIndex];
        if (!selectedCategories.includes(selectedCategory) && !previousCategories.includes(selectedCategory)) {
            selectedCategories.push(selectedCategory);
        }
    }

    // Update previousCategories with the current selected categories
    previousCategories = selectedCategories;

    // Collect words from the selected categories
    const words = selectedCategories.map(category => document.getElementById(`${category}Word`).textContent);

    // Shuffle the selected words
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }

    // Generate band name with the selected words
    const bandName = words.join(' ');
    document.getElementById('bandName').textContent = bandName;
}


/*My original thought was to generate two words for each category
but, it was a bit too complicated for me. So I ended up having 
only one word from each category.*/

window.addEventListener('load', function () {
    console.log('page is loaded');

    let button1 = document.getElementById('adjsButton');
    button1.addEventListener('click', function () {
        fetch("json/adjs.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomAdjective = getRandomElement(data.adjs);
                displayWord('adjsWord', randomAdjective);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

    let button2 = document.getElementById('capitalsButton');
    button2.addEventListener('click', function () {
        fetch("json/capitals.json")
            .then(response => response.json())
            .then(data => {
                const randomCountryObject = getRandomElement(data.countries);
                const randomCapitals = randomCountryObject.capital;
                displayWord('capitalsWord', randomCapitals);
            })
            .catch(err => {
                console.error('Error fetching capitals data:', err);
            });
    });

    let button3 = document.getElementById('cocktailsButton');
    button3.addEventListener('click', function () {
        fetch("json/cocktails.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomCocktails = getRandomElement(data.cocktails);
                displayWord('cocktailsWord', randomCocktails);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

    let button4 = document.getElementById('drugsButton');
    button4.addEventListener('click', function () {
        fetch("json/drugs.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomDrugs = getRandomElement(data.drugs);
                displayWord('drugsWord', randomDrugs);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

    let button5 = document.getElementById('flowersButton');
    button5.addEventListener('click', function () {
        fetch("json/flowers.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomFlowers = getRandomElement(data.flowers);
                displayWord('flowersWord', randomFlowers);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

    let button6 = document.getElementById('ismsButton');
    button6.addEventListener('click', function () {
        fetch("json/isms.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomIsms = getRandomElement(data.isms);
                displayWord('ismsWord', randomIsms);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

    let button7 = document.getElementById('kaomojiButton');
    button7.addEventListener('click', function () {
        fetch("json/kaomoji.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomKaomoji = getRandomElement(data.cuteKaomoji);
                displayWord('kaomojiWord', randomKaomoji);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

    let button8 = document.getElementById('materialsButton');
    button8.addEventListener('click', function () {
        fetch("json/materials.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomMaterials = getRandomElement(data.sculpture_materials);
                displayWord('materialsWord', randomMaterials);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

    let button9 = document.getElementById('paintsButton');
    button9.addEventListener('click', function () {
        fetch("json/paints.json")
            .then(response => response.json())
            .then(data => {
                const randomColorObject = getRandomElement(data.color);
                const randomPaints = randomColorObject.color;
                displayWord('paintsWord', randomPaints);
            })
            .catch(err => {
                console.error('Error fetching color data:', err);
            });
    });

    let button10 = document.getElementById('verbsButton');
    button10.addEventListener('click', function () {
        fetch("json/verbs.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const randomVerbs = getRandomElement(data.verbs);
                displayWord('verbsWord', randomVerbs);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });

document.getElementById('generateBandNameButton').addEventListener('click', generateBandName);
document.getElementById('restartGeneratorButton').addEventListener('click', clearGeneratedWords);

});


let button = document.getElementById('generateBandNameButton');
let bgImage = ["media/bg1.jpg", "media/bg2.jpg", "media/bg3.jpg","media/bg4.jpg","media/bg5.jpg","media/bg6.jpg","media/bg7.jpg","media/bg8.jpg","media/bg9.jpg","media/bg10.jpg"];
let choice = 1;

button.addEventListener("click", function () {
    console.log("image change");
    document.body.style.backgroundImage = `url(${bgImage[choice]})`;
    choice = (choice + 1) % bgImage.length;
});