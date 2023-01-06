const convertToCelsius = function() {
  let farhrenheitTemperature = arguments[0];
  let celciusTemperature = (farhrenheitTemperature - 32) / 1.8;
  return (celciusTemperature % 1 === 0)? celciusTemperature : Number(celciusTemperature.toFixed(1));
};

const convertToFahrenheit = function() {
  let celciusTemperature = arguments[0];
  let farhrenheitTemperature = (celciusTemperature * 1.8) + 32;
  return (farhrenheitTemperature % 1 === 0)? farhrenheitTemperature : Number(farhrenheitTemperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
