import './style.css';

const refreshBtn = document.getElementById("refreshBtn");
const submitBtn = document.getElementById("submitBtn");

refreshBtn.addEventListener("click", () => {
  console.log('refresh')
});

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("inputName").value;
  const score = document.getElementById("inputScore").value;
  console.log('submit')
});