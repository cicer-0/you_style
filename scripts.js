function contact() {
  window.open("https://wa.me/51932360375", "_blank");
}


function contact() {
  window.open("https://wa.me/51932360375", "_blank");
}

function loadProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Limpiar la lista de productos

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    
    const img = document.createElement('img');
    img.src = `assets/imgs/${product.src}`;
    img.alt = product.title;
    
    const title = document.createElement('h3');
    title.textContent = product.title;
    
    const description = document.createElement('p');
    description.textContent = product.description;
    
    const button = document.createElement('button');
    button.textContent = 'Comprar';
    button.onclick = () => redirectToWhatsApp(product.link);

    productItem.appendChild(img);
    productItem.appendChild(title);
    productItem.appendChild(description);
    productItem.appendChild(button);
    productList.appendChild(productItem);
  });
}

function loadSheinProducts() {
  fetch('data/sheinProducts.json')
    .then(response => response.json())
    .then(data => loadProducts(data))
    .catch(error => console.error('Error loading Shein products:', error));
}

function loadTemuProducts() {
  fetch('data/temuProducts.json')
    .then(response => response.json())
    .then(data => loadProducts(data))
    .catch(error => console.error('Error loading Temu products:', error));
}

function redirectToWhatsApp(link) {
  const phoneNumber = "51932360375";
  const message = `Hola, estoy interesado en el producto: ${link}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  console.log(url);
  window.open(url, "_blank");
}

// Cargar productos de Shein por defecto
window.onload = function() {
  selectButton('shein');
};

function selectButton(button) {
  document.getElementById('shein-button').classList.remove('selected');
  document.getElementById('temu-button').classList.remove('selected');
  
  if (button === 'shein') {
    document.getElementById('shein-button').classList.add('selected');
    loadSheinProducts();
  } else {
    document.getElementById('temu-button').classList.add('selected');
    loadTemuProducts();
  }
}
