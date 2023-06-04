let base_x = 300, base_y = 300, ugul1 = 0, radius1 = 100, ugul2 = 0, radius2 = 50,
ugul3 = 0, radius3 = 100;
function init() {
}
function update() {
    // ugul1 += 0.01;
    ugul2 += 0.02;
}
function draw() {
    let w = 30;
    drawImage(ballOrTree, base_x - w/2, base_y - w/2, w, w);
    context.beginPath();
    context.moveTo(base_x, base_y);
    let stava1_x = base_x + radius1*Math.cos(ugul1),
        stava1_y = base_y + radius1*Math.sin(ugul1);
    context.lineTo(stava1_x, stava1_y);
    context.stroke();
    drawImage(ballOrTarget, stava1_x-w/2, stava1_y-w/2, w, w)

    let u2 = ugul2 - Math.PI/2 + ugul1;
    context.beginPath();
    context.moveTo(stava1_x, stava1_y);
    let stava2_x = stava1_x + radius2*Math.cos(u2),
        stava2_y = stava1_y + radius2*Math.sin(u2);
    context.lineTo(stava2_x, stava2_y);
    context.stroke();


    drawImage(bird, stava2_x-w/2, stava2_y-w/2, w, w)
    let u3 = ugul3 - Math.PI/2 + u2;
    context.beginPath();
    context.moveTo(stava2_x, stava2_y);
    let stava3_x = stava2_x + radius3*Math.cos(u3),
        stava3_y = stava2_y + radius3*Math.sin(u3);
    context.lineTo(stava3_x, stava3_y);
    context.stroke();


}