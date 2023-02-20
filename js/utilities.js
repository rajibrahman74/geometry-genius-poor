// Common function for Triangle and Rectangle Input field

function getInputFieldById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldString);

  return inputFieldValue;
}



// Common function for Parallelogram, Rhombus, Pentagon, Ellipse, calculate areas Element

function getAreaElementById(elementID) {

  // get element for calculate area
  const areaElement = document.getElementById(elementID);
  const areaElementString = areaElement.innerText;
  const areaElementValue = parseFloat(areaElementString);

  return areaElementValue;
}



// Common function for Block areas output elements

function getElementTextById(elementId) {
  const areaTotal = document.getElementById(elementId);
  areaTotal.style.display = "block";

  return areaTotal;
}



// Add serial numbers in output area elements

function addSerialNumbersToAreaElements() {
  // get elements using id-$
  const areaElements = document.querySelectorAll('[id$="-area-total"]');
  for (let i = 0; i < areaElements.length; i++) {
    const areaElement = areaElements[i];
    const serialNumber = i + 1;
    const areaTitle = areaElement.querySelector("p");
    areaTitle.innerHTML = `${serialNumber}. ${areaTitle.innerHTML}`;
  }
}



// Apply random bg color in cards

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}