const baseURL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";

export const createGame = () => {
  fetch(baseURL + "games/", {
    method: "POST",
    body: JSON.stringify({
      name: "Njoroge's game",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
// Game id = DfuN5T3Blx17JNlsQVHC

export const getScores = async () => {
  const response = await fetch(baseURL + "games/DfuN5T3Blx17JNlsQVHC/scores");
  const responseData = await response.json();
  return responseData.result;
};

export const postScores = async (user, score) => {
  console.log(user, score);
  const response = await fetch(baseURL + "games/DfuN5T3Blx17JNlsQVHC/scores", {
    method: "POST",
    body: JSON.stringify({
      user: `${user}`,
      score: `${score}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const responseData = await response.json();
  return responseData;
};
