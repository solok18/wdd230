const baseURL = "https://solok18.github.io/wdd230/";
const linkURL = "https://raw.githubusercontent.com/solok18/wdd230/main/data/links.json";

const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linkURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        let lessonNumber = document.createElement('h4');
        let list = document.createElement('ul');
        // let listItems = document.createElement('li');
        // let links = document.createElement('a');

        lessonNumber.textContent = `${lesson.lesson}:`;

        lesson.links.forEach((link) => {
            let listItems = document.createElement('li');
            let links = document.createElement('a');
            
            // listItems.textContent = `${link.title}`;
            links.href = link.url;
            links.target = "_blank";
            links.textContent = link.title ;

        // list.appendChild(lessonNumber);
        // list.appendChild(listItems);
        // list.appendChild(links);
            listItems.appendChild(links);
            list.appendChild(listItems);
    });
        cards.appendChild(lessonNumber);
        cards.appendChild(list);
        // cards.appendChild(lessonNumber);
    });
}


