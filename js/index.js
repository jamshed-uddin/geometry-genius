//function funcToCalc(shapeBtnId,clickEvent,shapeNameId,angle1InputId,angle2InputId,valueForHalfOrPhiOrOne)

funcToCalc(
  "triangle-btn",

  "triangle",
  "triangle-b",
  "triangle-h",
  0.5
);

funcToCalc(
  "rectangle-btn",

  "rectangle",
  "ractangle-w",
  "ractangle-l",
  1
);

funcToCalc(
  "parallelogram-btn",

  "parallelogram",
  "parallelogram-b",
  "parallelogram-h",
  1
);

funcToCalc("rhombus-btn", "rhombus", "rhombus-b", "rhombus-h", 0.5);

funcToCalc(
  "pentagon-btn",

  "pentagon",
  "pentagon-b",
  "pentagon-h",
  0.5
);

// function to redirect another page
document
  .getElementById("homeToBlogs-btn")
  .addEventListener("click", function () {
    location.href = "blogs.html";
  });
