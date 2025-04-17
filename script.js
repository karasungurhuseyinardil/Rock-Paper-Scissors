
document.addEventListener('DOMContentLoaded', () => {

  let userScore = 0;
  let computerScore = 0;
  

  const userScoreElement = document.getElementById('user-score');
  const computerScoreElement = document.getElementById('computer-score');
  const resetButton = document.getElementById('reset-score');
  
 
  function updateScore(winner) {
    if (winner === 'user') {
      userScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
    userScoreElement.textContent = `User: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
  }
  

  resetButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    userScore = 0;
    computerScore = 0;
    userScoreElement.textContent = `User: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
  });
  

  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      const id = input.id;
      
    
     
      document.querySelector('#message h2').textContent = "";
      if (id.includes('rock-paper') || id.includes('paper-scissors') || id.includes('scissors-rock')) {
        updateScore('user');
      } else if (id.includes('rock-scissors') || id.includes('paper-rock') || id.includes('scissors-paper')) {
        updateScore('computer');
      }
    });
  });
});
