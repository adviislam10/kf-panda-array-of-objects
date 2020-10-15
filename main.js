// Kung Fu Panda Look Up

// Global Variables
let characterArray = createCharacterArray();

// Event Listener
document.getElementById('search').addEventListener('click', characterSearch);

// Event Function
function characterSearch() {
    // Get Input Value (what character to look for?)
    let name = document.getElementById('input-name').value;
    name = name.toLowerCase();

    // Search for character by name
    let characterIndex = getCharacterByName(name);

    if (characterIndex == -1) {
        displayQuestionMark();
    } else {
        displayCharacter(characterArray[characterIndex]);
    }
}

function displayCharacter(characterObj) {
    // Update page to new character info
    document.getElementById('main-img').src = 'images/' + characterObj.imgFile;
    document.getElementById('character-name').innerHTML = characterObj.name;
    document.getElementById('quote').innerHTML = characterObj.quote;
    document.getElementById('wiki-link').innerHTML = characterObj.name + ' Wiki';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/' + characterObj.wikiName;
}

function displayQuestionMark() {
    // Update page to Question Mark
    document.getElementById('main-img').src = 'images/question-mark.png';
    document.getElementById('character-name').innerHTML = '?????';
    document.getElementById('quote').innerHTML = '"Character Not Found"';
    document.getElementById('wiki-link').innerHTML = 'Wiki Home';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_Wiki';
}

function createCharacterArray() {
    return [{
        name: 'Po',
        quote: 'I am the Dragon Warrior.',
        imgFile: 'po.png',
        wikiName: 'Po'
    }, {
        name: 'Tigress',
        quote: 'That was pretty hardcore!',
        imgFile: 'tigress.png',
        wikiName: 'Tigress'
    }, {
        name: 'Mantis',
        quote: 'Fear the bug!',
        imgFile: 'mantis.png',
        wikiName: 'Mantis'
    }, {
        name: 'Monkey',
        quote: 'We should hang out!',
        imgFile: 'monkey.png',
        wikiName: 'Monkey'
    }, {
        name: 'Crane',
        quote: 'You can chain my body, but you will never chain my warrior spirit!',
        imgFile: 'crane.png',
        wikiName: 'Crane'
    }, {
        name: 'Viper',
        quote: "I don't need to bite to fight!",
        imgFile: 'viper.png',
        wikiName: 'Viper'
    }, {
        name: 'Shifu',
        quote: "There is now a Level Zero.",
        imgFile: 'shifu.png',
        wikiName: 'Shifu'
    }, {
        name: 'Oogway',
        quote: "Yesterday is history, tomorrow is a mystery, but today is a gift.  That is why it is called the present.",
        imgFile: 'oogway.png',
        wikiName: 'Oogway'
    }, {
        name: 'Mr.Ping',
        quote: 'We are noodle folk. Broth runs through our veins!',
        imgFile: 'mr-ping.png',
        wikiName: 'Mr._Ping'
    }, {
        name: 'Tai Lung',
        quote: 'Fly back there and tell them... the real Dragon Warrior is coming home.',
        imgFile: 'tai-lung.png',
        wikiName: 'Tai_Lung'
    }]
}

function getCharacterByName(aName) {
    // Loop through character array looking for aName
    for (let i = 0; i < characterArray.length; i++) {
        if (characterArray[i].name.toLowerCase() == aName) {
            return i;
        }
    }

    //Didn't find a name, so return -1 to indicate not found.
    return -1;

}