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
    const area = areaCalc(valueForHalfOrPhiOrOne, angle1InputId, angle2InputId); //area calc function called here

    displayTableData(serial, shape, area); // function called to show data on table
  });
}
// function to calculate shape area
function areaCalc(halfOrPhiOrOne, angle1Value, angle2Value) {
  const angleOne = document.getElementById(angle1Value).value;
  const angleTwo = document.getElementById(angle2Value).value;
  const shapeArea = halfOrPhiOrOne * angleOne * angleTwo;
  return parseFloat(shapeArea.toFixed(3));
}

//function to display shape data on table
function displayTableData(serial, shapeName, area) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial + "."}</td>
  <td>${shapeName}</td>
  <td>${area + "cm<sup>2</sup>"}</td>
  `;
  container.appendChild(tr);
}

// function to redirect to another page

function redirector(btnId,pageLink){
  document.getElementById(btnId).addEventListener("click",function(){
    location.href=pageLink;
  })
  }