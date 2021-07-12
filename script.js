window.addEventListener("DOMContentLoaded", function () {
  var gridBlocks = 256;
  const gridWidthHeight = 640;
  var currentColor = "green";
  const colors = {
    yellow: "#ffd60a",
    green: "#009d4e",
    blue: "#0077b6",
    purple: "#7209b7",
    red: "#ef233c",
    orange: "#fb5607",
  };

  document.getElementById("color").addEventListener("click", () => {
    document.querySelector(".dropdown").classList.toggle("active");
  });
  (function () {
    // colors the color dropdown items
    var childIteration = 0;
    for (let key in colors) {
      childIteration++;
      const dropdownItem = document.querySelector(
        `.dropdown li:nth-of-type(${childIteration})`
      );
      dropdownItem.style.color = colors[key]; // set colors

      dropdownItem.addEventListener("mouseover", () => {
        dropdownItem.style.backgroundColor = "#495057";
      });
      dropdownItem.addEventListener("mouseout", () => {
        dropdownItem.style.backgroundColor = "#dee2e6";
      });
      dropdownItem.addEventListener("click", () => {
        currentColor = colors[key];
      });
    }
  })();
  function changeGridSize() {
    let gridSize = document.getElementById("size").value;
    const blockContainer = document.querySelector(".container");

    if (gridSize != "") {
      while (blockContainer.firstChild) {
        blockContainer.removeChild(blockContainer.firstChild);
      }
      var widthHeight = gridWidthHeight / gridSize;
      console.log(widthHeight);
      gridSize *= gridSize;
      gridBlocks = gridSize;
      console.log(gridBlocks);
    }

    for (let i = 0; i < gridBlocks; i++) {
      const block = document.createElement("div"); //create block
      block.addEventListener("mouseover", fillBlock);
      block.style.width = widthHeight;
      block.style.height = widthHeight;
      block.style.backgroundColor = "white";
      block.style.border = "1px solid black";

      block.setAttribute("id", `block-${i + 1}`);

      const container = document.querySelector(".container"); //add to parent
      container.appendChild(block);
    }
  }

  function fillBlock(event) {
    const block = document.getElementById(event.target.id);
    block.style.backgroundColor = currentColor;
  }

  function clearScreen() {
    for (var i = 0; i < gridBlocks; i++) {
      const block = document.getElementById(`block-${i + 1}`);
      block.style.backgroundColor = "white";
    }
  }
  changeGridSize();
  // Adding event listeners
  const clearButton = document.getElementById("clear");
  const eraserButton = document.getElementById("eraser");
  const changeSizeButton = document.getElementById("change-size");

  //eraserButton.addEventListener("click", eraser);
  clearButton.addEventListener("click", clearScreen);
  changeSizeButton.addEventListener("click", changeGridSize);
});
