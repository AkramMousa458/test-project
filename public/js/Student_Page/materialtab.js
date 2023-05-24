// Save checkbox state to localStorage
function saveCheckboxState() {
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox2 = document.getElementById("checkbox2");
  var checkbox3 = document.getElementById("checkbox3");
  var checkbox4 = document.getElementById("checkbox4");
  var checkbox5 = document.getElementById("checkbox5");
  var checkbox6 = document.getElementById("checkbox6");
  
  localStorage.setItem("checkbox1", checkbox1.checked);
  localStorage.setItem("checkbox2", checkbox2.checked);
  localStorage.setItem("checkbox3", checkbox3.checked);
  localStorage.setItem("checkbox4", checkbox4.checked);
  localStorage.setItem("checkbox5", checkbox5.checked);
  localStorage.setItem("checkbox6", checkbox6.checked);
}

 // Load checkbox state from localStorage
function loadCheckboxState() {
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox2 = document.getElementById("checkbox2");
  var checkbox3 = document.getElementById("checkbox3");
  var checkbox4 = document.getElementById("checkbox4");
  var checkbox5 = document.getElementById("checkbox5");
  var checkbox6 = document.getElementById("checkbox6");   
  checkbox1.checked = (localStorage.getItem("checkbox1") === "true");
  checkbox2.checked = (localStorage.getItem("checkbox2") === "true");
  checkbox3.checked = (localStorage.getItem("checkbox3") === "true");
  checkbox4.checked = (localStorage.getItem("checkbox4") === "true");
  checkbox5.checked = (localStorage.getItem("checkbox5") === "true");
  checkbox6.checked = (localStorage.getItem("checkbox6") === "true");
}

 // Call saveCheckboxState on checkbox change
document.getElementById("checkbox1").addEventListener("change", saveCheckboxState);
document.getElementById("checkbox2").addEventListener("change", saveCheckboxState);
document.getElementById("checkbox3").addEventListener("change", saveCheckboxState);
document.getElementById("checkbox4").addEventListener("change", saveCheckboxState);
document.getElementById("checkbox5").addEventListener("change", saveCheckboxState);
document.getElementById("checkbox6").addEventListener("change", saveCheckboxState);

 // Load checkbox state on page load
window.addEventListener("load", loadCheckboxState);