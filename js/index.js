/* ***************************
  JWD JavaScript Assessment
  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and your own code, to finish the app. 
  
  The tasks you need to do are below.
    TASKS TODO:
      1. Add 2 more questions to the app (each question must have 4 options). DONE
      2. Calculate the score as the total of the number of correct answers
      3. Add an Event listener for the submit button, which will display the score and highlight the correct answers when the button is clicked. Study the code in the function calculateScore() to help you.
      4. Reload the page when the reset button is clicked (hint: search window.location)
      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */


window.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector("#start");
  
  // Countdown Timer for Quiz
  const quizTimer = (submitted) => {
    let timeHeading = document.querySelector("#time-heading");
    // Change Timer Display
         if (submitted) {
          timeHeading.innerHTML = "Submitted!";
          timeHeading.style.color = "green";     
        } else {
          let timeDisplay = document.querySelector("#time");
          let timeRemaining = 60;
          // Update timer every second (by reducing value by 1s)
          const countDown = setInterval(() => {
            timeRemaining -= 1;
            timeDisplay.innerHTML = `${Math.floor(timeRemaining/60)}:${timeRemaining < 10 ? "0"+timeRemaining%60 : timeRemaining%60}`;
            // Make timer orange when time low
            if(timeRemaining <= 10) {
              timeDisplay.style.color = "orange"
            }
            // End quiz if timer runs out
            if(timeRemaining == 0) {
              timeHeading.innerHTML = "Time is up!";
              timeHeading.style.color = "red";
              clearInterval(countDown);
            }
          }, 1000);
        };
  };

  start.addEventListener("click", function (e) {
    document.querySelector("#quizBlock").style.display = "block";
    start.style.display = "none";
    // Start Quiz Timer when Start button is pressed
    quizTimer()
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: "Which is the third planet from the sun?",
      o: ["Saturn", "Earth", "Pluto", "Mars"],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: "Which is the largest ocean on Earth?",
      o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      a: 3,
    },
    {
      q: "What is the capital of Australia?",
      o: ["Sydney", "Canberra", "Melbourne", "Perth"],
      a: 1,
    },
    {
      q: "What is the current world population?",
      o: ["4.7 billion", "840 million", "7.9 billion", "9.2 billion"],
      a: 2,
    },
    {
      q: "How many beaches does Australia have approx.?",
      o: ["200-300", "800-2000", "5000-9000", "10000-12000"],
      a: 3,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector("#quizWrap");
    let quizDisplay = "";
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    const scoreDisplay = document.querySelector("#score")
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector("#" + li);
        radioElement = document.querySelector("#" + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = "green";
        }

        if (radioElement.checked) {
          // code for task 1 goes here      
          let selected = radioElement.id.toString()[radioElement.id.length-1];
          selected == quizItem.a ? score += 1 : false;
        }
      }
    });
    
    // Display score
    if(score < quizArray.length/2) {
      scoreDisplay.innerHTML = `You scored: ${score}/${quizArray.length}. <span style="color: red">Better luck next time!</span>`;
    } else if (score > quizArray.length/2 && score != quizArray.length) {
      scoreDisplay.innerHTML = `You scored: ${score}/${quizArray.length}. <span style="color: orange">Good effort!</span>`;
    } else {
      scoreDisplay.innerHTML = `You scored: ${score}/${quizArray.length}. <span style="color: green">Perfect!</span>`;
    };
    
    // Stop timer
    quizTimer(true);
  };

  // call the displayQuiz function
  displayQuiz();


  // Listener event to calculate score when pressing Submit button
  document.querySelector("#btnSubmit").addEventListener("click", () => calculateScore());
  
  // Reload page when pressing Reset button
  document.querySelector("#btnReset").addEventListener("click", () => {
    window.location.reload();
  })
});



// create limit var 

// settimeout and decrease limit by 1 every second 

// when limit is 0, return "Time Up" and call submit quiz 

// convert limit to date format