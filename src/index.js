import './style.css';
import { getScores, postScores } from './modules/game.js';

const refreshBtn = document.getElementById('refreshBtn');
const submitBtn = document.getElementById('submitBtn');

const clearBoard = () => {
  const ul = document.getElementById('scoreList');
  ul.innerHTML = '';
};

const listBoard = async () => {
  clearBoard();
  const ul = document.getElementById('scoreList');
  const list = await getScores();
  list.sort((a, b) => b.score - a.score);
  list.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user}: ${element.score}`;
    ul.appendChild(li);
  });
};

refreshBtn.addEventListener('click', () => {
  listBoard();
});

submitBtn.addEventListener('click', async () => {
  const user = document.getElementById('inputUser');
  const score = document.getElementById('inputScore');
  await postScores(user.value, score.value);
  listBoard();
  // clear inputs
  user.value = '';
  score.value = '';
});

listBoard();
