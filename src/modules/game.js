const baseURL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";

export const createGame = () => {
  fetch(baseURL+"games/", {
    method: "POST",
    body: JSON.stringify({
      name: "Yuvenal's game",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
// game ID = RnHoB3QclAa6ZdcM46b2 

export const getScores = () => {
  fetch(baseURL+"games/RnHoB3QclAa6ZdcM46b2/scores")
  .then(response => response.json())
  //.then(data => listObj = data)
  //.then(()=> console.log(listObj))
  .then(responseData => {
    console.log(responseData)
    return responseData
  })
  .catch(error => console.warn(error));
}