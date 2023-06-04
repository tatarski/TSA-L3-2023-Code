let visochina = [], dupkaRadius = 50, dupkaDulbochina = 50;
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
    console.log(Math.atan2(mouseY, mouseX));
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
}
function mouseup() {
    visochina[mouseX] -= dupkaDulbochina;
    for(let i = 1; i < dupkaRadius; i++) {
        visochina[mouseX - i] -= (dupkaDulbochina - i);
        visochina[mouseX + i] -= (dupkaDulbochina - i);
    }
}