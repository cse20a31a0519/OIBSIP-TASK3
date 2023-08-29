function convertCelsiusToFahrenheitAndKelvin() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
  
    document.getElementById("celsius-fahrenheit").textContent = fahrenheit.toFixed(2);
    document.getElementById("celsius-kelvin").textContent = kelvin.toFixed(2);
  }
  
  function convertFahrenheitToCelsiusAndKelvin() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5/9;
    var kelvin = (fahrenheit + 459.67) * 5/9;
  
    document.getElementById("fahrenheit-celsius").textContent = celsius.toFixed(2);
    document.getElementById("fahrenheit-kelvin").textContent = kelvin.toFixed(2);
  }
  