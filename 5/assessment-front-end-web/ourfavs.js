let catCafes = [
    {"theName":"Lady Dinahs Cat Emporium", "location":"England", "link":"https://ladydinahs.com/"},
    {"theName":"Temarinoouchi Cat Cafe", "location":"Japan", "link":"http://www.temarinoouchi.com/"},
    {"theName":"Tinker's Cat Cafe", "location":"Utah", "link":"https://www.tinkerscatcafe.com/"},
    {"theName":"Crumbs and Whiskers Cat Cafe", "location":"California", "link":"https://crumbsandwhiskers.com/"}
    ]
    
function randomCafe(catCafes) {
    let randomCafe = catCafes[Math.floor(Math.random() * catCafes.length)]
    alert(`Go to ${randomCafe.theName} in ${randomCafe.location}! ${randomCafe.link}`)
    }
    
let button = document.querySelector('#sug');
button.addEventListener('click', () => {
    randomCafe(catCafes)});
