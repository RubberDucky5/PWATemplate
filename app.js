function registerServiceWorker () {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
}

registerServiceWorker();

let clicks = 0;

document.addEventListener('click', (e) => {
    clicks++;
    document.getElementById("click").innerHTML = clicks;
});