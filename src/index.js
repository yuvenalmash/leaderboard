import './style.css';

const refreshBtn = document.getElementById("refreshBtn");
const submitBtn = document.getElementById("submitBtn");

const listBoard = () => {
  let list = JSON.parse(localStorage.getItem('allEntries'));
  if (list === null){
    list = []
    localStorage.setItem('allEntries', JSON.stringify(list));
  }
  const ul = document.getElementById("scoreList")
  list.forEach(element => {
    let li = document.createElement("li")
    let name = document.createTextNode(`${element.name}`)
    let score = document.createTextNode(`${element.score}`)
    li.appendChild(name)
    li.appendChild(score)
    ul.appendChild(li)
  });

}

refreshBtn.addEventListener("click", () => {
  listBoard()
});

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("inputName").value;
  const score = document.getElementById("inputScore").value;
  let list = JSON.parse(localStorage.getItem('allEntries'));
  list.push(
    {name: `${name}`,
    score: `${score}`
  })
  localStorage.setItem('allEntries', JSON.stringify(list));
});

listBoard()