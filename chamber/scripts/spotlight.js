const url = 'https://raw.githubusercontent.com/solok18/wdd230/main/chamber/data/members.json';

const cards = document.querySelector('#members');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayMembers(data.members);

}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let membership = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        
        address.textContent = `${member.addresses}`;
        phoneNumber.textContent = `${member.phonenumber}`;
        membership.textContent = `${member.membershiplevel}`;

        
        website.setAttribute('href', member.websitesurl);
        website.target = "_blank";
        website.textContent = member.name;

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
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