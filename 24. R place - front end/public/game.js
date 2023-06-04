let map = [];
function init() {
    console.log("zelka");
    // Пращаме GET request към localhost:3000/map
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", onMapLoad);
    xmlhttp.open("GET", "http://localhost:3000/map");
    xmlhttp.send();
}
function onMapLoad(obj) {
    // console.log(obj);
    console.log(obj.currentTarget.responseText);
    map = JSON.parse(obj.currentTarget.responseText);
}
function update() {

}
function draw() {
    for(let i =0; i < map.length; i++) {
        for(let j = 0; j < map.length; j++) {
            let kletkaShir = 600/map.length;
            context.fillStyle = "rgb(" + map[i][j].r + "," + map[i][j].g + "," + map[i][j].b + ")";
            context.fillRect(i*kletkaShir, j*kletkaShir, kletkaShir, kletkaShir);
        }
    }

}