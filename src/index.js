import './style.css';

const refreshBtn = document.getElementById('refreshBtn');
const submitBtn = document.getElementById('submitBtn');

const clearBoard = () => {
  const ul = document.getElementById('scoreList');
  ul.innerHTML = '';
};

const listBoard = () => {
  clearBoard();
  let list = JSON.parse(localStorage.getItem('allEntries'));
  if (list === null) {
    list = [];
    localStorage.setItem('allEntries', JSON.stringify(list));
  }
  const ul = document.getElementById('scoreList');
  list.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.name}: ${element.score}`;
    ul.appendChild(li);
  });
};

refreshBtn.addEventListener('click', () => {
  listBoard();
});

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('inputName');
  const score = document.getElementById('inputScore');
  const list = JSON.parse(localStorage.getItem('allEntries'));
  list.push({
    name: `${name.value}`,
    score: `${score.value}`,
  });
  list.sort((a, b) => b.score - a.score);
  localStorage.setItem('allEntries', JSON.stringify(list));
  listBoard();

  // clear inputs
  name.value = '';
  score.value = '';
});

// localStorage.setItem('allEntries', JSON.stringify([]))
listBoard();