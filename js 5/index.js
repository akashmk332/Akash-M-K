(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label> 
              <br>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
            `
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("<hr>");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} / ${5}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Q1. Which was not one of Voldemort's Horcruxes?",
      answers: {
        a: "Harry",
        b: "Nagini",
        c: "Helga's Diadem",
        d: "Tom Riddle's Diary",
      },
      correctAnswer: "c",
    },

    {
      question: "Q2. Which of these are not one of Hagrid's many pets?",
      answers: {
        a: "Grawp",
        b: "Fluffy",
        c: "Aragog",
        d: " Noberta",
      },
      correctAnswer: "a",
    },

    {
      question: "Q3. Which class did Severus Snape always want to teach?",
      answers: {
        a: "Potions",
        b: "Charms",
        c: "Defense Against Dark Arts",
        d: "Transfiguration",
      },
      correctAnswer: "c",
    },

    {
      question: "Q4. Which Hogwarts house did Moaning Myrtle belong in?",
      answers: {
        a: "Gryffindor",
        b: "Slytherin",
        c: "Ravenclaw",
        d: "Hufflepuff",
      },
      correctAnswer: "c",
    },

    {
      question: "Q5. What class did Neville end up teaching at Hogwarts?",
      answers: {
        a: "Astronomy",
        b: "Herbology",
        c: "Charms",
        d: "Muggle Studies",
      },
      correctAnswer: "b",
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener("click", showResults);
})();
