function randomInteger(max) {
    return Math.floor(Math.random()*max);
}
let arr = [];
for(let i = 0; i < 6; i++) {
    arr[i] = 439 + randomInteger(621 - 439)
}
function nameriMinElement(masiv) {
    let minKandidat = masiv[0];
    console.log("MIN KANDIDAT = ", minKandidat);
    for(let i = 0; i < masiv.length; i++) {
        console.log("razglejdam masiv[", i, "]=", masiv[i]);
        if(masiv[i] < minKandidat) {
            console.log("TAKUSHTIQ ELEMENT E PO MALUK OT MINKANDIDAT");
            console.log("MINKANDIDAT = ", masiv[i]);
            minKandidat = masiv[i];
        }
    }
    return minKandidat;
}
function nameriSrednoArithmetichno(masiv) {
    let suma = 0;
    for (let i = 0; i < masiv.length; i++) {
        suma += masiv[i];
    }
    return suma / masiv.length;
}
let masiv = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]]
function nameriMaxElement(masiv) {
    let maxKandidat = masiv[0];
    for(let i = 0; i < masiv.length; i++) {
        if(masiv[i] > maxKandidat) {
            maxKandidat = masiv[i];
        }
    }
    return maxKandidat;
}
function init() {
}

let t = 0;
function update() {
    t+=0.01;
}
function draw() {
    // context.beginPath();
    // context.moveTo(mouseX, mouseY);
    // context.arc(mouseX, mouseY, 50, t, t + 2 * Math.PI/3);
    // context.fill();
    for(let o in objects){
        o.draw();
    }

}
{
    jsImage:
    isLoaded:
    draw
}
function mouseup() {
}