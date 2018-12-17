/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var regex = /[^A-z]+/;
    var matches = input.match(regex);
    if (matches === null) return 1;
    // Check for double fraction, apparently that's not allowed
    var slashes = matches[0].match(/\//g);
    if (slashes !== null && slashes.length > 1) return null;
    return matches[0];
  };
  
  this.getUnit = function(input) {
    var regex = /[A-z]+/i;
    var matches = input.match(regex);
    const valid = ["gal", "l", "lbs", "kg", "mi", "km"];
    if (matches === null || valid.indexOf(matches[0].toLowerCase()) === -1) return null;
    return matches[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (/\//.test(initNum)) {
      var toDivide = initNum.split("/");
      initNum = toDivide[0] / toDivide[1];
    }
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum * (1/galToL);
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum * (1/lbsToKg);
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum * (1/miToKm);
        break;
    }
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var initUnitString = this.spellOutUnit(initUnit);
    var returnUnitString = this.spellOutUnit(returnUnit);
    var result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
