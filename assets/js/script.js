var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Tête
ctx.beginPath();
ctx.arc(200,50,50,0,2 * Math.PI);
ctx.fillStyle = "#976F0F";
ctx.fill();

// Yeux
// Gauche
ctx.beginPath();
ctx.arc(180,50,5,0,2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

// Droit
ctx.beginPath();
ctx.arc(220,50,5,0,2 * Math.PI);
ctx.fill();

// Sourcil gauche
ctx.beginPath();
ctx.moveTo(170,40);
ctx.quadraticCurveTo(180,30,190,40)
ctx.lineWidth = 2;
ctx.strokeStyle ="white";
ctx.stroke();

// Sourcil droit
ctx.beginPath();
ctx.moveTo(210,40);
ctx.quadraticCurveTo(220,30,230,40);
ctx.stroke();

// Sourire
ctx.beginPath();
ctx.moveTo(180,70);
ctx.quadraticCurveTo(190,75,220,70);
ctx.moveTo(180,70);
ctx.quadraticCurveTo(200,90,220,70);
ctx.strokeStyle = "red";
ctx.stroke();

// Corps
ctx.beginPath();
ctx.moveTo(200,90);
ctx.lineTo(70,90);
ctx.quadraticCurveTo(50,105,70,120); // Arrondi bras gauche
ctx.lineTo(160,120);
ctx.lineTo(160,300);
ctx.quadraticCurveTo(175,320,190,300); // Arrondi jambe gauche
ctx.lineTo(190,210);
ctx.quadraticCurveTo(200,190,210,210); // Arrondi entre-jambe
ctx.lineTo(210,300);
ctx.quadraticCurveTo(225,320,240,300); // Arrondi jambe droite
ctx.lineTo(240,120);
ctx.lineTo(330,120);
ctx.quadraticCurveTo(350,105,330,90); // Arrondi bras droit
ctx.fillStyle = "#976F0F";
ctx.fill();

// Bouton du bas
ctx.beginPath();
ctx.arc(200,150,7,0,2 * Math.PI);
ctx.fillStyle = "#7A2976";
ctx.fill();

// Bouton du haut
ctx.beginPath();
ctx.arc(200,120,7,0,2 * Math.PI);
ctx.fill();

// Vague du pantalon
ctx.beginPath();
ctx.moveTo(170,180);
ctx.quadraticCurveTo(175,185,180,180);
ctx.quadraticCurveTo(185,175,190,180);
ctx.quadraticCurveTo(195,185,200,180);
ctx.quadraticCurveTo(205,175,210,180);
ctx.quadraticCurveTo(215,185,220,180);
ctx.quadraticCurveTo(225,175,230,180);
ctx.strokeStyle = "white";
ctx.stroke();
