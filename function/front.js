let persons = [];
const form = document.getElementById('form');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const personsNode = document.getElementById('persons');
const result = document.getElementById('result');

const createPersonTemplate = () => `
<div class="border">
  <label>Имя <input name="name" type="text"></label>
  <label>Сумма <input name="price" type="number"></label>
</div>
`;


addButton.addEventListener('click', (e) => {
  personsNode.innerHTML += createPersonTemplate();
  persons = [...persons, { name: '', price: '' }];
});

removeButton.addEventListener('click', (e) => {
    persons = persons.slice(0, -1);
    const labels = personsNode.getElementsByTagName('div');
    labels[labels.length - 1].remove();
});

form.addEventListener('submit', (e) => {
    const data = new FormData(e.target);
    const discount = data.get('discount');
    const shipping = data.get('shipping');
 
    const names = data.has('name') && data.getAll('name');
    const prices = data.has('price') && data.getAll('price');

    if (names.length && prices.length) {
        persons = persons.map((person, index) => {
            return {
                name: names[index],
                price: prices[index]
            };
        });
    
        result.innerHTML = getMoney(persons, discount, shipping);
    }

    e.preventDefault();
})