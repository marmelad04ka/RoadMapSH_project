const cookieContainer = document.querySelector('.cookie-container');
const closeButton = document.querySelector('.cookie-close-container button');
const acceptButton = document.querySelector('.cookie-button-container button');

function hideCookie() {
    cookieContainer.classList.add('hidden');
}

if (localStorage.getItem('cookiesAccepted') === 'true') {
    hideCookie();
} else {
    setTimeout(() => {
         cookieContainer.classList.remove("hidden")
    }, 1000);
}

closeButton.addEventListener('click', hideCookie);

acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookie();
});