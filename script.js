"use strict";

const dino = document.getElementById("dino"),
    cactus = document.getElementById("cactus");

document.addEventListener('keydown', function (event) {
    dino.classList.add("jump");
    setTimeout(function jumpDel() {
        dino.classList.remove("jump");
    }, 400);
});


let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top')),
        cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if ((cactusLeft < 50) && (cactusLeft > 0) && (dinoTop > 120)) {
        alert("Игра окончена!");
    }
}, 100);