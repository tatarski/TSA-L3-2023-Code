let visochina = [], dupkaRadius = 50, dupkaDulbochina = 50;
let tankX = 20, tankUgul = 0;
function randomInteger(max) {
    return Math.floor(Math.random()*max);
}
function init() {
    // Генериране на планината
    for(let x = 0; x < canvas.width; x++) {
        // Измислете ваш як ред, който да генерира яка планина
        visochina[x] = Math.sin(x/40)*60 + 200 + Math.cos(x/50)*45 + Math.sin(x/5)*5;
        // visochina[x] = x*x/200;
        //visochina[x] = x;
        // visochina[x] = randomInteger(300);
    }
}
function update() {
    if(isKeyPressed[68]) {
        tankX += 1;
    }
    if(isKeyPressed[65]) {
        tankX -= 1;
    }
}
function draw() {
    // Рисуване на планината
    context.beginPath();
    for(let x = 0; x < canvas.width; x++) {
        context.lineTo(x, canvas.height-visochina[x]);
        // context.fillRect(x, canvas.height, 1, -visochina[x]);
    }
    context.lineTo(canvas.width, 0);
    context.lineTo(0, 0);
    context.fillStyle = "lightblue";
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(mouseX, mouseY);
    context.stroke();

    console.log(Math.atan2(mouseY, mouseX));
    let tankY = canvas.height - visochina[tankX];
    let tankX2 = tankX + 10, tankY2 = canvas.height - visochina[tankX2];
    let ugulNatanka = Math.atan2(tankY2 - tankY,tankX2-tankX);

    context.save(); // код за въртенето
    context.translate(tankX, tankY); // код за въртенето
    context.rotate(ugulNatanka); // избираме си ъгъл, на който да врътнем
    context.fillStyle = "red"; 
    context.fillRect(-25,-50, 50, 50); // тук рисуваме врътнатото нещо
    context.restore(); // код за въртенето
}
function mouseup() {
    visochina[mouseX] -= dupkaDulbochina;
    for(let i = 1; i < dupkaRadius; i++) {
        visochina[mouseX - i] -= (dupkaDulbochina - i);
        visochina[mouseX + i] -= (dupkaDulbochina - i);
    }
}