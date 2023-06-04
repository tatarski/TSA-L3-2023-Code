// Променливи, които пазят информация за играча
function moveWithWASD() {
    //D -> надясно
    if(isKeyPressed[68]) {
        this.x += this.skorost;
    }  //A -> надясно
    if(isKeyPressed[65]) {
        this.x -= this.skorost;
    } //W -> надясно
    if(isKeyPressed[87]) {
        this.y -= this.skorost;
    } //S -> надясно
    if(isKeyPressed[83]) {
        this.y += this.skorost;
    }
}
let player = {
    x: 400,
    y: 300,
    jivoti: 100,
    parichki: 0,
    ime: "Stamatcho",
    skorost: 5,
    shir: 80,
    vis: 100,
    move: moveWithWASD
};
// Добавете параметър на функцията drawItem
function drawItem() {
    let risuvan_item = this;
    context.fillText(risuvan_item.ime, risuvan_item.x - player.x, risuvan_item.y - player.y - 30);
    drawImage(risuvan_item.kartinka, risuvan_item.x - player.x, risuvan_item.y - player.y, risuvan_item.shir, risuvan_item.vis);
}
function drawItemRotate() {
    // Ще ползвам this
    // Само във функции: this пази обекта, който е извикал функцията
    context.save();
    context.translate(this.x- player.x, this.y- player.y);
    context.rotate(Math.PI/3);
    drawImage(this.kartinka, -this.shir/2, -this.vis/2, this.shir, this.vis);
    context.restore();
}
let imena = ["ZELKA", "DIAMANT", "DIAMOND", "BUTILKA_ZA_VODA", "MONSTAR", "ZLATO", "KABEL"]
function suzdaiPredmet(kartinka, ime, opisanie, x, y, shir, vis, draw) {
    let nov_item = {
        // Избирайте случайни картинки
        kartinka: kartinka,
        ime: ime,
        opisanie: opisanie,
        // Избирайте случайни координати
        x: x,
        y: y,
        shir: shir,
        vis: vis,
        draw: draw 
    }
    return nov_item;
}
let predmeti = [];
let ranica = [];
function init() {
    for (let i = 0; i < 100; i++) {
        let nov_item = suzdaiPredmet(
            gem[randomInteger(30)],
            imena[randomInteger(imena.length)],
            "MNOGO SKAPOCENEN KAMAK",
            randomInteger(1900), randomInteger(1300),
            30, 30, [drawItemRotate, drawItem][randomInteger(2)])
        predmeti.push(nov_item);
    }
}
function sbluskaiPredmetiSIgrach(predmeti, player, ranica) {
    for(let i = 0; i < predmeti.length; i++) {
        let item = predmeti[i];
        if (areColliding(player.x + 400, player.y + 300, player.shir, player.vis, 
                item.x, item.y, item.shir, item.vis)) {
            // 1. Да махнем предмета от масива predmeti
            predmeti[i] = predmeti[predmeti.length - 1];
            predmeti.length--;
            // 2. Да добавим предмета в раницата на играча
            ranica.push(item);
        }
    }
}
function update() {
    player.move();
    sbluskaiPredmetiSIgrach(predmeti, player, ranica);
}
function drawInventory(predmeti, x, y, shir, vis, itemShir) {
    for(let i = 0; i < predmeti.length; i++) {
        let item = predmeti[i];
        let tekRed = Math.floor((i*itemShir)/shir);
        drawImage(item.kartinka, x+(i * itemShir)%shir, y+itemShir*tekRed, itemShir, itemShir);

    }
    context.fillStyle = "red";
    context.font = "20px Courier New";
    for (let i = 0; i < predmeti.length; i++) {
        let item = predmeti[i];
        if (areColliding(mouseX, mouseY, 1, 1,
            i * 50, 0, 50, 50)) {
            context.fillText(item.ime, mouseX, mouseY);
            context.fillText(item.opisanie, mouseX, mouseY + 20);
        }
    }
    context.fillStyle = "blue";

}
function draw() {   
    drawImage(backForest, -player.x, -player.y, 1900, 1300)
    drawImage(spy[1], 400, 300, player.shir, player.vis);
    context.font = "30px Courier New";
    context.fillText(player.ime, 400, 300-30);
    context.fillText("PARICHKI: " + player.parichki, player.x, player.y- 60);
    context.fillText("JIVOTI: " + player.jivoti, player.x, player.y- 90);
    for(let i = 0; i < predmeti.length; i++) {
        let tek_item = predmeti[i];
        tek_item.draw();
    }
    if(isKeyPressed[73]) {
        drawInventory(ranica, 200, 200, 400, 400, 100);
    }
}
function mouseup() {
}
function keyup(key) {
}