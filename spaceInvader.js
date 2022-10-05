"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader(){
    context.beginPath();
    context.lineWidth = 0;
    context.fillStyle = "black";
    context.rect(10, 10, 300, 300);
    context.fill();


    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(40, 40, 50, 50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(240, 40, 50, 50);
    context.rect(140, 90, 50, 50);
    context.rect(40, 140, 50, 50);
    context.rect(90, 140, 50, 50);
    context.rect(90, 190, 50, 50);
    context.rect(40, 240, 50, 50);
    context.rect(140, 240, 50, 50);
    context.rect(240, 240, 50, 50);
    context.rect(190, 190, 50, 50);
    context.rect(190, 140, 50, 50);
    context.rect(240, 140, 50, 50);
    context.fill();

}