const buttonforgrid = document.querySelector("#grid");
const buttongforlist = document.querySelector('#list');
const display = document.querySelector("main");

buttonforgrid.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.add("list");
});

buttongforlist.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

