/* -------- SELECTORS -------- */

// 1. Select by ID
const title = document.getElementById("title");

// 2. Select by Class
const texts = document.getElementsByClassName("text");

// 3. Select by Tag
const divs = document.getElementsByTagName("div");

// 4. Query Selector (first match)
const firstPara = document.querySelector(".text");

// 5. Query Selector All (all matches)
const allParas = document.querySelectorAll(".text");

// Button
const btn = document.querySelector("#btn");

/* -------- ACTION -------- */

btn.addEventListener("click", function () {

  // Change ID element
  title.innerText = "Changed by JS";
  title.style.color = "red";

  // Change class elements
  for (let i = 0; i < texts.length; i++) {
    texts[i].style.color = "blue";
  }

  // Change using querySelectorAll
  allParas.forEach((el) => {
    el.style.backgroundColor = "yellow";
  });

  // Tag selector example
  divs[0].innerText = "Div Changed";
});