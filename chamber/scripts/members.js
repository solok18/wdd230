const url = 'https://raw.githubusercontent.com/solok18/wdd230/main/chamber/data/members.json';

const cards = document.querySelector('#members');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.members);

}

getProphetData();

const displayProphets = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let address = document.createElement('h3');
        let phoneNumber = document.createElement('h3');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        
        address.textContent = `${member.addresses}`;
        phoneNumber.textContent = `${member.phonenumber}`;
        
        website.setAttribute('href', member.websitesurl);
        website.target = "_blank";
        website.textContent = "Smud.org";

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portriat of ${member.name} ${member.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        // card.appendChild(portrait);
        

        cards.appendChild(card);
    });
}