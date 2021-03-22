console.log('main.js');

// Permet de dessiner une forme 


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';


ctx.fillRect(50, 50, 100, 100);
//            ^ modification de la position du canvas en width
//                ^ modification de la position du canvas en height
//                     ^ modif de la longueur du canvas
//                         ^ modif de la hauteur du canvas


