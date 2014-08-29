var allInitial = {};
var testElement = document.createElement('div');
// Firefox
if ('all' in testElement.style) {
  allInitial.all = 'initial';
}
else {
  testElement.style.display = 'initial';
  if (testElement.style.display === 'initial') {
    // Chrome
    var cssPropertyNames = Object.keys(testElement.style);
    for (var i = 0, l = cssPropertyNames.length; i < l; i++) {
      var cssPropertyName = cssPropertyNames[i];
      allInitial[cssPropertyName] = 'initial';
    }
  }
}

testElement = null;

function allInitialFunc(el) {
  if (allInitial) {
    return allInitial;
  }
  allInitial = {};

  // IE
  var newEl = document.createElement(el.localName);
  document.body.appendChild(newEl); // iframe would be better!
  var cssHack = window.getComputedStyle(newEl);
  var cssPropertyNames = [
    'background',
    'outline',
    'transition',
    'zoom',
    'z-index',
    'margin',
    'padding',
    'color',
    'font',
    'border',
    'position',
    'display'];
  for (var i = 0, l = cssPropertyNames.length; i < l; i++) {
    var cssPropertyName = cssPropertyNames[i];
    allInitial[cssPropertyName] = cssHack[cssPropertyName];
    allInitial.width = 'auto';
  }
  return allInitial;
}

module.exports = allInitialFunc;