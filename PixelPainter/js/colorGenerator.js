var colorGenerator = (function() {

  function randomColor(){
    var hex = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
      color += hex[Math.round(Math.random() * 15)];
    }//end for
    return color;
  }

  function randomHex(){
    var ret = "";
    var hex = "0123456789ABCDEF".split("");
    for (var i = 0; i < 6; i++ ) {
      ret += hex[Math.round(Math.random() * 15)];
    }
    return ret;
  }

  function convertToRGB(num) {

  }

  return {
    randomColor: randomColor,
    randomHex: randomHex,
    convertToRGB: convertToRGB
};

})();



