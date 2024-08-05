// Script.js

const products = [
    {
        id: 1,
        name: "Produto 1",
        price: 99.99,
        image: "produto1.jpg"
    },
    {
        id: 2,
        name: "Produto 2",
        price: 149.99,
        image: "produto2.jpg"
    },
    {
        id: 3,
        name: "Produto 3",
        price: 199.99,
        image: "produto3.jpg"
    }
];

const cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            <a href="#" class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</a>
        `;
        productGrid.appendChild(productElement);
    });

    const cartIcon = document.querySelector(".cart-icon");
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const productId = e.target.getAttribute("data-id");
            const product = products.find(p => p.id == productId);
            cart.push(product);
            cartIcon.textContent = `Carrinho (${cart.length})`;
        });
    });
});
