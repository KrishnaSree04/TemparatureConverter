var cInput = document.querySelector('#celsius > input');
var fInput = document.querySelector('#fahrenheit > input');
var kInput = document.querySelector('#kelvin > input');

var roundToTwoDP = (num) => {
  return num.toFixed(2);
};


var celsiusToFaAndKe = () => {
  var cTemp = parseFloat(cInput.value);
  var fTemp = (cTemp * 1.8) + 32;
  var kTemp = cTemp + 273.15;

  fInput.value = roundToTwoDP(fTemp);
  kInput.value = roundToTwoDP(kTemp);
};


var fahrenheitToCeAndKe = () => {
  var fTemp = parseFloat(fInput.value);
  var cTemp = (fTemp - 32) * (5 / 9);
  var kTemp = (fTemp + 459.67) * (5 / 9);

  cInput.value = roundToTwoDP(cTemp);
  kInput.value = roundToTwoDP(kTemp);
};

var kelvinToCeAndFa = () => {
  var kTemp = parseFloat(kInput.value);
  var cTemp = kTemp - 273;
  var fTemp =  1.8 * (kTemp - 273) + 32;

  cInput.value = roundToTwoDP(cTemp);
  fInput.value = roundToTwoDP(fTemp);
};


var main = () => {
  cInput.addEventListener('input', celsiusToFaAndKe);
  fInput.addEventListener('input', fahrenheitToCeAndKe);
  kInput.addEventListener('input', kelvinToCeAndFa);
};

main();