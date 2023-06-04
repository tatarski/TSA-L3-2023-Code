let cel = {
    x: 400,
    y: 300
}
function distance(x1, y1, x2, y2) {
    let a = x1-x2, b = y1-y2;
    return Math.sqrt(a*a + b*b);
}
function moveVPravaLiniq(cel) {
    // Разчитам, че cel ще бъде обект и ще има x и y
    let d = distance(this.x, this.y, cel.x, cel.y)
    this.x += this.skorost*(cel.x - this.x)/d;
    this.y += this.skorost*(cel.y - this.y)/d;
}
let brUpdates = 0;
function moveSLangurcane(cel) {
    // Прехвърляне от x, y към ugul и radius
    let radius = distance(this.x, this.y, cel.x, cel.y);
    let ugul = Math.atan2(this.y - cel.y, this.x-cel.x);

    // Промянa по radius или ъгъл
    radius = radius - this.skorost;
    ugul += 0.05*Math.sin(brUpdates/100);

    // Прехвърляне от radius и ugul към X и Y 
    this.x = cel.x + radius * Math.cos(ugul);
    this.y = cel.y + radius * Math.sin(ugul);
}
function moveSpirala(cel) {
    // Прехвърляне от x, y към ugul и radius
    let radius = distance(this.x, this.y, cel.x, cel.y);
    let ugul = Math.atan2(this.y - cel.y, this.x-cel.x);

    // Промянa по radius или ъгъл
    radius = radius - this.skorost;
    ugul -= 0.03;

    // Прехвърляне от radius и ugul към X и Y 
    this.x = cel.x + radius * Math.cos(ugul);
    this.y = cel.y + radius * Math.sin(ugul);
}
function moveKrug(cel) {
    // Прехвърляне от x, y към ugul и radius
    let radius = distance(this.x, this.y, cel.x, cel.y);
    let ugul = Math.atan2(this.y - cel.y, this.x-cel.x);

    // Промянa по radius или ъгъл
    ugul -= 0.03;

    // Прехвърляне от radius и ugul към X и Y 
    this.x = cel.x + radius * Math.cos(ugul);
    this.y = cel.y + radius * Math.sin(ugul);
}
function moveKrugLangurc(cel) {
    // Прехвърляне от x, y към ugul и radius
    let radius = distance(this.x, this.y, cel.x, cel.y);
    let ugul = Math.atan2(this.y - cel.y, this.x-cel.x);

    // Промянa по radius или ъгъл
    ugul -= 0.01;
    radius += 1*Math.sin(brUpdates/20)

    // Прехвърляне от radius и ugul към X и Y 
    this.x = cel.x + radius * Math.cos(ugul);
    this.y = cel.y + radius * Math.sin(ugul);
}
let t = 0;
function moveKrugLangurcLangurc(cel) {
    t++;
    // Промянa по radius или ъгъл
    let ugul = t/30;
    let radius = Math.cos(ugul)*Math.sin(ugul)*200;

    // Прехвърляне от radius и ugul към X и Y 
    this.x = cel.x + radius * Math.cos(ugul);
    this.y = cel.y + radius * Math.sin(ugul);
}
let zombie = {
    x: randomInteger(800),
    y: randomInteger(600),
    skorost: 1,
    move: moveKrugLangurcLangurc 
}
function init() {
}
function update() {
    brUpdates++;
    zombie.move(cel);
}
function draw() {
    drawImage(femaleAction, cel.x, cel.y, 40, 40);
    drawImage(troll, zombie.x, zombie.y, 40, 40);

}
function mouseup() {
}
function keyup(key) {
}

