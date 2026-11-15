// Находим элементы на странице
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Счётчик текущего слайда
let currentIndex = 0;

// Функция сдвига ленты
function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Кнопка "Вправо"
nextBtn.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
});

// Кнопка "Влево"
prevBtn.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

async function loadProducts() {
    const response = await fetch('https://dummyjson.com/products?limit=3');
    const data = await response.json();
    const container = document.getElementById('products-container');

    let productsHTML = '';

    for (const product of data.products) {
        productsHTML += `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" width="300" height="300">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <span class="price">${product.price} ₽</span>
                <button>Купить</button>
            </div>
        `;
    }

    container.innerHTML = productsHTML;
}

loadProducts();