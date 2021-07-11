window.addEventListener("DOMContentLoaded", function () {
  const gridBlocks = 256;
  var currentColor = "green";
  const colors = {
    yellow: "#ffd60a",
    green: "#009d4e",
    blue: "#0077b6",
    purple: "#7209b7",
    red: "#ef233c",
    orange: "#fb5607",
  };
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
  (function () {
    for (let i = 0; i < gridBlocks; i++) {
      const block = document.createElement("div"); //create block
      block.addEventListener("mouseover", fillBlock);
      block.classList.add("block");
      block.setAttribute("id", `block-${i + 1}`);

      const container = document.querySelector(".container"); //add to parent
      container.appendChild(block);
    }
  })();

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

  // Adding event listeners
  const clearButton = document.getElementById("clear");
  const eraserButton = document.getElementById("eraser");

  //eraserButton.addEventListener("click", eraser);
  clearButton.addEventListener("click", clearScreen);
});
