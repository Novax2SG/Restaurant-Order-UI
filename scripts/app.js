const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 8.99,
    image: "assets/margherita.jpg",
    alt: "A classic Margherita pizza with fresh basil"
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 9.99,
    image: "assets/pepperoni.jpg",
    alt: "Pepperoni pizza with cheese and tomato sauce"
  },
  {
    id: 3,
    name: "Meat feast Pizza",
    price: 10.49,
    image: "assets/bolognese.jpg",
    alt: "Pizza topped with bacon, grilled chicken, sausges and jalapenos"
  },
  {
    id: 4,
    name: "Garlic Bread",
    price: 4.99,
    image: "assets/garlicbread.jpg",
    alt: "Toasted garlic bread slices with herbs"
  },
  {
    id: 5,
    name: "Tiramisu",
    price: 5.49,
    image: "assets/tiramisu.jpg",
    alt: "Italian tiramisu dessert consisting of ladyfingers soaked with coffee and rum"
  }
];


function renderMenu() {
  const container = document.getElementById('menu-container');
  menuItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
   div.innerHTML = `
  <img src="${item.image}" alt="${item.alt}" class="menu-img" />
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
