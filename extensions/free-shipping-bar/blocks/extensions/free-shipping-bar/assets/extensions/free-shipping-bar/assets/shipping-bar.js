function refreshShippingBar() {
    fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
        const wrapper = document.querySelector('.shipping-bar-app-wrapper');
        if (!wrapper) return;

        const threshold = parseInt(wrapper.getAttribute('data-threshold'));
        const total = cart.total_price;
        const fill = document.querySelector('#ShippingBarFill');
        const message = document.querySelector('#ShippingBarMessage');

        const percent = Math.min((total / threshold) * 100, 100);
        fill.style.width = percent + '%';

        if (total >= threshold) {
            message.innerText = "You've unlocked free shipping! 🎉";
        } else {
            const remaining = (threshold - total) / 100;
            message.innerText = `You're only $${remaining.toFixed(2)} away from Free Shipping!`;
        }
    });
}

const originalFetch = window.fetch;
window.fetch = function() {
    return originalFetch.apply(this, arguments).then(async (response) => {
        if (response.url.includes('/cart/add') || response.url.includes('/cart/update') || response.url.includes('/cart/change')) {
            setTimeout(refreshShippingBar, 500);
        }
        return response;
    });
};
