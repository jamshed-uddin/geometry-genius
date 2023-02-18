//function to calculate ractangle and parallelogram area and show data

// function to calculate area of triangle,rhombus,pentagon
function funcToCalc(
  shapeBtnId,
  clickEvent,
  shapeNameId,
  angle1InputId,
  angle2InputId,
  valueForHalfOrPhiOrOne
) {
  document.getElementById(shapeBtnId).addEventListener(clickEvent, function () {
    serial += 1;
    const angleOne = document.getElementById(angle1InputId).value;
    const angleTwo = document.getElementById(angle2InputId).value;
    if (
      isNaN(angleOne) ||
      angleOne < 0 ||
      angleOne == "" ||
      isNaN(angleTwo) ||
      angleTwo < 0 ||
      angleTwo == ""
    ) {
      alert("please input number");
      return;
    }
    const shape = document.getElementById(shapeNameId).innerText;
    const areaInCm = areaCalc(valueForHalfOrPhiOrOne, angle1InputId, angle2InputId); //area in cm calc function
    const areaInM = cmToMCalc(valueForHalfOrPhiOrOne, angle1InputId, angle2InputId);//area in m calc function
    displayTableData(serial, shape, areaInCm,areaInM); // function called to show data on table
  });
}
// function to calculate shape area
function areaCalc(halfOrPhiOrOne, angle1Value, angle2Value) {
  const angleOne = document.getElementById(angle1Value).value;
  const angleTwo = document.getElementById(angle2Value).value;
  const shapeArea = halfOrPhiOrOne * angleOne * angleTwo;
  return parseFloat(shapeArea.toFixed());
}
//function for show shap area in meter 
function cmToMCalc(halfOrPhiOrOne, angle1Value, angle2Value) {
  const angleOneCm = document.getElementById(angle1Value).value;
  const angleOneM = angleOneCm/ 100;
  const angleTwoCm = document.getElementById(angle2Value).value;
  const angleTwoM = angleTwoCm/100;
  const shapeAreaM = halfOrPhiOrOne * angleOneM * angleTwoM;
  return parseFloat(shapeAreaM.toFixed(4));
}

//function to display shape data on table
function displayTableData(serial, shapeName, areaCm,areaM) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial + "."}</td>
  <td>${shapeName}</td>
  <td>${areaCm + "cm<sup>2</sup>"}</td>
  <td>${areaM + "m<sup>2</sup>"}</td>
  `;
  container.appendChild(tr);
}

// function to redirect to another page

function redirector(btnId,pageLink){
  document.getElementById(btnId).addEventListener("click",function(){
    location.href=pageLink;
  })
  }