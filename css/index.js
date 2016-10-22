////var bubble = document.getElementById('bub');
////
////
////$(document).ready(function(){
////
////
////    var f = 2;
////    for (var i = 0; i < f; i++) {
////
////
////        $(document).on("keydown keyup", function(e) {
////            var sH = document.getElementById('bub');
////            var sL = parseInt(sH.style.left);
////            var sT = parseInt(sH.style.top);
////
////
////
////            var up = e.keyCode == 38 || e.keyCode == 87,
////                right = e.keyCode == 39  || e.keyCode == 68,
////                down = e.keyCode == 40 || e.keyCode == 83,
////                left = e.keyCode == 37 || e.keyCode == 65,
////                space = e.keyCode == 32 || e.keyCode ==  70,
////                direction = up || down ? 'top' : 'left', space,
////                move = up || left ? '-=' : '+=',
////                ani = {};
////
////
////
////            if ( up || right || down || left || space) {
////                sH.style.left = sL + 1 + 'px';
////                sH.style.top = sT - 1 + 'px';
////                sH.style.position = 'relative';
////                sH.style.transition = 'all .09s ';
////                if ( e.type === 'keydown' ) {
////
////                    ani[ direction ] = move + '10px';
////                    $('#bub').stop().animate( ani, - 10 );
////                    console.log(direction);
////                    f = i + 2;
////                }
////            }
////
////        });
////    }
////});
////
//
//
//
//
//function Bubble () {
//    this.canvas = document.getElementById('canvas');
//    this.street = document.getElementsByClassName('street');
//    this.bub = document.getElementById('bub');
//    this.bubAxis = this.getBubAxis();
//
//
//this.cloudsAxis = 0;
//this.cloudStyle = {
//    width: 10,
//    height:10,
//    space: 10
//};
//
//this.cloudsAmount = this.setCloudsAmount();
//
//}
//
//Bubble.prototype.init = function () {
//    this.moveClouds();
//};
//
//Bubble.prototype.moveClouds = function(){
//    var clouds = this.updateClouds();
//
//    for( var i = clouds.length -1; i >= 0; i--){
//        this.cloudsAxis= clouds[i].offsetLeft + Math.floor(Math.random()*20);
//        if( clouds[i].offsetLeft >= clouds[i].parentElement.clientWidth){
//            this.cloudsAxis = 0;
//        }
//        clouds[i].style.left = this.cloudsAxis + "px";
//    }
//};
//
//Bubble.prototype.moveBub = function (b) {
//    switch (b.which){
//        case 38: this.moveUp();
//            break;
//        case 40: this.moveDown();
//            break;
//        case 39: this.moveRight();
//            break;
//        case 37: this.moveLeft();
//            break;
//        default: console.log('here');
//    }
//};
//
//
//Bubble.prototype.moveUp = function (){
//    this.bubAxis.y +=3;
//    this.bub.style.bottom = this.bubAxis.y + "px";
//};
//Bubble.prototype.moveDown = function (){
//    this.bubAxis.y -=3;
//    this.bub.style.bottom = this.bubAxis.y + "px";
//};
//Bubble.prototype.moveRight = function (){
//    this.bubAxis.y +=3;
//    this.bub.style.bottom = this.bubAxis.x + "px";
//};
//Bubble.prototype.moveLeft = function (){
//    this.bubAxis.y -=1;
//    this.bub.style.bottom = this.bubAxis.x + "px";
//};
//
//Bubble.prototype.getBubAxis = function () {
//    var axis= {},
//    style = window.getComputedStyle(this.bub);
//
//    return axis = {
//        y : parseInt(style.getPropertyValue("bottom"), 10),
//        x : parseInt(style.getPropertyValue("left"), 10)
//    }
//};
//
//Bubble.prototype.setCloudsAmount = function(){
//    return Math.round(this.getCanvasWidth() / (this.cloudStyle.width) +
//    this.cloudStyle.space)
//};
//
//Bubble.prototype.getCanvasWidth = function(){
//  return this.canvas.clientWidth;
//};
//
//Bubble.prototype.loadClouds = function(){
//  for(var i = 1; i <= (this.street.length - 2); i++){
//      // I changed the i to start at 1 (so skip the 0th elem (or 1st row))
//      // and go up to the number of rows - 2 (so 4)
//
//
//      var newCloud = document.createElement('div');
//      newCloud.setAttribute('class', 'cloud');
//
//      //console.log(i + ' - ' + this.street[i].childElementCount);
//      this.street[i].appendChild(newCloud);
//
//  }
//};
//
//Bubble.prototype.updateClouds = function () {
//    return document.querySelectorAll(".cloud");
//};

