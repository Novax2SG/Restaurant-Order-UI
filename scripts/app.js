const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 8.99 },
  { id: 2, name: "Pepperoni Pizza", price: 9.99 },
  { id: 3, name: "Spaghetti Bolognese", price: 10.49 },
  { id: 4, name: "Garlic Bread", price: 4.99 },
  { id: 5, name: "Tiramisu", price: 5.49 }
];

function renderMenu() {
  const container = document.getElementById('menu-container');
  menuItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>£${item.price.toFixed(2)}</p>
      <button onclick="addToBasket(${item.id})">Add to Basket</button>
    `;
    container.appendChild(div);
  });
}

function addToBasket(id) {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const item = menuItems.find(i => i.id === id);
  basket.push(item);
  localStorage.setItem('basket', JSON.stringify(basket));
  alert(`${item.name} added to basket!`);
}

renderMenu();
