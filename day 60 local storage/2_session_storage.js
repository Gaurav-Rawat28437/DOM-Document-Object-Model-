const input = document.getElementById("input");
const output = document.getElementById("output");

const saveBtn = document.getElementById("save");
const getBtn = document.getElementById("get");
const removeBtn = document.getElementById("remove");

// Save data
saveBtn.addEventListener("click", function () {
  sessionStorage.setItem("name", input.value);
  output.innerText = "Saved!";
});

// Get data
getBtn.addEventListener("click", function () {
  const data = sessionStorage.getItem("name");
  output.innerText = data ? data : "No data found";
});

// Remove data
removeBtn.addEventListener("click", function () {
  sessionStorage.removeItem("name");
  output.innerText = "Removed!";
});