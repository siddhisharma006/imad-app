console.log('Loaded!');

// change the text of the main text .div
var element= document.getElementById('main text'
    );
    element.innerHTML= 'SIDDHI SHARMA';
    
    //move the image
    var img= document.getElementById('madi' );
   var marginLeft=0;
   function moveRight () {
       marginLeft = marginLeft + 5;
       img.style.marginLeft = marginLeft + 'px';
   }
   img.onclick = function () {
       var interval = setInterval(moveRight, 50);
       varinterval= setInterval(moveLeft,100);
   };