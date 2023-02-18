// function for get shapes's angles and name and area

function funcToCalc(
  shapeBtnId,
  clickEvent,
  shapeNameId,
  angle1InputId,
  angle2InputId
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
    const area = areaAll(0.5, angle1InputId, angle2InputId);

    displayTableData(serial, shape, area);
  });
}

function areaAll(halfOrPhiOrOne, angle1Value, angle2Value) {
  const angleOne = document.getElementById(angle1Value).value;
  const angleTwo = document.getElementById(angle2Value).value;
  const shapeArea = halfOrPhiOrOne * angleOne * angleTwo;
  return parseFloat(shapeArea.toFixed(3));
}

function displayTableData(serial, shapeName, area) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial + "."}</td>
  <td>${shapeName}</td>
  <td>${area}</td>
  
  
  
  `;
  container.appendChild(tr);
}
