const baseURL = "https://solok18.github.io/wdd230/";
const linkURL = "data/links.json";

const cards = document.querySelector('#cards');

async function getLinks()   {
    const response = await fetch(linkURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((weeks) => {
        let list = document.createAttribute('li')
        let a = document.createAttribute('a')

        a.textContent = `${weeks.title}`

        list.appendChild(a);

        cards.appendChild(list);
    });
}