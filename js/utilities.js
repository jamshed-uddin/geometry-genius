//function to calculate ractangle and parallelogram area and show data

// function to calculate area of triangle,rhombus,pentagon
let serial = 0;
function funcToCalc(shapeBtnId,shapeNameId,angle1InputId,angle2InputId,valueForHalfOrPhiOrOne) {
  document.getElementById(shapeBtnId).addEventListener("click", function () {
    serial += 1;
    const angleOne = document.getElementById(angle1InputId).value;
    const angleTwo = document.getElementById(angle2InputId).value;
    if (
      isNaN(angleOne) ||angleOne < 0 ||angleOne == "" ||
      isNaN(angleTwo) ||angleTwo < 0 ||angleTwo == ""
    ) {
      alert("Please input a valid number");
      return;
     
    }
    const shape = document.getElementById(shapeNameId).innerText;
     //area in cm calc function
    const areaInCm = areaCalc(valueForHalfOrPhiOrOne,angle1InputId,angle2InputId);
    //area in m calc function
    const areaInM = cmToMCalc(valueForHalfOrPhiOrOne,angle1InputId,angle2InputId); 

    // function called to show data on table
    displayTableData(serial, shape, areaInCm, areaInM);
    // empty the input value
    document.getElementById(angle1InputId).value = "";
    document.getElementById(angle2InputId).value = "";
  });
}
// function to calculate area of shape 
function areaCalc(halfOrPhiOrOne, angle1Value, angle2Value) {
  const angleOne = document.getElementById(angle1Value).value;
  const angleTwo = document.getElementById(angle2Value).value;
  const shapeArea = halfOrPhiOrOne * angleOne * angleTwo;
  return parseFloat(shapeArea.toFixed());
}
//function for show shape area in meter
function cmToMCalc(halfOrPhiOrOne, angle1Value, angle2Value) {
  const angleOneCm = document.getElementById(angle1Value).value;
  const angleOneM = angleOneCm / 100;
  const angleTwoCm = document.getElementById(angle2Value).value;
  const angleTwoM = angleTwoCm / 100;
  const shapeAreaM = halfOrPhiOrOne * angleOneM * angleTwoM;
  return parseFloat(shapeAreaM.toFixed(4));
}

//function to display shape data on table
function displayTableData(serial, shapeName, areaCm, areaM) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial + "."}</td>
  <td>${shapeName}</td>
  <td>${areaCm + "cm<sup>2</sup>"}</td>
  <td>${areaM + "m<sup>2</sup>"}</td>
  <td><button id="delete-btn" class=" text-red-600 text-xl"><i class="fa-solid fa-trash-can"></i></button></td>
  `;
  container.appendChild(tr);

  const convertBtns = document.querySelectorAll("#delete-btn");
  for (const convertBtn of convertBtns) {
    convertBtn.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.parentNode.style.display = "none";
    });
  }
}

// random background color generator
function randomColorGen1() {
  return "hsla(" + Math.random() * 360 + ", 100%, 90%, 0.5)";
}
function randomColorGen2() {
  return "hsla(" + Math.random() * 260 + ", 100%, 90%, 0.5)";
}


const cards = document.querySelectorAll(".card");
for (const card of cards) {
  card.addEventListener("mouseover", function (e) {
    e.target.parentNode.style.backgroundColor = randomColorGen1();
  });
}
const elements = document.querySelectorAll(".card");
for (const element of elements) {
  element.addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = randomColorGen2()
    console.log(e.target)
  });
}
