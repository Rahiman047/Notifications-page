let readAllEl = document.getElementById("readAll");
let countVal = document.getElementById("count");
let firstCont = document.getElementById("firstAct");
let secondCont = document.getElementById("secondAct");
let thirdCont = document.getElementById("thirdAct");
let svgEl = document.getElementById("svgItem");
let svgEl1 = document.getElementById("svgItem1");
let svgEl2 = document.getElementById("svgItem2");

readAllEl.addEventListener("click", clickedEl);

function clickedEl() {
  countVal.textContent = 0;
  firstCont.style.backgroundColor = "whiteSmoke";
  secondCont.style.backgroundColor = "whiteSmoke";
  thirdCont.style.backgroundColor = "whiteSmoke";
  svgEl.style.display = "none";
  svgEl1.style.display = "none";
  svgEl2.style.display = "none";
}
