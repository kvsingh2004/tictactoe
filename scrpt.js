const cells = document.querySelectorAll('[data-cell]');
const statusText = document.getElementById('status');
const restartButton = document.getElementById('restartButton');
const winPopup = document.getElementById('winPopup');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
   [0, 1, 2], // Row 1
   [3, 4, 5], // Row 2
   [6, 7, 8], // Row 3
   [0, 3, 6], // Column 1
   [1, 4, 7], // Column 2
   [2, 5, 8], // Column 3
   [0, 4, 8], // Diagonal \
   [2, 4, 6] // Diagonal /
];

function handleClick(event) {
   const cell = event.target;

   if (cell.innerText !== '' || !isGameActive) return; // Prevent overwriting

   cell.innerText = currentPlayer;

   // Update board state
   const index = Array.from(cells).indexOf(cell);
   board[index] = currentPlayer;

   if (checkWin()) {
       statusText.innerText = `${currentPlayer} wins!`;
       highlightWinningCells();
       isGameActive = false; // Stop the game
       showWinPopup(currentPlayer);
       createRainEffect(currentPlayer);
       return;
   }

   if (checkTie()) {
       statusText.innerText = "It's a tie!";
       return;
   }

   // Switch player
   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
   return winningConditions.some(condition => {
       const [a, b, c] = condition;
       return board[a] && board[a] === board[b] && board[a] === board[c];
   });
}

function highlightWinningCells() {
   winningConditions.forEach(condition => {
       const [a, b, c] = condition;
       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
           cells[a].classList.add('winning-cell');
           cells[b].classList.add('winning-cell');
           cells[c].classList.add('winning-cell');
       }
   });
}

function checkTie() {
   return board.every(cell => cell !== '');
}

// Refresh the page when restarting the game
function restartGame() {
   location.reload(); // Reloads the page to reset the game state
}

// Create rain effect for winning player
function createRainEffect(winner) {
   const rainCount = Math.floor(Math.random() * (30 -15 +1)) +15 ; // Random number of raindrops between (15-30)
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

  
   
   
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
   

  
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  

    
    
  




    
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    

    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 
    
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 





 
 






 






 


 


 


 


 


 


 


 


 


 


 


 


 


 


 


 


 


 


 


 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



for (let i = rainCount-1 ; i >=0 ; i--) { 
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        


        


        


        


        


        


        


        


        


        


        


        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        

        
        


       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        const rainDrop = document.createElement('span');
        rainDrop.innerText = winner;

        rainDrop.className = winner === 'X' ? 'rain-x' : 'rain-o';
        rainDrop.style.position = 'absolute';
        rainDrop.style.left = `${Math.random() * window.innerWidth}px`;
        rainDrop.style.top = `-10%`;
        rainDrop.style.fontSize = '48px'; // Larger font size for raining symbols
        
        document.body.appendChild(rainDrop);

        // Animate falling effect
        setTimeout(() => {
            rainDrop.style.animation = `rain ${Math.random() * (3000) +2000}ms linear forwards`;
            setTimeout(() => { rainDrop.remove(); }, Math.random() * (3000) +2000);
        }, i * Math.random() * (200)); // Staggered start for each raindrop
      }
}

// Show win popup with animation
function showWinPopup(winner) {
     winPopup.innerText = `${winner} Wins!!!`;
     winPopup.classList.add('show');
}

// Event Listeners
cells.forEach(cell => {
     cell.addEventListener('click', handleClick);
});

restartButton.addEventListener('click', restartGame);
