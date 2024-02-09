const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const bookCap = input.value;

        if (bookCap.charAt(0) != bookCap.charAt(0).toUpperCase()){
            alert('Please start the name with capital letter.');
            return;
        }

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