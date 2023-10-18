fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(products => {
  const productList = document.getElementById('productList');

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;

    const titleElement = document.createElement('h2');
    titleElement.classList.add('product-title');
    titleElement.textContent = product.title;

    const priceElement = document.createElement('p');
    priceElement.classList.add('product-price');
    priceElement.textContent = `Price: $${product.price}`;

    const detailsButton = document.createElement('button');
    detailsButton.classList.add('details-button');
    detailsButton.textContent = 'Detalhes';
    detailsButton.addEventListener('click', () => {
      redirectToDetails(product.id);
    });

    productElement.appendChild(imageElement);
    productElement.appendChild(titleElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(detailsButton);

    productList.appendChild(productElement);
  });
})
.catch(error => {
  console.log('Error:', error);
});

// Função para redirecionar para a página de detalhes do produto
function redirectToDetails(productId) {
    window.location.href = `detalhes_produto.html?id=${productId}`;
  }

  // Função para buscar os produtos filtrados com base no título
  function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const productElements = document.getElementsByClassName('product');

    Array.from(productElements).forEach(productElement => {
      const titleElement = productElement.getElementsByClassName('product-title')[0];
      const title = titleElement.textContent.toLowerCase();

      if (title.includes(searchTerm)) {
        productElement.style.display = 'block';
      } else {
        productElement.style.display = 'none';
      }
    });
  }