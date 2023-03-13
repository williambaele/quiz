const highScoreList = document.querySelector('#highScoreList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score => {
  return `<div class="bg-gray-400 rounded-lg py-2 mb-2 flex justify-around"><li class="text-white high-score">${score.name} - ${score.score}</li></div>`
}).join('')
