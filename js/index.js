/* ***************************
  JWD JavaScript Assessment
  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and your own code, to finish the app. 
  
  The tasks you need to do are below.
    TASKS TODO:
      1. Add 2 more questions to the app (each question must have 4 options). 
      2. Calculate the score as the total of the number of correct answers
      3. Add an Event listener for the submit button, which will display the score and highlight the correct answers when the button is clicked. Study the code in the function calculateScore() to help you.
      4. Reload the page when the reset button is clicked (hint: search window.location)
      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector("#start");
  const submit = document.querySelector("#btnSubmit");
  const quizScore = document.querySelector("#score");
  const reset = document.querySelector("#btnReset");

  start.addEventListener("click", function (e) {
    document.querySelector("#quizBlock").style.display = "block";
    start.style.display = "none";
  });
  // start.addEventListener("click", function (e) {
  //document.querySelector("#quizBlock").style.display = "block";
  //start.style.display = "none";
});
//document.getElementById("start").addEventListener("click", displayQuiz());

// quizArray QUESTIONS & ANSWERS
// q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
// Basic ideas from https://code-boxx.com/simple-javascript-quiz/
//let q = question, o = options, a = correct answer;

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
    q: "What is the capital of Australia",
    o: ["Sydney", "Canberra", "Melbourne", "Perth"],
    a: 1,
  },
  {
    q: "How old is the Earth",
    o: [
      "4.5 Billion Years",
      "2.1 Billion Years",
      "13 Billion Years",
      "6000 Years",
    ],
    a: 1, // array index 1 - so  4.5 Billion Years is the correct answer here
  },
  {
    q: "What percent of the Earth is covered with water?",
    o: ["60%", "80%", "90%", "70%"],
    a: 3, // array index 4
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
        liElement.style.color = "white";
        liElement.style.fontWeight = "bold";
      }

      if (radioElement.checked) {
        // code for task 1 goes here
        if (liElement.textContent.trim() == quizItem.o[quizItem.a].trim()) {
          ++score;
        }
      }
    }
    //Show Score on Submit//
     // let scoreElm = document.querySelector("#score");
      //scoreElm.innerHTML = `your score is ${score}`;
    const totalScore = document.getElementById("score");
    totalScore.innerHTML = `Your total score is ${score}`;
    totalScore.style.color = "blue";
    

  });
  quizScore.innerHTML = "Score = " + score;
  quizScore.style.backgroundColor = "rgb(37, 107, 37)";
  quizScore.style.padding = "5px";
  quizScore.style.color = "#fff";


  // call the displayQuiz function
  displayQuiz();


};

// Listener event to start quiz when pressing Start button
document.getElementById("start").addEventListener("click", displayQuiz);

// Listener event to calculate score when pressing Submit button
document.querySelector("#btnSubmit")
  .addEventListener("click", () => calculateScore());

//Timer Countdown
timeLeft = 60;
function countdown() {
  timeLeft--;
  document.getElementById("time").innerHTML = String(timeLeft);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  }
}
 setTimeout(countdown, 1000);


// Reload page when pressing Reset button
document.querySelector("#btnReset").addEventListener("click", () => {
  window.location.reload();

});
