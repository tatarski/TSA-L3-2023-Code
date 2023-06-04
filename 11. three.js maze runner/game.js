
// Пази всичко, което трябва да се рисува
const scene = new THREE.Scene();

// Откъде сме погледнали 3д сцената 
const camera = new THREE.PerspectiveCamera(
        75, window.innerWidth/window.innerHeight, 0.1, 1000);


// Взима scene и камера и прави 2d картинка
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.body.appendChild(renderer.domElement);
let labirint = [
    [0, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 1, 1, 1]
]

camera.up.set(0, 0, 1);
function setupGameField() {
    // Къде се намира
    camera.position.set( 5, 5, 5);
    // Накъде гледа камерата
    camera.lookAt(0, 0, 0);
    // Как е ориентирана камерата
    // Всеки 3д обект има геометрия 
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    // Всеки 3д обект има материал
    let material = new THREE.MeshPhongMaterial({ color: "green" });
    let ground_geometry = new THREE.BoxGeometry(10, 10, 1);
    let ground = new THREE.Mesh(ground_geometry, material);
    ground.position.set(0, 0, -1);
    for(let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (labirint[i][j] == 1) {
                let cube = new THREE.Mesh(geometry, material);
                // Промяна на позицията на кубчето
                cube.position.set(i, j, 0)
                scene.add(cube)
            }
        }
    }
    let ambient_light = new THREE.AmbientLight("white", 0.5);
    let light1 = new THREE.PointLight("white", 1);
    light1.position.set(0, 2, 3);

    scene.add(ground, ambient_light, light1);
}
setupGameField();
// Изпълнява се през 10 милисекунди
function update() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // Камерата има 3 параметъра:

}
// Изпълнява се през не знам колко милисекунди точно
function redraw() {
    requestAnimationFrame(redraw);
        
    renderer.render(scene, camera);
}
redraw();
setInterval(update, 10);