import { getProducts } from './products.js';

document.addEventListener("DOMContentLoaded", () => {
    let products = [];
    let cart = [];
    const priceValue = document.getElementById('priceValue');
    const priceRange = document.getElementById('priceRange');
    const cartIcon = document.getElementById('cartIcon');
    const cartPrice = document.querySelector('.cartPrice');
    const cartSlider = document.getElementById('cartSlider');
    const cartCloseIcon = document.getElementById('cartCloseIcon');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    priceRange.addEventListener('input', () => {
        priceValue.textContent = priceRange.value;
    });

    cartCloseIcon.addEventListener('click', () => {
        cartSlider.classList.remove('open');
    });


    document.getElementById('filterButton').addEventListener('click', filterProducts);
    document.getElementById('searchButton').addEventListener('click', searchProducts);
    cartIcon.addEventListener('click', toggleCartSlider);
    document.getElementById('addToCartButton').addEventListener('click', addToCart);

    getProducts().then(data => {
        products = data;
        displayProducts(products);
    }).catch(error => {
        console.error('Error fetching products:', error);
    });


    //For filter the product by categories and price
    function filterProducts() {
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
        const maxPrice = parseInt(priceRange.value, 10);

        const filteredProducts = products.filter(product => {
            const matchesCategory = selectedCategories.length ? selectedCategories.includes(product.category) : true;
            const matchesPrice = product.price <= maxPrice;
            return matchesCategory && matchesPrice;
        });

        displayProducts(filteredProducts);
    }

    //For search the product by name and categories
    function searchProducts() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const filteredProducts = products.filter(product => {
            const matchesName = product.title.toLowerCase().includes(searchInput);
            const matchesCategory = product.category.toLowerCase().includes(searchInput);
            return matchesName || matchesCategory;
        });

        displayProducts(filteredProducts);
    }


    //Show all products that present in products.js. 
    function displayProducts(products) {
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4 product-card align-items-stretch';
            productCard.innerHTML = `
            <div class="card mt-3 shadow" style="width: 18rem;" data-product-id="${product.id}">
                <img src="${product.imgUrl}" class="card-img-top img-fluid" style="height: 300px; object-fit: cover" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Category: ${product.category}</p>
                    <p class="card-text">Price: ₹${product.price}</p>
                    <button type="button" class="btn btn-primary cart-btn-outside">View Details</button>
                </div>
            </div>
            `;
            productList.appendChild(productCard);
            productCard.addEventListener('click', () => showModal(product));
        });
    }


    //After Click on Product card modal will show with all product details
    function showModal(product) {
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        document.getElementById('modalImage').src = product.imgUrl;
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalCategory').textContent = `Category: ${product.category}`;
        document.getElementById('modalPrice').textContent = `Price: ₹${product.price}`;
        document.getElementById('modalInfo').textContent = product.info || 'No additional information available.';
        document.getElementById('addToCartButton').dataset.productId = product.id;
        modal.show();
    }


    //After click add to cart btn 
    function addToCart() {
        const productId = parseInt(document.getElementById('addToCartButton').dataset.productId, 10);
        const product = products.find(p => p.id === productId);

        if (product) {
            cart.push(product);
            updateCart();
            const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
            modal.hide();
        }
    }

    //update cart
    function updateCart() {
        cartPrice.textContent = cart.length;
        cartItems.innerHTML = '';

        let total = 0;
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <img src="${product.imgUrl}" alt="${product.title}" style="width: 50px; height: 50px; object-fit: cover;">
                <div>
                    <h6>${product.title}</h6>
                    <p>₹${product.price}</p>
                </div>
            </div>
            `;
            cartItems.appendChild(cartItem);
            total += product.price;
        });

        cartTotal.textContent = total;
    }

    // Cart open wil slider
    function toggleCartSlider() {
        cartSlider.classList.toggle('open');
    }
    
});
