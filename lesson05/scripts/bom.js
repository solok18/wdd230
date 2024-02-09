const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const listItem = document.createElement('li');

        const delButtom = document.createElement('button');

        listItem.innerHTML = input.value;
        delButtom.textContent = '❌';

        listItem.append(delButtom);
        list.append(listItem);

        delButtom.addEventListener('click', function () {
            list.removeChild(listItem);
            input.focus();
        });

        input.focus();

        input.value = '';
    }
});