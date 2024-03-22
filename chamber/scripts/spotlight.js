const urlspotlight = 'https://raw.githubusercontent.com/solok18/wdd230/main/chamber/data/spotlights.json';

const cards = document.querySelector('#spotlights');

async function getMemberData() {
    const response = await fetch(urlspotlight);
    const data = await response.json();
    // console.table(data.spotlights);
    displayMembers(data.spotlights.slice(0, 3));

}

getMemberData();

const displayMembers = (spotlights) => {
    spotlights.forEach((spotlight) => {
        let card = document.createElement('section');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let membership = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        
        address.textContent = `${spotlight.addresses}`;
        phoneNumber.textContent = `${spotlight.phonenumber}`;
        membership.textContent = `${spotlight.membershiplevel}`;

        
        website.setAttribute('href', spotlight.websitesurl);
        website.target = "_blank";
        website.textContent = spotlight.name;

        portrait.setAttribute('src', spotlight.imageurl);
        portrait.setAttribute('alt', `Logo of ${spotlight.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(membership);
        card.appendChild(website);
        // card.appendChild(portrait);
        

        cards.appendChild(card);
    });
}