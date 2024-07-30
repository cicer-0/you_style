function contact() {
  window.open("https://wa.me/51932360375", "_blank");
}
const  sheinProducts = [
  { src: 'image013.jpeg', title: 'Vestido Floral', description: 'Vestido floral de primavera, perfecto para cualquier ocasión.' },
  { src: 'image014.jpeg', title: 'Organizador de Maquillaje', description: 'Mantén tu maquillaje organizado con este práctico organizador.' },
  { src: 'image015.jpeg', title: 'Set de Brochas', description: 'Juego de brochas de maquillaje de alta calidad.' },
  { src: 'image016.jpeg', title: 'Aretes de Ositos', description: 'Aretes coloridos en forma de ositos, para un look divertido.' },
  { src: 'image017.jpeg', title: 'Bolso de Hombre', description: 'Bolso casual para hombre, perfecto para el día a día.' },
  { src: 'image018.jpeg', title: 'Sudaderas a Juego', description: 'Sudaderas negras a juego, ideales para parejas.' },
  { src: 'image019.jpeg', title: 'Conjunto de Accesorios', description: 'Conjunto de collares y pulseras negras con diseño de cruz.' },
  { src: 'image020.jpeg', title: 'Camiseta con Araña', description: 'Camiseta negra con diseño de araña roja, para un look atrevido.' }
];

const temuProducts = [
  { src: 'image005.jpeg', title: 'Top Básico', description: 'Top básico en varios colores, ideal para combinar con cualquier outfit.' },
  { src: 'image006.jpeg', title: 'Bolso Negro', description: 'Elegante bolso negro, perfecto para cualquier ocasión.' },
  { src: 'image007.jpeg', title: 'Vestido Negro', description: 'Vestido negro ajustado, perfecto para una salida nocturna.' },
  { src: 'image008.jpeg', title: 'Gafas de Sol', description: 'Gafas de sol modernas con cadena dorada.' },
  { src: 'image009.jpeg', title: 'Kit de Accesorios', description: 'Kit de accesorios para el cabello, coloridos y variados.' },
  { src: 'image010.jpeg', title: 'Herramientas de Masaje', description: 'Herramientas de masaje facial, ideales para el cuidado de la piel.' },
  { src: 'image011.jpeg', title: 'Fundas para Teléfono', description: 'Fundas protectoras para tu smartphone en colores pastel.' },
  { src: 'image012.jpeg', title: 'Collar con Colgante de Araña', description: 'Collar plateado con colgante de araña negra, para un estilo único.' }
];

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
    button.onclick = () => redirectToWhatsApp(product.title);

    productItem.appendChild(img);
    productItem.appendChild(title);
    productItem.appendChild(description);
    productItem.appendChild(button);
    productList.appendChild(productItem);
  });
}

function loadSheinProducts() {
  loadProducts(sheinProducts);
}

function loadTemuProducts() {
  loadProducts(temuProducts);
}
