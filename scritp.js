let items = [];

function addItem() {
  const input = document.getElementById('itemInput');
  const itemName = input.value.trim();

  if (itemName) {
    const newItem = {
      id: Date.now(),
      name: itemName,
    };

    items.push(newItem);
    input.value = '';
    renderItems();
  }
}

function renderItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name}</span>
      <button class="edit" onclick="editItem(${item.id})">Edit</button>
      <button onclick="deleteItem(${item.id})">Delete</button>
    `;
    itemList.appendChild(li);
  });
}

function editItem(id) {
  const newName = prompt('Edit item:');
  if (newName) {
    items = items.map(item => item.id === id ? { ...item, name: newName } : item);
    renderItems();
  }
}

function deleteItem(id) {
  items = items.filter(item => item.id !== id);
  renderItems();
}
