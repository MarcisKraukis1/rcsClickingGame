let smallUpgrade = 0;
let bigUpgrade = 0;
let smallPrice = 10;
let bigPrice = 90;
let total = 0;
let available = 0;
let loop = 10;


document.getElementById('Click-me')
addEventListener('click', function(){
total += 1;
available += 1;
});

document.getElementById('buySmall')
addEventListener('click', function(){
if(available >= smallPrice){
    available -= smallPrice;
    smallPrice = smallPrice + (smallPrice * 0.1);
    smallPrice = Math.round(smallPrice);
    smallUpgrade += 1;
}
});

document.getElementById('buyBig')
addEventListener('click', function(){
if(available >= bigPrice){
    available -= bigPrice;
    bigPrice = bigPrice + (bigPrice * 0.1);
    bigPrice = Math.round(bigPrice);
    bigUpgrade += 1;
}
});

function update(){
    document.getElementById('total').innerText = (Math.floor(total));
    document.getElementById('available').innerText = (Math.floor(available));
    document.getElementById('smallUpgrade').innerText = (smallUpgrade);
    document.getElementById('bigUpgrade').innerText = (bigUpgrade);
    document.getElementById('smallPrice').innerText = (smallPrice);
    document.getElementById('bigPrice').innerText = (bigPrice);
    if(available >= smallPrice){
        document.getElementById('buySmall').removeAttribute('disabled');
    } else {
        document.getElementById('buySmall').atrribute = ('disabled', 'disabled');
    }
    if(available >= bigPrice){
        document.getElementById('buyBig').removeAttribute('disabled');
    } else {
        document.getElementById('buyBig').atrribute = ('disabled', 'disabled');
    }
}

function gameLoop(){
    let coinsToAdd = 0;
    if(smallUpgrade > 0){
        coinsToAdd += smallUpgrade / 100;
    }
    if(bigUpgrade > 0){
        coinsToAdd += bigUpgrade / 10;
    }
    total += coinsToAdd;
    available += coinsToAdd;
    update();
}
setInterval(gameLoop, loop);