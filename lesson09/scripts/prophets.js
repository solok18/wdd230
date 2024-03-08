const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);

}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dateOfBirth = document.createElement('h3');
        let birthPlace = document.createElement('h3');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Brith Place: ${prophet.birthplace}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portriat of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        

        cards.appendChild(card);
    });
}