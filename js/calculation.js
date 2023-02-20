// Add eventlistener in Rriangle-btn

document.getElementById("triangle-btn").addEventListener("click", function () {
  // get triangle base field
  const triangleBaseFieldValue = getInputFieldById("triangle-base-field");

  // get triangle height field
  const triangleHeightFieldValue = getInputFieldById("triangle-height-field");

  // validation for triangle input fields
  if (
    isNaN(triangleBaseFieldValue) ||
    isNaN(triangleHeightFieldValue) ||
    triangleBaseFieldValue < 0 ||
    triangleHeightFieldValue < 0
  ) {
    alert("Please enter valid input for all input fields");
    return;
  }

  // get triangle area (Area (A) = 0.5 × b × h)
  const triangleArea = 0.5 * triangleBaseFieldValue * triangleHeightFieldValue;

  // triangle areas output
  const triangleAreaOutput = document.getElementById("triangle-area-output");

  // set the triangle area output value to 0
  triangleAreaOutput.innerText = "0";

  const triangleTotal = triangleArea + parseFloat(triangleAreaOutput.innerText);
  const triangleTotalArea = triangleTotal.toFixed(2);
  triangleAreaOutput.innerText = triangleTotalArea;

  // block Triangle areas output elements
  getElementTextById("triangle-area-total");
});





// Add eventlistener in Rectangle-btn

document.getElementById("rectangle-btn").addEventListener("click", function () {
  // get rectangle weight field
  const rectangleWeightFieldValue = getInputFieldById("rectangle-weight-field");

  // get rectangle length field
  const rectangleLengthFieldValue = getInputFieldById("rectangle-length-field");

  // validation for triangle input fields
  if (
    isNaN(rectangleWeightFieldValue) ||
    isNaN(rectangleLengthFieldValue) ||
    rectangleWeightFieldValue < 0 ||
    rectangleLengthFieldValue < 0
  ) {
    alert("Please enter valid input for all input fields");
    return;
  }

  // get rectangle area total (Area (A) = w × l)
  const rectangleArea = rectangleWeightFieldValue * rectangleLengthFieldValue;

  // rectangle areas output
  const rectangleAreaOutput = document.getElementById("rectangle-area-output");

  // set the rectangle area output value to 0
  rectangleAreaOutput.innerText = "0";

  const rectangleTotal =
    rectangleArea + parseFloat(rectangleAreaOutput.innerText);
  const rectangleTotalArea = rectangleTotal.toFixed(2);
  rectangleAreaOutput.innerText = rectangleTotalArea;

  // block Rectangle areas output elements
  getElementTextById("rectangle-area-total");
});





// Add event listener in Parallelogram-btn

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {

    // get parallelogram base element
    const parallelogramBaseValueElement = getAreaElementById(
      "parallelogram-base-value"
    );

    // get parallelogram height element
    const parallelogramHeightValueElement = getAreaElementById(
      "parallelogram-height-value"
    );

    // get parallelogram area total (Area (A) = b × h)
    const parallelogramArea =
      parallelogramBaseValueElement * parallelogramHeightValueElement;

    // Parallelogram areas output
    const parallelogramAreaOutput = document.getElementById("parallelogram-area-output");

    // set the parallelogram area output value to 0
    parallelogramAreaOutput.innerText = "0";

    const parallelogramTotalArea =
      parallelogramArea + parseFloat(parallelogramAreaOutput.innerText);

    parallelogramAreaOutput.innerText = parallelogramTotalArea;

    // block Parallelogram areas output elements
    getElementTextById("parallelogram-area-total");
  });





// Add event listener in Rhombus-btn

document.getElementById("rhombus-btn").addEventListener("click", function () {

  // get Rhombus, d1 element
  const rhombusD1ValueElement = getAreaElementById("rhombus-d1-value");

  // get Rhombus, d2 element
  const rhombusD2ValueElement = getAreaElementById("rhombus-d2-value");

  // get Rhombus area total (Area (A) = 0.5 × d1 × d2)
  const rhombusArea = 0.5 * rhombusD1ValueElement * rhombusD2ValueElement;


  // Rhombus areas output
  const rhombusAreaOutput = document.getElementById("rhombus-area-output");

  // set the Rhombus area output value to 0
  rhombusAreaOutput.innerText = "0";

  const rhombusTotalArea = rhombusArea + parseFloat(rhombusAreaOutput.innerText);

  rhombusAreaOutput.innerText = rhombusTotalArea;

  // block Parallelogram areas output elements
  getElementTextById("rhombus-area-total");
});





// Add event listener in Pentagon-btn

document.getElementById("pentagon-btn").addEventListener("click", function () {

  // get Pentagon, p element
  const pentagonPValueElement = getAreaElementById("pentagon-p-value");

  // get Pentagon, b element
  const pentagonBValueElement = getAreaElementById("pentagon-b-value");

  // get Pentagon area total (Area (A) = 0.5 × p × b)
  const pentagonArea = 0.5 * pentagonPValueElement * pentagonBValueElement;


  // Pentagon areas output
  const pentagonAreaOutput = document.getElementById("pentagon-area-output");

  // set the Pentagon area output value to 0
  pentagonAreaOutput.innerText = "0";

  const pentagonTotalArea = pentagonArea + parseFloat(pentagonAreaOutput.innerText);

  pentagonAreaOutput.innerText = pentagonTotalArea;

  // block Pentagon areas output elements
  getElementTextById("pentagon-area-total");
});




// Add event listener in Ellipse-btn

document.getElementById("ellipse-btn").addEventListener("click", function () {

  // get Ellipse, a element
  const ellipseAValueElement = getAreaElementById("ellipse-a-value");

  // get Ellipse, b element
  const ellipseBValueElement = getAreaElementById("ellipse-b-value");

  // get Ellipse area total (Area (A) = πab)
  const ellipseArea = 3.1416 * ellipseAValueElement * ellipseBValueElement;


  // Ellipse areas output
  const ellipseAreaOutput = document.getElementById("ellipse-area-output");

  // set the Ellipse area output value to 0
  ellipseAreaOutput.innerText = "0";

  const ellipseTotal = ellipseArea + parseFloat(ellipseAreaOutput.innerText);
  const ellipseTotalArea = ellipseTotal.toFixed(2);

  ellipseAreaOutput.innerText = ellipseTotalArea;

  // block Ellipse areas output elements
  getElementTextById("ellipse-area-total");
});