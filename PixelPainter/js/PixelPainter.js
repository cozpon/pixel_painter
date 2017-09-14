var PixelPainter = (function(h) {
  var currentColor = colorGenerator.randomColor();
  var activeDraw = false;

  var mainDiv = document.getElementById("pp-canvas");
  var canvasDiv = document.createElement("div");
  var swatchDiv = document.createElement("div");
  var currentColorDisplayDiv = document.createElement("div");
  var currentColorDiv = document.createElement("div");
  var eraseBtnDiv = document.createElement("div");
  var clearBtnDiv = document.createElement("div");
  var fillBtnDiv = document.createElement("div");


  // creates main canvas area
  canvasDiv.id = "canvas";
  mainDiv.appendChild(canvasDiv);

  // Creates Swatch in HTML
  swatchDiv.id = "color-swatch";
  mainDiv.appendChild(swatchDiv);

  /*display the current color in a DIV at the top*/
  currentColorDisplayDiv.innerHTML = "Color"; // puts the word Color
  currentColorDisplayDiv.id = "currentColorDisplay"; // puts the current color Box
  currentColorDiv.id = "currentColorSquare"; // displays Current Color Square
  currentColorDiv.style.backgroundColor = currentColor; // loads color square with color
  currentColorDisplayDiv.style.borderColor = currentColor;
  mainDiv.appendChild(currentColorDisplayDiv); // adds to HTML
  currentColorDisplayDiv.appendChild(currentColorDiv); // adds to HTML inside color box

  /*use nested for to create a 10x10 grid of smaller squares*/
  /*THIS NEEDS TO BE ENCAPSULATED and allow for user input!*/
  for (var i = 0; i < 400; i++) {
      var ssDiv = document.createElement("div" + [i]);
      ssDiv.setAttribute('class', "smallSquare");
      canvasDiv.appendChild(ssDiv);
  }

  /*change the bgc of a canvas square when clicked to currentColor*/
  /*drag functionality is here through multiple eventHandlers*/
  var squares = document.querySelectorAll(".smallSquare");
  for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener('mousedown', function() {
      activeDraw = true;
    });

    squares[i].addEventListener('mousemove', function(){
      if(activeDraw) {
        this.style.backgroundColor = currentColor;
      }
    });

    squares[i].addEventListener('mouseup', function(){
      activeDraw = false;
    });

    squares[i].addEventListener('click', function() {
      this.style.backgroundColor = currentColor;
    });
  }//end for


  // Fixed bug if cursor moves out of canvas, mousemove is deactivated
  document.getElementById("canvas").addEventListener("mouseleave", function(event) {
      console.log("outside");
      activeDraw = false;
  });


  fillBtnDiv.id = "fillBtn";
  fillBtnDiv.innerHTML = "Fill";
  fillBtnDiv.addEventListener('click', function() {

  });

  /*creating both erase and clear buttons*/

  eraseBtnDiv.id = "eraseBtn";
  eraseBtnDiv.innerHTML = "Erase";
  eraseBtnDiv.addEventListener('click', function() {
    currentColorDiv.style.backgroundColor = null;
    currentColorDisplayDiv.style.borderColor = null;
    currentColor = null;
  });


  clearBtnDiv.id = "clearBtn";
  clearBtnDiv.innerHTML = "Clear";
  clearBtnDiv.addEventListener("click", function() {
    for (var i = 0; i < squares.length; i++) {
      if (squares[i].style.backgroundColor !== null) {
        squares[i].style.backgroundColor = null;
      }
    }
  });

  mainDiv.appendChild(eraseBtnDiv);
  mainDiv.appendChild(clearBtnDiv);
  mainDiv.appendChild(fillBtnDiv);

  /*create and append pallete squares to the color swatch*/
  var colorSwatch = document.getElementById("color-swatch");

  for (var i = 0; i < 90; i++) {
      var palleteDiv = document.createElement("div");
      palleteDiv.setAttribute('class', "pallete");
      colorSwatch.appendChild(palleteDiv);
    }//end for

  /*upon page load, all 90 pallete squares start as random colors*/
  /*eventHandler will change currentColor to the bgc of the pallete clicked*/
  var palletes = document.querySelectorAll(".pallete");
  for (var i = 0; i < palletes.length; i++) {
        var hexValue = colorGenerator.randomHex();
        var lightest = 0;
        var darkest = hexValue;


        palletes[i].style.backgroundColor = "#" + hexValue;
        /*trying to work on a way to sort these colors into a gradient*/


        palletes[i].addEventListener('click', function(event) {
          currentColor = event.currentTarget.style.backgroundColor;
          currentColorDiv.style.backgroundColor = currentColor;
          currentColorDisplayDiv.style.borderColor = currentColor;
          console.log(currentColor);


      });
    }//end for

})();