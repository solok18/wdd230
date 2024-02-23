const input = document.querySelector('#favchapter');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList () || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();

    }
});
        
function displayList(item) {
    

    let listItem = document.createElement('li');
    let delButtom = document.createElement('button');

    listItem.textContent = item;
    delButtom.textContent = '❌';
    delButtom.classList.add('delete');

    listItem.append(delButtom);
    list.append(listItem);

    delButtom.addEventListener('click', function () {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });

}

function setChapterList() {
    localStorage.setItem('myFavList', JSON.stringify(chapterArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}
